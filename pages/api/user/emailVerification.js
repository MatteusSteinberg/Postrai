import nc from "next-connect"
import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/User"

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack)
        res.status(500).end("Something broke!")
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found")
    },
}).put(async (req, res) => {
    await dbConnect()

    const userVerified = await User.findOne({
        "emailVerified.EVT": req.body.evt,
    })
    if (!userVerified.emailVerified.verified) {
        await User.findOneAndUpdate(
            { "emailVerified.EVT": req.body.evt },
            {
                "emailVerified.verified": true,
                "emailVerified.date": new Date(),
            }
        )
    }
    res.status(200).end("success")
})

export default handler
