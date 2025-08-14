import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IContact extends Document {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  subject?: string
  isRead: boolean
  createdAt: Date
  updatedAt: Date
}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

// Create indexes for better performance
contactSchema.index({ email: 1 })
contactSchema.index({ createdAt: -1 })
contactSchema.index({ isRead: 1 })

// Prevent model re-compilation during development
const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', contactSchema)

export default Contact
