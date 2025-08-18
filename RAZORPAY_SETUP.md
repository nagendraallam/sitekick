# Razorpay Subscription Setup Guide

## 🚀 Quick Setup Checklist

### 1. Environment Variables

Add these to your `.env.local` file:

```env
# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
RAZORPAY_PLAN_ID=your_plan_id_for_99_eur
```

### 2. Razorpay Dashboard Setup

#### Step 1: Create a Subscription Plan

1. Login to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Go to **Subscriptions** → **Plans**
3. Click **Create Plan**
4. Configure the plan:
   - **Plan ID**: `paid_plan_99_eur` (or your preferred ID)
   - **Plan Name**: `Paid Plan - €99/month`
   - **Amount**: `9900` (in paise - €99 = 9900 paise)
   - **Currency**: `EUR`
   - **Billing Cycle**: `1 month`
   - **Description**: `Monthly subscription for premium features`

#### Step 2: Configure Webhook

1. Go to **Settings** → **Webhooks**
2. Click **Create Webhook**
3. Configure:
   - **Webhook URL**: `https://yourdomain.com/api/webhook/razorpay`
   - **Secret**: Generate a strong secret and add to env vars
   - **Events**: Select these events:
     - `subscription.activated`
     - `subscription.charged`
     - `subscription.completed`
     - `subscription.cancelled`
     - `subscription.paused`
     - `subscription.halted`
     - `subscription.resumed`

#### Step 3: Get API Keys

1. Go to **Settings** → **API Keys**
2. Copy your **Key ID** and **Key Secret**
3. Add them to your environment variables

### 3. Test the Integration

#### Create a Subscription

```bash
curl -X POST http://localhost:3000/api/subscription/create \
  -H "Content-Type: application/json" \
  -H "Cookie: your-session-cookie"
```

#### Check Subscription Status

```bash
curl -X GET http://localhost:3000/api/subscription/status \
  -H "Cookie: your-session-cookie"
```

#### Cancel Subscription

```bash
curl -X POST http://localhost:3000/api/subscription/cancel \
  -H "Content-Type: application/json" \
  -H "Cookie: your-session-cookie" \
  -d '{"cancelAtPeriodEnd": true}'
```

## 📋 API Endpoints Created

### 1. Create Subscription

- **POST** `/api/subscription/create`
- Creates a new subscription for the authenticated user
- Returns subscription details with payment URL

### 2. Get Subscription Status

- **GET** `/api/subscription/status`
- Returns user's current subscription status and details

### 3. Cancel Subscription

- **POST** `/api/subscription/cancel`
- Cancels the user's active subscription
- Body: `{"cancelAtPeriodEnd": boolean}`

### 4. Webhook Handler

- **POST** `/api/webhook/razorpay`
- Handles Razorpay webhook events
- Automatically updates subscription status

## 🔧 Database Models

### User Model Updates

- Added `subscriptionPlan` field (FREE/PAID)
- Added `subscriptionId` reference
- Added `razorpayCustomerId` field
- Added `PREMIUM_USER` permission

### Subscription Model

- Tracks all subscription data
- Links to Razorpay subscription
- Stores billing periods and status
- Maintains subscription history

## 🛡️ Permission System

### User Permissions

- `USER` - Basic user (default)
- `PREMIUM_USER` - Paid subscriber
- `ADMIN` - Administrator

### Checking Permissions in Code

```typescript
import {
  checkUserSubscription,
  requirePremiumAccess,
} from "@/lib/subscription";

// Check if user has premium access
const { hasAccess, plan } = await checkUserSubscription(userEmail);

// Require premium access (throws error if not)
const { user, subscription } = await requirePremiumAccess(userEmail);
```

## 🔄 Subscription Flow

1. **User clicks subscribe** → API creates Razorpay subscription
2. **User pays** → Razorpay sends webhook → Status updated to 'active'
3. **Monthly charges** → Razorpay sends webhook → Period updated
4. **User cancels** → API cancels in Razorpay → Status updated
5. **Subscription expires** → Webhook → User downgraded to FREE

## 🚨 Important Notes

1. **Test Mode**: Use Razorpay test credentials during development
2. **Webhook Security**: Always verify webhook signatures
3. **Error Handling**: Implement proper error handling for failed payments
4. **Grace Period**: Consider adding grace period for failed payments
5. **Prorations**: Handle mid-cycle subscription changes if needed

## 🔍 Monitoring

- Check Razorpay Dashboard for payment status
- Monitor webhook delivery in Razorpay Dashboard
- Review application logs for subscription events
- Set up alerts for failed payments

## 💡 Next Steps

1. Create frontend components for subscription management
2. Add email notifications for subscription events
3. Implement subscription upgrade/downgrade flows
4. Add subscription analytics and reporting
5. Consider adding multiple subscription tiers

## 🆘 Troubleshooting

- **Webhook not received**: Check webhook URL and SSL certificate
- **Payment failed**: Verify plan configuration and customer details
- **Subscription not activated**: Check webhook event handling
- **User not upgraded**: Verify permission update logic
