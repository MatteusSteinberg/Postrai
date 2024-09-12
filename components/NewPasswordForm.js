import axios from "axios"

import React, { useState, useRef } from "react"
import Link from "next/link"
import { Form, Button, Alert } from "react-bootstrap"

export default function NewPasswordForm({ RPT }) {
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const passwordRef = useRef({})

    const onSubmit = async (e) => {
        e.preventDefault()
        if (
            passwordRef.current.passwordOne.value ===
            passwordRef.current.passwordTwo.value
        ) {
            const res = await axios.put("/api/user/resetPassword", {
                RPT: RPT,
                password: passwordRef.current.passwordOne.value,
            })
            if (!res.data.success) {
                setErrorMessage(res.data.error)
                setIsError(true)
            } else {
                setIsSuccess(true)
                setIsError(false)
            }
        } else {
            setIsError(true)
        }
    }

    return (
        <div className="newpass-form">
            <div className="newpass-form-content">
                <h2 className="title">New Password</h2>
            </div>
            <Form className="form-wrapper">
                {isError == true && (
                    <Alert variant="error">Passwords does not match.</Alert>
                )}
                {isSuccess == true && (
                    <>
                        <Alert variant="success">
                            Password has been updated.
                        </Alert>
                    </>
                )}
                {isSuccess === false && (
                    <>
                        <Form.Group
                            className="form-group"
                            controlId="formBasicEmail"
                        >
                            <Form.Label className="newpass-label">
                                New password
                            </Form.Label>
                            <Form.Control
                                className="password-input"
                                type="password"
                                placeholder="123456789..."
                                ref={(input) =>
                                    (passwordRef.current.passwordOne = input)
                                }
                            />
                        </Form.Group>
                        <Form.Group
                            className="form-group"
                            controlId="formBasicEmail"
                        >
                            <Form.Label className="newpass-label">
                                Confirm password
                            </Form.Label>
                            <Form.Control
                                className="password-input"
                                type="password"
                                placeholder="123456789..."
                                ref={(input) =>
                                    (passwordRef.current.passwordTwo = input)
                                }
                            />
                        </Form.Group>
                        <Button
                            variant="secondary"
                            type="button"
                            className="newpass-btn"
                            onClick={onSubmit}
                        >
                            Set new password
                        </Button>
                        <div className="back-link">
                            <Link href="/login">
                                <a className="text-link return">
                                    Return to login
                                </a>
                            </Link>
                        </div>
                    </>
                )}
            </Form>
        </div>
    )
}
