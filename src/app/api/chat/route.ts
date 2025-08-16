import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Project from '@/models/Project';
import { HfInference } from '@huggingface/inference';

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

    // Real AI integration using Hugging Face (FREE!)
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

// AI response generation using Hugging Face (FREE!)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function generateAIResponse(message: string, project: any): Promise<string> {
  try {
    console.log('Generating AI response...');
    console.log(process.env.HUGGINGFACE_API_TOKEN);
    // Initialize Hugging Face client (free tier)
    const hf = new HfInference(process.env.HUGGINGFACE_API_TOKEN);
    
    // Create a context-aware system prompt
    const systemPrompt = `You are ${project.aiName}, a helpful AI assistant for ${project.name}. ${project.description ? `Here's what we do: ${project.description}` : ''} 

Your role is to:
- Be friendly, professional, and helpful
- Answer questions about our services and products  
- Help visitors understand what we offer
- Provide helpful information and guide users appropriately
- Sound natural and conversational, like a real human customer service representative

Keep responses concise (2-3 sentences max) and always stay in character as ${project.aiName}.`;

    // Use SmolLM3-3B - much better for chat conversations!
    const messages = [
      {
        "role": "system", 
        "content": `/no_think\n\n${systemPrompt}`
      },
      {
        "role": "user", 
        "content": message
      }
    ];

    const result = await hf.chatCompletion({
      model: 'HuggingFaceTB/SmolLM3-3B',
      messages: messages,
      max_tokens: 150,
      temperature: 0.6,
      top_p: 0.95
    });

    // Extract and clean the response from chat completion
    let response = result.choices?.[0]?.message?.content?.trim() || '';
    
    // Clean up any unwanted prefixes or artifacts
    response = response.replace(/^(Assistant:|AI:|Bot:)/i, '').trim();
    
    // Fallback if response is empty or too short
    if (!response || response.length < 5) {
      return `Hi! I'm ${project.aiName} from ${project.name}. I'd be happy to help you with any questions you have about our services. What can I assist you with today?`;
    }

    return response;

  } catch (error) {
    console.error('Error generating AI response:', error);
    
    // Fallback to basic responses if AI fails
    const fallbackResponses = [
      `Hi! I'm ${project.aiName} from ${project.name}. Thanks for reaching out! How can I help you today?`,
      `Hello! I'm ${project.aiName}, and I'm here to assist you with any questions about ${project.name}. What would you like to know?`,
      `Thanks for your message! I'm ${project.aiName} and I'd be happy to help you learn more about what we do at ${project.name}. What can I assist you with?`
    ];
    
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }
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