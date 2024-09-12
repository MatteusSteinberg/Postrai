import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Pricing() {
    const [rate, setRate] = useState(null);
    const handleRate = useCallback(() => setRate(!rate))

    return (
        <div className="pricing-section">
            <div className="shape shape-1">
                <svg width="165" height="330" viewBox="0 0 165 330" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                    <path d="M165 330C73.873 330 0 256.127 0 165L165 165L165 330Z" fill="#FFEE56" />
                    <path d="M0 165V165C0 73.873 73.873 0 165 0V0V165H0Z" fill="#FFEE56" />
                </svg>
            </div>
            <div className="shape shape-2" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-once="true">
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
            <Container>
                <div className="pricing-section-inner">
                    <div className="pricing-section-top">
                        <Row className="align-items-end justify-content-center justify-content-lg-end">
                            <Col xl={8} lg={7}>
                                <div className="pricing-content text-lg-start text-center">
                                    <h2 className="pricing-title">Our pricing plans</h2>
                                </div>
                            </Col>
                            <Col xl={4} lg={5}>
                                <div className="pricing-btn d-flex align-items-center justify-content-center justify-content-lg-end flex-wrap">
                                    <label>Monthly</label>
                                    <div className="toggle-btn form-check form-switch">
                                        <input onClick={handleRate} className={rate === true ? "form-check-input btn-toggle active" : "form-check-input btn-toggle"} type="checkbox" checked="" />
                                    </div>
                                    <label>Yearly</label>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={4} md={6} sm={9} xs={10}>
                            <div className="card card-pricing text-center">
                                <div className="table-top">
                                    <h5 className="pricing-name">Free</h5>
                                    <p className="pricing-text">{rate === true ? "Yearly package" : "Monthly package"}</p>
                                    <div className="pricing-price">
                                        <span className="pricing-currency align-self-start">$</span>
                                        <h1 className="price dynamic-value">{rate === true ? "0" : "0"}</h1>
                                        <span className="pricing-time">/ {rate === true ? "Year" : "Month"}</span>
                                    </div>
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-item">Unlimited updates & projects</li>
                                    <li className="pricing-item">Custom permissions</li>
                                    <li className="pricing-item">Custom instructors</li>
                                    <li className="pricing-item">Custom designs & features</li>
                                </ul>
                                <Button variant="primary" className="pricing-button">Choose Plan</Button>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={9} xs={10}>
                            <div className="card card-pricing text-center featured">
                                <div className="table-top">
                                    <h5 className="pricing-name">Professional</h5>
                                    <p className="pricing-text">{rate === true ? "Yearly package" : "Monthly package"}</p>
                                    <div className="pricing-price">
                                        <span className="pricing-currency align-self-start">$</span>
                                        <h1 className="price dynamic-value">{rate === true ? "180" : "15"}</h1>
                                        <span className="pricing-time">/ {rate === true ? "Year" : "Month"}</span>
                                    </div>
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-item">Unlimited updates & projects</li>
                                    <li className="pricing-item">Custom permissions</li>
                                    <li className="pricing-item">Custom instructors</li>
                                    <li className="pricing-item">Custom designs & features</li>
                                </ul>
                                <Button variant="primary" className="pricing-button">Choose Plan</Button>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={9} xs={10}>
                            <div className="card card-pricing text-center">
                                <div className="table-top">
                                    <h5 className="pricing-name">Enterprise</h5>
                                    <p className="pricing-text">{rate === true ? "Yearly package" : "Monthly package"}</p>
                                    <div className="pricing-price">
                                        <span className="pricing-currency align-self-start">$</span>
                                        <h1 className="price dynamic-value">{rate === true ? "600" : "50"}</h1>
                                        <span className="pricing-time">/ {rate === true ? "Year" : "Month"}</span>
                                    </div>
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-item">Unlimited updates & projects</li>
                                    <li className="pricing-item">Custom permissions</li>
                                    <li className="pricing-item">Custom instructors</li>
                                    <li className="pricing-item">Custom designs & features</li>
                                </ul>
                                <Button variant="primary" className="pricing-button">Choose Plan</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
