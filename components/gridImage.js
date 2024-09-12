import { Button } from "react-bootstrap"
import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import Router from "next/router"
import LazyLoad from "react-lazyload";
import ImageDownload from "../lib/imageDownload"

export default function GridImage({ imageHeight, imageWidth, imageId, click, imageUrl, uploadedByUsername, uploadedById, uploadedByProfilePicture, user, tags, IsLiked = false, views = 0 }) {
    const [liked, setLiked] = useState(IsLiked)
    const downloadTag = useRef()

    const handleClick = () => {
        click({
            active: true, 
            imageUrl: imageUrl, 
            uploadedByUsername: uploadedByUsername, 
            uploadedByProfilePicture: uploadedByProfilePicture, 
            tags: tags, 
            uploadedById: uploadedById, 
            user: user, 
            liked: liked, 
            imageId: imageId, 
            views: views
            })
    }

    const handleLikeClick = (ev) => {
        if (user) {
            setLiked(!liked);
            if (!liked) {
                axios.get(`/api/image/like?postrId=${imageId}&postedBy=${uploadedById}`)

            } else {
                axios.get(`/api/image/unlike?postrId=${imageId}`)
            }
        } else {
            Router.push('/login')
        }
    }

    const handleDownloadClick = (ev) => {
        ev.preventDefault()
        ImageDownload(imageUrl, downloadTag.current)
    }

    return (
        <>
            <figure key={imageId} className="image-item">
                <Link
                    scroll={false}
                    href={`?poster=${imageId}`}
                    as={`poster/${imageId}`}
                    passHref={true}
                >
                    <div
                        className="image-hover-filter"
                        onClick={handleClick}
                    ></div>
                </Link>
                <div className="image-actions">
                    <div className="image-uploaded-by">
                        <img
                            src={uploadedByProfilePicture}
                            alt="Uploaded by 'profile picture'"
                        />
                        <p>{uploadedByUsername}</p>
                    </div>
                    <div className="image-action-buttons">
                        <Button variant="none" className="download" onClick={handleDownloadClick}>
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.02542 7.13232C3.07963 7.37032 2.25329 7.94548 1.70167 8.74977C1.15005 9.55405 0.911099 10.5321 1.02972 11.5001C1.14835 12.4681 1.61638 13.3595 2.34588 14.0068C3.07538 14.6541 4.01615 15.0127 4.99142 15.0153H5.99142M10.9914 20.0153V11.0153V20.0153ZM10.9914 20.0153L8.49142 18.0153L10.9914 20.0153ZM10.9914 20.0153L13.4914 18.0153L10.9914 20.0153Z"
                                    stroke="#393d3fff"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.8214 5.15334C14.4796 3.79992 13.636 2.62708 12.4615 1.8726C11.287 1.11812 9.86964 0.838434 8.49663 1.09025C7.12361 1.34206 5.89771 2.10653 5.06743 3.22868C4.23716 4.35084 3.86463 5.74671 4.02537 7.13334C4.02537 7.13334 4.17837 8.01534 4.49137 8.51534"
                                    stroke="#393d3fff"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.9915 15.0154C16.6975 15.0149 17.3954 14.8649 18.0393 14.5752C18.6832 14.2856 19.2584 13.8628 19.7272 13.3349C20.1959 12.8069 20.5475 12.1856 20.7588 11.5119C20.9702 10.8382 21.0364 10.1274 20.9532 9.42633C20.8701 8.7252 20.6393 8.04965 20.2762 7.44412C19.9132 6.83859 19.426 6.31683 18.8467 5.91317C18.2674 5.5095 17.6092 5.2331 16.9155 5.10214C16.2217 4.97118 15.508 4.98865 14.8215 5.15338L13.4915 5.51538"
                                    stroke="#393d3fff"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                        <Button variant="none" className={`like ${liked ? 'active' : ''}`} onClick={handleLikeClick}>
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_92_882)">
                                    <path
                                        d="M7.06488 3.125C4.65039 3.125 2.69238 5.064 2.69238 7.45625C2.69238 9.38737 3.45757 13.9706 10.9896 18.6038C11.1246 18.6859 11.2794 18.7293 11.4374 18.7293C11.5953 18.7293 11.7502 18.6859 11.8851 18.6038C19.4172 13.9706 20.1824 9.38737 20.1824 7.45625C20.1824 5.064 18.2244 3.125 15.8099 3.125C13.3954 3.125 11.4374 5.75 11.4374 5.75C11.4374 5.75 9.47937 3.125 7.06488 3.125Z"
                                        stroke="#393d3fff"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_92_882">
                                        <rect
                                            width="20.988"
                                            height="21"
                                            fill="white"
                                            transform="translate(0.943359 0.5)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Button>
                        <Button variant="none" className="add">
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 22 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.0678 0H11.8982C12.0609 0 12.1422 0.0777407 12.1422 0.233222V20.7568C12.1422 20.9123 12.0609 20.99 11.8982 20.99H10.0678C9.90508 20.99 9.82373 20.9123 9.82373 20.7568V0.233222C9.82373 0.0777407 9.90508 0 10.0678 0Z"
                                    fill="#393d3fff"
                                />
                                <path
                                    d="M0.732816 9.38745H21.2328C21.3955 9.38745 21.4768 9.46519 21.4768 9.62067V11.3698C21.4768 11.5253 21.3955 11.6031 21.2328 11.6031H0.732816C0.570119 11.6031 0.48877 11.5253 0.48877 11.3698V9.62067C0.48877 9.46519 0.570119 9.38745 0.732816 9.38745Z"
                                    fill="#393d3fff"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
                <img src={imageUrl} />
            </figure>
            <a className="d-none" ref={downloadTag} download={'test.jpg'} href={imageUrl}></a>
        </>
    )
}
