import nc from "next-connect"
import multer from 'multer'
import dbConnect from "../../../lib/dbConnect";
import profilePictureModel from "../../../models/ProfilePicture"
import { Readable } from 'stream'
import User from '../../../models/User';

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack)
        res.status(500).end("Something broke!")
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found")
    },
})

handler.get(async (req, res) => {
    await dbConnect();
    let { userId, provider = "credentials" } = req.query;
    let user = null;

    if (provider != "credentials") {
        user = await User.findOne(
            { $or: [
            { 'facebookCredentials.accountId': userId },
            { 'githubCredentials.accountId': userId },
            { 'googleCredentials.accountId': userId }
        ] })
                .select('githubCredentials googleCredentials facebookCredentials')

        userId = user._id
    }

    const uplodadedPostraiPicture = await profilePictureModel.exists({ user: userId })

    if (uplodadedPostraiPicture) {
        const profilePicture = await profilePictureModel.findOne({ user: userId })
        res.setHeader("content-type", profilePicture.profilePicture.contentType);
        const stream = Readable.from(profilePicture.profilePicture.data);
        stream.pipe(res);
        res.status(200);
    } else {
        user = user ? user : await User.findById(userId).select('githubCredentials googleCredentials facebookCredentials')

        if (!user) {
            res.status(404).json("Not found");
        }

        if (user.githubCredentials.imageUrl) {
            res.writeHead(301, {
                Location: user.githubCredentials.imageUrl
            }).end();
        }
        else if (user.googleCredentials.imageUrl) {
            res.writeHead(301, {
                Location: user.googleCredentials.imageUrl
            }).end();
        }
        else if (user.facebookCredentials.imageUrl) {
            res.writeHead(301, {
                Location: user.facebookCredentials.imageUrl
            }).end();
        }
        else if (user) {
            res.writeHead(301, {
                Location: '/images/stock_profile_picture.jpg'
            }).end();
        }
    }
})

export default handler