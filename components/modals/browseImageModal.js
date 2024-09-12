import React, { useRef, useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image";
import { Button } from "react-bootstrap"

export default function BrowseImageModal({
    show,
    tags = [],
    browseImageHeight,
    browseImageWidth,
    imageUrl = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80",
    views
}) {
    const router = useRouter()

    useEffect(() => {
        return () => { }
    }, [show])

    return (
        <>
            <div className="custom-modal-section">
                <div className="image-section-wrapper">
                    {/* <Image } src={imageUrl} className="image-item" layout="responsive" /> */}
                    <img src={imageUrl} height={browseImageHeight} width={browseImageWidth} />
                </div>
            </div>
            <div className="custom-modal-footer">
                <div className="footer-wrapper">
                    <div className="statistics">
                        <ul className="stat-list">
                            <li className="stat-item">
                                <p className="stat-title">Views:</p>
                                <p>{views}</p>
                            </li>
                            <li className="stat-item">
                                <p className="stat-title">Downloads:</p>
                                <p>15.812</p>
                            </li>
                            <li className="stat-item">
                                <p className="stat-title">Featured in:</p>
                                <p>
                                    {tags.map((value, index) => {
                                        if (index !== tags.length - 1) {
                                            return <span key={index}>{value}, {" "}</span>
                                        } else {
                                            return <span key={index}>{value}</span>
                                        }
                                    })}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <p className="license">
                        Free to use under the <span>Postrai License</span>
                    </p>
                </div>
            </div>
        </>
    )
}
