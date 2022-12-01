import mongoose from 'mongoose'
import { IUrl } from '../interfaces/url'
const { Schema, model } = mongoose

const codeSchema = new Schema<IUrl>(
  {
    url: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true }
  },
  {
    timestamps: true
  }
)

export default model('code', codeSchema)
