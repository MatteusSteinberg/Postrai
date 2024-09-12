import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Faq() {
    return (
        <div className="faq-content">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={6} lg={8} md={9} xs={10}>
                        <div className="faq-title" data-aos="fade-up" data-aos-duration="500" data-aos-delay="250" data-aos-once="true">
                            <h2 className="title">
                                Frequently Asked Question
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">
                    <Col lg={6} md={9} xs={11}>
                        <div className="faq-single">
                            <div className="faq-media d-flex">
                                <div className="faq-icon">
                                    <svg width="22" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M379.063 148.114C379.063 238.062 279.121 231.954 279.121 294.14V294.476C279.121 301.65 273.306 307.465 266.132 307.465H211.602C204.428 307.465 198.613 301.65 198.613 294.476V290.808C198.613 194.753 286.34 200.861 286.34 155.887C286.34 136.454 271.904 124.794 248.029 124.794C228.606 124.794 208.758 133.287 190.715 150.645C186.091 155.093 178.861 155.374 173.808 151.421L137.946 123.371C131.902 118.644 131.201 109.686 136.544 104.178C166.484 73.313 205.39 54.835 256.913 54.835C338.531 54.836 379.063 98.699 379.063 148.114V148.114ZM290.225 408.517C290.225 436.279 268.016 459.043 239.7 459.043C211.938 459.043 189.174 436.279 189.174 408.517C189.174 380.756 211.938 357.992 239.7 357.992C268.017 357.992 290.225 380.756 290.225 408.517Z" />
                                    </svg>
                                </div>
                                <div className="faq-single-content">
                                    <h4 className="faq-single-title">Can I use Postrai for my images?</h4>
                                    <p className="faq-single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna tellus, consectetur nec volutpat et, pellentesque sed lorem.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={9} xs={11}>
                        <div className="faq-single">
                            <div className="faq-media d-flex">
                                <div className="faq-icon">
                                    <svg width="22" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M379.063 148.114C379.063 238.062 279.121 231.954 279.121 294.14V294.476C279.121 301.65 273.306 307.465 266.132 307.465H211.602C204.428 307.465 198.613 301.65 198.613 294.476V290.808C198.613 194.753 286.34 200.861 286.34 155.887C286.34 136.454 271.904 124.794 248.029 124.794C228.606 124.794 208.758 133.287 190.715 150.645C186.091 155.093 178.861 155.374 173.808 151.421L137.946 123.371C131.902 118.644 131.201 109.686 136.544 104.178C166.484 73.313 205.39 54.835 256.913 54.835C338.531 54.836 379.063 98.699 379.063 148.114V148.114ZM290.225 408.517C290.225 436.279 268.016 459.043 239.7 459.043C211.938 459.043 189.174 436.279 189.174 408.517C189.174 380.756 211.938 357.992 239.7 357.992C268.017 357.992 290.225 380.756 290.225 408.517Z" />
                                    </svg>
                                </div>
                                <div className="faq-single-content">
                                    <h4 className="faq-single-title">Can I use Postrai for my images?</h4>
                                    <p className="faq-single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna tellus, consectetur nec volutpat et, pellentesque sed lorem.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={9} xs={11}>
                        <div className="faq-single">
                            <div className="faq-media d-flex">
                                <div className="faq-icon">
                                    <svg width="22" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M379.063 148.114C379.063 238.062 279.121 231.954 279.121 294.14V294.476C279.121 301.65 273.306 307.465 266.132 307.465H211.602C204.428 307.465 198.613 301.65 198.613 294.476V290.808C198.613 194.753 286.34 200.861 286.34 155.887C286.34 136.454 271.904 124.794 248.029 124.794C228.606 124.794 208.758 133.287 190.715 150.645C186.091 155.093 178.861 155.374 173.808 151.421L137.946 123.371C131.902 118.644 131.201 109.686 136.544 104.178C166.484 73.313 205.39 54.835 256.913 54.835C338.531 54.836 379.063 98.699 379.063 148.114V148.114ZM290.225 408.517C290.225 436.279 268.016 459.043 239.7 459.043C211.938 459.043 189.174 436.279 189.174 408.517C189.174 380.756 211.938 357.992 239.7 357.992C268.017 357.992 290.225 380.756 290.225 408.517Z" />
                                    </svg>
                                </div>
                                <div className="faq-single-content">
                                    <h4 className="faq-single-title">Can I use Postrai for my images?</h4>
                                    <p className="faq-single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna tellus, consectetur nec volutpat et, pellentesque sed lorem.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={9} xs={11}>
                        <div className="faq-single">
                            <div className="faq-media d-flex">
                                <div className="faq-icon">
                                    <svg width="22" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M379.063 148.114C379.063 238.062 279.121 231.954 279.121 294.14V294.476C279.121 301.65 273.306 307.465 266.132 307.465H211.602C204.428 307.465 198.613 301.65 198.613 294.476V290.808C198.613 194.753 286.34 200.861 286.34 155.887C286.34 136.454 271.904 124.794 248.029 124.794C228.606 124.794 208.758 133.287 190.715 150.645C186.091 155.093 178.861 155.374 173.808 151.421L137.946 123.371C131.902 118.644 131.201 109.686 136.544 104.178C166.484 73.313 205.39 54.835 256.913 54.835C338.531 54.836 379.063 98.699 379.063 148.114V148.114ZM290.225 408.517C290.225 436.279 268.016 459.043 239.7 459.043C211.938 459.043 189.174 436.279 189.174 408.517C189.174 380.756 211.938 357.992 239.7 357.992C268.017 357.992 290.225 380.756 290.225 408.517Z" />
                                    </svg>
                                </div>
                                <div className="faq-single-content">
                                    <h4 className="faq-single-title">Can I use Postrai for my images?</h4>
                                    <p className="faq-single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna tellus, consectetur nec volutpat et, pellentesque sed lorem.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={9} xs={11}>
                        <div className="faq-single">
                            <div className="faq-media d-flex">
                                <div className="faq-icon">
                                    <svg width="22" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M379.063 148.114C379.063 238.062 279.121 231.954 279.121 294.14V294.476C279.121 301.65 273.306 307.465 266.132 307.465H211.602C204.428 307.465 198.613 301.65 198.613 294.476V290.808C198.613 194.753 286.34 200.861 286.34 155.887C286.34 136.454 271.904 124.794 248.029 124.794C228.606 124.794 208.758 133.287 190.715 150.645C186.091 155.093 178.861 155.374 173.808 151.421L137.946 123.371C131.902 118.644 131.201 109.686 136.544 104.178C166.484 73.313 205.39 54.835 256.913 54.835C338.531 54.836 379.063 98.699 379.063 148.114V148.114ZM290.225 408.517C290.225 436.279 268.016 459.043 239.7 459.043C211.938 459.043 189.174 436.279 189.174 408.517C189.174 380.756 211.938 357.992 239.7 357.992C268.017 357.992 290.225 380.756 290.225 408.517Z" />
                                    </svg>
                                </div>
                                <div className="faq-single-content">
                                    <h4 className="faq-single-title">Can I use Postrai for my images?</h4>
                                    <p className="faq-single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna tellus, consectetur nec volutpat et, pellentesque sed lorem.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={9} xs={11}>
                        <div className="faq-single">
                            <div className="faq-media d-flex">
                                <div className="faq-icon">
                                    <svg width="22" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M379.063 148.114C379.063 238.062 279.121 231.954 279.121 294.14V294.476C279.121 301.65 273.306 307.465 266.132 307.465H211.602C204.428 307.465 198.613 301.65 198.613 294.476V290.808C198.613 194.753 286.34 200.861 286.34 155.887C286.34 136.454 271.904 124.794 248.029 124.794C228.606 124.794 208.758 133.287 190.715 150.645C186.091 155.093 178.861 155.374 173.808 151.421L137.946 123.371C131.902 118.644 131.201 109.686 136.544 104.178C166.484 73.313 205.39 54.835 256.913 54.835C338.531 54.836 379.063 98.699 379.063 148.114V148.114ZM290.225 408.517C290.225 436.279 268.016 459.043 239.7 459.043C211.938 459.043 189.174 436.279 189.174 408.517C189.174 380.756 211.938 357.992 239.7 357.992C268.017 357.992 290.225 380.756 290.225 408.517Z" />
                                    </svg>
                                </div>
                                <div className="faq-single-content">
                                    <h4 className="faq-single-title">Can I use Postrai for my images?</h4>
                                    <p className="faq-single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna tellus, consectetur nec volutpat et, pellentesque sed lorem.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
