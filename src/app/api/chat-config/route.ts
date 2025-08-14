import { NextRequest, NextResponse } from 'next/server';
import { getChatConfig, createChatConfig, updateChatConfig, deleteChatConfig } from '@/lib/chatConfig';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const websiteId = searchParams.get('websiteId');

    if (!websiteId) {
      return NextResponse.json(
        { error: 'websiteId is required' },
        { status: 400 }
      );
    }

    const config = await getChatConfig(websiteId);
    
    if (!config) {
      return NextResponse.json(
        { error: 'Chat configuration not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(config);
  } catch (error) {
    console.error('Error fetching chat config:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.websiteId) {
      return NextResponse.json(
        { error: 'websiteId is required' },
        { status: 400 }
      );
    }

    const config = await createChatConfig(body);
    
    if (!config) {
      return NextResponse.json(
        { error: 'Failed to create chat configuration' },
        { status: 500 }
      );
    }

    return NextResponse.json(config, { status: 201 });
  } catch (error) {
    console.error('Error creating chat config:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { websiteId, ...configData } = body;
    
    if (!websiteId) {
      return NextResponse.json(
        { error: 'websiteId is required' },
        { status: 400 }
      );
    }

    const config = await updateChatConfig(websiteId, configData);
    
    if (!config) {
      return NextResponse.json(
        { error: 'Failed to update chat configuration' },
        { status: 500 }
      );
    }

    return NextResponse.json(config);
  } catch (error) {
    console.error('Error updating chat config:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const websiteId = searchParams.get('websiteId');

    if (!websiteId) {
      return NextResponse.json(
        { error: 'websiteId is required' },
        { status: 400 }
      );
    }

    const success = await deleteChatConfig(websiteId);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Failed to delete chat configuration' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Chat configuration deleted successfully' });
  } catch (error) {
    console.error('Error deleting chat config:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
