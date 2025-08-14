import { IChatConfig } from '@/models/ChatConfig';
import ChatConfig from '@/models/ChatConfig';
import connectDB from './db';

export const getDefaultSiteKickConfig = (): Partial<IChatConfig> => ({
  websiteId: 'sitekick-default',
  aiName: 'Luna',
  aiRole: 'Your AI Growth Assistant',
  primaryColor: '#3B82F6',
  accentColor: '#1D4ED8',
  welcomeMessage: 'Hi there! I\'m Luna, your AI assistant here at SiteKick. I\'m here to help you grow your business with our AI-powered tools. What would you like to know about?',
  initialPopupMessage: '👋 Hey there! I\'m Luna, and I\'m excited to help you supercharge your business growth!',
  popupDelay: 4000,
  isEnabled: true,
  customGreetings: [
    'Welcome to SiteKick! Ready to boost your business? 🚀',
    'Hi! I\'m Luna, your growth companion. How can I help you succeed today?',
    'Hey there! Looking to take your business to the next level? I\'m here to help! ✨',
  ],
  chatStyle: 'modern',
  position: 'bottom-right',
  size: 'medium',
  triggerMessages: [
    {
      message: 'Need help getting started? I\'m here to guide you! 💡',
      delay: 10000,
      showAfter: 5,
    },
    {
      message: 'Curious about our AI chatbots? Let me show you what they can do! 🤖',
      delay: 20000,
      showAfter: 15,
    }
  ],
  branding: {
    showPoweredBy: true,
  },
  autoMessages: {
    enabled: true,
    messages: [
      {
        message: 'Still browsing? I\'d love to help you find what you\'re looking for! 😊',
        triggerAfter: 30,
        condition: 'idle',
      },
      {
        message: 'Want to see how our tools can boost your reviews? Let\'s chat! ⭐',
        triggerAfter: 45,
        condition: 'time',
      }
    ],
  },
});

export async function getChatConfig(websiteId: string): Promise<IChatConfig | null> {
  try {
    await connectDB();
    const config = await ChatConfig.findOne({ websiteId });
    return config;
  } catch (error) {
    console.error('Error fetching chat config:', error);
    return null;
  }
}

export async function createChatConfig(configData: Partial<IChatConfig>): Promise<IChatConfig | null> {
  try {
    await connectDB();
    const config = new ChatConfig(configData);
    await config.save();
    return config;
  } catch (error) {
    console.error('Error creating chat config:', error);
    return null;
  }
}

export async function updateChatConfig(websiteId: string, configData: Partial<IChatConfig>): Promise<IChatConfig | null> {
  try {
    await connectDB();
    const config = await ChatConfig.findOneAndUpdate(
      { websiteId },
      { ...configData, updatedAt: new Date() },
      { new: true, upsert: true }
    );
    return config;
  } catch (error) {
    console.error('Error updating chat config:', error);
    return null;
  }
}

export async function deleteChatConfig(websiteId: string): Promise<boolean> {
  try {
    await connectDB();
    const result = await ChatConfig.deleteOne({ websiteId });
    return result.deletedCount > 0;
  } catch (error) {
    console.error('Error deleting chat config:', error);
    return false;
  }
}

// Preset configurations for different industries/use cases
export const getPresetConfigs = () => ({
  ecommerce: {
    aiName: 'Alex',
    aiRole: 'Your Shopping Assistant',
    primaryColor: '#10B981',
    welcomeMessage: 'Hi! I\'m Alex, your personal shopping assistant. I\'m here to help you find exactly what you\'re looking for!',
    initialPopupMessage: '🛍️ Hey! Need help finding something? I\'m here to assist!',
    customGreetings: [
      'Welcome! Ready to find your perfect product? 🛒',
      'Hi there! I\'m here to make your shopping experience amazing!',
      'Looking for something specific? Let me help you find it! ✨',
    ],
  },
  
  saas: {
    aiName: 'Sam',
    aiRole: 'Your Product Specialist',
    primaryColor: '#8B5CF6',
    welcomeMessage: 'Hello! I\'m Sam, your product specialist. I\'m here to help you understand how our platform can solve your challenges.',
    initialPopupMessage: '👋 Hi! I\'m Sam, ready to show you how our platform works!',
    customGreetings: [
      'Ready to streamline your workflow? Let\'s chat! 🚀',
      'Hi! I\'m here to help you get the most out of our platform!',
      'Looking to boost productivity? I\'ve got you covered! 💡',
    ],
  },

  healthcare: {
    aiName: 'Dr. Maya',
    aiRole: 'Your Health Information Assistant',
    primaryColor: '#EF4444',
    welcomeMessage: 'Hello! I\'m Dr. Maya, your health information assistant. I\'m here to help answer your questions and guide you to the right resources.',
    initialPopupMessage: '🏥 Hi! I\'m Dr. Maya, here to help with your health questions!',
    customGreetings: [
      'Welcome! How can I help with your health concerns today? 🩺',
      'Hi there! I\'m here to provide health information and support!',
      'Looking for health resources? I\'m here to help guide you! 💚',
    ],
  },

  education: {
    aiName: 'Professor Sage',
    aiRole: 'Your Learning Companion',
    primaryColor: '#F59E0B',
    welcomeMessage: 'Greetings! I\'m Professor Sage, your learning companion. I\'m here to help you on your educational journey!',
    initialPopupMessage: '📚 Hello! I\'m Professor Sage, ready to help you learn!',
    customGreetings: [
      'Ready to expand your knowledge? Let\'s explore together! 🎓',
      'Hi there! I\'m here to make learning fun and engaging!',
      'Got questions? I\'m here to help you understand! 💡',
    ],
  },
});
