import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/db'
import User from '@/models/User'
import Subscription from '@/models/Subscription'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    // Find the user with subscription info
    const user = await User.findOne({ email: session.user.email })
      .populate('subscriptionId')

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Get current subscription
    const subscription = await Subscription.findOne({
      userId: user._id,
      status: { $in: ['active', 'authenticated', 'created', 'paused'] }
    }).sort({ createdAt: -1 })

    return NextResponse.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        subscriptionPlan: user.subscriptionPlan,
        permissions: user.permissions,
      },
      subscription: subscription ? {
        id: subscription._id,
        status: subscription.status,
        planName: subscription.planName,
        amount: subscription.amount,
        currency: subscription.currency,
        currentPeriodStart: subscription.currentPeriodStart,
        currentPeriodEnd: subscription.currentPeriodEnd,
        cancelledAt: subscription.cancelledAt,
        razorpaySubscriptionId: subscription.razorpaySubscriptionId,
      } : null
    })

  } catch (error) {
    console.error('Error fetching subscription status:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subscription status' },
      { status: 500 }
    )
  }
}
