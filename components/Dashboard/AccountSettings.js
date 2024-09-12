import React, { useRef, useState, useEffect } from "react"
import DashboardLayout from "./DashboardLayout"
import DashboardTitle from "./DashboardTitle"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import Countries from "../../lib/platformLists/countries"
import axios from "axios"

export default function AccountSettings({ userInfo }) {
    const [uploadedProfileImage, setUploadedProfileImage] = useState(null)
    const [errorMessage, setError] = useState(null)
    const form = useRef({})

    const uploadProfilePicture = async () => {
        const formData = new FormData()

        formData.append("file", uploadedProfileImage)

        const response = await axios.post(
            "/api/user/updateAccountProfilePicture?userId=" + userInfo.id,
            formData
        )

    }

    const FileUploader = (props) => {
        const hiddenFileInput = useRef(null)

        const handleClick = (ev) => {
            hiddenFileInput.current.click()
        }

        const handleChange = (ev) => {
            const fileUploaded = ev.target.files[0]
            setUploadedProfileImage(fileUploaded)
        }

        return (
            <>
                <Button
                    variant="primary"
                    className="profile-upload"
                    onClick={handleClick}
                >
                    {!uploadedProfileImage && (
                        <>
                            <span>Upload Profile picture</span>
                        </>
                    )}
                    {uploadedProfileImage && (
                        <>
                            <img
                                style={{
                                    maxHeight: "100px",
                                    maxWidth: "100px",
                                }}
                                src={URL.createObjectURL(uploadedProfileImage)}
                                alt="uploaded Image"
                            />
                        </>
                    )}
                </Button>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    name="file"
                    onChange={handleChange}
                    style={{ display: "none" }}
                />
            </>
        )
    }

    const handleUpdateGeneralInformation = async (ev) => {
        const formValues = {
            id: userInfo.id,
            firstName: form.current.firstName.value,
            lastName: form.current.lastName.value,
            phoneNumber: form.current.phoneNumber.value,
            email: form.current.email.value,
            country: form.current.country.value,
        }

        const response = await axios.post(`/api/user/updateAccountGeneral`, {
            formValues,
        })

        if (response.data.success) {
            if (uploadedProfileImage != null) {
                await uploadProfilePicture()
            }
        } else {
            setError(response.data.message)
        }
    }

    useEffect(() => {
        return () => { }
    }, [uploadedProfileImage, errorMessage])

    return (
        <DashboardLayout>
            <DashboardTitle
                userInfo={userInfo}
                userActions={true}
                title={"Account Settings"}
                text={"Account customization"}
            />
            <div className="settings general">
                <h3 className="settings-title">General Information</h3>
                {errorMessage && (
                    <>
                        <Alert variant="error">{errorMessage}</Alert>
                    </>
                )}
                <Form className="settings-form">
                    <Container fluid className="px-0">
                        <Row>
                            <Col lg={6}>
                                <Form.Group
                                    className="file-upload-group form-group"
                                    controlId="formBasicFile"
                                >
                                    <FileUploader />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group
                                    className="form-group"
                                    controlId="formBasicFirstName"
                                >
                                    <Form.Label className="form-label">
                                        First name
                                    </Form.Label>
                                    <Form.Control
                                        defaultValue={userInfo.firstName}
                                        ref={(el) =>
                                            (form.current.firstName = el)
                                        }
                                        className="first-name-setting"
                                        type="text"
                                        placeholder="Jonh..."
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="form-group"
                                    controlId="formBasicLastName"
                                >
                                    <Form.Label className="form-label">
                                        Last name
                                    </Form.Label>
                                    <Form.Control
                                        defaultValue={userInfo.lastName}
                                        ref={(el) =>
                                            (form.current.lastName = el)
                                        }
                                        className="last-name-setting"
                                        type="text"
                                        placeholder="Doe..."
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="form-group"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label className="form-label">
                                        E-mail
                                    </Form.Label>
                                    <Form.Control
                                        defaultValue={userInfo.email}
                                        ref={(el) => (form.current.email = el)}
                                        className="email-setting"
                                        type="text"
                                        placeholder="Johndoe@example.com..."
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="form-group"
                                    controlId="formBasicPhone"
                                >
                                    <Form.Label className="form-label">
                                        Phone
                                    </Form.Label>
                                    <Form.Control
                                        defaultValue={userInfo.phoneNumber}
                                        ref={(el) =>
                                            (form.current.phoneNumber = el)
                                        }
                                        className="phone-setting"
                                        type="phone"
                                        placeholder="11223344..."
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="form-group"
                                    controlId="formBasicCountry"
                                >
                                    <Form.Label className="form-label">
                                        Country
                                    </Form.Label>
                                    <Form.Select
                                        id="countrySelect"
                                        ref={(el) =>
                                            (form.current.country = el)
                                        }
                                        defaultValue={userInfo.country}
                                        name="country"
                                    >
                                        <option>Choose a country</option>
                                        {Countries.map((country, index) => (
                                            <option
                                                key={index}
                                                value={country.name}
                                            >
                                                {country.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={12} className="text-center mt-5">
                                <Button
                                    className="general-submit"
                                    onClick={handleUpdateGeneralInformation}
                                    variant="primary"
                                >
                                    Update General settings
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
            <div className="settings security mt-5">
                <h3 className="settings-title">Security Settings</h3>
                {errorMessage && (
                    <>
                        <Alert variant="error">{errorMessage}</Alert>
                    </>
                )}
                <Form className="settings-form">
                    <Container fluid className="px-0">
                        <Row>
                            <Col lg={6}>
                                <Form.Group
                                    className="form-group"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label className="form-label">
                                        New password
                                    </Form.Label>
                                    <Form.Control
                                        defaultValue={userInfo.lastName}
                                        ref={(el) =>
                                            (form.current.lastName = el)
                                        }
                                        className="new-password-setting"
                                        type="password"
                                        placeholder="New password..."
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group
                                    className="form-group"
                                    controlId="formBasicConfirmPassword"
                                >
                                    <Form.Label className="form-label">
                                        Confirm password
                                    </Form.Label>
                                    <Form.Control
                                        defaultValue={userInfo.firstName}
                                        ref={(el) =>
                                            (form.current.firstName = el)
                                        }
                                        className="confirm-setting"
                                        type="password"
                                        placeholder="Confirm password..."
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={12} className="text-center mt-5">
                                <Button
                                    className="settings-submit"
                                    onClick={handleUpdateGeneralInformation}
                                    variant="primary"
                                >
                                    Update
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        </DashboardLayout>
    )
}
