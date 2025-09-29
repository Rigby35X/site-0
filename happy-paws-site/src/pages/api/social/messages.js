/**
 * API Endpoint for Social Media Messages via Ayrshare
 * 
 * Handles direct message management from the admin dashboard
 * GET /api/social/messages - Get received messages
 * POST /api/social/messages - Send a direct message
 */

import { AyrshareService } from '../../../social/ayrshare.ts';

// Initialize Ayrshare service
let ayrshareService;
try {
  ayrshareService = new AyrshareService();
} catch (error) {
  console.error('Failed to initialize Ayrshare service:', error);
}

export async function GET({ url }) {
  try {
    // Check if service is available
    if (!ayrshareService) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Ayrshare service not available. Please check API key configuration.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const searchParams = new URL(url).searchParams;
    const platform = searchParams.get('platform');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined;

    // Validate required parameters
    if (!platform) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Platform parameter is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate platform
    const validPlatforms = ['twitter', 'facebook', 'instagram', 'linkedin', 'telegram'];
    if (!validPlatforms.includes(platform)) {
      return new Response(JSON.stringify({
        success: false,
        error: `Invalid platform: ${platform}. Valid platforms for messaging: ${validPlatforms.join(', ')}`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('📨 Fetching messages for platform:', { platform, limit });

    const messages = await ayrshareService.getMessages(platform, limit);

    return new Response(JSON.stringify({
      success: true,
      data: messages
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error fetching messages:', error);

    // Handle Ayrshare-specific errors
    if (error.status) {
      return new Response(JSON.stringify({
        success: false,
        error: error.message,
        status: error.status,
        details: error.details
      }), {
        status: error.status >= 400 && error.status < 500 ? error.status : 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to fetch messages'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST({ request }) {
  try {
    // Check if service is available
    if (!ayrshareService) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Ayrshare service not available. Please check API key configuration.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await request.json();
    const { platform, recipient, message, mediaUrls } = body;

    // Validate required fields
    if (!platform || !recipient || !message) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields: platform, recipient, and message are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate platform
    const validPlatforms = ['twitter', 'facebook', 'instagram', 'linkedin', 'telegram'];
    if (!validPlatforms.includes(platform)) {
      return new Response(JSON.stringify({
        success: false,
        error: `Invalid platform: ${platform}. Valid platforms for messaging: ${validPlatforms.join(', ')}`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('📨 Sending message:', { 
      platform, 
      recipient, 
      messageLength: message.length,
      mediaCount: (mediaUrls || []).length 
    });

    const result = await ayrshareService.sendMessage({
      platform,
      recipient,
      message,
      mediaUrls
    });

    console.log('✅ Message sent successfully:', result);

    return new Response(JSON.stringify({
      success: true,
      data: result
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error sending message:', error);

    // Handle Ayrshare-specific errors
    if (error.status) {
      return new Response(JSON.stringify({
        success: false,
        error: error.message,
        status: error.status,
        details: error.details
      }), {
        status: error.status >= 400 && error.status < 500 ? error.status : 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to send message'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
