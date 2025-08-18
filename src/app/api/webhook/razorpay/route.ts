import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import connectDB from '@/lib/db'
import User from '@/models/User'
import Subscription from '@/models/Subscription'
import { SubscriptionPlan, UserPermission } from '@/types/enums'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-razorpay-signature')

    if (!signature) {
      return NextResponse.json({ error: 'No signature found' }, { status: 400 })
    }

    // Verify webhook signature
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex')

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const event = JSON.parse(body)
    
    await connectDB()

    switch (event.event) {
      case 'subscription.activated':
        await handleSubscriptionActivated(event.payload.subscription.entity)
        break
        
      case 'subscription.charged':
        await handleSubscriptionCharged(event.payload.payment.entity, event.payload.subscription.entity)
        break
        
      case 'subscription.completed':
        await handleSubscriptionCompleted(event.payload.subscription.entity)
        break
        
      case 'subscription.cancelled':
        await handleSubscriptionCancelled(event.payload.subscription.entity)
        break
        
      case 'subscription.paused':
      case 'subscription.halted':
        await handleSubscriptionPausedOrHalted(event.payload.subscription.entity)
        break
        
      case 'subscription.resumed':
        await handleSubscriptionResumed(event.payload.subscription.entity)
        break
        
      default:
        console.log('Unhandled webhook event:', event.event)
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

async function handleSubscriptionActivated(subscriptionData: any) {
  try {
    const subscription = await Subscription.findOne({
      razorpaySubscriptionId: subscriptionData.id
    })

    if (!subscription) {
      console.error('Subscription not found:', subscriptionData.id)
      return
    }

    // Update subscription status
    await Subscription.findByIdAndUpdate(subscription._id, {
      status: 'active',
      currentPeriodStart: new Date(subscriptionData.current_start * 1000),
      currentPeriodEnd: new Date(subscriptionData.current_end * 1000),
    })

    // Update user plan and permissions
    await User.findByIdAndUpdate(subscription.userId, {
      subscriptionPlan: SubscriptionPlan.PAID,
      $addToSet: { permissions: UserPermission.PREMIUM_USER }
    })

    console.log('Subscription activated:', subscriptionData.id)
  } catch (error) {
    console.error('Error handling subscription activated:', error)
  }
}

async function handleSubscriptionCharged(paymentData: any, subscriptionData: any) {
  try {
    const subscription = await Subscription.findOne({
      razorpaySubscriptionId: subscriptionData.id
    })

    if (!subscription) {
      console.error('Subscription not found:', subscriptionData.id)
      return
    }

    // Update subscription with new billing period
    await Subscription.findByIdAndUpdate(subscription._id, {
      currentPeriodStart: new Date(subscriptionData.current_start * 1000),
      currentPeriodEnd: new Date(subscriptionData.current_end * 1000),
      status: subscriptionData.status,
    })

    console.log('Subscription charged:', subscriptionData.id, 'Payment:', paymentData.id)
  } catch (error) {
    console.error('Error handling subscription charged:', error)
  }
}

async function handleSubscriptionCompleted(subscriptionData: any) {
  try {
    const subscription = await Subscription.findOne({
      razorpaySubscriptionId: subscriptionData.id
    })

    if (!subscription) {
      console.error('Subscription not found:', subscriptionData.id)
      return
    }

    // Update subscription status
    await Subscription.findByIdAndUpdate(subscription._id, {
      status: 'completed',
      endedAt: new Date(),
    })

    // Downgrade user plan and remove premium permissions
    await User.findByIdAndUpdate(subscription.userId, {
      subscriptionPlan: SubscriptionPlan.FREE,
      $pull: { permissions: UserPermission.PREMIUM_USER }
    })

    console.log('Subscription completed:', subscriptionData.id)
  } catch (error) {
    console.error('Error handling subscription completed:', error)
  }
}

async function handleSubscriptionCancelled(subscriptionData: any) {
  try {
    const subscription = await Subscription.findOne({
      razorpaySubscriptionId: subscriptionData.id
    })

    if (!subscription) {
      console.error('Subscription not found:', subscriptionData.id)
      return
    }

    // Update subscription status
    await Subscription.findByIdAndUpdate(subscription._id, {
      status: 'cancelled',
      cancelledAt: new Date(),
      endedAt: subscriptionData.ended_at ? new Date(subscriptionData.ended_at * 1000) : new Date(),
    })

    // Downgrade user plan and remove premium permissions
    await User.findByIdAndUpdate(subscription.userId, {
      subscriptionPlan: SubscriptionPlan.FREE,
      $pull: { permissions: UserPermission.PREMIUM_USER }
    })

    console.log('Subscription cancelled:', subscriptionData.id)
  } catch (error) {
    console.error('Error handling subscription cancelled:', error)
  }
}

async function handleSubscriptionPausedOrHalted(subscriptionData: any) {
  try {
    const subscription = await Subscription.findOne({
      razorpaySubscriptionId: subscriptionData.id
    })

    if (!subscription) {
      console.error('Subscription not found:', subscriptionData.id)
      return
    }

    // Update subscription status
    await Subscription.findByIdAndUpdate(subscription._id, {
      status: subscriptionData.status,
    })

    // For paused/halted subscriptions, temporarily remove premium access
    await User.findByIdAndUpdate(subscription.userId, {
      subscriptionPlan: SubscriptionPlan.FREE,
      $pull: { permissions: UserPermission.PREMIUM_USER }
    })

    console.log('Subscription paused/halted:', subscriptionData.id)
  } catch (error) {
    console.error('Error handling subscription paused/halted:', error)
  }
}

async function handleSubscriptionResumed(subscriptionData: any) {
  try {
    const subscription = await Subscription.findOne({
      razorpaySubscriptionId: subscriptionData.id
    })

    if (!subscription) {
      console.error('Subscription not found:', subscriptionData.id)
      return
    }

    // Update subscription status
    await Subscription.findByIdAndUpdate(subscription._id, {
      status: 'active',
      currentPeriodStart: new Date(subscriptionData.current_start * 1000),
      currentPeriodEnd: new Date(subscriptionData.current_end * 1000),
    })

    // Restore premium access
    await User.findByIdAndUpdate(subscription.userId, {
      subscriptionPlan: SubscriptionPlan.PAID,
      $addToSet: { permissions: UserPermission.PREMIUM_USER }
    })

    console.log('Subscription resumed:', subscriptionData.id)
  } catch (error) {
    console.error('Error handling subscription resumed:', error)
  }
}
