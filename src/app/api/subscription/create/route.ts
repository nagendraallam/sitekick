import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/db'
import User from '@/models/User'
import Subscription from '@/models/Subscription'
import Razorpay from 'razorpay'
import { SubscriptionPlan, UserPermission } from '@/types/enums'

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

    await connectDB()

    // Find the user
    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Check if user already has an active subscription
    const existingSubscription = await Subscription.findOne({
      userId: user._id,
      status: { $in: ['active', 'authenticated', 'created'] }
    })

    if (existingSubscription) {
      return NextResponse.json({ 
        error: 'User already has an active subscription' 
      }, { status: 400 })
    }

    // Create or get Razorpay customer
    let customerId = user.razorpayCustomerId
    
    if (!customerId) {
      const customer = await razorpay.customers.create({
        name: user.name,
        email: user.email,
      })
      customerId = customer.id
      
      // Update user with customer ID
      await User.findByIdAndUpdate(user._id, {
        razorpayCustomerId: customerId
      })
    }

    // Create subscription in Razorpay
    // Note: You'll need to create this plan in your Razorpay dashboard first
    const subscription = await razorpay.subscriptions.create({
      plan_id: process.env.RAZORPAY_PLAN_ID!, // €99 plan ID from Razorpay dashboard
      customer_id: customerId,
      quantity: 1,
      total_count: 12, // 12 months
      addons: [],
      notes: {
        user_id: user._id.toString(),
        plan: 'paid_plan_99_eur'
      }
    })

    // Calculate period dates (monthly subscription)
    const currentPeriodStart = new Date()
    const currentPeriodEnd = new Date()
    currentPeriodEnd.setMonth(currentPeriodEnd.getMonth() + 1)

    // Create subscription record in database
    const newSubscription = new Subscription({
      userId: user._id,
      razorpaySubscriptionId: subscription.id,
      razorpayPlanId: process.env.RAZORPAY_PLAN_ID!,
      razorpayCustomerId: customerId,
      status: subscription.status,
      planName: 'Paid Plan - €99/month',
      amount: 9900, // €99 in cents
      currency: 'EUR',
      currentPeriodStart,
      currentPeriodEnd,
      metadata: {
        razorpayData: subscription
      }
    })

    await newSubscription.save()

    // Update user subscription reference
    await User.findByIdAndUpdate(user._id, {
      subscriptionId: newSubscription._id
    })

    return NextResponse.json({
      success: true,
      subscription: {
        id: subscription.id,
        status: subscription.status,
        short_url: subscription.short_url,
        amount: 9900,
        currency: 'EUR',
        plan_name: 'Paid Plan - €99/month'
      }
    })

  } catch (error) {
    console.error('Error creating subscription:', error)
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    )
  }
}
