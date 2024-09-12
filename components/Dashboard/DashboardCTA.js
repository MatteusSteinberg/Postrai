import React, { useEffect, useState } from "react"
import DashboardLayout from "./DashboardLayout"
import DashboardTitle from "./DashboardTitle"
import { Container, Row, Col, Button } from "react-bootstrap"
import DashboardImageGrid, { OwnPosterGridItem, PosterGridItem } from "./DashboardImageGrid"
import Modal from "../modals/modal"
import UploadPosterForm from "./uploadPosterForm"
import Link from "next/link"

export default function DashboardCTA({ userInfo, postrList = null }) {
    const [modal, setModal] = useState(false)

    const handleOpenModal = () => {
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    useEffect(() => {}, [postrList])

    return (
        <DashboardLayout>
            <div className="dashboard-main">
                <DashboardTitle userInfo={userInfo} userActions={true} title="Dashboard" text={`Hello ${userInfo.firstName}, welcome back!`} />
                <div className="dashboard-cta">
                    <div className="dashboard-buttons">
                        <div className="dashboard-cta">
                            <div className="dashboard-cta-inner">
                                <h1 className="cta-title">New Data?</h1>
                                <p className="cta-text">We see no data generated yet?</p>
                                <Link href="/builder">
                                    <Button variant="primary" className="cta-btn" onClick="">
                                        Generate data
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="dashboard-cta custom-bg">
                            <div className="dashboard-cta-inner">
                                <h1 className="cta-title">Upload a poster</h1>
                                <p className="cta-text">Are you looking to upload something new today?</p>
                                <Button variant="primary" className="cta-btn" onClick={handleOpenModal}>
                                    Upload new photo
                                </Button>
                            </div>
                        </div>
                        <Modal show={modal} header={"dashboard"} title={"Upload Images"} close={() => handleCloseModal()}>
                            <UploadPosterForm cancel={() => handleCloseModal()} />
                        </Modal>
                    </div>
                </div>
                <div className="dashboard-liked-posters">
                    <DashboardTitle text="Your own uploaded posters" title="Own posters" notifications={false} />
                    <DashboardImageGrid>
                        <Container fluid className="px-0">
                            <Row>
                                {postrList != null && postrList.map((image, index) => {
                                    return (
                                        <Col xxl={3} xl={4} lg={6} md={6} sm={12} className="mb-4" key={index}>
                                            <OwnPosterGridItem
                                                key={index}
                                                posterId={image._id}
                                                imageUrl={image.url}
                                            />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    </DashboardImageGrid>
                </div>
            </div>
        </DashboardLayout>
    )
}
