import { Button, Form } from "react-bootstrap"
import React, { useState, Fragment, useRef, useEffect } from "react"
import axios from "axios"
import { nanoid } from "nanoid"

export default function UploadPosterForm({ cancel }) {
    const [files, setFiles] = useState([])
    const [isUploading, setIsUploading] = useState(false)

    const [formValues, setFormValues] = useState([])
    const fileInput = useRef()

    const handleRemoveFile = (value) => {
        var removed = files.filter((file) => file.uniqueName != value)
        var removedForm = formValues.filter((form) => form.uniqueName != value)

        setFiles([...removed])
        setFormValues([...removedForm])
        fileInput.current.value = []
    }

    const updatePreviewValues = (value) => {
        if (formValues.some((x) => x.index == value.index)) {
            formValues[formValues.findIndex((x) => x.index == value.index)] = value
        } else {
            formValues.push(value)
        }
    }

    const getFileExtension = (filename) => {
        return filename.substring(filename.lastIndexOf(".") + 1, filename.length)
    }

    const cancelForm = (ev) => {
        setFiles([])
        cancel(ev)
    }

    const handleUpload = async (ev) => {
        if (files.length > 0) {
            setIsUploading(true)
            const formData = new FormData()

            Array.from(files).forEach((file) => {
                formData.append("files", file)
            })

            const response = await axios.post("/api/image/upload", formData)

            let body = {
                form: formValues.filter((x) => x.uniqueName.length > 4),
                imageUrl: response.data.urls,
            }

            if (response.data.success) {
                const createResponse = await axios.post("/api/image/createPostrGroup", body)

                setIsUploading(false)
                setFiles([])
            } else {
                alert("Error in uploading images...")
            }
        }
    }

    const handleFilesChange = (ev) => {
        let currentFiles = [...files]
        for (let i = 0; i < ev.target.files.length; i++) {
            const dropFile = ev.target.files[i]
            dropFile.uniqueName = `${nanoid(8)}.${getFileExtension(dropFile.name)}`
            currentFiles.push(dropFile)
        }

        fileInput.current.value = []
        if (currentFiles.length > 5) {
            alert("You are only allowed to upload 5 images at a time.")
        } else if (currentFiles.length <= 5) {
            setFiles([...currentFiles])
        }
    }

    const handleDropFiles = (ev) => {
        ev.preventDefault()
        if (ev.dataTransfer && ev.dataTransfer.files.length != 0) {
            let dropFiles = ev.dataTransfer.files
            let currentFiles = [...files]
            for (let i = 0; i < dropFiles.length; i++) {
                dropFiles[i].uniqueName = `${nanoid(8)}.${getFileExtension(dropFiles[i].name)}`
                currentFiles.push(dropFiles[i])
            }

            if (currentFiles.length > 5) {
                alert("You are only allowed to upload 5 images at a time.")
            } else if (currentFiles.length <= 5) {
                setFiles([...currentFiles])
            }
        }
    }

    const handleDragoverFiles = (ev) => {
        ev.preventDefault()
    }

    const PosterPreview = ({ file, index, onChange }) => {
        const blob = URL.createObjectURL(file)
        const form = useRef({})
        const image = useRef()
        const [tags, setTags] = useState(formValues[index] ? formValues[index].tags : []);

        const handleChange = (ev) => {
            onChange({
                tags: tags,
                description: form.current.description.value,
                index: index,
                uniqueName: file.uniqueName,
                height: image.current.naturalHeight,
                width: image.current.naturalWidth,
            })
        }

        const handleKeyDown = (ev) => {
            if (ev.key === "Enter" || ev.key === ",") {
                if (!tags.includes(form.current.tags.value)) {
                    setTags([...tags, form.current.tags.value])
                    form.current.tags.value = '';
                    ev.preventDefault();
                }
                else if (ev.key === ",") {
                    form.current.tags.value.slice(0, -1)
                    ev.preventDefault();
                }
            }
        }

        const handleRemoveTag = (value) => {
            const newTags = tags.filter(x => x != value);
            setTags(newTags);
        }

        useEffect(() => {
            handleChange()

            return () => { }
        }, [tags])

        return (
            <div className="upload-form-poster-preview">
                <div className="image-preview" style={{ backgroundImage: `url('${blob}')` }}>
                    <div onClick={() => handleRemoveFile(file.uniqueName)} className="remove-button">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4497 1.225L13.2247 0L7.44971 5.775L1.67471 0L0.449707 1.225L6.22471 7L0.449707 12.775L1.67471 14L7.44971 8.225L13.2247 14L14.4497 12.775L8.67471 7L14.4497 1.225Z" fill="#393D3F" />
                        </svg>
                    </div>
                    <div className="image-preview-location">
                        <svg width="16" height="17" viewBox="0 0 104 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M52 0C38.2137 0.0169648 24.9968 5.73702 15.2484 15.9054C5.50009 26.0738 0.0163193 39.8603 5.53227e-05 54.2405C-0.0164565 65.9921 3.6636 77.4248 10.4757 86.7849C10.4757 86.7849 11.8939 88.7326 12.1255 89.0136L52 138.067L91.8934 88.989C92.1014 88.7277 93.5243 86.7849 93.5243 86.7849L93.529 86.7701C100.338 77.4141 104.016 65.9867 104 54.2405C103.984 39.8603 98.4999 26.0738 88.7515 15.9054C79.0032 5.73702 65.7862 0.0169648 52 0V0ZM52 73.9644C48.2601 73.9644 44.6043 72.8076 41.4947 70.6403C38.3851 68.473 35.9615 65.3926 34.5303 61.7885C33.0991 58.1845 32.7247 54.2187 33.4543 50.3926C34.1839 46.5666 35.9848 43.0521 38.6293 40.2937C41.2737 37.5352 44.643 35.6567 48.311 34.8957C51.979 34.1346 55.781 34.5252 59.2362 36.0181C62.6914 37.5109 65.6446 40.039 67.7223 43.2826C69.8001 46.5261 70.9091 50.3395 70.9091 54.2405C70.9028 59.4696 68.9086 64.4827 65.3638 68.1802C61.819 71.8777 57.0131 73.9578 52 73.9644V73.9644Z"
                                fill="white"
                            />
                        </svg>{" "}
                        Add location
                    </div>
                </div>

                <Form.Group className="tags-container">
                    {tags && tags.map((value, index) => {
                        return <>
                            <div className="tag">
                                {value}
                                <button onClick={() => handleRemoveTag(value)}>x</button>
                            </div>
                        </>
                    })}
                    <Form.Control onChange={handleChange} ref={(el) => (form.current.tags = el)} onKeyDown={handleKeyDown} placeholder="Add tags" className="poster-preview-tags"></Form.Control>
                </Form.Group>
                <Form.Control onChange={handleChange} ref={(el) => (form.current.description = el)} placeholder="Write a description (optional)" defaultValue={formValues[index] ? formValues[index].description : ""} className="poster-preview-description"></Form.Control>
                <img onLoad={handleChange} ref={image} className="d-none" alt="image raw" src={blob} />
            </div>
        )
    }

    const posterPreviews = () => {
        const imageArray = []
        for (let i = 0; i < files.length; i++) {
            imageArray.push(<PosterPreview key={i} index={i} onChange={(values) => updatePreviewValues(values)} file={files[i]} />)
        }

        return imageArray
    }

    useEffect(() => {
        return () => { }
    }, [files, isUploading])

    return (
        <div className="upload-poster-form">
            {!isUploading && (
                <>
                    <div className="upload-dropZone" onClick={() => fileInput.current.click()} onDrop={handleDropFiles} onDragOver={handleDragoverFiles}>
                        <span className="upload-dropZone-title">Upload image</span>
                        <Button>Upload</Button>
                        <span className="upload-dropZone-info">Max. 32MB | Max. 5 posters</span>
                        <input ref={fileInput} type="file" max={5} onChange={handleFilesChange} multiple hidden accept="image/*" />
                    </div>
                    <div className="preview-zone">{posterPreviews()}</div>
                    <div className="upload-form-actions">
                        <span className="license">
                            <span>Read the</span> <span className="marked">postrai license</span>
                        </span>
                        <div className="upload-form-actions-buttons">
                            <Button onClick={handleUpload} variant="secondary" className="upload-form-submit">
                                Submit {files.length} photo(s)
                            </Button>
                            <Button onClick={cancelForm} variant="error" className="upload-form-cancel">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </>
            )}
            {isUploading && (
                <>
                    <div className="preview-zone">
                        <div className="text-center w-100">Currently uploading, you can close this pop-up, but stay on page.</div>
                    </div>
                </>
            )}
        </div>
    )
}
