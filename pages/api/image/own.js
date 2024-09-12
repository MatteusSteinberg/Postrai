import Postr from '../../../models/Postr'
import User from '../../../models/User';
import dbConnect from "../../../lib/dbConnect";

import nc from "next-connect"
import { getSession } from "next-auth/react"

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

    const session = await getSession({ req });
    const user = await User.findOne({ $or: [{ 'facebookCredentials.accountId': session.user.id }, { 'githubCredentials.accountId': session.user.id }, { 'googleCredentials.accountId': session.user.id }] });
    let userId = user ? user : session.user.id;

    if (userId) {
        let browseOwnPostr = await Postr.find({ UploadedBy: userId }).select('-AITags').sort('-UploadedTimestamp')

        res.status(200).json(browseOwnPostr);
    } else {
        res.status(404).json({ success: false, message: 'No images belonging to user. Not logged in.' });
    }
})

export default handler
