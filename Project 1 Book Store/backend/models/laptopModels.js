import mongoose from "mongoose";

const laptopSchema = mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    processer: {
        type: String,
        required: true,

    },
    motherboard: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

export const Laptop = new mongoose.model('laptop', laptopSchema);
