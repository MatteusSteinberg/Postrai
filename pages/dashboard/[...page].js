import React, { useState, useEffect } from 'react'
import { getSession } from 'next-auth/react'
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';
import Sidebar from "../../components/Dashboard/Sidebar";
import MobileNavigation from "../../components/Dashboard/MobileNavigation";
import DashboardCTA from "../../components/Dashboard/DashboardCTA";
import { useRouter } from 'next/router';
import CollectionsList from '../../components/Dashboard/CollectionsList';
import LikedPostersList from '../../components/Dashboard/LikedPostersList';
import DatasetList from '../../components/Dashboard/DatasetList';
import AccountSettings from '../../components/Dashboard/AccountSettings';
import Collection from '../../components/Dashboard/Collection';
import NotificationModel from '../../models/Notification';
import axios from 'axios';

export default function Dashboard({ user }) {
    const router = useRouter();
    const [likedPostrList, setLikedPostrListData] = useState(null);
    const [ownPostrList, setOwnPostrListData] = useState(null);

    useEffect(() => {
        if (!likedPostrList) axios.get('/api/image/likedList').then(response => setLikedPostrListData(response.data));
        if (!ownPostrList) axios.get('/api/image/own').then(response => setOwnPostrListData(response.data));

        return () => {

        }
    }, [])


    return (
        <main className="dashboard d-block d-lg-flex">
            <MobileNavigation userInfo={user} />
            <Sidebar userInfo={user} />
            <div className='dashboard-dynamic-content'>
                {router.query.page[0] === 'index' && <>
                    <DashboardCTA userInfo={user} postrList={ownPostrList} />
                </>}
                {router.query.page[0] === 'collections' && router.query.page[1] === undefined && <>
                    <CollectionsList userInfo={user} />
                </>}
                {router.query.page[0] === 'collections' && router.query.page[1] !== undefined && <>
                    <Collection collectionId={router.query.page[1]} userInfo={user} />
                </>}
                {router.query.page[0] === 'liked-posters' && <>
                    {likedPostrList && <>
                        <LikedPostersList userInfo={user} postrList={likedPostrList} />
                    </>}
                </>}
                {router.query.page[0] === 'saved-data' && <>
                    <DatasetList userInfo={user} />
                </>}
                {router.query.page[0] === 'account' && <>
                    <AccountSettings userInfo={user} />
                </>}
            </div>
        </main>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        }
    }
    await dbConnect()
    const user = await User.findOne({ $or: [{ _id: session.user._id }, { "facebookCredentials.accountId": session.user.id }, { "githubCredentials.accountId": session.user.id }, { "googleCredentials.accountId": session.user.id }] })
    if (user.UserSetupDone === false) {
        return {
            redirect: {
                destination: "/user-setup",
                permanent: false,
            },
        }
    }

    const notificationExists = await NotificationModel.exists({ Receiver: user._id, Read: false })
    return {
        props: {
            user: {
                id: user._id.toString(),
                email: user.email ? user.email : null,
                firstName: user.firstName ? user.firstName : null,
                lastName: user.lastName ? user.lastName : null,
                country: user.country ? user.country : null,
                phoneNumber: user.phoneNumber ? user.phoneNumber : null,
                userHasNotifications: notificationExists ? true : false,
            },
        },
    }
}
