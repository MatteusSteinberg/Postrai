import React, {useRef} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'
import ImageDownload from '../../lib/imageDownload';

export default function DashboardImageGrid({ children }) {
    return (
        <>
            <div className='dashboard-image-grid'>
                {children}
            </div>
        </>
    )
}


export function CollectionGridItem({ imageUrl, collectionId, collectionSize = 10 }) {

    const linkTo = `./collections/${collectionId}`;

    return (
        <>
            <Link href={linkTo} as={linkTo} scroll={true} shallow>
                <div className='collection-grid-item'>
                    <div className="poster-grid-item-image-wrap">
                        <img className="collection-grid-item-image" src={imageUrl} />
                    </div>
                    <div className='collection-grid-item-overlay'>
                        <p className='collection-overlay-name'>Collection Name</p>
                        <p className='collection-overlay-info'>Contains {collectionSize} Posters</p>
                    </div>
                    <div className='collection-grid-item-shader'>

                    </div>
                </div>
            </Link>
        </>
    )
}

const profileImage =
    "data:image/jpeg;base64,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"

export function PosterGridItem({ imageUrl, posterId, uploadedBy, uploadedByPicture }) {

    return (
        <>
            <div className='poster-grid-item'>
                <div className='poster-grid-item-image'>
                    <div className="poster-grid-item-image-wrap">
                        <img src={imageUrl} />
                    </div>
                    <div className="image-actions">
                        <div className="image-uploaded-by">
                            <img
                                src={profileImage}
                                alt="Uploaded by 'profile picture'"
                            />
                            <p>John Doe</p>
                        </div>
                        <div className="poster-item-action-buttons">
                            <Button variant="none" className="like">
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
                            <Button variant="none" className="like">
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
                        </div>
                    </div>
                </div>
                <div className='poster-grid-item-shader'></div>
            </div>
        </>
    )
}

export function OwnPosterGridItem({ imageUrl, posterId }) {

    const downloadTag = useRef()

    const handleDownloadClick = (ev) => {
        ev.preventDefault()
        ImageDownload(imageUrl, downloadTag.current)
    }

    return (
        <>
            <div className='poster-grid-item'>
                <div className='poster-grid-item-image'>
                    <div className="poster-grid-item-image-wrap">
                        <img src={imageUrl} />
                    </div>
                    <div className="image-actions">
                        <div className="image-uploaded-by">

                        </div>
                        <div className="poster-item-action-buttons">
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
                        </div>
                    </div>
                </div>
                <div className='poster-grid-item-shader'></div>
            </div>
            <a className="d-none" ref={downloadTag} download={'test.jpg'} href={imageUrl}></a>
        </>
    )
}

export function CollectionPosterGridItem({ imageUrl, collectionId, posterId, uploadedBy, uploadedByPicture }) {


    return (
        <>
            <div className='poster-grid-item'>
                <div className="poster-grid-item-image-wrap">
                    <img src={imageUrl} />
                </div>
                <div className="image-actions">
                    <div className="image-uploaded-by">
                        <img
                            src={profileImage}
                            alt="Uploaded by 'profile picture'"
                        />
                        <p>{uploadedBy}</p>
                    </div>
                    <div className="poster-item-action-buttons">
                        <Button variant="none" className="like">
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
                    </div>
                </div>
                <div className='poster-grid-item-shader'>

                </div>
            </div>
        </>
    )
}

export function LikedPosterGridItem({ imageUrl, posterId, uploadedBy, uploadedByProfilePicture }) {
    
    const downloadTag = useRef()

    // TODO Implementer like functionality her også! Knappen er kommenteret ud

    const handleDownloadClick = (ev) => {
        ev.preventDefault()
        ImageDownload(imageUrl, downloadTag.current)
    }

    return (
        <>
            <div className='poster-grid-item'>
                <div className='poster-grid-item-image'>
                    <div className="poster-grid-item-image-wrap">
                        <img src={imageUrl} />
                    </div>
                    <div className="image-actions">
                        <div className="image-uploaded-by">
                            <img
                                src={uploadedByProfilePicture}
                                alt="Uploaded by 'profile picture'"
                            />
                            <p>{uploadedBy}</p>
                        </div>
                        <div className="poster-item-action-buttons">
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
                            {/* <Button variant="none" className="like">
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
                            </Button> */}
                        </div>
                    </div>
                </div>
                <div className='poster-grid-item-shader'></div>
            </div>
            <a className="d-none" ref={downloadTag} download={'test.jpg'} href={imageUrl}></a>
        </>
    )
}