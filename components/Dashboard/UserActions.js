import React, { useState, useCallback, useEffect } from "react"
import NotificationItem from "./NotificationItem"
import Link from "next/link"
import { signOut } from "next-auth/react"
import axios from "axios"

import { Button } from "react-bootstrap"

export default function UserActions({ userInfo, userHasNotifications }) {
    const [notifActive, setNotifActive] = useState(null)
    const [userActive, setUserActive] = useState(null)

    const handleUser = useCallback(() => {
        setUserActive(!userActive)
        setNotifActive(false)
    })

    const handleNotif = useCallback(() => {
        setNotifActive(!notifActive)
        setUserActive(false)
    })

    const [notificationList, setNotificationlist] = useState(null);

    const handleDeleteNotification = async (notificationId) => {
        const newNotificationList = notificationList.filter(x => x._id != notificationId);

        await axios.get(`/api/notification/read?notificationId=${notificationId}&read=${true}`);

        setNotificationlist(newNotificationList);
    }

    useEffect(() => {
        if (!notificationList) {
            axios.get('/api/notification/list?amount=5')
                .then((response) => {
                    setNotificationlist(response.data);
                })
        }

        return () => {

        }
    }, [notificationList])


    return (
        <div className="user-actions">
            <div className={userActive === true ? "profile-action is-open" : "profile-action"}>
                <div className="profile" onClick={handleUser}>
                    <div className="profile-tab">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.1514 22.3711C24.5988 21.062 23.7968 19.873 22.7901 18.8701C21.7865 17.8644 20.5976 17.0625 19.2891 16.5088C19.2774 16.5029 19.2657 16.5 19.254 16.4941C21.0792 15.1758 22.2657 13.0283 22.2657 10.6055C22.2657 6.5918 19.0137 3.33984 15.0001 3.33984C10.9864 3.33984 7.73445 6.5918 7.73445 10.6055C7.73445 13.0283 8.92097 15.1758 10.7462 16.4971C10.7344 16.5029 10.7227 16.5059 10.711 16.5117C9.39851 17.0654 8.22078 17.8594 7.21003 18.873C6.2043 19.8767 5.40243 21.0655 4.84871 22.374C4.30473 23.655 4.01135 25.0285 3.98445 26.4199C3.98367 26.4512 3.98915 26.4823 4.00058 26.5114C4.01201 26.5405 4.02915 26.5671 4.05099 26.5895C4.07283 26.6118 4.09893 26.6296 4.12776 26.6418C4.15658 26.6539 4.18755 26.6602 4.21882 26.6602H5.97664C6.10554 26.6602 6.20808 26.5576 6.21101 26.4316C6.2696 24.1699 7.17781 22.0518 8.78328 20.4463C10.4444 18.7852 12.6505 17.8711 15.0001 17.8711C17.3497 17.8711 19.5557 18.7852 21.2169 20.4463C22.8223 22.0518 23.7305 24.1699 23.7891 26.4316C23.7921 26.5605 23.8946 26.6602 24.0235 26.6602H25.7813C25.8126 26.6602 25.8436 26.6539 25.8724 26.6418C25.9012 26.6296 25.9273 26.6118 25.9492 26.5895C25.971 26.5671 25.9881 26.5405 25.9996 26.5114C26.011 26.4823 26.0165 26.4512 26.0157 26.4199C25.9864 25.0195 25.6964 23.6572 25.1514 22.3711ZM15.0001 15.6445C13.6553 15.6445 12.3897 15.1201 11.4376 14.168C10.4854 13.2158 9.96101 11.9502 9.96101 10.6055C9.96101 9.26074 10.4854 7.99512 11.4376 7.04297C12.3897 6.09082 13.6553 5.56641 15.0001 5.56641C16.3448 5.56641 17.6104 6.09082 18.5626 7.04297C19.5147 7.99512 20.0391 9.26074 20.0391 10.6055C20.0391 11.9502 19.5147 13.2158 18.5626 14.168C17.6104 15.1201 16.3448 15.6445 15.0001 15.6445Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </div>
                <div className="profile-dropdown">
                    <div className="profile-headline">
                        <div className="profile-header-wrap">
                            <img src={`/api/image/profilePicture?userId=${userInfo.id}`} alt="profile picture" />
                        </div>
                        <div className="profile-header-text">
                            <h3 className="title">
                                {userInfo.firstName} {userInfo.lastName}
                            </h3>
                            <p className="text">{userInfo.email}</p>
                        </div>
                    </div>
                    <div className="profile-wrapper">
                        <ul className="profile-list">
                            <li className="profile-item">
                                <Link href={"account"}>
                                    <a>
                                        <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M1 8.00001C1 7.8674 1.05268 7.74022 1.14645 7.64645C1.24021 7.55268 1.36739 7.50001 1.5 7.50001H13.293L10.146 4.35401C10.0521 4.26012 9.99937 4.13278 9.99937 4.00001C9.99937 3.86723 10.0521 3.73989 10.146 3.64601C10.2399 3.55212 10.3672 3.49937 10.5 3.49937C10.6328 3.49937 10.7601 3.55212 10.854 3.64601L14.854 7.64601C14.9006 7.69245 14.9375 7.74763 14.9627 7.80837C14.9879 7.86912 15.0009 7.93424 15.0009 8.00001C15.0009 8.06577 14.9879 8.13089 14.9627 8.19164C14.9375 8.25238 14.9006 8.30756 14.854 8.35401L10.854 12.354C10.7601 12.4479 10.6328 12.5006 10.5 12.5006C10.3672 12.5006 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.50001H1.5C1.36739 8.50001 1.24021 8.44733 1.14645 8.35356C1.05268 8.25979 1 8.13261 1 8.00001V8.00001Z"
                                                fill="black"
                                            />
                                        </svg>
                                        <p className="my-0">Account settings</p>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <Button onClick={() => signOut()} variant="primary" className="sign-out-button">
                            Sign out
                        </Button>
                    </div>
                </div>
            </div>
            <div className={notifActive === true ? "notif is-open" : "notif"}>
                <div className="notifications" onClick={handleNotif}>
                    <div className="notifications-tab">
                        {userHasNotifications && <div className="notif-unread"></div>}
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 13.586V10C19 6.783 16.815 4.073 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783 5 10V13.586L3.293 15.293C3.19996 15.3857 3.12617 15.4959 3.07589 15.6172C3.0256 15.7386 2.99981 15.8687 3 16V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18V16C21.0002 15.8687 20.9744 15.7386 20.9241 15.6172C20.8738 15.4959 20.8 15.3857 20.707 15.293L19 13.586ZM19 17H5V16.414L6.707 14.707C6.80004 14.6143 6.87383 14.5041 6.92412 14.3828C6.9744 14.2614 7.00019 14.1313 7 14V10C7 7.243 9.243 5 12 5C14.757 5 17 7.243 17 10V14C17 14.266 17.105 14.52 17.293 14.707L19 16.414V17ZM12 22C12.6193 22.0008 13.2235 21.8086 13.7285 21.4502C14.2335 21.0917 14.6143 20.5849 14.818 20H9.182C9.38566 20.5849 9.76648 21.0917 10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22V22Z"
                                fill="none"
                            />
                        </svg>
                    </div>
                </div>
                <div className="notif-dropdown">
                    <div className="notif-headline">
                        <h3 className="title">Notifications</h3>
                        <p className="text">Your latest happenings</p>
                    </div>
                    <div className="notif-wrapper">
                        <ul className="notif-list">
                            {notificationList != null && notificationList.map((value, index) => {
                                return <NotificationItem
                                    key={index}
                                    deleteHandler={(value) => handleDeleteNotification(value)}
                                    notificationId={value._id} type={value.type}
                                    message={value.message}
                                    TriggeredByUser={value.TriggeredBy}
                                />
                            })}
                        </ul>
                        <Button variant="primary" className="see-all-notif">
                            See all
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
