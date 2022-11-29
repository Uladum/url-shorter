import mongoose from 'mongoose'
const { Schema, model } = mongoose

const shortUrlSchema = new Schema(
  {
    url: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true }
  },
  {
    timestamps: true
  }
)

export default model('shortUrl', shortUrlSchema)
