import connectDB from '@/lib/db'
import User from '@/models/User'
import Subscription from '@/models/Subscription'
import { SubscriptionPlan, UserPermission } from '@/types/enums'

export async function checkUserSubscription(userEmail: string) {
  try {
    await connectDB()
    
    const user = await User.findOne({ email: userEmail })
    if (!user) {
      return { hasAccess: false, plan: SubscriptionPlan.FREE }
    }

    // Check if user has an active subscription
    const activeSubscription = await Subscription.findOne({
      userId: user._id,
      status: 'active',
      currentPeriodEnd: { $gt: new Date() }
    })

    const hasAccess = activeSubscription !== null || user.permissions.includes(UserPermission.ADMIN)
    
    return {
      hasAccess,
      plan: user.subscriptionPlan,
      subscription: activeSubscription,
      permissions: user.permissions,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        subscriptionPlan: user.subscriptionPlan,
      }
    }
  } catch (error) {
    console.error('Error checking user subscription:', error)
    return { hasAccess: false, plan: SubscriptionPlan.FREE }
  }
}

export async function requirePremiumAccess(userEmail: string) {
  const { hasAccess, plan, subscription, user } = await checkUserSubscription(userEmail)
  
  if (!hasAccess) {
    throw new Error('Premium subscription required')
  }
  
  return { plan, subscription, user }
}

export function isPremiumUser(permissions: UserPermission[]): boolean {
  return permissions.includes(UserPermission.PREMIUM_USER) || permissions.includes(UserPermission.ADMIN)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSubscriptionActive(subscription: any): boolean {
  if (!subscription) return false
  
  const now = new Date()
  return (
    subscription.status === 'active' &&
    new Date(subscription.currentPeriodEnd) > now
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDaysUntilExpiry(subscription: any): number {
  if (!subscription || subscription.status !== 'active') return 0
  
  const now = new Date()
  const expiry = new Date(subscription.currentPeriodEnd)
  const diffTime = expiry.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  return Math.max(0, diffDays)
}

export const RAZORPAY_CONFIG = {
  PLAN_ID: process.env.RAZORPAY_PLAN_ID!,
  KEY_ID: process.env.RAZORPAY_KEY_ID!,
  WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET!,
  PLAN_AMOUNT: 9900, // €99 in cents
  PLAN_CURRENCY: 'EUR',
  PLAN_NAME: 'Paid Plan - €99/month'
}
