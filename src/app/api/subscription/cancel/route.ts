import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/db'
import User from '@/models/User'
import Subscription from '@/models/Subscription'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { cancelAtPeriodEnd = true } = await request.json()

    await connectDB()

    // Find the user
    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Find active subscription
    const subscription = await Subscription.findOne({
      userId: user._id,
      status: { $in: ['active', 'authenticated'] }
    })

    if (!subscription) {
      return NextResponse.json({ 
        error: 'No active subscription found' 
      }, { status: 404 })
    }

    // Cancel subscription in Razorpay
    const cancelledSubscription = await razorpay.subscriptions.cancel(
      subscription.razorpaySubscriptionId,
      cancelAtPeriodEnd
    )

    // Update subscription in database
    await Subscription.findByIdAndUpdate(subscription._id, {
      status: 'cancelled',
      cancelledAt: new Date(),
      endedAt: cancelAtPeriodEnd 
        ? subscription.currentPeriodEnd 
        : new Date(),
    })

    // If immediate cancellation, downgrade user immediately
    if (!cancelAtPeriodEnd) {
      await User.findByIdAndUpdate(user._id, {
        subscriptionPlan: 'FREE',
        $pull: { permissions: 'PREMIUM_USER' }
      })
    }

    return NextResponse.json({
      success: true,
      message: cancelAtPeriodEnd 
        ? 'Subscription will be cancelled at the end of the current billing period'
        : 'Subscription cancelled immediately',
      subscription: {
        id: subscription._id,
        status: 'cancelled',
        cancelledAt: new Date(),
        accessUntil: cancelAtPeriodEnd 
          ? subscription.currentPeriodEnd 
          : new Date(),
      }
    })

  } catch (error) {
    console.error('Error cancelling subscription:', error)
    return NextResponse.json(
      { error: 'Failed to cancel subscription' },
      { status: 500 }
    )
  }
}
