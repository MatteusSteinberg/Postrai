import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    tags: [
        {
            type: String,
        },
    ],
    AITags: [
        {
            type: String,
        },
    ],
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    uploadGroupId: {
        type: String,
    },
    height: {
        type: Number,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    UploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    UploadedTimestamp: {
        type: Date,
        required: true,
        default: () => {
            return new Date()
        },
    },
    views: {
        type: Number,
        required: true,
        default: () => {
            return 0
        },
    }
})

export default mongoose.models.Postr || mongoose.model("Postr", UserSchema, "Postr")
