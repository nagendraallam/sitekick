import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IProject extends Document {
  userId: string
  name: string
  url: string
  aiName: string
  description?: string
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const projectSchema = new Schema<IProject>(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    url: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    aiName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    position: {
      type: String,
      enum: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
      default: 'bottom-right',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

// Create indexes for better performance
projectSchema.index({ userId: 1 })
projectSchema.index({ userId: 1, name: 1 }, { unique: true })
projectSchema.index({ createdAt: -1 })

// Prevent model re-compilation during development
const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema)

export default Project
