import nc from "next-connect"
import multer from 'multer'
import dbConnect from "../../../lib/dbConnect";
import profilePictureModel from "../../../models/ProfilePicture"

const upload = multer({ storage: multer.memoryStorage() });

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack)
        res.status(500).end("Something broke!")
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found")
    },
})

handler.use(upload.single('file'))

handler.post(async (req, res) => {
    const newProfilePicture = req.file;
    const { userId } = req.query;
    const profilePictureString = newProfilePicture.buffer.toString('base64');

    await dbConnect();

    const profilePictureExists = await profilePictureModel.exists({ user: userId });

    if (profilePictureExists) {
        var updatedProfilePicture = await profilePictureModel.findOneAndUpdate({ user: userId }, {
            profilePicture: {
                data: new Buffer.from(profilePictureString, 'base64'),
                contentType: req.file.mimetype
            },
            LastUpdated: new Date()
        });

        res.status(200).json({ success: true, message: 'Updated profile picture' })
    } else {
        const profilePicture = new profilePictureModel({
            user: userId,
            profilePicture: {
                data: new Buffer.from(profilePictureString, 'base64'),
                contentType: req.file.mimetype
            },
            LastUpdated: new Date()
        });

        profilePicture.save()
            .catch(err => {
                res.status(500).json(err)
            })
            .then(data => {
                res.status(200).json({ success: true, message: 'New profile picture' })
            })
    }
})

export default handler

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};