import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Image from "next/image"
import contentMain from "../../public/images/landing/l2-content-img-2.png"

export default function LandingAbout() {
    return (
        <div className="pai-content-section">
            <Container>
                <div className="content-wrapper">
                    <Row className="align-items-center justify-content-center justify-content-lg-start">
                        <Col xl={7} lg={6} md={8} xs={10}>
                            <div className="content-image-group" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                                <Image src={contentMain} />
                            </div>
                        </Col>
                        <Col xl={5} lg={6} md={8} xs={10}>
                            <div className="content-text text-center text-lg-start" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                                <h2 className="section-title">Label your images with ease.</h2>
                                <p className="section-text">Our tool help you to annotate the right data and export it as JSON data to train your AI.</p>
                                <div className="section-btn">
                                    <Button variant="primary">Get started now</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="content-shape-group">
                <svg width="231" height="233" viewBox="0 0 231 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 233L112.5 0.5L230.5 184.5L0 233Z" fill="#2B59FF" />
                </svg>
            </div>
        </div>
    )
}
