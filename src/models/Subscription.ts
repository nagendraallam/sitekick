import mongoose, { Document, Model, Schema } from 'mongoose'

export interface ISubscription extends Document {
  userId: mongoose.Types.ObjectId
  razorpaySubscriptionId: string
  razorpayPlanId: string
  razorpayCustomerId: string
  status: 'created' | 'authenticated' | 'active' | 'paused' | 'halted' | 'cancelled' | 'completed' | 'expired'
  planName: string
  amount: number // in cents (€99 = 9900)
  currency: string
  currentPeriodStart: Date
  currentPeriodEnd: Date
  cancelledAt?: Date
  endedAt?: Date
  trialStart?: Date
  trialEnd?: Date
  metadata?: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

const subscriptionSchema = new Schema<ISubscription>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    razorpaySubscriptionId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    razorpayPlanId: {
      type: String,
      required: true,
    },
    razorpayCustomerId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['created', 'authenticated', 'active', 'paused', 'halted', 'cancelled', 'completed', 'expired'],
      required: true,
      default: 'created',
      index: true,
    },
    planName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: 'EUR',
    },
    currentPeriodStart: {
      type: Date,
      required: true,
    },
    currentPeriodEnd: {
      type: Date,
      required: true,
    },
    cancelledAt: {
      type: Date,
    },
    endedAt: {
      type: Date,
    },
    trialStart: {
      type: Date,
    },
    trialEnd: {
      type: Date,
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
)

// Create indexes for better performance
subscriptionSchema.index({ userId: 1, status: 1 })
subscriptionSchema.index({ currentPeriodEnd: 1 })

// Prevent model re-compilation during development
const Subscription: Model<ISubscription> = mongoose.models.Subscription || mongoose.model<ISubscription>('Subscription', subscriptionSchema)

export default Subscription
