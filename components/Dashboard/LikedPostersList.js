import React, { useState, useEffect } from 'react'
import DashboardLayout from './DashboardLayout'
import DashboardTitle from './DashboardTitle'
import { Container, Row, Col } from 'react-bootstrap';
import DashboardImageGrid, { LikedPosterGridItem } from './DashboardImageGrid'

export default function LikedPostersList({ userInfo, postrList = null }) {

    useEffect(() => {

    }, [postrList])

    return (
        <DashboardLayout>
            <DashboardTitle userInfo={userInfo} userActions={true} title={"Liked Posters"} text={"Your liked posters"} />
            <DashboardImageGrid>
                <Container fluid className="px-0">
                    <Row>
                        {postrList != null && postrList.map((like, index) => {
                            console.log(like);
                            return (
                                <Col xxl={3} xl={4} lg={6} md={6} sm={12} className="mb-4" key={index}>
                                    <LikedPosterGridItem
                                        key={index}
                                        posterId={like.PostrId}
                                        uploadedByProfilePicture={`/api/image/profilePicture?userId=${like.PostrId.UploadedBy._id}`}
                                        uploadedBy={like.PostrId.UploadedBy.firstName + " " + like.PostrId.UploadedBy.lastName}
                                        imageUrl={like.PostrId.url}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </DashboardImageGrid>
        </DashboardLayout>
    )
}
