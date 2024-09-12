import React, { useState, useEffect } from "react"
import { getSession } from "next-auth/react"
import DoneStep from "../components/onboarding/done-setup"
import PersonalStep from "../components/onboarding/personal-setup"
import UsageStep from "../components/onboarding/usage-setup"
import axios from "axios"
import dbConnect from "../lib/dbConnect"
import User from "../models/User"
import router from "next/router"

const steps = ["personal", "usage", "done"]

export default function Usersetup({ email }) {
    const [step, setStep] = useState(steps[0])
    const [form, setForm] = useState({
        phoneNumber: "",
        lastName: "",
        firstName: "",
        companyName: null,
        workSector: "",
        occupation: "",
    })

    const updateForm = (value) => {
        setForm((prev) => {
            return { ...prev, ...value }
        })
    }

    const changeStep = (index) => {
        setStep(steps[index])
    }

    const confirmSetup = async () => {
        const session = await getSession()

        const payload = {
            _id: session.user._id,
            id: session.user.id,
            phoneNumber: form.phoneNumber,
            lastName: form.lastName,
            firstName: form.firstName,
            companyName: form.companyName,
            workSector: form.workSector,
            occupation: form.occupation,
        }

        const response = await axios.post("/api/user/setupInfo", payload)

        if (response.status === 200) {
            router.push("/")
        }
    }

    useEffect(() => {
        return () => { }
    }, [step])

    return (
        <>
            {email && <></>}
            {step === steps[0] && (
                <PersonalStep
                    form={form}
                    updateInput={(value) => updateForm(value)}
                    changeStep={(index) => changeStep(index)}
                />
            )}
            {step === steps[1] && (
                <>
                    <UsageStep
                        form={form}
                        updateInput={(value) => updateForm(value)}
                        changeStep={(index) => changeStep(index)}
                    />
                </>
            )}
            {step === steps[2] && (
                <>
                    <DoneStep
                        confirm={confirmSetup}
                        form={form}
                        updateInput={(value) => updateForm(value)}
                        changeStep={(index) => changeStep(index)}
                    />
                </>
            )}
        </>
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
    const user = await User.findOne({
        $or: [
            { _id: session.user._id },
            { "facebookCredentials.accountId": session.user.id },
            { "githubCredentials.accountId": session.user.id },
            { "googleCredentials.accountId": session.user.id },
        ],
    }).select("UserSetupDone")
    if (user.UserSetupDone) {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: false,
            },
        }
    }

    return {
        props: { session, email: context.query.email ? context.query.email : null },
    }
}
