"use client";

import React, { useState } from "react";
import ChatWidget from "@/components/ChatWidget";
import { IChatConfig } from "@/models/ChatConfig";
import { getPresetConfigs } from "@/lib/chatConfig";

export default function ChatDemoPage() {
  const [config, setConfig] = useState<Partial<IChatConfig>>({
    aiName: "Luna",
    aiRole: "Your AI Growth Assistant",
    primaryColor: "#3B82F6",
    accentColor: "#1D4ED8",
    welcomeMessage:
      "Hi there! I'm Luna, your AI assistant. How can I help you today?",
    initialPopupMessage:
      "👋 Hey there! I'm Luna, ready to help you grow your business!",
    popupDelay: 3000,
    position: "bottom-right",
    size: "medium",
    chatStyle: "modern",
    isEnabled: true,
  });

  const presets = getPresetConfigs();

  const handleConfigChange = (
    key: keyof IChatConfig,
    value: string | number | boolean
  ) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const applyPreset = (presetName: keyof typeof presets) => {
    const preset = presets[presetName];
    setConfig((prev) => ({ ...prev, ...preset }));
  };

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            Chat Widget Customizer
          </h1>
          <p className="text-lg text-base-content/70">
            Customize your AI chat assistant and see it in action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Configuration</h2>

              {/* Presets */}
              <div className="mb-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    Quick Presets
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(presets).map((presetName) => (
                    <button
                      key={presetName}
                      className="btn btn-sm btn-outline"
                      onClick={() =>
                        applyPreset(presetName as keyof typeof presets)
                      }
                    >
                      {presetName.charAt(0).toUpperCase() + presetName.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Configuration */}
              <div className="space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text">AI Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={config.aiName || ""}
                    onChange={(e) =>
                      handleConfigChange("aiName", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">AI Role</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={config.aiRole || ""}
                    onChange={(e) =>
                      handleConfigChange("aiRole", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Primary Color</span>
                  </label>
                  <input
                    type="color"
                    className="input input-bordered w-full h-12"
                    value={config.primaryColor || "#3B82F6"}
                    onChange={(e) =>
                      handleConfigChange("primaryColor", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Position</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    value={config.position || "bottom-right"}
                    onChange={(e) =>
                      handleConfigChange("position", e.target.value)
                    }
                  >
                    <option value="bottom-right">Bottom Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="top-left">Top Left</option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Size</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    value={config.size || "medium"}
                    onChange={(e) => handleConfigChange("size", e.target.value)}
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Welcome Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    rows={3}
                    value={config.welcomeMessage || ""}
                    onChange={(e) =>
                      handleConfigChange("welcomeMessage", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Initial Popup Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    rows={2}
                    value={config.initialPopupMessage || ""}
                    onChange={(e) =>
                      handleConfigChange("initialPopupMessage", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Popup Delay (seconds)</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    min="1"
                    max="30"
                    value={(config.popupDelay || 3000) / 1000}
                    onChange={(e) =>
                      handleConfigChange(
                        "popupDelay",
                        parseInt(e.target.value) * 1000
                      )
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Enable Chat Widget</span>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      checked={config.isEnabled || false}
                      onChange={(e) =>
                        handleConfigChange("isEnabled", e.target.checked)
                      }
                    />
                  </label>
                </div>
              </div>

              {/* Export Configuration */}
              <div className="mt-8">
                <label className="label">
                  <span className="label-text font-semibold">
                    Configuration JSON
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full font-mono text-sm"
                  rows={8}
                  value={JSON.stringify(config, null, 2)}
                  readOnly
                />
                <div className="mt-2">
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        JSON.stringify(config, null, 2)
                      );
                    }}
                  >
                    Copy Configuration
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Live Preview</h2>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg h-96 border-2 border-dashed border-base-300">
                <div className="absolute inset-4 bg-white rounded shadow-sm flex items-center justify-center">
                  <div className="text-center text-base-content/50">
                    <h3 className="text-lg font-semibold mb-2">
                      Your Website Preview
                    </h3>
                    <p className="text-sm">
                      The chat widget will appear here based on your
                      configuration
                    </p>
                  </div>
                </div>
                <ChatWidget config={config} />
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-3">Integration Instructions</h3>
                <div className="mockup-code text-sm">
                  <pre data-prefix="1">
                    <code>
                      import ChatWidget from
                      &apos;@/components/ChatWidget&apos;;
                    </code>
                  </pre>
                  <pre data-prefix="2">
                    <code></code>
                  </pre>
                  <pre data-prefix="3">
                    <code>
                      &lt;ChatWidget config=&#123;yourConfig&#125; /&gt;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎨</div>
                  <div>
                    <h3 className="font-semibold">Fully Customizable</h3>
                    <p className="text-sm text-base-content/70">
                      Customize colors, position, size, and messages to match
                      your brand
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h3 className="font-semibold">Engaging Interactions</h3>
                    <p className="text-sm text-base-content/70">
                      Smart popup messages and auto-triggers to engage visitors
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-semibold">Responsive Design</h3>
                    <p className="text-sm text-base-content/70">
                      Works perfectly on desktop and mobile devices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🔧</div>
                  <div>
                    <h3 className="font-semibold">Plug & Play</h3>
                    <p className="text-sm text-base-content/70">
                      Easy integration with configuration-based setup
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎭</div>
                  <div>
                    <h3 className="font-semibold">AI Personas</h3>
                    <p className="text-sm text-base-content/70">
                      Create unique AI personalities for different use cases
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💾</div>
                  <div>
                    <h3 className="font-semibold">MongoDB Storage</h3>
                    <p className="text-sm text-base-content/70">
                      Store and manage configurations in MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
