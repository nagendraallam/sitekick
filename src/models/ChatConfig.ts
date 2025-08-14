import mongoose, { Schema, Document } from 'mongoose';

export interface IChatConfig extends Document {
  websiteId: string;
  aiName: string;
  aiAvatar?: string;
  aiRole: string;
  primaryColor: string;
  accentColor: string;
  welcomeMessage: string;
  initialPopupMessage: string;
  popupDelay: number; // in milliseconds
  isEnabled: boolean;
  customGreetings: string[];
  chatStyle: 'modern' | 'minimal' | 'playful' | 'professional';
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  size: 'small' | 'medium' | 'large';
  triggerMessages: {
    message: string;
    delay: number;
    showAfter?: number; // show after X seconds of inactivity
  }[];
  branding: {
    showPoweredBy: boolean;
    customBranding?: string;
  };
  autoMessages: {
    enabled: boolean;
    messages: {
      message: string;
      triggerAfter: number; // seconds
      condition?: 'scroll' | 'time' | 'idle';
    }[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const chatConfigSchema = new Schema<IChatConfig>({
  websiteId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  aiName: {
    type: String,
    required: true,
    default: 'Luna',
  },
  aiAvatar: {
    type: String,
    default: null,
  },
  aiRole: {
    type: String,
    required: true,
    default: 'Your AI Assistant',
  },
  primaryColor: {
    type: String,
    default: '#3B82F6', // blue-500
  },
  accentColor: {
    type: String,
    default: '#1D4ED8', // blue-700
  },
  welcomeMessage: {
    type: String,
    required: true,
    default: 'Hi there! I\'m here to help you with any questions you might have. What can I assist you with today?',
  },
  initialPopupMessage: {
    type: String,
    required: true,
    default: '👋 Hey! I\'m Luna, your personal assistant. Got any questions?',
  },
  popupDelay: {
    type: Number,
    default: 3000, // 3 seconds
  },
  isEnabled: {
    type: Boolean,
    default: true,
  },
  customGreetings: [{
    type: String,
  }],
  chatStyle: {
    type: String,
    enum: ['modern', 'minimal', 'playful', 'professional'],
    default: 'modern',
  },
  position: {
    type: String,
    enum: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
    default: 'bottom-right',
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'medium',
  },
  triggerMessages: [{
    message: String,
    delay: Number,
    showAfter: Number,
  }],
  branding: {
    showPoweredBy: {
      type: Boolean,
      default: true,
    },
    customBranding: String,
  },
  autoMessages: {
    enabled: {
      type: Boolean,
      default: true,
    },
    messages: [{
      message: String,
      triggerAfter: Number,
      condition: {
        type: String,
        enum: ['scroll', 'time', 'idle'],
        default: 'time',
      },
    }],
  },
}, {
  timestamps: true,
});

const ChatConfig = mongoose.models.ChatConfig || mongoose.model<IChatConfig>('ChatConfig', chatConfigSchema);

export default ChatConfig;
