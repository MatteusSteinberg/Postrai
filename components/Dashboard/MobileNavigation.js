import React, { useState, useCallback, useEffect } from 'react'
import UserActions from "../Dashboard/UserActions";
import DashboardNavigation from "./Navigation"
import NavigationSubject from "./NavigationSubject"
import { useRouter } from "next/router"

export default function MobileNavigation({ userInfo }) {
    const router = useRouter()

    const [buttonActive, setButtonActive] = useState(null)
    const toggle = useCallback(() => setButtonActive(!buttonActive))

    return (
        <div className="mobile-dashboard-navigation d-block d-lg-none fixed-top">
            <div className="mobile-dashboard-wrapper">
                <div className={buttonActive === true ? "mobile-menu-action is-open" : "mobile-menu-action"}>
                    <div className="mobile-menu-icon" onClick={toggle}>
                        <div className="mobile-menu-tab">
                            <div className={buttonActive === true ? "hamburger is-active" : "hamburger"}>
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-dropdown">
                        <div className="mobile-menu-headline">
                            <h3 className="menu-title">
                                Navigation
                            </h3>
                        </div>
                        <div className="dashboard-navigation-menu">
                            <NavigationSubject to={"/dashboard/"} active={router.query.page[0] === "index"}>
                                <div className="navigationSubject-content">
                                    <div className="navigationSubject-inner">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.9265 0.384426C13.8057 0.262615 13.6619 0.16593 13.5036 0.09995C13.3452 0.0339699 13.1753 0 13.0038 0C12.8322 0 12.6623 0.0339699 12.504 0.09995C12.3456 0.16593 12.2018 0.262615 12.081 0.384426L0.384426 12.081C0.262614 12.2019 0.16593 12.3456 0.0999499 12.504C0.0339698 12.6623 0 12.8322 0 13.0038C0 13.1753 0.0339698 13.3452 0.0999499 13.5036C0.16593 13.6619 0.262614 13.8057 0.384426 13.9265C0.505863 14.047 0.649882 14.1422 0.808224 14.2069C0.966567 14.2716 1.13612 14.3044 1.30716 14.3034H2.60678V23.4008C2.60678 24.0901 2.88063 24.7512 3.36808 25.2387C3.85553 25.7262 4.51666 26 5.20602 26H20.8015C21.4909 26 22.152 25.7262 22.6394 25.2387C23.1269 24.7512 23.4007 24.0901 23.4007 23.4008V14.3034H24.7004C25.045 14.3034 25.3756 14.1665 25.6193 13.9227C25.8631 13.679 26 13.3484 26 13.0038C26.001 12.8327 25.9682 12.6632 25.9035 12.5048C25.8388 12.3465 25.7435 12.2025 25.6231 12.081L13.9265 0.384426ZM5.20602 23.4008V10.9374L13.0038 3.13963L20.8015 10.9374V23.4008H5.20602Z"
                                                fill="#6C63FF"
                                            />
                                        </svg>
                                        <p className="navigationSubject-content-name">Dashboard</p>
                                    </div>
                                    <span className="active-dot">
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="3.5" cy="3.5" r="3.5" fill="#6C63FF" />
                                        </svg>
                                    </span>
                                </div>
                            </NavigationSubject>
                            <NavigationSubject to={"/dashboard/collections"} active={router.query.page[0] === "collections"}>
                                <div className="navigationSubject-content">
                                    <div className="navigationSubject-inner">
                                        <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.1111 11.2H2.88889C1.29567 11.2 0 12.4558 0 14V25.2C0 26.7442 1.29567 28 2.88889 28H23.1111C24.7043 28 26 26.7442 26 25.2V14C26 12.4558 24.7043 11.2 23.1111 11.2ZM2.88889 25.2V14H23.1111L23.114 25.2H2.88889ZM2.88889 5.6H23.1111V8.4H2.88889V5.6ZM5.77778 0H20.2222V2.8H5.77778V0Z" fill="#393D3F" />
                                        </svg>
                                        <p className="navigationSubject-content-name">Collections</p>
                                    </div>
                                    <span className="active-dot">
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="3.5" cy="3.5" r="3.5" fill="#6C63FF" />
                                        </svg>
                                    </span>
                                </div>
                            </NavigationSubject>
                            <NavigationSubject to={"/dashboard/liked-posters"} active={router.query.page[0] === "liked-posters"}>
                                <div className="navigationSubject-content">
                                    <div className="navigationSubject-inner">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.0006 2.25119C11.5802 0.803529 9.72109 6.72664e-05 7.79154 0C6.77026 0.00117863 5.75926 0.226217 4.81674 0.662164C3.87421 1.09811 3.01877 1.73636 2.29964 2.54018C-0.767634 5.95454 -0.76633 11.295 2.30225 14.6949L11.86 25.2891C12.0816 25.7211 12.5091 26 13.0006 26C13.2024 25.9978 13.4009 25.9432 13.5802 25.8406C13.7595 25.738 13.9146 25.5901 14.033 25.409L23.6989 14.6949C26.7675 11.2935 26.7675 5.95454 23.6963 2.5344C22.9775 1.73206 22.1228 1.0951 21.1812 0.660162C20.2396 0.22522 19.2297 0.000866387 18.2096 0C16.2801 0.000349613 14.4211 0.803773 13.0006 2.25119ZM21.8531 4.57753C23.8905 6.84751 23.8918 10.3934 21.8557 12.6518L13.0006 22.4672L4.14548 12.6518C2.10932 10.3934 2.11063 6.84751 4.14288 4.58331C5.13358 3.49094 6.42932 2.88985 7.79154 2.88985C9.15376 2.88985 10.4443 3.49094 11.4272 4.58042L12.079 5.30288C12.1999 5.43718 12.3436 5.54372 12.5017 5.61642C12.6598 5.68911 12.8294 5.72653 13.0006 5.72653C13.1718 5.72653 13.3413 5.68911 13.4994 5.61642C13.6576 5.54372 13.8012 5.43718 13.9222 5.30288L14.574 4.58042C16.545 2.40002 19.8847 2.4058 21.8531 4.57753Z"
                                                fill="#393D3F"
                                            />
                                        </svg>
                                        <p className="navigationSubject-content-name">Liked Posters</p>
                                    </div>
                                    <span className="active-dot">
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="3.5" cy="3.5" r="3.5" fill="#6C63FF" />
                                        </svg>
                                    </span>
                                </div>
                            </NavigationSubject>
                            <NavigationSubject to={"/dashboard/saved-data"} active={router.query.page[0] === "saved-data"}>
                                <div className="navigationSubject-content">
                                    <div className="navigationSubject-inner">
                                        <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M26 21.7778V6.22222C26 2.84978 20.0476 0 13 0C5.95238 0 0 2.84978 0 6.22222V21.7778C0 25.1502 5.95238 28 13 28C20.0476 28 26 25.1502 26 21.7778ZM13 3.11111C18.9979 3.11111 22.6379 5.45533 22.75 6.21289C22.6379 6.98911 18.9979 9.33333 13 9.33333C7.00212 9.33333 3.36212 6.98911 3.25 6.23156C3.36212 5.45533 7.00212 3.11111 13 3.11111ZM3.25 10.2776C5.65338 11.5951 9.16012 12.4444 13 12.4444C16.8399 12.4444 20.3466 11.5951 22.75 10.2776V13.9907C22.6379 14.7669 18.9979 17.1111 13 17.1111C7.00212 17.1111 3.36212 14.7669 3.25 14V10.2776ZM3.25 21.7778V18.0553C5.65338 19.3729 9.16012 20.2222 13 20.2222C16.8399 20.2222 20.3466 19.3729 22.75 18.0553V21.7684C22.6379 22.5447 18.9979 24.8889 13 24.8889C7.00212 24.8889 3.36212 22.5447 3.25 21.7778Z"
                                                fill="#393D3F"
                                            />
                                        </svg>
                                        <p className="navigationSubject-content-name">Saved Data</p>
                                    </div>
                                    <span className="active-dot">
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="3.5" cy="3.5" r="3.5" fill="#6C63FF" />
                                        </svg>
                                    </span>
                                </div>
                            </NavigationSubject>
                            <NavigationSubject to={"/browse-images"} active={router.query.page[0] === "browse-images"}>
                                <div className="navigationSubject-content">
                                    <div className="navigationSubject-inner">
                                        <svg width="26" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 0H6C4.897 0 4 0.897 4 2V14C4 15.103 4.897 16 6 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM6 14V2H18L18.002 14H6Z" fill="#6C63FF" />
                                            <path d="M2 6H0V18C0 19.103 0.897 20 2 20H14V18H2V6Z" fill="#6C63FF" />
                                            <path d="M10 10L9 9L7 12H17L13 6L10 10Z" fill="#6C63FF" />
                                        </svg>
                                        <p className="navigationSubject-content-name">Browse Images</p>
                                    </div>
                                    <span className="active-dot">
                                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="3.5" cy="3.5" r="3.5" fill="#6C63FF" />
                                        </svg>
                                    </span>
                                </div>
                            </NavigationSubject>
                        </div>
                    </div>
                </div>
                <div className="user-actions-wrapper">
                    <UserActions userInfo={userInfo} />
                </div>
            </div>
        </div>
    )
}
