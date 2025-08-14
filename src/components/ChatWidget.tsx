"use client";

import React, { useState, useEffect, useRef } from "react";
import { IChatConfig } from "@/models/ChatConfig";
import { FiMessageCircle } from "react-icons/fi";

export interface ChatWidgetProps {
  config?: Partial<IChatConfig>;
  className?: string;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

const DEFAULT_CONFIG: IChatConfig = {
  websiteId: "sitekick-default",
  aiName: "Luna",
  aiRole: "Your AI Growth Assistant",
  primaryColor: "#3B82F6",
  accentColor: "#1D4ED8",
  welcomeMessage:
    "Hi there! I'm Luna, your AI assistant here at SiteKick. I'm here to help you grow your business with our AI-powered tools. What would you like to know about?",
  initialPopupMessage:
    "👋 Hey there! I'm Luna, and I'm excited to help you supercharge your business growth!",
  popupDelay: 4000,
  isEnabled: true,
  customGreetings: [
    "Welcome to SiteKick! Ready to boost your business? 🚀",
    "Hi! I'm Luna, your growth companion. How can I help you succeed today?",
    "Hey there! Looking to take your business to the next level? I'm here to help! ✨",
  ],
  chatStyle: "modern",
  position: "bottom-right",
  size: "medium",
  triggerMessages: [
    {
      message: "Need help getting started? I'm here to guide you! 💡",
      delay: 10000,
      showAfter: 5,
    },
    {
      message:
        "Curious about our AI chatbots? Let me show you what they can do! 🤖",
      delay: 20000,
      showAfter: 15,
    },
  ],
  branding: {
    showPoweredBy: true,
  },
  autoMessages: {
    enabled: true,
    messages: [
      {
        message:
          "Still browsing? I'd love to help you find what you're looking for! 😊",
        triggerAfter: 30,
        condition: "idle",
      },
      {
        message:
          "Want to see how our tools can boost your reviews? Let's chat! ⭐",
        triggerAfter: 45,
        condition: "time",
      },
    ],
  },
  createdAt: new Date(),
  updatedAt: new Date(),
} as IChatConfig;

export default function ChatWidget({
  config,
  className = "",
}: ChatWidgetProps) {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show initial popup after delay
  useEffect(() => {
    if (!finalConfig.isEnabled) return;

    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowPopup(true);
      }
    }, finalConfig.popupDelay);

    return () => clearTimeout(timer);
  }, [finalConfig.isEnabled, finalConfig.popupDelay, hasInteracted]);

  // Auto messages based on trigger conditions
  useEffect(() => {
    if (!finalConfig.autoMessages.enabled || hasInteracted) return;

    finalConfig.autoMessages.messages.forEach((autoMsg) => {
      const timer = setTimeout(() => {
        if (!hasInteracted && !isOpen) {
          setShowPopup(true);
          // Update popup message temporarily
          setTimeout(() => {
            setShowPopup(false);
            setTimeout(() => {
              setShowPopup(true);
            }, 1000);
          }, 3000);
        }
      }, autoMsg.triggerAfter * 1000);

      timeoutRefs.current.push(timer);
    });

    return () => {
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
    };
  }, [finalConfig.autoMessages, hasInteracted, isOpen]);

  const handlePopupClick = () => {
    setShowPopup(false);
    setIsOpen(true);
    setHasInteracted(true);

    // Add welcome message
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: finalConfig.welcomeMessage,
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    simulateTyping();
    setTimeout(() => {
      const responses = [
        "That's a great question! Our AI tools are designed to help businesses like yours grow exponentially. Would you like me to show you a demo?",
        "I'd be happy to help! SiteKick offers AI chatbots, review boosters, and analytics that can transform your business. What interests you most?",
        "Absolutely! Let me connect you with one of our specialists who can give you a personalized walkthrough of our platform.",
        "I love your enthusiasm! Our AI solutions have helped thousands of businesses increase their revenue. Shall we start with a quick assessment?",
        "Perfect timing! We actually have a special offer running right now. Would you like to hear about our 14-day free trial?",
      ];

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
    }, 1500 + Math.random() * 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  const sizeClasses = {
    small: "w-80 h-96",
    medium: "w-96 h-[32rem]",
    large: "w-[28rem] h-[36rem]",
  };

  if (!finalConfig.isEnabled) return null;

  return (
    <div
      className={`fixed z-50 flex  justify-end items-end flex-col ${
        positionClasses[finalConfig.position]
      } ${className}`}
    >
      {/* Popup Message */}
      {showPopup && !isOpen && (
        <div className="mb-4 animate-bounce">
          <div
            className="bg-white shadow-lg rounded-lg p-4 max-w-xs cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-base-300"
            onClick={handlePopupClick}
          >
            <div className="flex items-start space-x-3">
              <div className="avatar">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br flex text-center text-white pt-1 justify-center items-center from-blue-400 to-purple-500">
                  {finalConfig.aiName[0].toUpperCase()}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 font-medium">
                  {finalConfig.aiName}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {finalConfig.initialPopupMessage}
                </p>
              </div>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPopup(false);
                }}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={handlePopupClick}
          className="btn btn-circle btn-lg bg-gradient-to-br from-blue-500 to-purple-600 border-none text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: finalConfig.primaryColor }}
        >
          <FiMessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`card bg-transparent shadow-2xl ${
            sizeClasses[finalConfig.size]
          } flex flex-col animate-in slide-in-from-bottom duration-300`}
        >
          {/* Header */}
          <div className="card-body p-0">
            <div
              className="flex items-center justify-between p-4 rounded-t-2xl text-white"
              style={{ backgroundColor: finalConfig.primaryColor }}
            >
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <span className="text-white font-bold">
                      {finalConfig.aiName[0].toUpperCase()}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{finalConfig.aiName}</h3>
                  <p className="text-sm opacity-90">{finalConfig.aiRole}</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="btn btn-ghost btn-sm text-white hover:bg-white hover:bg-opacity-20"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-white space-y-4 max-h-80">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chat ${
                    message.isUser ? "chat-end" : "chat-start"
                  }`}
                >
                  <div className="chat-image avatar">
                    <div className="w-8 rounded-full">
                      {message.isUser ? (
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 text-xs">You</span>
                        </div>
                      ) : (
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: finalConfig.primaryColor }}
                        >
                          {finalConfig.aiName[0]}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="chat-header text-xs opacity-50">
                    {message.isUser ? "You" : finalConfig.aiName}
                  </div>
                  <div
                    className={`chat-bubble ${
                      message.isUser
                        ? "chat-bubble-primary"
                        : "chat-bubble-secondary"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: finalConfig.primaryColor }}
                    >
                      {finalConfig.aiName[0]}
                    </div>
                  </div>
                  <div className="chat-bubble chat-bubble-secondary">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-base-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="input input-bordered flex-1 input-sm"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  onClick={handleSendMessage}
                  className="btn btn-primary btn-sm"
                  style={{ backgroundColor: finalConfig.primaryColor }}
                  disabled={!inputValue.trim()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
              {finalConfig.branding.showPoweredBy && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by{" "}
                  {finalConfig.branding.customBranding || "SiteKick AI"}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
