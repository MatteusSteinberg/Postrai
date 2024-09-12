import React, { useState } from 'react'

export default function NotificationItem({ type, message, TriggeredByUser, notificationId, deleteHandler }) {
    const [activeDelete, setActiveDelete] = useState(null);

    const handleDeleteButton = (ev) => {
        ev.preventDefault();
        deleteHandler(notificationId);
    }

    return (
        <li className="notif-item">
            <div onClick={handleDeleteButton} onMouseLeave={() => setActiveDelete(false)} onMouseEnter={() => setActiveDelete(true)} className="notif-icon">
                {type === "like" && (
                    <div className={activeDelete === true ? "notif-icon-inner is-active" : "notif-icon-inner"}>
                        <svg className="icon" width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0007 2.7707C14.2526 0.988959 11.9644 8.27894e-05 9.58959 0C8.33262 0.00145062 7.08832 0.278421 5.92829 0.814971C4.76826 1.35152 3.71541 2.13706 2.83033 3.12638C-0.94478 7.32867 -0.943176 13.9015 2.83354 18.086L14.5969 31.125C14.8696 31.6568 15.3959 32 16.0007 32C16.2491 31.9973 16.4934 31.9301 16.7141 31.8038C16.9347 31.6775 17.1256 31.4956 17.2714 31.2726L29.1679 18.086C32.9446 13.8997 32.9446 7.32867 29.1647 3.11926C28.28 2.13176 27.228 1.34782 26.0691 0.812508C24.9102 0.277194 23.6673 0.00106632 22.4118 0C20.0371 0.000430293 17.749 0.989259 16.0007 2.7707ZM26.8961 5.63388C29.4037 8.4277 29.4053 12.7918 26.8993 15.5714L16.0007 27.6519L5.10214 15.5714C2.59609 12.7918 2.5977 8.4277 5.09893 5.64099C6.31826 4.29654 7.91301 3.55674 9.58959 3.55674C11.2662 3.55674 12.8545 4.29654 14.0642 5.63743L14.8664 6.52662C15.0153 6.69191 15.1921 6.82305 15.3867 6.91252C15.5814 7.00199 15.79 7.04804 16.0007 7.04804C16.2114 7.04804 16.4201 7.00199 16.6147 6.91252C16.8093 6.82305 16.9861 6.69191 17.135 6.52662L17.9372 5.63743C20.363 2.95387 24.4734 2.96099 26.8961 5.63388Z" />
                        </svg>
                        <svg className="trash" width="22" height="22" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM7 9V15V9ZM11 9V15V9ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                )}
                {type === "collection" && (
                    <div className={activeDelete === true ? "notif-icon-inner is-active" : "notif-icon-inner"}>
                        <svg className="icon" width="22" height="22" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.4444 13.6H3.55556C1.59467 13.6 0 15.1249 0 17V30.6C0 32.4751 1.59467 34 3.55556 34H28.4444C30.4053 34 32 32.4751 32 30.6V17C32 15.1249 30.4053 13.6 28.4444 13.6ZM3.55556 30.6V17H28.4444L28.448 30.6H3.55556ZM3.55556 6.8H28.4444V10.2H3.55556V6.8ZM7.11111 0H24.8889V3.4H7.11111V0Z" />
                        </svg>
                        <svg className="trash" width="22" height="22" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM7 9V15V9ZM11 9V15V9ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                )}
            </div>
            <div className="notif-text">
                {type === "like" && (
                    <p><span className="notif-name">{TriggeredByUser.firstName} {TriggeredByUser.lastName} </span>liked your poster!</p>
                )}
                {type === "collection" && (
                    <p><span className="notif-name">{TriggeredByUser.firstName} {TriggeredByUser.lastName} </span>Added your poster to his collection</p>
                )}
            </div>
        </li>
    )
}
