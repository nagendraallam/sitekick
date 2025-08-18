"use client";

import SubscriptionButton from "./SubscriptionButton";

interface GetStartedViewProps {
  onCreateProject: () => void;
}

export default function GetStartedView({
  onCreateProject,
}: GetStartedViewProps) {
  const features = [
    {
      icon: "🚀",
      title: "Quick Setup",
      description: "Get your AI chatbot running in under 5 minutes",
    },
    {
      icon: "🎨",
      title: "Custom Branding",
      description:
        "Match your website's design with custom colors and positioning",
    },
    {
      icon: "💬",
      title: "Smart Conversations",
      description: "AI-powered responses that understand your business",
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Track conversations and improve customer experience",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Create Project",
      description: "Tell us about your website and AI assistant preferences",
    },
    {
      number: "2",
      title: "Get Your Code",
      description: "Copy the embed code generated for your project",
    },
    {
      number: "3",
      title: "Add to Website",
      description: "Paste the code before the closing </body> tag",
    },
    {
      number: "4",
      title: "Go Live",
      description: "Your AI chatbot is now live on your website!",
    },
  ];

  return (
    <div className="min-h-[80vh] mt-10 mb-10 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="text-8xl mb-6">🤖</div>
          <h1 className="text-4xl md:text-5xl font-bold text-base-content">
            Welcome to SiteKick AI
          </h1>
          <p className="text-xl text-base-content/60 max-w-2xl mx-auto">
            Create intelligent AI chatbots for your website in minutes. No
            coding required, just copy and paste.
          </p>
          <button
            onClick={onCreateProject}
            className="btn btn-primary btn-lg gap-3"
          >
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Your First Chatbot
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="card-title justify-center text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-base-content/60">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How it Works */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-base-content">
            Set up your AI chatbot in 4 easy steps
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex justify-start items-start gap-6"
                  >
                    {/* Step number circle */}
                    <div className="relative z-10 w-12 h-12 mt-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pt-2">
                      <h3 className="font-semibold text-xl mb-2 text-base-content">
                        {step.title}
                      </h3>
                      <p className="text-base-content/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connecting arrow for mobile */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden absolute left-6 top-12 flex flex-col items-center">
                        <div className="w-0.5 h-8 bg-primary/30"></div>
                        <svg
                          className="w-3 h-3 text-primary/60"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-base-200 rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-base-content">
              Ready to Get Started?
            </h3>
            <p className="text-base-content/60">
              Join thousands of websites using AI chatbots to improve customer
              experience.
            </p>
            <button onClick={onCreateProject} className="btn btn-primary btn-lg">
              Create Your First Project
            </button>
          </div>
          
          <div>
            <SubscriptionButton />
          </div>
        </div>
      </div>
    </div>
  );
}
