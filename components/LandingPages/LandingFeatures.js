import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import ServiceShape from "../../public/images/landing/services-shape-l1.png"
import Image from "next/image";

export default function LandingFeatures() {
    return (
        <div className="pai-landing-features">
            <div className="feature-bg-image">
                <Image src={ServiceShape} height={175} width={190} layout="responsive" />
            </div>
            <Container>
                <Row className="align-items-end justify-content-center" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                    <Col lg={7} md={12} xs={12}>
                        <div className="features-headline">
                            <h2 className="title my-0">Make annotating easy <br />for yourself</h2>
                        </div>
                    </Col>
                    <Col lg={5} md={12} xs={12}>
                        <div className="features-text">
                            <p className="text my-0">Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit <br />Morbi venenatis vitae nisi nec</p>
                        </div>
                    </Col>
                </Row>
                <div className="feature-items" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true">
                    <Row>
                        <Col lg={4}>
                            <div className="feature-box mx-auto mx-md-0">
                                <div className="feature-box-icon first">
                                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M46.5938 15.75C49.8557 15.75 52.5 13.1057 52.5 9.84375C52.5 6.58182 49.8557 3.9375 46.5938 3.9375C43.3318 3.9375 40.6875 6.58182 40.6875 9.84375C40.6875 13.1057 43.3318 15.75 46.5938 15.75Z" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M32.8126 15.75L22.4149 28.0376C21.92 28.6227 21.5592 29.309 21.3579 30.0484C21.1565 30.7878 21.1194 31.5623 21.2492 32.3176C21.3791 33.0728 21.6727 33.7905 22.1094 34.4201C22.5461 35.0498 23.1154 35.5763 23.7773 35.9625L32.8716 41.2676C33.0296 41.3606 33.1664 41.4857 33.2731 41.6348C33.3798 41.7838 33.4541 41.9536 33.4912 42.1332C33.5283 42.3127 33.5274 42.498 33.4885 42.6772C33.4496 42.8563 33.3736 43.0254 33.2654 43.1734L23.6251 56.4375" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.125 19.6875L17.85 12.6C18.0032 12.3696 18.2253 12.1935 18.4846 12.0968C18.7439 12.0002 19.0271 11.9879 19.2937 12.0619L32.8125 15.75L43.3125 23.625L49.35 34.486C49.4987 34.7534 49.7361 34.9606 50.0213 35.0715C50.3065 35.1825 50.6215 35.1903 50.9119 35.0936L57.75 32.8125" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M43.3125 23.625L34.125 34.4938" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.375 40.6875L5.25 56.4375" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="feature-box-text">
                                    <p className="title">Manage Smartly</p>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat. </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="feature-box mx-auto mx-md-0">
                                <div className="feature-box-icon second">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M46.6213 28.7525C47.1938 30.7363 47.5 32.8325 47.5 35C47.5 47.4262 37.4262 57.5 25 57.5C12.5738 57.5 2.5 47.4262 2.5 35C2.5 22.5738 12.5738 12.5 25 12.5C27.17 12.5 29.2688 12.8075 31.2538 13.38" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25 47.5C31.9036 47.5 37.5 41.9036 37.5 35C37.5 28.0964 31.9036 22.5 25 22.5C18.0964 22.5 12.5 28.0964 12.5 35C12.5 41.9036 18.0964 47.5 25 47.5Z" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25 35L53.75 6.25" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M48.75 11.25L46.25 3.75L38.75 11.25L41.25 18.75L48.75 21.25L56.25 13.75L48.75 11.25Z" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="feature-box-text">
                                    <p className="title">Communicate Fast</p>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="feature-box mx-auto mx-md-0">
                                <div className="feature-box-icon third">
                                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.125 35.625H2.375V2.375H49.875V17.8125" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M43.9375 33.25C49.84 33.25 54.625 31.1234 54.625 28.5C54.625 25.8766 49.84 23.75 43.9375 23.75C38.035 23.75 33.25 25.8766 33.25 28.5C33.25 31.1234 38.035 33.25 43.9375 33.25Z" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M33.25 28.5V35.625C33.25 38.2482 38.0344 40.375 43.9375 40.375C49.8406 40.375 54.625 38.2482 54.625 35.625V28.5" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M33.25 35.625V42.75C33.25 45.3732 38.0344 47.5 43.9375 47.5C49.8406 47.5 54.625 45.3732 54.625 42.75V35.625" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M33.25 42.75V49.875C33.25 52.4982 38.0344 54.625 43.9375 54.625C49.8406 54.625 54.625 52.4982 54.625 49.875V42.75" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26.125 23.75C28.7484 23.75 30.875 21.6234 30.875 19C30.875 16.3766 28.7484 14.25 26.125 14.25C23.5016 14.25 21.375 16.3766 21.375 19C21.375 21.6234 23.5016 23.75 26.125 23.75Z" stroke="#25373F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="feature-box-text">
                                    <p className="title">Influence Easily</p>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
