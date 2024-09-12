import React from "react"
import Image from "next/image";
import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap";

import HalfShape from "../../public/images/landing/l2-feature-shape.png";
import FeatureImg1 from "../../public/images/landing/l2-feature-img-1.png";
import FeatureImg2 from "../../public/images/landing/l2-feature-img-2.png";
import FeatureImg3 from "../../public/images/landing/l2-feature-img-3.png";
import icon1 from "../../public/images/landing/icon-grid.png";
import icon2 from "../../public/images/landing/icon-message.png";

export default function LandingTabs() {
    return (
        <div className="pai-tabs-wrapper">
            <Container>
                <div className="tabs-container">
                    <Row className="justify-content-center">
                        <Col xl={12} lg={12} md={12}>
                            <Tabs defaultActiveKey="project-management" id="uncontrolled-tab-example">
                                <Tab eventKey="project-management" title="Project Management">
                                    <Row className="align-items-center justify-content-center">
                                        <Col xl={6} lg={6} md={5} xs={12}>
                                            <div className="image-group">
                                                <Image className="tabs-feature-image image-1" src={FeatureImg1} />
                                                <div className="image-item-1">
                                                    <Image className="tabs-shape" src={HalfShape} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={5} lg={6} md={7} xs={12}>
                                            <div className="tabs-content-wrapper">
                                                <h2 className="tabs-headline">Best features for your project management.</h2>
                                                <div className="tabs-features">
                                                    <div className="tabs-features-icon bg-coral">
                                                        <Image src={icon1} />
                                                    </div>
                                                    <div className="tabs-features-body">
                                                        <h4 className="tabs-features-body-title">Manage Smartly</h4>
                                                        <p className="tabs-features-body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                                <div className="tabs-features">
                                                    <div className="tabs-features-icon bg-java">
                                                        <Image src={icon2} />
                                                    </div>
                                                    <div className="tabs-features-body">
                                                        <h4 className="tabs-features-body-title">Communicate Fast</h4>
                                                        <p className="tabs-features-body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="task-management" title="Task Management">
                                    <Row className="align-items-center justify-content-center">
                                        <Col xl={6} lg={6} md={5} xs={12}>
                                            <div className="image-group">
                                                <Image className="tabs-feature-image image-1" src={FeatureImg2} />
                                                <div className="image-item-1">
                                                    <Image className="tabs-shape" src={HalfShape} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={5} lg={6} md={7} xs={12}>
                                            <div className="tabs-content-wrapper">
                                                <h2 className="tabs-headline">Manage your tasks easily with postai.</h2>
                                                <div className="tabs-features">
                                                    <div className="tabs-features-icon bg-coral">
                                                        <Image src={icon1} />
                                                    </div>
                                                    <div className="tabs-features-body">
                                                        <h4 className="tabs-features-body-title">Manage Smartly</h4>
                                                        <p className="tabs-features-body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                                <div className="tabs-features">
                                                    <div className="tabs-features-icon bg-java">
                                                        <Image src={icon2} />
                                                    </div>
                                                    <div className="tabs-features-body">
                                                        <h4 className="tabs-features-body-title">Communicate Fast</h4>
                                                        <p className="tabs-features-body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="easy-schedule" title="Easy Schedule">
                                    <Row className="align-items-center justify-content-center">
                                        <Col xl={6} lg={6} md={5} xs={12}>
                                            <div className="image-group">
                                                <Image className="tabs-feature-image image-1" src={FeatureImg3} />
                                                <div className="image-item-1">
                                                    <Image className="tabs-shape" src={HalfShape} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={5} lg={6} md={7} xs={12}>
                                            <div className="tabs-content-wrapper">
                                                <h2 className="tabs-headline">Make Schedules for Any Meeting on Calendar.</h2>
                                                <div className="tabs-features">
                                                    <div className="tabs-features-icon bg-coral">
                                                        <Image src={icon1} />
                                                    </div>
                                                    <div className="tabs-features-body">
                                                        <h4 className="tabs-features-body-title">Manage Smartly</h4>
                                                        <p className="tabs-features-body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                                <div className="tabs-features">
                                                    <div className="tabs-features-icon bg-java">
                                                        <Image src={icon2} />
                                                    </div>
                                                    <div className="tabs-features-body">
                                                        <h4 className="tabs-features-body-title">Communicate Fast</h4>
                                                        <p className="tabs-features-body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                    <div className="tab-content tabs-wrapper" id="tab-features">
                        {/* <div className="tab-pane fade show active" id="feature-1" role="tabpanel" aria-labelledby="feature-1-tab">
                        </div>
                        <div className="tab-pane fade" id="feature-2" role="tabpanel" aria-labelledby="feature-2-tab">
                            
                        </div> */}
                        {/* <div className="tab-pane fade" id="feature-3" role="tabpanel" aria-labelledby="feature-3-tab">
                            
                        </div> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

