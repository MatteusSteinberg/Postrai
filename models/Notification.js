import mongoose from "mongoose"

const NotificationSchema = mongoose.Schema({
    Receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    TriggeredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    LikeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    },
    type: {
        type: String,
        required: true
    },
    Read: {
        type: Boolean,
        default: false,
        required: true
    },
    CreatedTimestamp: {
        type: Date,
        required: true,
        default: () => {
            return new Date()
        },
    },
})

export default mongoose.models.Notification ||
    mongoose.model("Notification", NotificationSchema, "Notification")