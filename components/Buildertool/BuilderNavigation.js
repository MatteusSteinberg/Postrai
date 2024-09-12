import React from "react"

export default function BuilderNavigation({ userInfo }) {
    return (
        <nav className="builder-nav">
            <div className="logo">
                <div className="logo-wrapper">
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.119703 15.5274L0 23.9308L25.8569 9.36126L25.9755 0.959167L0.119703 15.5274Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.119703 29.7251L0 38.1285L25.8569 23.5597L25.9755 15.1563L0.119703 29.7251Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.1438 44.2949L26.0281 52.6968L51.8815 38.1285L52.0001 29.7251L26.1438 44.2949Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.1438 30.0962L26.0281 38.5002L51.8815 23.9308L52.0001 15.5274L26.1438 30.0962Z" fill="white" />
                        <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M0 23.9308L26.0279 38.5002L26.1435 30.0962L0.119703 15.5274L0 23.9308Z" fill="white" />
                        <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M25.857 9.36126L51.8814 23.9308L52 15.5274L25.9756 0.959167L25.857 9.36126Z" fill="white" />
                        <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M25.8569 23.5597L51.8813 38.1285L51.9999 29.7251L25.9756 15.1563L25.8569 23.5597Z" fill="white" />
                        <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M0 38.1285L26.0279 52.6968L26.1435 44.2949L0.119703 29.7251L0 38.1285Z" fill="white" />
                    </svg>
                </div>
                <div className="collection-name">
                    <input type="text" placeholder="Unnamed data collection" className="title tour-step-object-change-name" />
                </div>
            </div>
            <div className="builder-user">
                <p className="user-name">
                    {userInfo.firstName} {userInfo.lastName}
                </p>
                <div className="profile-image">
                    <img src={`/api/image/profilePicture?userId=${userInfo.id}`} alt="profile picture" />
                </div>
            </div>
        </nav>
    )
}
