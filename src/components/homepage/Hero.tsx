import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-base-100 via-base-200/30 to-base-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4  pt-20  pb-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
                Turn{" "}
                <span className="relative">
                  <span className="text-primary">Visitors</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 rounded-lg -rotate-1"></div>
                </span>{" "}
                into{" "}
                <span className="relative">
                  <span className="text-secondary">Customers</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary/20 rounded-lg rotate-1"></div>
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-base-content">
                  INSTANTLY
                </span>
                <div className="text-6xl ">🚀</div>
              </div>
            </div>

            {/* Supporting line */}
            <p className="text-xl leading-relaxed text-base-content/70 max-w-2xl font-medium">
              SiteKick supercharges your website with AI chatbots,
              <br />
              lead capture, and smart conversion tools
              <br />
              <span className="text-primary font-semibold">
                {" "}
                helping you close more deals while you sleep.
              </span>
            </p>

            {/* Three benefits - Enhanced cards */}
            {/* <div className="grid sm:grid-cols-1 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-4 bg-base-100/50 backdrop-blur-sm p-4 rounded-xl border border-base-300/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-base-content">
                    24/7 AI Engagement
                  </h3>
                  <p className="text-sm text-base-content/60">
                    Never miss a visitor with intelligent chat & live support
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-base-100/50 backdrop-blur-sm p-4 rounded-xl border border-base-300/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-base-content">
                    Smart Conversions
                  </h3>
                  <p className="text-sm text-base-content/60">
                    Boost sales with intelligent pop-ups & targeted forms
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-base-100/50 backdrop-blur-sm p-4 rounded-xl border border-base-300/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-base-content">
                    Real-time Insights
                  </h3>
                  <p className="text-sm text-base-content/60">
                    Track performance with advanced analytics dashboard
                  </p>
                </div>
              </div>
            </div> */}

            {/* CTA buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="group btn btn-secondary btn-lg rounded-md text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span>Get your SiteKick</span>
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
              <button className="btn btn-outline rounded-md btn-primary btn-lg hover:scale-105 transition-all duration-300">
                <span>Learn More</span>
              </button>
            </div>

            {/* Social proof */}
            {/* <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-sm text-base-content/60">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-base-100"></div>
                  <div className="w-8 h-8 bg-secondary rounded-full border-2 border-base-100"></div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-base-100"></div>
                </div>
                <span>100+ happy customers</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-base-300"></div>
              <div className="flex items-center gap-1">
                <span className="text-warning">★★★★★</span>
                <span>4.9/5 rating</span>
              </div>
            </div> */}
          </div>

          {/* Right side - Enhanced mockup */}
          <div className="relative">
            {/* Main mockup container */}
            <div className="relative bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 shadow-4xl border border-base-300/50 backdrop-blur-sm">
              {/* Browser-like header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-base-300/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="flex-1 mx-4 h-6 bg-base-300/30 rounded-md flex items-center px-3">
                  <span className="text-xs text-base-content/50">
                    sitekick.app
                  </span>
                </div>
              </div>

              {/* Chat interface mockup */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div className="flex-1 bg-primary/10 rounded-2xl rounded-tl-md p-4">
                    <p className="text-sm text-base-content">
                      Hi! 👋 I noticed you&apos;re browsing our products. Need
                      help finding the perfect solution?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 bg-base-300/50 rounded-2xl rounded-tr-md p-4 max-w-xs ml-12">
                    <p className="text-sm text-base-content">
                      Yes! I&apos;m looking for something to increase my website
                      conversions.
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    U
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div className="flex-1 bg-primary/10 rounded-2xl rounded-tl-md p-4">
                    <p className="text-sm text-base-content">
                      Perfect! Based on your site, I&apos;d recommend our
                      conversion optimization package. It includes smart pop-ups
                      and lead capture forms. Would you like a free demo?
                    </p>
                    <div className="mt-3 flex gap-2">
                      <button className="btn btn-primary btn-xs">
                        Get Free Demo
                      </button>
                      <button className="btn btn-outline btn-xs">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                +47% conversions
              </div>
            </div>

            {/* Background decorative elements for mockup */}
            <div className="absolute -z-10 top-0 right-0 w-44 h-44 bg-primary/50 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-44 h-44 bg-secondary/50 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
