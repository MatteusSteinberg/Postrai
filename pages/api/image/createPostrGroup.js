import Postr from '../../../models/Postr'
import User from '../../../models/User';
import dbConnect from "../../../lib/dbConnect";

import { nanoid } from "nanoid"
import nc from "next-connect"
import { getSession } from "next-auth/react"
import ObjectIdentification from '../../../lib/AI/objectIdentification';

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack)
        res.status(500).end("Something broke!")
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found")
    },
}).post(async (req, res) => {
    await dbConnect()

    const session = await getSession({ req });
    const user = await User.findOne({ $or: [{ 'facebookCredentials.accountId': session.user.id }, { 'githubCredentials.accountId': session.user.id }, { 'googleCredentials.accountId': session.user.id }] });
    let userId = user ? user : session.user.id;

    let { form, imageUrl } = req.body;
    let groupId = nanoid(64);

    let postrDataArray = [];

    for (let i = 0; i < form.length; i++) {
        let { tags, description, index, height, width } = form[i];
        let image = imageUrl[index];

        var postrData = {
            width: width,
            height: height,
            description: description,
            tags: tags,
            url: image,
            UploadedBy: userId,
            uploadGroupId: groupId
        }

        postrDataArray.push(postrData);
    }

    var result = await Postr.insertMany(postrDataArray);

    res.status(200).json({ success: true, message: "Postr's uploaded succesfully." });

    try {
        result.forEach((postr, index) => {
            ObjectIdentification(postr.url, 0.7)
                .then(async (objectIdentificationResult) => {
                    await Postr.findByIdAndUpdate(postr._id, { AITags: objectIdentificationResult })
                });
        })
    } catch (error) {
        console.error(error);
    }
})

export default handler
