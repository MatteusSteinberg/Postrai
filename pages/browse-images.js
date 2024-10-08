import React, { useState, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import BrowseHeader from "../components/BrowseHeader"
import Navigation from "../components/LandingPages/Navigation"
import BrowseGrid from "../components/BrowseGrid"
import BrowseImageModal from "../components/modals/browseImageModal"
import Link from "next/link"
import { getSession } from "next-auth/react"

import Modal from "../components/modals/modal"

export default function BrowseImages({ user }) {
    const [show, setShow] = useState({ active: false, imageUrl: "", uploadedByUsername: "", uploadedByProfilePicture: "", tags: [], uploadedById: "", user: null, imageId: undefined, views: 0})
    const router = useRouter()

    const handleModalClose = () => {
        setShow({ active: false, imageUrl: show.imageUrl })
        document.body.classList.remove("no-scroll")
    }

    const handleShowModal = (obj) => {
        setShow(obj)
        document.body.classList.add("no-scroll")
    }

    useEffect(() => {
        return () => { }
    }, [])

    return (
        <>
            <Head>
                <title>Browse images - Postrai</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="pai-browse-posters page">
                    <div className="pai-navigation">
                        <Navigation />
                    </div>
                    <header className="pai-browse">
                        <BrowseHeader />
                    </header>
                    <section
                        style={{ overflowY: "hidden" }}
                        className="pai-grid"
                    >
                        <BrowseGrid User={user} setShow={handleShowModal} />
                    </section>
                </div>
            </main>
            <Modal
                show={show.active}
                closeLink={"/browse-images"}
                close={handleModalClose}
                browseImageLiked={show.liked}
                header={"browseImage"}
                browseImageId={show.imageId}
                browseImageUrl={show.imageUrl}
                browseImageUploadedBy={show.uploadedByUsername}
                browseImageUploadedProfilePicture={show.uploadedByProfilePicture}
                user={show.user}
                browseImageUploadedById={show.uploadedById}
            >
                <BrowseImageModal browseImageHeight={show.height} browseImageWidth={show.width} imageUrl={show.imageUrl} tags={show.tags} views={show.views} />
            </Modal>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
        return { props: { user: null } }
    }
    const { id, name, email } = session.user

    return {
        props: {
            user: {
                id: id.toString(),
                email: email
            }
        }
    }
}