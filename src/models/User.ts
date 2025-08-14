import mongoose, { Document, Model, Schema } from 'mongoose'
import { UserPermission } from '@/types/enums'

export interface IUser extends Document {
  email: string
  name: string
  image?: string
  googleId?: string
  permissions: UserPermission[]
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple null values
    },
    permissions: {
      type: [String],
      enum: Object.values(UserPermission),
      default: [UserPermission.USER],
    },
  },
  {
    timestamps: true,
  }
)

// Create indexes for better performance
userSchema.index({ email: 1 })
userSchema.index({ googleId: 1 })

// Prevent model re-compilation during development
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema)

export default User
