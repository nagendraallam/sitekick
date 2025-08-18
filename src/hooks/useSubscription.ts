"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

interface SubscriptionData {
  user: {
    id: string;
    email: string;
    name: string;
    subscriptionPlan: string;
    permissions: string[];
  };
  subscription: {
    id: string;
    status: string;
    planName: string;
    amount: number;
    currency: string;
    currentPeriodStart: string;
    currentPeriodEnd: string;
    cancelledAt?: string;
    razorpaySubscriptionId: string;
  } | null;
}

export function useSubscription() {
  const { data: session } = useSession();
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubscriptionStatus = async () => {
    if (!session) {
      setLoading(false);
      return;
    }

    try {
      setError(null);
      const response = await fetch("/api/subscription/status");
      
      if (response.ok) {
        const data = await response.json();
        setSubscriptionData(data);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to fetch subscription status");
      }
    } catch (err) {
      console.error("Error fetching subscription status:", err);
      setError("Failed to fetch subscription status");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptionStatus();
  }, [session]);

  const isPremium = subscriptionData?.user?.permissions?.includes("PREMIUM_USER") || false;
  const isAdmin = subscriptionData?.user?.permissions?.includes("ADMIN") || false;
  const hasActiveSubscription = subscriptionData?.subscription?.status === "active";
  const isFree = subscriptionData?.user?.subscriptionPlan === "FREE";

  const refresh = () => {
    setLoading(true);
    fetchSubscriptionStatus();
  };

  return {
    subscriptionData,
    loading,
    error,
    isPremium,
    isAdmin,
    hasActiveSubscription,
    isFree,
    refresh,
  };
}
