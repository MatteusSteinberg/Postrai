import React, { Fragment, useState, useRef } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import router from "next/router"

export default function BrowseHeader() {
    const [trends, setTrends] = useState(["Flowers", "Nature", "Digital", "Wallpaper", "Abstract"])
    const searchInput = useRef()

    const searchValue = (value) => {
        router.push("/browse-images?search=" + value)
    }

    const handleSearch = (ev) => {
        if (ev.key === "Enter") {
            ev.preventDefault()
            searchValue(searchInput.current.value)
        }
    }

    const handleTrendClick = (value) => {
        searchValue(value)
        searchInput.current.value = value
    }

    return (
        <div className="pai-browse-header">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="browse-header-content">
                            <h1 className="browse-title">Browse Posters</h1>
                            <p className="browse-text">Browse our free-to-use image platform for any stock images you can think of.</p>
                        </div>
                        <div className="browse-search">
                            <Form className="browse-form">
                                <Form.Group className="form-group" controlId="formBasicText">
                                    <Form.Control className="browse-input-field" type="text" placeholder="Search free high-resoluton photos" onKeyDown={handleSearch} ref={searchInput} />
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24.918 23.582L19.8438 18.5195C21.6346 16.3874 22.5332 13.6462 22.3521 10.8677C22.1711 8.0891 20.9243 5.48773 18.8718 3.60607C16.8194 1.72442 14.1197 0.707772 11.336 0.76817C8.55216 0.828568 5.89915 1.96135 3.93025 3.93025C1.96135 5.89915 0.828568 8.55216 0.76817 11.336C0.707772 14.1197 1.72442 16.8194 3.60607 18.8718C5.48773 20.9243 8.0891 22.1711 10.8677 22.3521C13.6462 22.5332 16.3874 21.6346 18.5195 19.8438L23.582 24.918C23.7612 25.0912 24.0007 25.1881 24.25 25.1881C24.4993 25.1881 24.7388 25.0912 24.918 24.918C25.094 24.7402 25.1928 24.5002 25.1928 24.25C25.1928 23.9998 25.094 23.7598 24.918 23.582V23.582ZM2.6875 11.5938C2.6875 9.83226 3.20984 8.11033 4.18847 6.6457C5.1671 5.18108 6.55807 4.03954 8.18548 3.36545C9.81288 2.69135 11.6036 2.51498 13.3313 2.85863C15.0589 3.20228 16.6459 4.05052 17.8914 5.29608C19.137 6.54164 19.9852 8.12858 20.3289 9.85623C20.6725 11.5839 20.4961 13.3746 19.8221 15.002C19.148 16.6294 18.0064 18.0204 16.5418 18.999C15.0772 19.9777 13.3552 20.5 11.5938 20.5C9.23262 20.4969 6.96908 19.5576 5.2995 17.888C3.62993 16.2184 2.6906 13.9549 2.6875 11.5938V11.5938Z"
                                            fill="#393D3F"
                                        />
                                    </svg>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="browse-trends">
                            <div className="browse-trends-list">
                                <ul className="trends">
                                    <li className="trends-title">Trending:</li>
                                    {trends.map((value, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <li onClick={() => handleTrendClick(value)} className="trends-item">
                                                    {value}
                                                </li>
                                            </Fragment>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
