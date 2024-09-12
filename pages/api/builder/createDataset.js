import dbConnect from "../../../lib/dbConnect"
import Dataset from "../../../models/Dataset"
import User from "../../../models/User"
import { getSession } from "next-auth/react"

import nc from "next-connect"

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

    const session = await getSession({ req })

    const user = await User.findOne({
        $or: [{ _id: session.user.id }, { "facebookCredentials.accountId": session.user.id }, { "githubCredentials.accountId": session.user.id }, { "googleCredentials.accountId": session.user.id }],
    })

    let userId = user ? user._id : session.user.id

    if (userId) {
        let datasets = []
        req.body.builderImages.forEach((builder, index) => {
            let annotations = []
            let imageURL = req.body.imageResponse[index]

            const xScaleFactor = builder.width / builder.originalWidth
            const yScaleFactor = builder.height / builder.originalHeight

            let info = {
                description: "Downloaded from Postrai.com",
                url: "http://postrai.com",
                year: new Date().getFullYear(),
                contributor: `${user.firstName} ${user.lastName}`,
                date_created: Date.now(),
            }

            let images = [
                {
                    id: builder.tempId,
                    xScaleFactor: xScaleFactor,
                    yScaleFactor: yScaleFactor,
                    coco_url: imageURL,
                    width: builder.originalWidth,
                    height: builder.originalHeight,
                    file_name: builder.name,
                },
            ]

            let categories = [
                {
                    id: builder.labelColor[index],
                    name: builder.labels[index],
                },
            ]
            builder.bbox.forEach((bbox, i) => {
                bbox[0] = bbox[0] / xScaleFactor
                bbox[1] = bbox[1] / yScaleFactor
                bbox[2] = bbox[2] / xScaleFactor
                bbox[3] = bbox[3] / yScaleFactor
                annotations.push({ id: i + index, category_id: categories.id, image_id: images.id, bbox: bbox })
            })

            let data = {
                info: info,
                images: images,
                annotations: annotations,
                categories: categories,
            }

            datasets.push(data)
        })

        let result = datasets.reduce((res, elem) => {
            let arrForChecking = res.filter((el) => el.images.id === elem.images.id)

            if (arrForChecking.length) {
                arrForChecking[0].images.push(elem.images[0])
                arrForChecking[0].annotations.push(elem.annotations[0])
                arrForChecking[0].categories.push(elem.categories[0])
                return res
            }

            return (res = res.concat(elem))
        }, [])

        const dataset = new Dataset({
            UserId: userId,
            name: "Postrai Dataset",
            data: result[0],
            LastUpdated: Date.now(),
            CreatedTimestamp: Date.now(),
        })
        //console.log(dataset, images, annotations, categories)
        await dataset.save()

        res.status(200).json({ success: true, message: "Dataset(s) uploaded succesfully" })
    } else {
        res.status(400).json("Invalid user session")
    }
})

export default handler
