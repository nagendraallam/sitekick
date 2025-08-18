"use client";

import { useSubscription } from "@/hooks/useSubscription";
import { ReactNode } from "react";

interface PremiumGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
  showUpgradePrompt?: boolean;
}

export default function PremiumGuard({ 
  children, 
  fallback, 
  showUpgradePrompt = true 
}: PremiumGuardProps) {
  const { isPremium, isAdmin, loading } = useSubscription();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <span className="loading loading-spinner loading-sm"></span>
      </div>
    );
  }

  // Allow access for premium users and admins
  if (isPremium || isAdmin) {
    return <>{children}</>;
  }

  // Show custom fallback if provided
  if (fallback) {
    return <>{fallback}</>;
  }

  // Show upgrade prompt by default
  if (showUpgradePrompt) {
    return (
      <div className="card bg-gradient-to-r from-warning/10 to-primary/10 border border-warning/20">
        <div className="card-body text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="card-title justify-center text-xl mb-2">
            Premium Feature
          </h3>
          <p className="text-base-content/70 mb-4">
            This feature is available with our Premium plan. Upgrade to unlock unlimited chatbots and advanced features.
          </p>
          <div className="card-actions justify-center">
            <button 
              onClick={() => window.location.href = '/dashboard'}
              className="btn btn-primary"
            >
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Return nothing if no upgrade prompt
  return null;
}
