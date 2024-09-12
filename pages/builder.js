import React, { useState, useEffect } from "react"
import BuilderNavigation from "../components/Buildertool/BuilderNavigation"
import BuilderToolbox from "../components/Buildertool/BuilderToolbox"
import BuilderImage from "../components/Buildertool/BuilderImage"
import BuilderSidebar from "../components/Buildertool/BuilderSidebar"

import { getSession } from "next-auth/react"
import dbConnect from "../lib/dbConnect"
import User from "../models/User"
import Joyride, { STATUS } from "react-joyride"
import { nanoid } from "nanoid"
import randomHexColor from "random-hex-color"

const toolbox = {
    cursor: "cursor",
    box: "box",
    triangle: "triangle",
    pen: "pen",
}

export default function Builder({ user }) {
    const [startRun, setStartRun] = useState(null)
    const [builderImages, setBuilderImages] = useState([])
    const [tool, setTool] = useState(toolbox.cursor)
    const [activeLabel, setActiveLabel] = useState(null)

    const tourSteps = [
        {
            target: ".tour-step-object-change-name",
            content: "Test 1",
            disableBeacon: true,
        },
        {
            target: ".tour-step-object-upload-image",
            content: "Test 2",
            disableBeacon: true,
        },
        {
            target: ".tour-step-object-tools",
            content: "Test 3",
            disableBeacon: true,
            placement: "right",
        },
        {
            target: ".builder-sidebar",
            content: "Test 4",
            disableBeacon: true,
            placement: "left",
        },
    ]

    const addBuilderImages = (val) => {
        let currentBuilderImages = [...builderImages]
        for (let i = 0; i < val.length; i++) {
            currentBuilderImages.push({
                image: val[i],
                imageUrl: URL.createObjectURL(val[i]),
                labels: [],
                name: val[i].name,
                bbox: [],
                active: false,
                tempId: nanoid(8),
                labelColor: [],
                height: 0,
                width: 0,
                originalHeight: 0,
                originalWidth: 0,
            })
        }

        if (builderImages.length == 0) {
            currentBuilderImages[0].active = true
        }

        setBuilderImages([...currentBuilderImages])
    }

    const handleToolChange = (tool) => {
        setTool(tool)
    }

    const handleClickStart = (ev) => {
        ev.preventDefault()
        setStartRun(true)
    }

    const handleLabelNameChange = (name, index) => {
        let currentBuilderImages = [...builderImages]
        for (let i = 0; i < currentBuilderImages.length; i++) {
            if (currentBuilderImages[i].active) {
                currentBuilderImages[i].labels[index] = name
            }
        }
    }

    const handleCreateNewLabelFromBox = (value, tempId) => {
        let currentBuilderImages = [...builderImages]
        if (activeLabel == null) {
            for (let i = 0; i < currentBuilderImages.length; i++) {
                if (currentBuilderImages[i].tempId == tempId) {
                    currentBuilderImages[i].bbox.push([value[0], value[1], value[2], value[3]])
                    currentBuilderImages[i].labels.push(null)
                    currentBuilderImages[i].width = value[4]
                    currentBuilderImages[i].height = value[5]
                    currentBuilderImages[i].originalHeight = value[6]
                    currentBuilderImages[i].originalWidth = value[7]
                    currentBuilderImages[i].labelColor.push(randomHexColor())
                    setActiveLabel(currentBuilderImages[i].labels.length - 1)
                }
            }
        } else {
            for (let i = 0; i < currentBuilderImages.length; i++) {
                if (currentBuilderImages[i].tempId == tempId) {
                    currentBuilderImages[i].bbox[activeLabel] = [value[0], value[1], value[2], value[3]]
                }
            }
        }
        setTool(toolbox.cursor)
        setBuilderImages([...currentBuilderImages])
    }

    const handleJoyrideCallback = (data) => {
        const { status, type } = data
        const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED]

        if (finishedStatuses.includes(status)) {
            setStartRun(false)
        }
    }

    const updateImageResizeCoordinates = (xBuilderScaleFactor, yBuilderScaleFactor, tempId) => {
        let currentBuilderImages = [...builderImages]
        for (let i = 0; i < currentBuilderImages.length; i++) {
            if (currentBuilderImages[i].tempId == tempId) {
                const currentbbox = currentBuilderImages[i].bbox[activeLabel]
                if (currentbbox != undefined) {
                    currentBuilderImages[i].bbox[activeLabel][0] = currentbbox[0] / xBuilderScaleFactor
                    currentBuilderImages[i].bbox[activeLabel][1] = currentbbox[1] / yBuilderScaleFactor
                    currentBuilderImages[i].bbox[activeLabel][2] = currentbbox[2] / xBuilderScaleFactor
                    currentBuilderImages[i].bbox[activeLabel][3] = currentbbox[3] / yBuilderScaleFactor
                    currentBuilderImages[i].width = currentBuilderImages[i].width / xBuilderScaleFactor
                    currentBuilderImages[i].height = currentBuilderImages[i].height / yBuilderScaleFactor
                } else {
                }
            }
        }

        setTool(toolbox.cursor)
        setBuilderImages([...currentBuilderImages])
    }

    const handleChangeActiveImage = (tempImageId) => {
        let currentBuilderImages = [...builderImages]
        for (let i = 0; i < currentBuilderImages.length; i++) {
            if (currentBuilderImages[i].active) {
                currentBuilderImages[i].active = false
            }
            if (currentBuilderImages[i].tempId == tempImageId) {
                currentBuilderImages[i].active = true
                if (currentBuilderImages[i].bbox.length > 0) {
                    setActiveLabel(0)
                } else {
                    setActiveLabel(null)
                }
            }
        }
        setBuilderImages([...currentBuilderImages])
    }

    const getActiveImage = () => {
        var activeImage = builderImages.filter((builderImage) => builderImage.active != false)
        return activeImage[0]
    }

    useEffect(() => {
        return () => {}
    }, [builderImages])

    return (
        <main className="builder">
            <div className="builder-container">
                <div className="builder-navigation">
                    <BuilderNavigation userInfo={user} />
                </div>
                <div className="builder-section">
                    <div className="builder-toolbox">
                        <BuilderToolbox activeTool={tool} handleToolChange={handleToolChange} handleStartJoyride={handleClickStart} />
                    </div>
                    <div className="builder-main">
                        <BuilderImage updateResizeCoordinates={(param1, param2, param3) => updateImageResizeCoordinates(param1, param2, param3)} handleUpdateCreateBbox={(val, tempId) => handleCreateNewLabelFromBox(val, tempId)} activeTool={tool} activeLabel={activeLabel} builderImage={getActiveImage()} addImages={(val) => addBuilderImages(val)} />
                    </div>
                    <div className="builder-sidebar">
                        <BuilderSidebar userInfo={user} builderImages={builderImages} addImages={(val) => addBuilderImages(val)} activeImage={getActiveImage()} handleShowActiveImage={(tempId) => handleChangeActiveImage(tempId)} updateLabel={(val, index) => handleLabelNameChange(val, index)} />
                    </div>
                </div>
            </div>
            <Joyride
                callback={handleJoyrideCallback}
                steps={tourSteps}
                continuous={true}
                showSkipButton={true}
                run={startRun}
                styles={{
                    options: {
                        primaryColor: "#6C63FF",
                    },
                }}
            />
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

    return {
        props: {
            user: {
                id: user._id.toString(),
                email: user.email ? user.email : null,
                firstName: user.firstName ? user.firstName : null,
                lastName: user.lastName ? user.lastName : null,
                country: user.country ? user.country : null,
                phoneNumber: user.phoneNumber ? user.phoneNumber : null,
            },
        },
    }
}
