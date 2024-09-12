import dbConnect from "../../../lib/dbConnect";
import nc from "next-connect"
import { getSession } from "next-auth/react"
import NotificationModel from "../../../models/Notification";
import User from "../../../models/User"

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

    const { notificationId, read } = req.query

    const session = await getSession({ req });
    if (session) {
        await NotificationModel.findByIdAndUpdate(notificationId, { Read: read })
        res.status(200).json({ success: true, message: `Notification read state: ${read}` });
    } else {
        res.status(200).json({ success: false, message: 'Unauthorized' })
    }
})

export default handler