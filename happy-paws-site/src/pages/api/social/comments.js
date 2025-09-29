/**
 * API Endpoint for Social Media Comments via Ayrshare
 * 
 * Handles comment management from the admin dashboard
 * GET /api/social/comments - Get comments for a post
 * POST /api/social/comments - Add a comment to a post
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
    const postId = searchParams.get('postId');
    const platform = searchParams.get('platform');

    // Validate required parameters
    if (!postId || !platform) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Both postId and platform parameters are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('💬 Fetching comments for post:', { postId, platform });

    const comments = await ayrshareService.getComments(postId, platform);

    return new Response(JSON.stringify({
      success: true,
      data: comments
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error fetching comments:', error);

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
      error: error.message || 'Failed to fetch comments'
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
    const { postId, platform, comment, parentCommentId } = body;

    // Validate required fields
    if (!postId || !platform || !comment) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields: postId, platform, and comment are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate platform
    const validPlatforms = ['twitter', 'facebook', 'instagram', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'reddit', 'telegram'];
    if (!validPlatforms.includes(platform)) {
      return new Response(JSON.stringify({
        success: false,
        error: `Invalid platform: ${platform}. Valid platforms: ${validPlatforms.join(', ')}`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('💬 Adding comment to post:', { postId, platform, commentLength: comment.length });

    const result = await ayrshareService.addComment({
      postId,
      platform,
      comment,
      parentCommentId
    });

    console.log('✅ Comment added successfully:', result);

    return new Response(JSON.stringify({
      success: true,
      data: result
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error adding comment:', error);

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
      error: error.message || 'Failed to add comment'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
