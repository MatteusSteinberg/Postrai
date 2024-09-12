import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    profilePicture: {
        data: Buffer,
        contentType: String
    },
    LastUpdated: {
        type: Date,
        required: true,
        default: () => {
            return new Date()
        },
    }
})

export default mongoose.models.ProfilePicture ||
    mongoose.model("ProfilePicture", UserSchema, "ProfilePicture")