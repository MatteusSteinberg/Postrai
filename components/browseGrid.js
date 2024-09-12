import React, { useState, useEffect } from "react"
import { Container, Button } from "react-bootstrap"
import { useRouter } from 'next/router'
import axios from "axios"
import GridImage from "./gridImage"
import { getSession } from "next-auth/react"

export default function BrowseGrid({ setShow, User }) {
    const [result, setResult] = useState(null)
    const { query: { search } } = useRouter();
    const [session, setSession] = useState(null);

    useEffect(() => {
        getSession().then(data => {
            setSession(data);
            axios
                .get(
                    `/api/image/browse${search != undefined ? `?search=${search}` : ''}`
                )
                .then((response) => {
                    setResult(response.data)
                })
        })
    }, [search])



    return (
        <>
            <div className="pai-browse-grid">
                <Container className="custom-grid-container">
                    <div className="grid">
                        {result && result.map((image, index) => {
                            return (
                                <GridImage
                                    key={index}
                                    imageId={image._id}
                                    tags={image.tags}
                                    uploadedByProfilePicture={`/api/image/profilePicture?userId=${image.UploadedBy._id}`}
                                    uploadedByUsername={`${image.UploadedBy.firstName} ${image.UploadedBy.lastName}`}
                                    uploadedById={image.UploadedBy._id.toString()}
                                    click={(imgInfo) => setShow(imgInfo)}
                                    imageUrl={image.url}
                                    user={session}
                                    IsLiked={image.liked}
                                    views={image.views}
                                />
                            )
                        })}
                    </div>
                </Container>
            </div>
        </>
    )
}
