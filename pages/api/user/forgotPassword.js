import nc from "next-connect"
import { nanoid } from "nanoid"

import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/User"
import Email from "../../../lib/email"

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

    const securedTokenId = nanoid(128)
    const passwordReset = {
        RPT: securedTokenId,
        expiryDate: new Date(Date.now() + 30 * 60 * 1000),
    }

    User.findOneAndUpdate(
        { email: req.body.email },
        { passwordReset: passwordReset },
        async (error, user) => {
            if (error) throw error
            if (!user) res.json({ success: true })
            else {
                await new Email(
                    user,
                    securedTokenId,
                    "resetPass"
                ).sendMagicLink()
                res.json({ success: true })
            }
        }
    )
})

export default handler
