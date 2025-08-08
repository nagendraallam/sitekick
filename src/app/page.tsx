"use client";

import {
  FaComments,
  FaStar,
  FaChartBar,
  FaCoffee,
  FaWrench,
  FaHome,
  FaCar,
  FaStore,
  FaUtensils,
} from "react-icons/fa";

// Hero Section Component
function Hero() {
  return (
    <div className="hero min-h-screen bg-gray-50">
      <div className="hero-content text-center">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              🚀 Trusted by 500+ Irish Businesses
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
            Stop Losing Customers.
            <br />
            <span className="text-blue-600">Start Winning Them Back.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your small business with{" "}
            <span className="font-semibold text-blue-600">
              AI-powered tools
            </span>{" "}
            that work 24/7. Get an intelligent chatbot, automatic 5-star review
            generation, and crystal-clear analytics.{" "}
            <span className="font-semibold">No coding. No complexity.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              🎯 Start Your 14-Day Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              ▶️ Watch 2-Minute Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Irish support team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Proof Component
function SocialProof() {
  const businessIcons = [
    { icon: FaCoffee, label: "Cafes" },
    { icon: FaWrench, label: "Services" },
    { icon: FaHome, label: "Real Estate" },
    { icon: FaCar, label: "Auto" },
    { icon: FaStore, label: "Retail" },
    { icon: FaUtensils, label: "Restaurants" },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-gray-500 mb-8 tracking-wider">
          TRUSTED BY LOCAL BUSINESSES ACROSS IRELAND
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {businessIcons.map((business, index) => (
            <div
              key={index}
              className="flex flex-col items-center opacity-60 hover:opacity-80 transition-opacity"
            >
              <business.icon className="text-3xl md:text-4xl text-gray-400 mb-2" />
              <span className="text-xs text-gray-500">{business.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Features Section Component
function Features() {
  const features = [
    {
      icon: FaComments,
      title: "AI-Powered Chatbot",
      description:
        "Engage visitors 24/7. Our AI answers questions, captures leads, and books appointments, so you never miss an opportunity.",
      highlight: "24/7 Availability",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaStar,
      title: "5-Star Review Booster",
      description:
        "Turn happy customers into 5-star reviews on Google with a single scan. Privately handle negative feedback before it goes public.",
      highlight: "Automatic Reviews",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaChartBar,
      title: "Instant Insight Reports",
      description:
        "Ditch complex analytics. Get a simple, one-page report every week showing you exactly how your website is performing.",
      highlight: "Weekly Reports",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            ✨ Powerful Features
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Everything You Need to{" "}
            <span className="text-blue-600">Grow Online</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our all-in-one platform combines the power of AI with simplicity
            your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="text-3xl text-blue-600" />
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  {feature.highlight}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            See All Features
          </button>
        </div>
      </div>
    </div>
  );
}

// Pricing Section Component
function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "€39",
      period: "month",
      features: ["AI Chatbot", "500 Chats/month", "Standard Support"],
      buttonClass: "btn",
      popular: false,
    },
    {
      name: "Growth",
      price: "€79",
      period: "month",
      features: [
        "Everything in Basic",
        "AI Review Booster",
        "2500 Chats/month",
        "Priority Support",
      ],
      buttonClass: "btn btn-primary",
      popular: true,
    },
    {
      name: "Pro",
      price: "€99",
      period: "month",
      features: [
        "Everything in Growth",
        "Instant Analytics",
        "Unlimited Chats",
        "Dedicated Setup",
      ],
      buttonClass: "btn",
      popular: false,
    },
  ];

  return (
    <div id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            💰 Simple Pricing
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Simple Pricing for{" "}
            <span className="text-blue-600">Every Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a
            14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 relative ${
                plan.popular ? "border-blue-500" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div>
      <Hero />
      <SocialProof />
      <Features />
      <Pricing />
    </div>
  );
}
