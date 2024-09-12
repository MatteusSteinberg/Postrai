import multer from "multer"
import nextConnect from "next-connect"
import pather from "path"
import S3Connect from "../../../lib/spaceConnect"
import { Readable } from "stream"
import { PutObjectAclCommand, PutObjectCommand } from "@aws-sdk/client-s3"

const upload = multer({ storage: multer.memoryStorage() })

const apiRoute = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
    },
})

apiRoute.use(upload.array("files"))

apiRoute.post(async (req, res) => {
    try {
        const client = await S3Connect()

        let sendBackUrls = []

        for (let i = 0; i < req.files.length; i++) {
            var fileExtension = pather.extname(req.files[i].originalname).toLowerCase()
            var fileKey = Date.now() + fileExtension

            var stream = Readable.from(req.files[i].buffer)

            sendBackUrls.push("https://postrai-storage.fra1.digitaloceanspaces.com/" + fileKey)

            const uploadCommand = new PutObjectCommand({
                Body: stream,
                Key: fileKey,
                ACL: "public-read",
                Bucket: "postrai-storage",
                ContentLength: req.files[i].size,
                ContentType: req.files[i].mimetype,
            })

            const data = await client.send(uploadCommand)
        }

        res.status(200).json({ success: true, message: "Image(s) uploaded succesfully", urls: sendBackUrls })
    } catch (error) {
        console.error(error)
        res.json({ success: false, error: "An error occured" })
        res.status(500)
    }
})

export default apiRoute

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
}
