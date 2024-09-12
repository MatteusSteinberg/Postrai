import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Form, Button, Alert } from "react-bootstrap"
import axios from "axios"
import { signIn } from "next-auth/react"
import router from "next/router"
import FacebookButton from "./LoginProviderButtons/FacebookButton"
import GoogleButton from "./LoginProviderButtons/GoogleButton"
import GithubButton from "./LoginProviderButtons/GithubButton"

export default function Register() {
    const form = useRef({})
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [passwordsSame, setPasswordsSame] = useState(true)
    const [loading, setLoading] = useState(false)

    const buttonOnClick = async (ev) => {
        ev.preventDefault()
        if (loading) return
        if (
            form.current.password.value === form.current.confirmPassword.value
        ) {
            setLoading(true)
            const formValues = {
                email: form.current.email.value,
                password: form.current.password.value,
            }
            const response = await axios.post("/api/user/register", formValues)
            if (response.data.success == false) {
                setErrorMessage(response.data.error)
                setIsError(true)
                setLoading(false)
            } else {
                setIsError(false)

                const loginResponse = await signIn("credentials", {
                    redirect: false,
                    email: form.current.email.value,
                    password: form.current.password.value,
                })

                if (loginResponse.ok) {
                    router.push("/user-setup?email=true")
                }
            }
        } else {
            setPasswordsSame(false)
        }
    }

    const onPasswordInputsChange = () => {
        if (
            form.current.password.value.length > 0 &&
            form.current.confirmPassword.value.length > 0
        ) {
            setPasswordsSame(
                form.current.password.value ===
                    form.current.confirmPassword.value
            )
        }
    }

    useEffect(() => {
        return () => {}
    }, [isError, errorMessage, passwordsSame, loading])

    return (
        <div className="register-form">
            <div className="register-form-content">
                <h2 className="title">Welcome to Postrai</h2>
                <p className="text">
                    Already have an account?{" "}
                    <Link href="/login">
                        <a className="link text-link">Sign in.</a>
                    </Link>
                </p>
            </div>
            <Form className="form-wrapper">
                {isError == true && (
                    <Alert variant="error">{errorMessage}</Alert>
                )}
                {passwordsSame == false && (
                    <Alert variant="error">Passwords are not the same.</Alert>
                )}
                <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label className="register-label">E-mail</Form.Label>
                    <Form.Control
                        className="email-input"
                        type="email"
                        placeholder="Johndoe@example.com..."
                        ref={(input) => (form.current.email = input)}
                    />
                </Form.Group>
                <Form.Group
                    className="form-group"
                    controlId="formBasicPassword"
                >
                    <Form.Label className="register-label">Password</Form.Label>
                    <Form.Control
                        className="password-input"
                        type="password"
                        onChange={onPasswordInputsChange}
                        placeholder="123456789..."
                        ref={(input) => (form.current.password = input)}
                    />
                </Form.Group>
                <Form.Group
                    className="form-group"
                    controlId="formBasicPasswordRepeat"
                >
                    <Form.Label className="register-label">
                        Confirm Password
                    </Form.Label>
                    <Form.Control
                        onChange={onPasswordInputsChange}
                        className="password-input"
                        type="password"
                        placeholder="123456789..."
                        ref={(input) => (form.current.confirmPassword = input)}
                    />
                </Form.Group>
                <p className="terms">
                    By creating an account, you agree to our{" "}
                    <Link href="/">
                        <a className="text-link">Terms</a>
                    </Link>{" "}
                    and have read and acknowledge the{" "}
                    <Link href="/">
                        <a className="text-link">Global Privacy Statement</a>
                    </Link>
                    .
                </p>
                <Button
                    variant="secondary"
                    type="button"
                    className={`register-btn loading-btn ${
                        loading ? "is-loading" : ""
                    }`}
                    onClick={buttonOnClick}
                >
                    <span className="btn-loading-text">Sign up</span>
                </Button>
                <ul className="mt-2">
                    <li>
                        <FacebookButton authState="register" />
                    </li>
                    <li>
                        <GoogleButton authState="register" />
                    </li>
                    <li>
                        <GithubButton authState="register" />
                    </li>
                </ul>
            </Form>
        </div>
    )
}
