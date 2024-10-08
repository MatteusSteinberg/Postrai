import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from "react-bootstrap";
import { signIn } from "next-auth/react";

export default function FacebookButton({ authState = "login" }) {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        if (loading == false) {
            setLoading(true);
            signIn("facebook");
        }
    }

    useEffect(() => {


        return () => {

        }
    }, [loading])

    return (
        <>
            <Button
                variant="secondary"
                type="button"
                className={`${authState}-fb-btn loading-btn ${loading ? 'is-loading' : ''}`}
                onClick={handleClick}
            >
                <span className="btn-loading-text">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 11 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.80805 22V11.677H0V7.96017H2.80805V4.78555C2.80805 2.2909 4.46677 0 8.28882 0C9.83631 0 10.9806 0.14421 10.9806 0.14421L10.8904 3.61506C10.8904 3.61506 9.72344 3.60402 8.44996 3.60402C7.07167 3.60402 6.85085 4.22145 6.85085 5.24623V7.96017H11L10.8195 11.677H6.85085V22H2.80805Z"
                            fill="white"
                        />
                    </svg>
                </span>
            </Button></>
    )
}
