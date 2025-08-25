import React from "react";

const EasyIntegration = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-base-100 to-base-200/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-6 w-80 h-80 bg-success/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-6 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20 mb-6">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-sm font-semibold">Lightning Fast Setup</span>
          </div> */}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 tracking-tight">
            Add to Your Site in{" "}
            <span className="relative">
              <span className="text-success">Just 2 Lines</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-success/20 rounded-lg rotate-1"></div>
            </span>{" "}
            of Code
          </h2>

          <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            No complex setup, no developer headaches. Simply copy, paste, and
            watch your conversions soar. It&apos;s that easy to transform your
            website into a conversion machine.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-base-content mb-2">
                    30 Second Installation
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    Copy and paste 2 lines of code into your website&apos;s
                    HTML. No plugins, no complicated setup, no developer
                    required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-base-content mb-2">
                    Works on Any Website
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    WordPress, Shopify, Wix, custom HTML, React, Vue or any
                    other website that renders HTML.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-base-content mb-2">
                    Instantly Active
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    The moment you add the code, your AI chatbot is live and
                    ready to engage visitors and capture leads.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            {/* <div className="bg-gradient-to-r from-base-100/50 to-base-200/30 rounded-2xl p-6 border border-base-300/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-primary rounded-full border-2 border-base-100 flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                  <div className="w-10 h-10 bg-secondary rounded-full border-2 border-base-100 flex items-center justify-center text-white text-sm font-bold">
                    B
                  </div>
                  <div className="w-10 h-10 bg-accent rounded-full border-2 border-base-100 flex items-center justify-center text-white text-sm font-bold">
                    C
                  </div>
                  <div className="w-10 h-10 bg-success rounded-full border-2 border-base-100 flex items-center justify-center text-white text-sm font-bold">
                    +
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-base-content">
                    200+ websites already using SiteKick
                  </p>
                  <p className="text-sm text-base-content/60">
                    Average setup time: 47 seconds
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right side - Code Example */}
          <div className="relative">
            {/* Code editor mockup */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              {/* Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4 h-6 bg-gray-700 rounded-md flex items-center px-3">
                  <span className="text-xs text-gray-400">index.html</span>
                </div>
              </div>

              {/* Code content */}
              <div className="font-mono text-sm">
                <div className="text-gray-500 mb-2">
                  <span className="text-gray-600">&lt;!--</span> Add before
                  closing &lt;/body&gt; tag{" "}
                  <span className="text-gray-600">--&gt;</span>
                </div>

                <div className="space-y-1">
                  {/* Line 1 */}
                  <div className="flex">
                    <span className="text-gray-600 mr-4 select-none">1</span>
                    <div className="text-green-400">
                      &lt;<span className="text-blue-400">script</span>{" "}
                      <span className="text-yellow-400">src</span>=
                      <span className="text-orange-400">
                        &quot;https://cdn.sitekick.app/embed.js&quot;
                      </span>
                      &gt;&lt;/<span className="text-blue-400">script</span>&gt;
                    </div>
                  </div>

                  {/* Line 2 */}
                  <div className="flex">
                    <span className="text-gray-600 mr-4 select-none">2</span>
                    <div className="text-green-400">
                      &lt;<span className="text-blue-400">script</span>&gt;
                      <span className="text-yellow-400">SiteKick</span>.
                      <span className="text-blue-400">init</span>(
                      <span className="text-orange-400">
                        &apos;your-project-id&apos;
                      </span>
                      );&lt;/<span className="text-blue-400">script</span>&gt;
                    </div>
                  </div>
                </div>

                <div className="text-gray-500 mt-4 text-xs">
                  <span className="text-gray-600">&lt;!--</span> That&apos;s it!
                  Your AI chatbot is now live{" "}
                  <span className="text-gray-600">--&gt;</span>
                </div>
              </div>
            </div>

            {/* Floating success indicator */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              ✅ 2 lines only!
            </div>

            {/* Floating performance indicator */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              📈 +47% conversions
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-success/5 via-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-base-300/50 backdrop-blur-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
              Ready to Add SiteKick to Your Site?
            </h3>
            <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of websites already using our 2-line integration to
              boost conversions and automate customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group btn btn-success btn-lg rounded-md text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span>Get Your 2-Line Code</span>
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
              <button className="btn btn-outline btn-primary btn-lg rounded-md hover:scale-105 transition-all duration-300">
                <span>See Live Demo</span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EasyIntegration;
