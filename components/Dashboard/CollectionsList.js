import React, { useState, useEffect } from 'react'
import DashboardLayout from './DashboardLayout'
import DashboardTitle from './DashboardTitle'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import DashboardImageGrid, { CollectionGridItem } from './DashboardImageGrid'

export default function CollectionsList({ userInfo }) {
    const [result, setResult] = useState([])

    useEffect(() => {
        axios
            .get(
                "https://api.unsplash.com/photos?page=5&client_id=B0U6xSf0Vfb-gHQNZa60f0ts7WA0nLXoH9nBerbfJIU"
            )
            .then((response) => {
                setResult(response.data)
            })
    }, [])

    return (
        <DashboardLayout>
            <DashboardTitle userInfo={userInfo} userActions={true} title={"Own collections"} text={"Your own created collections"} />
            <DashboardImageGrid>
                <Container fluid className="px-0">
                    <Row>
                        {result.map((image, index) => {
                            return (
                                <Col xxl={3} xl={4} lg={6} md={6} sm={12} className="mb-4" key={index}>
                                    <CollectionGridItem
                                        key={index}
                                        collectionId={index}
                                        imageUrl={image.urls.regular}
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
