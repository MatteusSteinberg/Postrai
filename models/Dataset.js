import mongoose from "mongoose"

const DatasetSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
    },
    data: {
        info: {
            description: String,
            url: String,
            year: Number,
            contributor: String,
            date_created: String,
        },
        images: [
            {
                id: String,
                xScaleFactor: Number,
                yScaleFactor: Number,
                coco_url: String,
                width: Number,
                height: Number,
                file_name: String,
            },
        ],
        annotations: [
            {
                id: String,
                category_id: String,
                iscrowd: Number,
                image_id: String,
                bbox: Array,
            },
        ],
        categories: [
            {
                supercategory: String,
                id: String,
                name: String,
            },
        ],
    },
    LastUpdated: {
        type: Date,
    },
    CreatedTimestamp: {
        type: Date,
        required: true,
        default: () => {
            return new Date()
        },
    },
})

export default mongoose.models.Dataset || mongoose.model("Dataset", DatasetSchema, "Dataset")
