# SiteKick Chat Widget Embed Script

## Overview

The SiteKick Chat Widget Embed Script allows you to easily add AI-powered chat functionality to any website. Simply add a script tag and configuration object to your HTML, and the widget will automatically appear on your site.

## Quick Start

### 1. Add Configuration

Add this script to your website's HTML, preferably in the `<head>` section or before the closing `</body>` tag:

```html
<!-- SiteKick AI Chatbot -->
<script>
  window.SiteKickConfig = {
    projectId: "your-project-id",
    aiName: "Luna",
    position: "bottom-right",
    isActive: true,
  };
</script>
<script async src="https://yourdomain.com/embed.js"></script>
<!-- End SiteKick AI Chatbot -->
```

### 2. That's it!

The chat widget will automatically appear on your website and connect to your SiteKick backend.

## Configuration Options

| Option           | Type    | Default                               | Description                                                             |
| ---------------- | ------- | ------------------------------------- | ----------------------------------------------------------------------- |
| `projectId`      | string  | **Required**                          | Your SiteKick project ID                                                |
| `aiName`         | string  | "Luna"                                | Name of your AI assistant                                               |
| `position`       | string  | "bottom-right"                        | Widget position: "bottom-right", "bottom-left", "top-right", "top-left" |
| `isActive`       | boolean | true                                  | Whether the widget is active                                            |
| `primaryColor`   | string  | "#3B82F6"                             | Primary color for the widget                                            |
| `accentColor`    | string  | "#1D4ED8"                             | Accent color for gradients                                              |
| `welcomeMessage` | string  | "Hi there! How can I help you today?" | First message shown to users                                            |
| `popupMessage`   | string  | "👋 Hey! Got any questions?"          | Popup message text                                                      |
| `popupDelay`     | number  | 4000                                  | Delay before showing popup (milliseconds)                               |
| `size`           | string  | "medium"                              | Widget size: "small", "medium", "large"                                 |
| `branding`       | object  | See below                             | Branding configuration                                                  |

### Branding Configuration

```javascript
branding: {
  showPoweredBy: true,        // Show "Powered by SiteKick" text
  customBranding: "SiteKick AI"  // Custom branding text
}
```

## Complete Configuration Example

```html
<script>
  window.SiteKickConfig = {
    projectId: "your-project-id",
    aiName: "Alex",
    position: "bottom-left",
    isActive: true,
    primaryColor: "#10B981",
    accentColor: "#059669",
    welcomeMessage:
      "Hello! I'm Alex, your shopping assistant. How can I help you find what you're looking for?",
    popupMessage: "🛍️ Need help finding something? I'm here to assist!",
    popupDelay: 5000,
    size: "large",
    branding: {
      showPoweredBy: false,
      customBranding: "Your Company",
    },
  };
</script>
<script async src="https://yourdomain.com/embed.js"></script>
```

## Features

### 🎨 **Fully Customizable**

- Custom colors, positions, and sizes
- Personalized AI names and messages
- Flexible branding options

### 💬 **Smart Interactions**

- Automatic popup messages with configurable delays
- Responsive design for all devices
- Smooth animations and transitions

### 🚀 **Easy Integration**

- No external dependencies
- Lightweight and fast loading
- Works with any website or framework

### 🔒 **Secure & Reliable**

- Secure API communications
- Error handling and fallbacks
- Session management

## Browser Support

The chat widget supports all modern browsers:

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## API Integration

The widget automatically connects to your SiteKick backend at `/api/chat`. The API expects:

### Request Format

```json
{
  "projectId": "your-project-id",
  "message": "User's message",
  "sessionId": "unique-session-id",
  "userInfo": {
    "userAgent": "...",
    "language": "en-US",
    "timezone": "America/New_York",
    "url": "https://example.com"
  }
}
```

### Response Format

```json
{
  "success": true,
  "response": "AI assistant's response",
  "sessionId": "unique-session-id",
  "projectId": "your-project-id"
}
```

## Programmatic Control

You can programmatically control the widget after it loads:

```javascript
// Open the chat widget
window.SiteKickWidget.openChat();

// Close the chat widget
window.SiteKickWidget.closeChat();

// Check if widget is open
console.log(window.SiteKickWidget.isOpen);
```

## Styling and Customization

The widget uses CSS custom properties and can be styled with CSS:

```css
/* Override widget styles */
.sitekick-widget {
  /* Custom styles here */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sitekick-chat-window {
    width: calc(100vw - 20px) !important;
    height: calc(100vh - 20px) !important;
  }
}
```

## Testing

Use the included test file at `/test-embed.html` to see the widget in action:

1. Start your development server
2. Navigate to `http://localhost:3000/test-embed.html`
3. Interact with the chat widget to test functionality

## Troubleshooting

### Widget Not Appearing

1. Check that `projectId` is correctly set
2. Verify `isActive` is set to `true`
3. Check browser console for JavaScript errors
4. Ensure the embed script is loading correctly

### API Errors

1. Verify your project exists in the database
2. Check that the project is active
3. Monitor network requests in browser dev tools
4. Check server logs for API errors

### Styling Issues

1. Check for CSS conflicts with your website
2. Use browser dev tools to inspect widget elements
3. Verify that custom colors are valid CSS values

## Advanced Configuration

### Multiple Widgets

Currently, only one widget per page is supported. Multiple `window.SiteKickConfig` objects will use the last one defined.

### Custom Domains

To use a custom domain for the embed script:

1. Host the `embed.js` file on your CDN
2. Update the script src in your embed code
3. Ensure CORS is properly configured

### Analytics Integration

The widget automatically collects basic analytics data:

- User interactions
- Message timestamps
- Session information
- Browser/device information

This data is available through the SiteKick dashboard.

## Support

For technical support or questions about the embed script:

1. Check this documentation first
2. Review browser console for errors
3. Contact support through your SiteKick dashboard
4. Email: support@sitekick.com

## Changelog

### v1.0.0

- Initial release
- Basic chat functionality
- Customizable appearance
- Mobile responsive design
- API integration
- Session management
