import React, { useState } from "react"
import UploadForm from "../components/uploadForm"
import Modal from "../components/modals/modal"

export default function Upload() {
    const [modal, setModal] = useState(false)
    const Toggle = () => setModal(!modal)
    return (
        <div>
            <button onClick={() => Toggle}>Open Modal</button>
            <Modal header={"dashboard"} show={Toggle} title={"Upload Form"}>
                <UploadForm />
            </Modal>
        </div>
    )
}
