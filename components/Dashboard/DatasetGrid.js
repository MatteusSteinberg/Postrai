import { Button } from "react-bootstrap"
import React from "react"
import axios from "axios"
import exportFromJSON from "export-from-json"

export default function DatasetGrid({ children }) {
    return (
        <>
            <div className="dashboard-dataset-grid">{children}</div>
        </>
    )
}

export function DatasetGridItem({ datasetName = "Dataset name", ready = true, description, downloadUrl, userInfo, id }) {
    // const data = {
    //     userInfo: userInfo,
    //     id: id,
    // }

    // const handleOnDownload = async () => {
    //     const res = await axios.post("/api/builder/exportDataset", data)
    //     exportFromJSON({ data: res.dataset, fileName: res.name, exportType: exportFromJSON.exportType.json })
    // }

    return (
        <>
            <div className="dashboard-dataset-grid-item">
                <div className="dashboard-dataset-grid-wrapper">
                    <div className="dashboard-dataset-upper">
                        <div className="dataset-download-state">Ready to download</div>
                        <p className="dataset-grid-item-name">{datasetName}</p>
                        <p className="dataset-grid-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed posuere nisl. Donec ut egestas metus, ut rutrum dui.</p>
                    </div>
                    <div className="dataset-grid-item-button-wrapper">
                        <Button variant="primary" className="dataset-grid-item-button">
                            Download data
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
