import React from "react";

const Pricing = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-base-200/30 to-base-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-4 w-96 h-96 bg-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-4 w-80 h-80 bg-secondary/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
            One Plan,{" "}
            <span className="relative">
              <span className="text-secondary">Unlimited</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary/20 rounded-lg rotate-1"></div>
            </span>{" "}
            Possibilities
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            We believe in keeping things simple. One powerful plan that includes
            everything you need to transform your website into a conversion
            machine.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="group relative bg-gradient-to-br from-base-100 to-base-200/50 rounded-3xl p-10 border-2 border-secondary/30 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ Most Popular
              </div>
            </div>

            {/* Plan Header */}
            <div className="text-center mb-8 pt-4">
              <h3 className="text-3xl font-bold text-base-content mb-2">
                SiteKick Pro
              </h3>
              <p className="text-base-content/60 mb-6">
                Everything you need to boost conversions
              </p>

              {/* Price Display */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-black text-secondary">
                    €99
                  </span>
                  <span className="text-xl text-base-content/60">/month</span>
                </div>
                <p className="text-sm text-base-content/50 mt-2">
                  Billed monthly • Cancel anytime
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base-content">
                  Custom AI Chatbot Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base-content">
                  Multi-channel Integration (Web, WhatsApp, FB)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base-content">
                  Live Chat Support Integration
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base-content">
                  Real-time Analytics & Optimization
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base-content">
                  Lead Qualification & Booking System
                </span>
              </div>

              {/* AI Query Limit */}
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-base-content">
                    10,000 AI Chat Queries/month
                  </span>
                </div>
                <p className="text-sm text-base-content/60 ml-8">
                  Additional queries: €0.01 per query after limit
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group rounded-md w-full btn btn-secondary btn-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4 ">
              <span>Join SiteKick</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <p className="text-center text-sm text-base-content/50">
              Setup in less than 1 minute
            </p>
          </div>
        </div>

        {/* Custom Plan Section */}
        <div className="text-center mb-16">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 border border-base-300/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-3">
              Need Something Custom?
            </h3>
            <p className="text-base-content/70 mb-6 leading-relaxed">
              Enterprise solutions, custom integrations, or higher query limits?
              Let's build the perfect plan for your business needs.
            </p>
            <button className="btn btn-outline btn-accent btn-lg rounded-md hover:scale-105 transition-all duration-300">
              <span>Let's Talk Custom Plans</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-base-content mb-12">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            <div className="bg-base-100/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300/50">
              <h4 className="font-semibold text-base-content mb-2">
                What happens if I exceed the 10,000 query limit?
              </h4>
              <p className="text-base-content/70">
                No worries! Your chatbot keeps working. We'll simply charge
                €0.01 per additional query, billed at the end of your monthly
                cycle. You'll get notifications when approaching your limit.
              </p>
            </div>

            <div className="bg-base-100/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300/50">
              <h4 className="font-semibold text-base-content mb-2">
                Can I cancel anytime?
              </h4>
              <p className="text-base-content/70">
                Absolutely! Cancel your subscription anytime with no questions
                asked. Your chatbot will remain active until the end of your
                current billing period.
              </p>
            </div>

            <div className="bg-base-100/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300/50">
              <h4 className="font-semibold text-base-content mb-2">
                How long does setup take?
              </h4>
              <p className="text-base-content/70">
                Most customers are up and running within 5 minutes! Our AI
                handles the heavy lifting, and our team provides white-glove
                onboarding to ensure everything works perfectly.
              </p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-success/10 text-success px-6 py-3 rounded-full border border-success/20">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="font-semibold">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
