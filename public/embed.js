(function () {
  "use strict";

  // Check if SiteKick is already initialized
  if (window.SiteKickInitialized) {
    return;
  }
  window.SiteKickInitialized = true;

  // Configuration defaults and validation
  const DEFAULT_CONFIG = {
    projectId: null,
    aiName: "Luna",
    position: "bottom-right",
    isActive: true,
    primaryColor: "#3B82F6",
    accentColor: "#1D4ED8",
    welcomeMessage: "Hi there! How can I help you today?",
    popupMessage: "👋 Hey! Got any questions?",
    popupDelay: 4000,
    size: "medium",
    branding: {
      showPoweredBy: true,
      customBranding: "SiteKick AI",
    },
  };

  // Get configuration from window.SiteKickConfig
  const config = { ...DEFAULT_CONFIG, ...(window.SiteKickConfig || {}) };

  // Validate required config
  if (!config.projectId) {
    console.error("SiteKick: projectId is required in window.SiteKickConfig");
    return;
  }

  if (!config.isActive) {
    console.log("SiteKick: Chat widget is disabled");
    return;
  }

  // Chat Widget Class
  class SiteKickChatWidget {
    constructor(config) {
      this.config = config;
      this.isOpen = false;
      this.showPopup = false;
      this.messages = [];
      this.hasInteracted = false;
      this.isTyping = false;
      this.baseURL = window.location.origin; // Use current domain for API calls
      this.sessionId = this.generateSessionId();

      this.init();
    }

    init() {
      this.injectStyles();
      this.createWidget();
      this.setupEventListeners();
      this.showInitialPopup();
    }

    injectStyles() {
      const styles = `
        /* SiteKick Chat Widget Styles */
        .sitekick-widget {
          position: fixed;
          z-index: 2147483647;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          color: #374151;
          pointer-events: none;
        }
        
        .sitekick-widget * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .sitekick-widget-clickable {
          pointer-events: auto;
        }
        
        /* Positioning */
        .sitekick-position-bottom-right {
          bottom: 20px;
          right: 20px;
        }
        
        .sitekick-position-bottom-left {
          bottom: 20px;
          left: 20px;
        }
        
        .sitekick-position-top-right {
          top: 20px;
          right: 20px;
        }
        
        .sitekick-position-top-left {
          top: 20px;
          left: 20px;
        }
        
        /* Chat Button */
        .sitekick-chat-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${this.config.primaryColor}, ${this.config.accentColor});
          border: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .sitekick-chat-button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .sitekick-chat-button:active {
          transform: scale(0.95);
        }
        
        .sitekick-chat-button svg {
          width: 24px;
          height: 24px;
          fill: white;
        }
        
        /* Popup Message */
        .sitekick-popup {
          position: absolute;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          padding: 16px;
          max-width: 280px;
          margin-bottom: 16px;
          border: 1px solid #e5e7eb;
          animation: sitekick-popup-bounce 0.5s ease-out;
        }
        
        .sitekick-position-bottom-right .sitekick-popup,
        .sitekick-position-bottom-left .sitekick-popup {
          bottom: 80px;
        }
        
        .sitekick-position-top-right .sitekick-popup,
        .sitekick-position-top-left .sitekick-popup {
          top: 80px;
        }
        
        .sitekick-position-bottom-right .sitekick-popup,
        .sitekick-position-top-right .sitekick-popup {
          right: 0;
        }
        
        .sitekick-position-bottom-left .sitekick-popup,
        .sitekick-position-top-left .sitekick-popup {
          left: 0;
        }
        
        .sitekick-popup-header {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .sitekick-popup-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${this.config.primaryColor}, ${this.config.accentColor});
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
          margin-right: 8px;
        }
        
        .sitekick-popup-name {
          font-weight: 600;
          color: #1f2937;
        }
        
        .sitekick-popup-message {
          color: #6b7280;
        }
        
        .sitekick-popup-close {
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          font-size: 18px;
          margin-left: auto;
          padding: 4px;
        }
        
        .sitekick-popup-close:hover {
          color: #6b7280;
        }
        
        /* Chat Window */
        .sitekick-chat-window {
          position: absolute;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          width: 380px;
          height: 520px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: sitekick-chat-slide-in 0.3s ease-out;
        }
        
        .sitekick-position-bottom-right .sitekick-chat-window,
        .sitekick-position-bottom-left .sitekick-chat-window {
          bottom: 80px;
        }
        
        .sitekick-position-top-right .sitekick-chat-window,
        .sitekick-position-top-left .sitekick-chat-window {
          top: 80px;
        }
        
        .sitekick-position-bottom-right .sitekick-chat-window,
        .sitekick-position-top-right .sitekick-chat-window {
          right: 0;
        }
        
        .sitekick-position-bottom-left .sitekick-chat-window,
        .sitekick-position-top-left .sitekick-chat-window {
          left: 0;
        }
        
        /* Size variations */
        .sitekick-size-small .sitekick-chat-window {
          width: 320px;
          height: 400px;
        }
        
        .sitekick-size-large .sitekick-chat-window {
          width: 440px;
          height: 600px;
        }
        
        /* Chat Header */
        .sitekick-chat-header {
          background: linear-gradient(135deg, ${this.config.primaryColor}, ${this.config.accentColor});
          color: white;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .sitekick-chat-header-info {
          display: flex;
          align-items: center;
        }
        
        .sitekick-chat-header-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          margin-right: 12px;
        }
        
        .sitekick-chat-header-text h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 2px;
        }
        
        .sitekick-chat-header-text p {
          font-size: 12px;
          opacity: 0.9;
        }
        
        .sitekick-chat-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 20px;
          padding: 8px;
          border-radius: 4px;
          transition: background 0.2s;
        }
        
        .sitekick-chat-close:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        /* Messages Area */
        .sitekick-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background: #f9fafb;
        }
        
        .sitekick-message {
          margin-bottom: 16px;
          display: flex;
          align-items: flex-start;
        }
        
        .sitekick-message-user {
          flex-direction: row-reverse;
        }
        
        .sitekick-message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          margin: 0 8px;
        }
        
        .sitekick-message-bot .sitekick-message-avatar {
          background: linear-gradient(135deg, ${this.config.primaryColor}, ${this.config.accentColor});
          color: white;
        }
        
        .sitekick-message-user .sitekick-message-avatar {
          background: #e5e7eb;
          color: #6b7280;
          font-size: 10px;
        }
        
        .sitekick-message-content {
          max-width: 75%;
        }
        
        .sitekick-message-bubble {
          padding: 12px 16px;
          border-radius: 18px;
          word-wrap: break-word;
        }
        
        .sitekick-message-bot .sitekick-message-bubble {
          background: white;
          color: #374151;
          border-bottom-left-radius: 4px;
        }
        
        .sitekick-message-user .sitekick-message-bubble {
          background: ${this.config.primaryColor};
          color: white;
          border-bottom-right-radius: 4px;
        }
        
        .sitekick-message-time {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 4px;
          text-align: center;
        }
        
        /* Typing indicator */
        .sitekick-typing {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: white;
          border-radius: 18px;
          border-bottom-left-radius: 4px;
          max-width: 75%;
        }
        
        .sitekick-typing-dots {
          display: flex;
          gap: 4px;
        }
        
        .sitekick-typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #9ca3af;
          animation: sitekick-typing-bounce 1.4s infinite ease-in-out;
        }
        
        .sitekick-typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .sitekick-typing-dot:nth-child(2) { animation-delay: -0.16s; }
        
        /* Input Area */
        .sitekick-chat-input {
          padding: 16px;
          background: white;
          border-top: 1px solid #e5e7eb;
        }
        
        .sitekick-input-container {
          display: flex;
          gap: 8px;
          align-items: flex-end;
        }
        
        .sitekick-input {
          flex: 1;
          border: 1px solid #d1d5db;
          border-radius: 20px;
          padding: 12px 16px;
          resize: none;
          outline: none;
          min-height: 44px;
          max-height: 120px;
          font-family: inherit;
          font-size: 14px;
        }
        
        .sitekick-input:focus {
          border-color: ${this.config.primaryColor};
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .sitekick-send-button {
          background: ${this.config.primaryColor};
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .sitekick-send-button:hover {
          background: ${this.config.accentColor};
          transform: scale(1.05);
        }
        
        .sitekick-send-button:disabled {
          background: #d1d5db;
          cursor: not-allowed;
          transform: none;
        }
        
        .sitekick-send-button svg {
          width: 20px;
          height: 20px;
          fill: white;
        }
        
        /* Branding */
        .sitekick-branding {
          text-align: center;
          padding: 8px;
          font-size: 11px;
          color: #9ca3af;
        }
        
        .sitekick-branding a {
          color: ${this.config.primaryColor};
          text-decoration: none;
        }
        
        /* Responsive */
        @media (max-width: 480px) {
          .sitekick-chat-window {
            width: calc(100vw - 40px);
            height: calc(100vh - 40px);
            max-width: 400px;
            max-height: 600px;
          }
          
          .sitekick-popup {
            max-width: calc(100vw - 100px);
          }
        }
        
        /* Animations */
        @keyframes sitekick-popup-bounce {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes sitekick-chat-slide-in {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes sitekick-typing-bounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        /* Hide scrollbar but keep functionality */
        .sitekick-chat-messages::-webkit-scrollbar {
          width: 6px;
        }
        
        .sitekick-chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .sitekick-chat-messages::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        
        .sitekick-chat-messages::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `;

      const styleElement = document.createElement("style");
      styleElement.textContent = styles;
      document.head.appendChild(styleElement);
    }

    createWidget() {
      // Create main widget container
      this.widget = document.createElement("div");
      this.widget.className = `sitekick-widget sitekick-position-${this.config.position} sitekick-size-${this.config.size}`;

      // Create chat button
      this.createChatButton();

      document.body.appendChild(this.widget);
    }

    createChatButton() {
      this.chatButton = document.createElement("button");
      this.chatButton.className =
        "sitekick-chat-button sitekick-widget-clickable";
      this.chatButton.innerHTML = `
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"/>
          <circle cx="8" cy="10" r="1"/>
          <circle cx="12" cy="10" r="1"/>
          <circle cx="16" cy="10" r="1"/>
        </svg>
      `;

      this.widget.appendChild(this.chatButton);
    }

    createPopup() {
      this.popup = document.createElement("div");
      this.popup.className = "sitekick-popup sitekick-widget-clickable";
      this.popup.innerHTML = `
        <div class="sitekick-popup-header">
          <div class="sitekick-popup-avatar">${this.config.aiName[0].toUpperCase()}</div>
          <div class="sitekick-popup-name">${this.config.aiName}</div>
          <button class="sitekick-popup-close" type="button">&times;</button>
        </div>
        <div class="sitekick-popup-message">${this.config.popupMessage}</div>
      `;

      this.widget.appendChild(this.popup);
      return this.popup;
    }

    createChatWindow() {
      this.chatWindow = document.createElement("div");
      this.chatWindow.className =
        "sitekick-chat-window sitekick-widget-clickable";

      const messagesHTML = this.messages
        .map((msg) => this.createMessageHTML(msg))
        .join("");

      this.chatWindow.innerHTML = `
        <div class="sitekick-chat-header">
          <div class="sitekick-chat-header-info">
            <div class="sitekick-chat-header-avatar">${this.config.aiName[0].toUpperCase()}</div>
            <div class="sitekick-chat-header-text">
              <h3>${this.config.aiName}</h3>
              <p>AI Assistant</p>
            </div>
          </div>
          <button class="sitekick-chat-close" type="button">&times;</button>
        </div>
        
        <div class="sitekick-chat-messages">
          ${messagesHTML}
          <div class="sitekick-messages-end"></div>
        </div>
        
        <div class="sitekick-chat-input">
          <div class="sitekick-input-container">
            <textarea class="sitekick-input" placeholder="Type your message..." rows="1"></textarea>
            <button class="sitekick-send-button" type="button">
              <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10L17 12 2 14Z"/>
              </svg>
            </button>
          </div>
          ${
            this.config.branding.showPoweredBy
              ? `
            <div class="sitekick-branding">
              Powered by <a href="https://sitekick.com" target="_blank">${this.config.branding.customBranding}</a>
            </div>
          `
              : ""
          }
        </div>
      `;

      this.widget.appendChild(this.chatWindow);
      return this.chatWindow;
    }

    createMessageHTML(message) {
      const time = new Date(message.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const messageClass = message.isUser
        ? "sitekick-message-user"
        : "sitekick-message-bot";
      const avatarContent = message.isUser
        ? "You"
        : this.config.aiName[0].toUpperCase();

      return `
        <div class="sitekick-message ${messageClass}">
          <div class="sitekick-message-avatar">${avatarContent}</div>
          <div class="sitekick-message-content">
            <div class="sitekick-message-bubble">${this.escapeHtml(
              message.text
            )}</div>
            <div class="sitekick-message-time">${time}</div>
          </div>
        </div>
      `;
    }

    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }

    setupEventListeners() {
      // Chat button click
      this.chatButton.addEventListener("click", () => {
        this.openChat();
      });
    }

    showInitialPopup() {
      if (this.config.popupDelay > 0) {
        setTimeout(() => {
          if (!this.hasInteracted && !this.isOpen) {
            this.showPopup = true;
            const popup = this.createPopup();

            // Popup click handlers
            popup.addEventListener("click", (e) => {
              if (e.target.classList.contains("sitekick-popup-close")) {
                this.hidePopup();
              } else {
                this.openChat();
              }
            });
          }
        }, this.config.popupDelay);
      }
    }

    hidePopup() {
      if (this.popup) {
        this.popup.remove();
        this.popup = null;
        this.showPopup = false;
      }
    }

    openChat() {
      this.hasInteracted = true;
      this.hidePopup();

      if (!this.isOpen) {
        this.isOpen = true;
        this.chatButton.style.display = "none";

        // Add welcome message if no messages exist
        if (this.messages.length === 0) {
          this.addMessage({
            id: Date.now().toString(),
            text: this.config.welcomeMessage,
            isUser: false,
            timestamp: new Date(),
          });
        }

        const chatWindow = this.createChatWindow();
        this.setupChatEventListeners(chatWindow);
        this.scrollToBottom();
      }
    }

    closeChat() {
      if (this.isOpen) {
        this.isOpen = false;
        this.chatButton.style.display = "flex";

        if (this.chatWindow) {
          this.chatWindow.remove();
          this.chatWindow = null;
        }
      }
    }

    setupChatEventListeners(chatWindow) {
      const closeBtn = chatWindow.querySelector(".sitekick-chat-close");
      const input = chatWindow.querySelector(".sitekick-input");
      const sendBtn = chatWindow.querySelector(".sitekick-send-button");

      closeBtn.addEventListener("click", () => {
        this.closeChat();
      });

      sendBtn.addEventListener("click", () => {
        this.sendMessage();
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });

      // Auto-resize textarea
      input.addEventListener("input", () => {
        input.style.height = "auto";
        input.style.height = input.scrollHeight + "px";

        // Update send button state
        sendBtn.disabled = !input.value.trim();
      });

      // Initial button state
      sendBtn.disabled = true;
    }

    sendMessage() {
      const input = this.chatWindow.querySelector(".sitekick-input");
      const message = input.value.trim();

      if (!message) return;

      // Add user message
      this.addMessage({
        id: Date.now().toString(),
        text: message,
        isUser: true,
        timestamp: new Date(),
      });

      input.value = "";
      input.style.height = "auto";
      this.chatWindow.querySelector(".sitekick-send-button").disabled = true;

      // Show typing indicator and send to backend
      this.showTypingIndicator();
      this.sendToBackend(message);
    }

    addMessage(message) {
      this.messages.push(message);
      this.updateMessagesUI();
      this.scrollToBottom();
    }

    updateMessagesUI() {
      if (!this.chatWindow) return;

      const messagesContainer = this.chatWindow.querySelector(
        ".sitekick-chat-messages"
      );
      const messagesHTML = this.messages
        .map((msg) => this.createMessageHTML(msg))
        .join("");

      messagesContainer.innerHTML =
        messagesHTML + '<div class="sitekick-messages-end"></div>';
    }

    showTypingIndicator() {
      if (!this.chatWindow) return;

      this.isTyping = true;
      const messagesContainer = this.chatWindow.querySelector(
        ".sitekick-chat-messages"
      );
      const typingHTML = `
        <div class="sitekick-message sitekick-message-bot sitekick-typing-indicator">
          <div class="sitekick-message-avatar">${this.config.aiName[0].toUpperCase()}</div>
          <div class="sitekick-message-content">
            <div class="sitekick-typing">
              <div class="sitekick-typing-dots">
                <div class="sitekick-typing-dot"></div>
                <div class="sitekick-typing-dot"></div>
                <div class="sitekick-typing-dot"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      messagesContainer.innerHTML = messagesContainer.innerHTML.replace(
        '<div class="sitekick-messages-end"></div>',
        typingHTML + '<div class="sitekick-messages-end"></div>'
      );
      this.scrollToBottom();
    }

    hideTypingIndicator() {
      if (!this.chatWindow) return;

      this.isTyping = false;
      const typingIndicator = this.chatWindow.querySelector(
        ".sitekick-typing-indicator"
      );
      if (typingIndicator) {
        typingIndicator.remove();
      }
    }

    async sendToBackend(message) {
      try {
        const response = await fetch(`${this.baseURL}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            projectId: this.config.projectId,
            message: message,
            sessionId: this.sessionId,
            userInfo: this.getUserInfo(),
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        this.hideTypingIndicator();

        if (data.success && data.response) {
          this.addMessage({
            id: Date.now().toString(),
            text: data.response,
            isUser: false,
            timestamp: new Date(),
          });
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        console.error("SiteKick: Error sending message to backend:", error);
        this.hideTypingIndicator();

        // Fallback to simulated response if backend fails
        await this.simulateBackendResponse(message);
      }
    }

    async simulateBackendResponse(userMessage) {
      // Simulate network delay
      await new Promise((resolve) =>
        setTimeout(resolve, 1000 + Math.random() * 2000)
      );

      this.hideTypingIndicator();

      // Simple response simulation - replace with actual AI integration
      const responses = [
        `Thank you for your message: "${userMessage}". How can I help you further?`,
        "I understand you're interested in learning more. What specific questions do you have?",
        "That's a great question! I'd be happy to help you with that.",
        "I'm here to assist you. Is there anything specific you'd like to know about our services?",
        "Thanks for reaching out! I can help you find the information you need.",
      ];

      const response = responses[Math.floor(Math.random() * responses.length)];

      this.addMessage({
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date(),
      });
    }

    scrollToBottom() {
      if (!this.chatWindow) return;

      setTimeout(() => {
        const messagesContainer = this.chatWindow.querySelector(
          ".sitekick-chat-messages"
        );
        const messagesEnd = messagesContainer.querySelector(
          ".sitekick-messages-end"
        );
        if (messagesEnd) {
          messagesEnd.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    generateSessionId() {
      return (
        "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9)
      );
    }

    getUserInfo() {
      return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screenResolution: `${screen.width}x${screen.height}`,
        referrer: document.referrer,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      };
    }
  }

  // Initialize the widget when DOM is ready
  function initSiteKick() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        window.SiteKickWidget = new SiteKickChatWidget(config);
      });
    } else {
      window.SiteKickWidget = new SiteKickChatWidget(config);
    }
  }

  initSiteKick();
})();
