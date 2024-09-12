import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from "react-bootstrap";
import { signIn } from "next-auth/react";

export default function GoogleButton({ authState = "login" }) {
    const [loading, setLoading] = useState(false);

    const handleClick = (ev) => {
        if (loading == false) {
            setLoading(true);
            signIn("google")
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
                className={`${authState}-google-btn loading-btn ${loading ? 'is-loading' : ''}`}
                onClick={handleClick}
            >
                <span className="btn-loading-text">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25.032 11.8463C25.1755 12.6152 25.2537 13.419 25.2537 14.2578C25.2537 20.8192 20.8623 25.4847 14.2298 25.4847C12.7215 25.4851 11.2279 25.1884 9.83429 24.6114C8.4407 24.0344 7.17446 23.1884 6.10792 22.1219C5.04138 21.0554 4.19544 19.7891 3.61845 18.3955C3.04145 17.0019 2.7447 15.5083 2.74516 14C2.7447 12.4917 3.04145 10.998 3.61845 9.60445C4.19544 8.21086 5.04138 6.94462 6.10792 5.87808C7.17446 4.81153 8.4407 3.9656 9.83429 3.3886C11.2279 2.81161 12.7215 2.51486 14.2298 2.51532C17.3308 2.51532 19.922 3.65632 21.91 5.50899L18.6725 8.74649V8.73832C17.4673 7.59032 15.9378 7.00115 14.2298 7.00115C10.4405 7.00115 7.3605 10.2025 7.3605 13.993C7.3605 17.7823 10.4405 20.9907 14.2298 20.9907C17.668 20.9907 20.0083 19.0248 20.489 16.3252H14.2298V11.8463H25.0332H25.032Z"
                            fill="white"
                        />
                    </svg>
                </span>
            </Button>
        </>
    )
}
