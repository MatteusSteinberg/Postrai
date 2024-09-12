import React from "react"
import UserActions from "./UserActions"

export default function DashboardTitle({ title, text, userActions, userInfo }) {
    return (
        <div className="dashboard-header">
            <div className="dashboard-title">
                <h1 className="title">{title}</h1>
                <p className="text">{text}</p>
            </div>
            <div className="user-actions-wrapper d-none d-lg-flex">
                {userActions === true && <UserActions userInfo={userInfo} userHasNotifications={userInfo.userHasNotifications} />}
            </div>
        </div>
    )
}
