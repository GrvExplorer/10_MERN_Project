import mongoose, { Schema } from "mongoose";

const memories_schema = new Schema({
    title: String,
    creator: String,
    message: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date()
    }
})




export const memories = mongoose.model('memories', memories_schema);
