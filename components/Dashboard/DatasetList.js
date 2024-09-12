import React from "react"
import DashboardLayout from "./DashboardLayout"
import DashboardTitle from "./DashboardTitle"
import DatasetGrid, { DatasetGridItem } from "./DatasetGrid"
import { Container, Row, Col } from "react-bootstrap"

const exampleArray = ["Test", "", "", "", "", "", "", "", "", "", ""]

export default function DatasetList({ userInfo }) {
    return (
        <DashboardLayout>
            <DashboardTitle userInfo={userInfo} userActions={true} title={"Datasets"} text={"Your own saved datasets"} />
            <DatasetGrid>
                <Container fluid className="px-0">
                    <Row>
                        {exampleArray.map((value, index) => {
                            return (
                                <Col xxl={3} xl={4} lg={6} md={6} sm={12} className="mb-4" key={index}>
                                    <DatasetGridItem key={index} description={value} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </DatasetGrid>
        </DashboardLayout>
    )
}
