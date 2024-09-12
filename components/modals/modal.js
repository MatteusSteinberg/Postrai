import { createPortal } from "react-dom"
import React, { useEffect, useState } from "react"
import BrowseImageHeader from "./headers/BrowseImageHeader"
import DashboardHeader from "./headers/DashboardHeader"

export default function Modal({
    show,
    close,
    title,
    children,
    header,
    user,
    closeLink,
    browseImageUploadedBy,
    browseImageId,
    browseImageUrl,
    browseImageUploadedById,
    browseImageLiked,
    browseImageUploadedProfilePicture
}) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false);
    }, [show, browseImageLiked])

    return mounted
        ? createPortal(
            <>
                <div className={`pai-${header}-modal ${show ? "visible" : ""}`}>
                    <div className="modal-inner">
                        <div className="modal-wrapper">
                            {header === "browseImage" && (
                                <BrowseImageHeader
                                    closeLink={closeLink}
                                    user={user}
                                    Liked={browseImageLiked}
                                    imageId={browseImageId}
                                    imageUrl={browseImageUrl}
                                    onClose={close}
                                    browseImageUploadedBy={browseImageUploadedBy}
                                    browseImageUploadedById={browseImageUploadedById}
                                    browseImageUploadedProfilePicture={browseImageUploadedProfilePicture}
                                />
                            )}
                            {header === "dashboard" && (
                                <DashboardHeader
                                    onClose={close}
                                    title={title}
                                />
                            )}
                            {children}
                        </div>
                    </div>
                </div>
            </>,
            document.querySelector("#modal")
        )
        : null
}
