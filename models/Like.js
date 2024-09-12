import mongoose from "mongoose"

const LikeSchema = mongoose.Schema({
    PostrId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Postr',
        required: true
    },
    LikedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    IsLiked: {
        type: Boolean,
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

export default mongoose.models.Like ||
    mongoose.model("Like", LikeSchema, "Like")