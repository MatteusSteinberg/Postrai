import Postr from '../../../models/Postr'
import dbConnect from "../../../lib/dbConnect";
import User from '../../../models/User'
import Like from "../../../models/Like"
import { getSession } from 'next-auth/react';

import nc from "next-connect"

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
    const { search } = req.query
    const session = await getSession({ req });
    let userId;
    if (session) {
        const user = await User.findOne(
            {
                $or: [{ 'facebookCredentials.accountId': session.user.id },
                { 'githubCredentials.accountId': session.user.id },
                { 'googleCredentials.accountId': session.user.id }]
            }
        ).select('_id');
        userId = user ? user._id : session.user.id;
    }

    let searchFilter = {};

    if (search) {
        searchFilter = { $or: [{ tags: { '$regex': search, $options: 'i' } }, { AITags: { '$regex': search.toLowerCase() } }] }
    }

    let browse = await Postr.find(searchFilter).select('-AITags').sort('-UploadedTimestamp')
        .limit(10)
        .populate({ path: 'UploadedBy', model: User, select: '-password -email -access_token -occupation -phoneNumber -companyName -workSector -passwordReset -UserSetupDone -CreatedTimestamp -emailVerified -githubCredentials -googleCredentials -facebookCredentials' })
        .lean()

    if (userId) {
        let likes = await Like.find({ PostrId: { $in: browse }, LikedBy: userId })

        const userBrowse = browse.map((postr, index) => {
            let singlePostr = postr;
            singlePostr.liked = likes.find(x => x.PostrId.toString() == postr._id) != undefined ? true : false;
            return singlePostr
        })

        res.status(200).json(userBrowse);
    } else {
        res.status(200).json(browse);
    }
})

export default handler
