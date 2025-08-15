import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Project from '@/models/Project';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, message, sessionId, userInfo } = body;

    // Validate required fields
    if (!projectId || !message) {
      return NextResponse.json(
        { error: 'projectId and message are required' },
        { status: 400 }
      );
    }

    // Connect to database and verify project exists
    await connectDB();
    const project = await Project.findById(projectId);
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    if (!project.isActive) {
      return NextResponse.json(
        { error: 'Chat widget is disabled for this project' },
        { status: 403 }
      );
    }

    // TODO: Here you would integrate with your AI service (OpenAI, Claude, etc.)
    // For now, we'll return a simulated response
    const aiResponse = await generateAIResponse(message, project);

    // TODO: Store the conversation in your database for analytics/training
    // await storeConversation(projectId, sessionId, message, aiResponse, userInfo);

    return NextResponse.json({
      success: true,
      response: aiResponse,
      sessionId: sessionId || generateSessionId(),
      projectId
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Simple AI response generation (replace with your actual AI integration)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function generateAIResponse(message: string, project: any): Promise<string> {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1500));
  
  const lowerMessage = message.toLowerCase();
  
  // Simple keyword-based responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return `Hello! I'm ${project.aiName}, and I'm here to help you. What can I assist you with today?`;
  }
  
  if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
    return "I'd be happy to help you with pricing information! Our plans are designed to be flexible and affordable. Would you like me to connect you with someone who can provide detailed pricing for your specific needs?";
  }
  
  if (lowerMessage.includes('feature') || lowerMessage.includes('what') || lowerMessage.includes('how')) {
    return "Great question! Our platform offers many powerful features including AI chatbots, automated responses, analytics, and seamless integrations. What specific feature are you most interested in learning about?";
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
    return "I'm here to help! If you need to speak with our support team directly, you can reach us through our contact form or I can help answer your questions right here. What would you prefer?";
  }
  
  if (lowerMessage.includes('demo') || lowerMessage.includes('try') || lowerMessage.includes('test')) {
    return "I'd love to show you a demo! You're actually experiencing our chat widget right now. Would you like to see more of our features or schedule a personalized demo with our team?";
  }
  
  if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    return "You're very welcome! I'm glad I could help. Is there anything else you'd like to know about our services?";
  }
  
  if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
    return "Thank you for chatting with me! Feel free to reach out anytime if you have more questions. Have a great day!";
  }
  
  // Default responses
  const defaultResponses = [
    `Thanks for your message! I'm ${project.aiName} and I'm here to help. Could you tell me more about what you're looking for?`,
    "That's an interesting question! I'd be happy to help you with that. Let me provide you with some information.",
    "I appreciate you reaching out! Our team is dedicated to helping businesses like yours succeed. What specific area would you like to explore?",
    "Great to hear from you! I'm here to answer any questions you might have about our services. What would you like to know more about?",
    "Thanks for your interest! I'd love to learn more about your business needs so I can provide the most relevant information. What brings you here today?"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function generateSessionId(): string {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Optional: Store conversations for analytics
async function storeConversation(
  projectId: string,
  sessionId: string,
  userMessage: string,
  aiResponse: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userInfo?: any
) {
  // TODO: Implement conversation storage
  // This could include storing in MongoDB, analytics services, etc.
  console.log('Storing conversation:', {
    projectId,
    sessionId,
    userMessage,
    aiResponse,
    userInfo,
    timestamp: new Date()
  });
}
