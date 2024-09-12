import React, { useEffect, useState } from "react"
import exportFromJSON from "export-from-json"
import { Button } from "react-bootstrap"
import axios from "axios"

export default function ExportLocalDataset({ builderInfo, userInfo }) {
    const [builderImages, setBuilderImages] = useState(builderInfo)
    async function handleDataCreation() {
        if (!builderImages) {
            reject()
        } else {
            let data = []
            const formData = new FormData()
            builderImages.forEach((file) => {
                formData.append("files", file.image)
            })
            let imageResponse = await axios.post("api/image/upload", formData)
            imageResponse = imageResponse.data.urls
            builderImages.forEach((builder, index) => {
                let imageURL = imageResponse[index]
                let annotations = []
                const xScaleFactor = builder.width / builder.originalWidth
                const yScaleFactor = builder.height / builder.originalHeight

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

                data.push({
                    info: {
                        description: "Downloaded from Postrai.com",
                        url: "http://postrai.com",
                        year: new Date().getFullYear(),
                        contributor: `${userInfo.email}`,
                        date_created: Date.now(),
                    },
                    images: images,
                    annotations: annotations,
                    categories: categories,
                })
            })
            return data
        }
    }

    async function handleDataFormat() {
        let dataCreated = await handleDataCreation()
        return dataCreated.reduce((res, elem) => {
            let arrForChecking = res.filter((el) => el.images.id === elem.images.id)

            if (arrForChecking.length) {
                arrForChecking[0].images.push(elem.images[0])
                arrForChecking[0].annotations.push(elem.annotations[0])
                arrForChecking[0].categories.push(elem.categories[0])
                return res
            }

            return (res = res.concat(elem))
        }, [])
    }

    const handleOnClick = async (e) => {
        e.preventDefault()
        let formatData = await handleDataFormat()
        exportFromJSON({ data: formatData, fileName: "Dataset from Postrai.com", exportType: exportFromJSON.types.json })
    }

    useEffect(() => {
        return
    })

    return (
        <>
            <Button variant="secondary" onClick={handleOnClick}>
                EXPORT TO JSON
            </Button>
        </>
    )
}
