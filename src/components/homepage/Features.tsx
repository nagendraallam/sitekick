import React from "react";

const Features = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-base-100 to-base-200/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
            Everything You Need to{" "}
            <span className="relative">
              <span className="text-primary">Convert</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 rounded-lg -rotate-1"></div>
            </span>{" "}
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI-powered platform provides all the tools you
            need to transform your website into a conversion machine.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1: AI Chatbot Development */}
          <div className="group relative bg-gradient-to-br from-base-100 to-base-200/50 rounded-3xl p-8 border border-primary/30 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm">
            {/* Card Header */}
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-primary"
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
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-3">
                Custom AI Chatbots
              </h3>
              <p className="text-base-content/70 leading-relaxed">
                Intelligent chatbots tailored to your business that handle lead
                qualification, answer FAQs, and manage bookings automatically.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Lead qualification & scoring
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Automated FAQ responses
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Smart booking system
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Custom conversation flows
                </span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-6 border-t border-base-300/50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  24/7 Automation
                </span>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Multi-channel Integration */}
          <div className="group relative bg-gradient-to-br from-base-100 to-base-200/50 rounded-3xl p-8 border border-secondary/30 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm">
            {/* Card Header */}
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2M7 4h10M9 9h6m-6 4h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-3">
                Multi-Channel Integration
              </h3>
              <p className="text-base-content/70 leading-relaxed">
                Connect with customers wherever they are with seamless
                integration across web, WhatsApp, Facebook Messenger, and more.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Website chat widget
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  WhatsApp Business integration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Facebook Messenger support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Unified conversation management
                </span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-6 border-t border-base-300/50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-secondary">
                  Omnichannel Ready
                </span>
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Analytics & Support */}
          <div className="group relative bg-gradient-to-br from-base-100 to-base-200/50 rounded-3xl p-8 border border-accent/30 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm">
            {/* Card Header */}
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-3">
                Analytics & Live Support
              </h3>
              <p className="text-base-content/70 leading-relaxed">
                Advanced analytics to optimize performance combined with
                seamless live chat support for complex customer needs.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Real-time conversation analytics
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Live chat handover system
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Performance optimization
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-base-content/80">
                  Customer support automation
                </span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-6 border-t border-base-300/50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-accent">
                  Data-Driven Results
                </span>
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 border border-base-300/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-base-content mb-4">
              Ready to Transform Your Website?
            </h3>
            <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already using SiteKick to increase
              their conversion rates and automate customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group btn btn-primary btn-lg text-black rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
