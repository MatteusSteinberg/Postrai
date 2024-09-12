import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import DashboardLayout from './DashboardLayout'
import DashboardTitle from './DashboardTitle'
import axios from 'axios'
import DashboardImageGrid, { CollectionPosterGridItem } from './DashboardImageGrid'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Collection({ collectionId, userInfo }) {
    const router = useRouter();
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
        <>
            <DashboardLayout className='dashboard-collection'>
                <DashboardTitle userInfo={userInfo} userActions={true} title={`Collection ${collectionId}`} text={`Lormperdiet, elementum dadwfwafwfdawfwwafaw dawdawfa efoaehjuahfu eaw  awd dawd daw dw ad aw d adwadaw d aw d aw d aw d wa daw d wadawdwada w d aw a dawd daw daw aofhiaewgf yawg suscipit ligula.`} />
                <div className="collection-actions">
                    <Button variant='secondary' className='collection-settings-button'>Settings</Button>
                    <Button className='collection-share-button'>Share</Button>
                </div>
                <DashboardImageGrid>
                    <Container fluid className="px-0">
                        <Row>
                            {result.map((image, index) => {
                                return (
                                    <Col xxl={3} xl={4} lg={6} md={6} sm={12} className="mb-4" key={index}>
                                        <CollectionPosterGridItem
                                            imageUrl={image.urls.regular}
                                            collectionId={0}
                                            posterId={index}
                                            key={index}
                                            uploadedBy={'John Doe'}
                                        />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </DashboardImageGrid>
            </DashboardLayout>
        </>
    )
}
