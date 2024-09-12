import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
    },
    companyName: {
        type: String,
    },
    workSector: {
        type: String,
    },
    occupation: {
        type: String,
    },
    country: {
        type: String
    },
    LastLoginDate: {
        type: Date,
    },
    UserSetupDone: {
        type: Boolean,
        default: false,
    },
    CreatedTimestamp: {
        type: Date,
        required: true,
        default: () => {
            return new Date()
        },
    },
    emailVerified: {
        verified: {
            type: Boolean,
            default: false,
        },
        EVT: {
            type: String,
        },
        date: {
            type: Date,
        },
    },
    passwordReset: {
        expiryDate: {
            type: Date,
        },
        RPT: {
            type: String,
        },
    },
    access_token: {
        type: String,
    },
    facebookCredentials: {
        accountId: {
            type: String,
        },
        fullName: {
            type: String,
        },
        facebookEmail: {
            type: String,
        },
        imageUrl: {
            type: String
        },
    },
    githubCredentials: {
        accountId: {
            type: String,
        },
        name: {
            type: String,
        },
        githubEmail: {
            type: String,
        },
        githubUrl: {
            type: String,
        },
        imageUrl: {
            type: String
        },
    },
    googleCredentials: {
        accountId: {
            type: String,
        },
        fullName: {
            type: String,
        },
        googleEmail: {
            type: String,
        },
        githubUrl: {
            type: String,
        },
        verified: {
            type: Boolean,
        },
        refresh_token: {
            type: String,
        },
        imageUrl: {
            type: String
        },
    },
})

export default mongoose.models.User ||
    mongoose.model("User", UserSchema, "User")
