import dbConnect from "../../../lib/dbConnect";
import nc from "next-connect"
import Postr from '../../../models/Postr'

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
    
    try {
    const result = await Postr.findByIdAndUpdate(postrId, {$inc:{views: 1}})
        res.status(200).json("success")
    } catch (error) {
        console.error(error)
        res.status(500).end("Something broke!")
    }
})

export default handler