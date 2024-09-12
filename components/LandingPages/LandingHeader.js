import React from "react"
import router from "next/router"
import { Container, Row, Col, Button } from "react-bootstrap"
import Image from "next/image"

// Images
import heroMain from "../../public/images/landing/l2-hero-image.png"

export default function LandingHeader() {
    return (
        <div className="pai-landing-wrapper">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={8} lg={11}>
                        <div className="header-content">
                            <h1 className="header-title">Save time annotating images for AI use</h1>
                            <p className="header-text">Create custom datasets for annotation data for AI training with our tool to make it easier and save time.</p>
                            <div className="header-content-shape" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" data-aos-once="true">
                                <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M420 210C420 325.98 325.98 420 210 420V420C94.0202 420 0 325.98 0 210V210C0 94.0202 94.0202 0 210 0V0C325.98 0 420 94.0202 420 210V210Z" fill="#FFD166" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} md={7}>
                        <div className="header-image-group">
                            <Image className="header-image" src={heroMain} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="header-image-shape-1" data-aos="fade-down" data-aos-duration="500" data-aos-once="true">
                <svg viewBox="0 0 175 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#15CDA8" />
                    <circle cx="47.5" cy="7.5" r="7.5" fill="#15CDA8" />
                    <circle cx="87.5" cy="7.5" r="7.5" fill="#15CDA8" />
                    <circle cx="7.5" cy="47.5" r="7.5" fill="#15CDA8" />
                    <circle cx="47.5" cy="47.5" r="7.5" fill="#15CDA8" />
                    <circle cx="87.5" cy="47.5" r="7.5" fill="#15CDA8" />
                    <circle cx="7.5" cy="87.5" r="7.5" fill="#15CDA8" />
                    <circle cx="47.5" cy="87.5" r="7.5" fill="#15CDA8" />
                    <circle cx="87.5" cy="87.5" r="7.5" fill="#15CDA8" />
                    <circle cx="7.5" cy="127.5" r="7.5" fill="#15CDA8" />
                    <circle cx="47.5" cy="127.5" r="7.5" fill="#15CDA8" />
                    <circle cx="87.5" cy="127.5" r="7.5" fill="#15CDA8" />
                    <circle cx="7.5" cy="167.5" r="7.5" fill="#15CDA8" />
                    <circle cx="47.5" cy="167.5" r="7.5" fill="#15CDA8" />
                    <circle cx="87.5" cy="167.5" r="7.5" fill="#15CDA8" />
                    <circle cx="7.5" cy="207.5" r="7.5" fill="#15CDA8" />
                    <circle cx="47.5" cy="207.5" r="7.5" fill="#15CDA8" />
                    <circle cx="87.5" cy="207.5" r="7.5" fill="#15CDA8" />
                    <circle cx="7.5" cy="247.5" r="7.5" fill="#15CDA8" />
                    <circle cx="47.5" cy="247.5" r="7.5" fill="#15CDA8" />
                    <circle cx="87.5" cy="247.5" r="7.5" fill="#15CDA8" />
                    <circle cx="7.5" cy="287.5" r="7.5" fill="#15CDA8" />
                    <circle cx="47.5" cy="287.5" r="7.5" fill="#15CDA8" />
                    <circle cx="87.5" cy="287.5" r="7.5" fill="#15CDA8" />
                    <circle cx="127.5" cy="7.5" r="7.5" fill="#15CDA8" />
                    <circle cx="167.5" cy="7.5" r="7.5" fill="#15CDA8" />
                    <circle cx="127.5" cy="47.5" r="7.5" fill="#15CDA8" />
                    <circle cx="167.5" cy="47.5" r="7.5" fill="#15CDA8" />
                    <circle cx="127.5" cy="87.5" r="7.5" fill="#15CDA8" />
                    <circle cx="167.5" cy="87.5" r="7.5" fill="#15CDA8" />
                    <circle cx="127.5" cy="127.5" r="7.5" fill="#15CDA8" />
                    <circle cx="167.5" cy="127.5" r="7.5" fill="#15CDA8" />
                    <circle cx="127.5" cy="167.5" r="7.5" fill="#15CDA8" />
                    <circle cx="167.5" cy="167.5" r="7.5" fill="#15CDA8" />
                    <circle cx="127.5" cy="207.5" r="7.5" fill="#15CDA8" />
                    <circle cx="167.5" cy="207.5" r="7.5" fill="#15CDA8" />
                    <circle cx="127.5" cy="247.5" r="7.5" fill="#15CDA8" />
                    <circle cx="167.5" cy="247.5" r="7.5" fill="#15CDA8" />
                    <circle cx="127.5" cy="287.5" r="7.5" fill="#15CDA8" />
                    <circle cx="167.5" cy="287.5" r="7.5" fill="#15CDA8" />
                </svg>
            </div>
            <div className="header-image-shape-2" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                <svg viewBox="0 0 165 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V0C91.127 0 165 73.873 165 165V180H0V0Z" fill="#2B59FF" />
                </svg>
            </div>
        </div>
    )
}
