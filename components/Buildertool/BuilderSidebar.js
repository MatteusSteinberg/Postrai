import React, { useState, useEffect } from "react"
import BuilderLabel from "./BuilderLabel"
import BuilderImageItem from "./BuilderImageItem"
import { Button } from "react-bootstrap"
import ExportLocalDataset from "./ExportLocalDataset"
import axios from "axios"

export default function BuilderSidebar({ handleShowActiveImage, addImages, builderImages, activeImage, updateLabel, userInfo }) {
    const [draggingOver, setDraggingOver] = useState(false)

    const handleDropAddMore = (ev) => {
        ev.preventDefault()
        setDraggingOver(false)
        if (ev.dataTransfer && ev.dataTransfer.files.length != 0) {
            let dropFiles = ev.dataTransfer.files

            addImages(dropFiles)
        }
    }

    const handleUpdateLabel = (inputValue, index) => {
        updateLabel(inputValue, index)
    }

    const handleDragoverAddMore = (ev) => {
        ev.preventDefault()
        setDraggingOver(true)
    }

    const handleDatasetUpload = async (e) => {
        const formData = new FormData()
        builderImages.forEach((file) => {
            formData.append("files", file.image)
        })

        let imageResponse = await axios.post("api/image/upload", formData)
        imageResponse = imageResponse.data.urls
        await axios.post("api/builder/createDataset", { builderImages, userInfo, imageResponse })
    }

    useEffect(() => {
        return () => {}
    }, [activeImage])

    return (
        <aside className="builder-sidebar-container">
            <div className="builder-sidebar-content">
                <div className="builder-sidebar-labels">
                    <p className="builder-title">Labels</p>
                    <ul className="builder-labels-list">
                        {activeImage?.labels.map((value, index) => {
                            return <BuilderLabel key={index} value={activeImage.labels[index]} color={activeImage.labelColor[index]} handleChange={(val) => handleUpdateLabel(val, index)} />
                        })}
                    </ul>
                </div>
                <div className="builder-sidebar-images">
                    <p className="builder-title">Images</p>
                    <ul className="builder-images-list">
                        {builderImages.map((value, index) => {
                            return <BuilderImageItem key={index} handleShowActive={() => handleShowActiveImage(value.tempId)} imageName={value.name} active={value.active} />
                        })}
                    </ul>
                </div>
                <div className={`drag-area ${draggingOver ? "drag-over" : ""}`} onDrop={handleDropAddMore} onDragOver={handleDragoverAddMore} onDragLeave={() => setDraggingOver(false)}>
                    <p className="drag-more">Drag to upload more images</p>
                </div>
            </div>
            <div className="builder-sidebar-actions">
                <ExportLocalDataset builderInfo={builderImages} userInfo={userInfo} />
                <Button variant="primary" onClick={handleDatasetUpload}>
                    UPLOAD TO POSTRAI
                </Button>
            </div>
        </aside>
    )
}
