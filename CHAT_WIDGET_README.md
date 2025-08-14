# Chat Widget Component

A fully customizable, engaging AI chat widget built with React, TypeScript, and DaisyUI. Features an AI persona named "Luna" by default, with configurable messages, styling, and behavior.

## Features

- 🎨 **Fully Customizable**: Colors, position, size, messages, and AI persona
- 💬 **Engaging Interactions**: Smart popup messages with configurable delays
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 🔧 **Plug & Play**: Easy integration with configuration-based setup
- 🎭 **AI Personas**: Create unique AI personalities for different use cases
- 💾 **MongoDB Integration**: Store and manage configurations in database
- ⚡ **Auto Messages**: Smart triggers based on user behavior
- 🎯 **Industry Presets**: Pre-built configurations for different industries

## Quick Start

### Basic Usage

```tsx
import ChatWidget from '@/components/ChatWidget';

// Use with default configuration (Luna, the AI Growth Assistant)
<ChatWidget />

// Or with custom configuration
<ChatWidget config={{
  aiName: 'Alex',
  aiRole: 'Customer Support',
  primaryColor: '#10B981',
  position: 'bottom-left'
}} />
```

### Advanced Configuration

```tsx
import ChatWidget from "@/components/ChatWidget";
import { IChatConfig } from "@/models/ChatConfig";

const customConfig: Partial<IChatConfig> = {
  aiName: "Dr. Maya",
  aiRole: "Health Information Assistant",
  primaryColor: "#EF4444",
  accentColor: "#DC2626",
  welcomeMessage:
    "Hello! I'm Dr. Maya, ready to help with your health questions.",
  initialPopupMessage: "🏥 Hi! I'm Dr. Maya, here to help!",
  popupDelay: 5000,
  position: "bottom-right",
  size: "large",
  customGreetings: [
    "Welcome! How can I help with your health concerns today? 🩺",
    "Hi there! I'm here to provide health information and support!",
  ],
  autoMessages: {
    enabled: true,
    messages: [
      {
        message: "Need help finding health resources? I'm here to assist! 💚",
        triggerAfter: 30,
        condition: "idle",
      },
    ],
  },
};

<ChatWidget config={customConfig} />;
```

## Configuration Options

### Basic Configuration

| Property              | Type    | Default             | Description                       |
| --------------------- | ------- | ------------------- | --------------------------------- |
| `aiName`              | string  | 'Luna'              | Name of the AI assistant          |
| `aiRole`              | string  | 'Your AI Assistant' | Role/title of the AI              |
| `primaryColor`        | string  | '#3B82F6'           | Primary color for the chat widget |
| `accentColor`         | string  | '#1D4ED8'           | Accent color for highlights       |
| `welcomeMessage`      | string  | Default welcome     | Initial message when chat opens   |
| `initialPopupMessage` | string  | Default popup       | Message shown in popup bubble     |
| `popupDelay`          | number  | 3000                | Delay before showing popup (ms)   |
| `isEnabled`           | boolean | true                | Whether the chat widget is active |

### Styling & Layout

| Property    | Type   | Options                                                | Default        | Description        |
| ----------- | ------ | ------------------------------------------------------ | -------------- | ------------------ |
| `position`  | string | 'bottom-right', 'bottom-left', 'top-right', 'top-left' | 'bottom-right' | Widget position    |
| `size`      | string | 'small', 'medium', 'large'                             | 'medium'       | Chat window size   |
| `chatStyle` | string | 'modern', 'minimal', 'playful', 'professional'         | 'modern'       | Visual style theme |

### Advanced Features

| Property          | Type     | Description                              |
| ----------------- | -------- | ---------------------------------------- |
| `customGreetings` | string[] | Array of random greeting messages        |
| `triggerMessages` | object[] | Messages triggered after specific delays |
| `autoMessages`    | object   | Auto-messages based on user behavior     |
| `branding`        | object   | Branding and powered-by settings         |

## Industry Presets

The widget comes with pre-built configurations for different industries:

### E-commerce

```tsx
import { getPresetConfigs } from "@/lib/chatConfig";

const ecommerceConfig = getPresetConfigs().ecommerce;
<ChatWidget config={ecommerceConfig} />;
```

### SaaS

```tsx
const saasConfig = getPresetConfigs().saas;
<ChatWidget config={saasConfig} />;
```

### Healthcare

```tsx
const healthcareConfig = getPresetConfigs().healthcare;
<ChatWidget config={healthcareConfig} />;
```

### Education

```tsx
const educationConfig = getPresetConfigs().education;
<ChatWidget config={educationConfig} />;
```

## MongoDB Integration

### Save Configuration

```tsx
// Save configuration to MongoDB
const response = await fetch("/api/chat-config", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    websiteId: "your-website-id",
    ...yourConfig,
  }),
});
```

### Load Configuration

```tsx
// Load configuration from MongoDB
const response = await fetch(`/api/chat-config?websiteId=your-website-id`);
const config = await response.json();
```

## Demo Page

Visit `/chat-demo` to see the interactive configuration panel where you can:

- Customize all widget settings in real-time
- Preview changes instantly
- Export configuration JSON
- Copy integration code
- Try different industry presets

## AI Personas

### Default: Luna - AI Growth Assistant

- **Personality**: Friendly, enthusiastic, growth-focused
- **Best for**: Business websites, SaaS platforms, marketing sites
- **Color scheme**: Blue gradient
- **Tone**: Professional yet approachable

### Customizing AI Personality

```tsx
const customPersona = {
  aiName: "Zara",
  aiRole: "Innovation Consultant",
  primaryColor: "#8B5CF6",
  welcomeMessage:
    "Hi! I'm Zara, your innovation consultant. Ready to revolutionize your business?",
  customGreetings: [
    "Welcome to the future! How can I help you innovate today? 🚀",
    "Ready to disrupt your industry? Let's brainstorm! 💡",
  ],
};
```

## Best Practices

1. **Choose appropriate delays**: 3-5 seconds for popup delay works well
2. **Match your brand**: Use colors that align with your website theme
3. **Personalize messages**: Customize greetings to match your business tone
4. **Consider user journey**: Place widget where users naturally look for help
5. **Test on mobile**: Ensure the widget works well on all device sizes
6. **Monitor engagement**: Use different messages to see what resonates

## Technical Details

- Built with React 19 and TypeScript
- Styled with DaisyUI and Tailwind CSS
- MongoDB integration for configuration storage
- Responsive design with mobile-first approach
- Accessibility features included
- Smooth animations and transitions

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

The chat widget is designed to be extensible. You can:

- Add new AI personas
- Create industry-specific presets
- Enhance animation effects
- Add new trigger conditions
- Implement additional customization options

## Support

For questions or issues with the chat widget, please refer to the main project documentation or create an issue in the project repository.
