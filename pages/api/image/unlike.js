import dbConnect from "../../../lib/dbConnect";
import nc from "next-connect"
import { getSession } from "next-auth/react"
import Like from "../../../models/Like";
import User from "../../../models/User";
import NotificationModel from "../../../models/Notification";

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack)
        res.status(500).end("Something broke!")
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found")
    },
}).get(async (req, res) => {
    await dbConnect()

    const { postrId } = req.query

    const session = await getSession({ req });
    if (!session.user) {
        res.status(200).json({ success: false, message: 'Not logged in!' });
    }
    else {
        const user = await User.findOne(
            {
                $or: [{ 'facebookCredentials.accountId': session.user.id },
                { 'githubCredentials.accountId': session.user.id },
                { 'googleCredentials.accountId': session.user.id }]
            }
        ).select('_id');
        let userId = user ? user._id : session.user.id;

        const PosterLikedByUser = await Like.exists({ LikedBy: userId, PostrId: postrId, IsLiked: true });

        if (!PosterLikedByUser) {
            res.status(200).json({ success: true, message: `Postr not liked by ${session.user.email}` })
        } else {

            await NotificationModel.findOneAndDelete({ LikeId: PosterLikedByUser._id })
            await Like.findByIdAndDelete(PosterLikedByUser._id);

            res.status(200).json({ success: true })
        }
    }
})

export default handler