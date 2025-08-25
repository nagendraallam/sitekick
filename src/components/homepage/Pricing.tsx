import React from "react";

const Pricing = () => {
  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-b from-base-200/30 to-base-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-4 w-96 h-96 bg-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-4 w-80 h-80 bg-secondary/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 lg:mb-6 tracking-tight">
            One Plan,{" "}
            <span className="relative">
              <span className="text-secondary">Unlimited</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary/20 rounded-lg rotate-1"></div>
            </span>{" "}
            Possibilities
          </h2>
          <p className="text-lg lg:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            We believe in keeping things simple. One powerful plan that includes
            everything you need to transform your website into a conversion
            machine.
          </p>
        </div>

        {/* Two Column Layout: Pricing Card & FAQ */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Left Column: Main Pricing Card */}
          <div className="lg:order-1">
            <div className="group relative bg-gradient-to-br from-base-100 to-base-200/50 rounded-2xl lg:rounded-3xl p-4 lg:p-6 border-2 border-secondary/30 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm">
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-secondary text-white px-4 py-1.5 rounded-full text-xs lg:text-sm font-bold shadow-lg">
                  ⭐ Most Popular
                </div>
              </div>

              {/* Plan Header */}
              <div className="text-center mb-4 lg:mb-6 pt-3">
                <h3 className="text-xl lg:text-2xl font-bold text-base-content mb-1.5 lg:mb-2">
                  SiteKick Pro
                </h3>
                <p className="text-sm lg:text-base text-base-content/60 mb-3 lg:mb-4">
                  Everything you need to boost conversions
                </p>

                {/* Price Display */}
                <div className="mb-3 lg:mb-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl lg:text-4xl font-black text-secondary">
                      €99
                    </span>
                    <span className="text-base lg:text-lg text-base-content/60">
                      /month
                    </span>
                  </div>
                  <p className="text-xs lg:text-sm text-base-content/50 mt-1.5">
                    Billed monthly • Cancel anytime
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 lg:space-y-3 mb-4 lg:mb-6">
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
                  <span className="text-sm lg:text-base text-base-content">
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
                  <span className="text-sm lg:text-base text-base-content">
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
                  <span className="text-sm lg:text-base text-base-content">
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
                  <span className="text-sm lg:text-base text-base-content">
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
                  <span className="text-sm lg:text-base text-base-content">
                    Lead Qualification & Booking System
                  </span>
                </div>

                {/* AI Query Limit */}
                <div className="bg-primary/5 rounded-lg lg:rounded-xl p-2.5 lg:p-3 border border-primary/20 mt-3 lg:mt-4">
                  <div className="flex items-center gap-3 mb-1.5">
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
                    <span className="text-sm lg:text-base font-semibold text-base-content">
                      10,000 AI Chat Queries/month
                    </span>
                  </div>
                  <p className="text-xs lg:text-sm text-base-content/60 ml-8">
                    Additional queries: €0.01 per query after limit
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group rounded-md w-full btn btn-secondary btn-md lg:btn-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-3 lg:mb-4">
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

              <p className="text-center text-xs lg:text-sm text-base-content/50">
                Just 2 lines of code - setup in 30 seconds!
              </p>
            </div>
          </div>

          {/* Right Column: FAQ Section */}
          <div className="lg:order-2">
            <h3 className="text-xl lg:text-2xl font-bold text-base-content mb-4 lg:mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3 lg:space-y-4">
              <div className="bg-base-100/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300/50">
                <h4 className="text-sm lg:text-base font-semibold text-base-content mb-1.5 lg:mb-2">
                  What happens if I exceed the 10,000 query limit?
                </h4>
                <p className="text-xs lg:text-sm text-base-content/70">
                  No worries! Your chatbot keeps working. We&apos;ll simply
                  charge €0.01 per additional query, billed at the end of your
                  monthly cycle. You&apos;ll get notifications when approaching
                  your limit.
                </p>
              </div>

              <div className="bg-base-100/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300/50">
                <h4 className="text-sm lg:text-base font-semibold text-base-content mb-1.5 lg:mb-2">
                  Can I cancel anytime?
                </h4>
                <p className="text-xs lg:text-sm text-base-content/70">
                  Absolutely! Cancel your subscription anytime with no questions
                  asked. Your chatbot will remain active until the end of your
                  current billing period.
                </p>
              </div>

              <div className="bg-base-100/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-base-300/50">
                <h4 className="text-sm lg:text-base font-semibold text-base-content mb-1.5 lg:mb-2">
                  How long does setup take?
                </h4>
                <p className="text-xs lg:text-sm text-base-content/70">
                  Most customers are up and running within 30 seconds! Just copy
                  and paste 2 lines of code into your website. Our AI handles
                  the heavy lifting, and our team provides white-glove
                  onboarding to ensure everything works perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Plan Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-base-300/50 backdrop-blur-sm">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-accent/10 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <svg
                className="w-6 h-6 lg:w-7 lg:h-7 text-accent"
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
            <h3 className="text-lg lg:text-xl font-bold text-base-content mb-2">
              Need Something Custom?
            </h3>
            <p className="text-sm lg:text-base text-base-content/70 mb-3 lg:mb-4 leading-relaxed">
              Enterprise solutions, custom integrations, or higher query limits?
              Let&apos;s build the perfect plan for your business needs.
            </p>
            <button className="btn btn-outline btn-accent btn-md lg:btn-lg rounded-md hover:scale-105 transition-all duration-300">
              <span>Let&apos;s Talk Custom Plans</span>
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

        {/* Money Back Guarantee */}
        <div className="text-center mt-6 lg:mt-8">
          <div className="inline-flex items-center gap-2 lg:gap-3 bg-success/10 text-success px-4 lg:px-6 py-2 lg:py-3 rounded-full border border-success/20">
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
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
            <span className="text-sm lg:text-base font-semibold">
              30-day money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
