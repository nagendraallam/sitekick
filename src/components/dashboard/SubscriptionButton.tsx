"use client";

import { useState } from "react";
import { useSubscription } from "@/hooks/useSubscription";

export default function SubscriptionButton() {
  const { 
    subscriptionData, 
    loading, 
    isPremium, 
    hasActiveSubscription, 
    refresh 
  } = useSubscription();
  const [creating, setCreating] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  const handleSubscribe = async () => {
    setCreating(true);
    try {
      const response = await fetch("/api/subscription/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.subscription?.short_url) {
          // Open Razorpay payment page
          window.open(data.subscription.short_url, "_blank");
          
          // Refresh subscription status after a short delay
          setTimeout(() => {
            refresh();
          }, 2000);
        } else {
          alert("Subscription created! Please check your email for payment instructions.");
          refresh();
        }
      } else {
        const error = await response.json();
        alert(error.error || "Failed to create subscription");
      }
    } catch (error) {
      console.error("Error creating subscription:", error);
      alert("Failed to create subscription. Please try again.");
    } finally {
      setCreating(false);
    }
  };

  const handleCancelSubscription = async () => {
    if (!confirm("Are you sure you want to cancel your subscription? You'll lose access to premium features at the end of your billing period.")) {
      return;
    }

    setCancelling(true);
    try {
      const response = await fetch("/api/subscription/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cancelAtPeriodEnd: true }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        refresh();
      } else {
        const error = await response.json();
        alert(error.error || "Failed to cancel subscription");
      }
    } catch (error) {
      console.error("Error cancelling subscription:", error);
      alert("Failed to cancel subscription. Please try again.");
    } finally {
      setCancelling(false);
    }
  };

  if (loading) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-3">
            <span className="loading loading-spinner loading-sm"></span>
            <span>Loading subscription status...</span>
          </div>
        </div>
      </div>
    );
  }



  if (isPremium && hasActiveSubscription) {
    return (
      <div className="card bg-gradient-to-r from-success/10 to-primary/10 border border-success/20">
        <div className="card-body">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge badge-success gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Premium Active
            </div>
          </div>
          
          <h3 className="card-title text-lg">Premium Plan</h3>
          <p className="text-sm opacity-70">
            {subscriptionData.subscription?.planName} • €{(subscriptionData.subscription?.amount || 0) / 100}/month
          </p>
          
          <div className="text-sm opacity-70 mt-2">
            Next billing: {new Date(subscriptionData.subscription?.currentPeriodEnd || "").toLocaleDateString()}
          </div>

          <div className="card-actions justify-end mt-4">
            <button
              onClick={handleCancelSubscription}
              disabled={cancelling}
              className="btn btn-outline btn-error btn-sm"
            >
              {cancelling ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Cancelling...
                </>
              ) : (
                "Cancel Subscription"
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
      <div className="card-body">
        <h3 className="card-title text-xl">Upgrade to Premium</h3>
        <p className="text-base-content/70 mb-4">
          Unlock unlimited chatbots, advanced analytics, and priority support.
        </p>

        <div className="bg-base-100 rounded-lg p-4 mb-4">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-bold">€99</span>
            <span className="text-base-content/60">/month</span>
          </div>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Unlimited AI chatbots
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Advanced analytics & insights
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Priority customer support
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom branding options
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              API access
            </li>
          </ul>
        </div>

        <div className="card-actions">
          <button
            onClick={handleSubscribe}
            disabled={creating}
            className="btn btn-primary btn-block"
          >
            {creating ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Creating subscription...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Subscribe to Premium
              </>
            )}
          </button>
        </div>

        <div className="text-xs text-center text-base-content/50 mt-3">
          Secure payment powered by Razorpay • Cancel anytime
        </div>
      </div>
    </div>
  );
}
