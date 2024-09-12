import dbConnect from "../../../lib/dbConnect"
import nc from "next-connect"
import { getSession } from "next-auth/react"
import NotificationModel from "../../../models/Notification"
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

    const { amount } = req.query

    if (!amount) {
        res.status(400).json({ success: false, message: 'Expected query: "Amount" which is an int.' })
    }

    const session = await getSession({ req })
    const user = await User.findOne({
        $or: [{ "facebookCredentials.accountId": session.user.id }, { "githubCredentials.accountId": session.user.id }, { "googleCredentials.accountId": session.user.id }],
    }).select("_id")
    let userId = user ? user._id : session.user.id

    const myNotifications = await NotificationModel.find({ Receiver: userId, Read: false }).sort("-CreatedTimestamp").limit(amount).populate({ path: "TriggeredBy", model: User, select: "-password -email -access_token -occupation -phoneNumber -companyName -workSector -passwordReset -UserSetupDone -CreatedTimestamp -emailVerified -githubCredentials -googleCredentials -facebookCredentials" })

    res.status(200).json(myNotifications)
})

export default handler
