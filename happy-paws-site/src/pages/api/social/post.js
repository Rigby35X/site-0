/**
 * API Endpoint for Social Media Posting via Ayrshare
 * 
 * Handles social media posts from the admin dashboard
 * POST /api/social/post
 */

import { AyrshareService } from '../../../social/ayrshare.ts';

// Initialize Ayrshare service
let ayrshareService;
try {
  ayrshareService = new AyrshareService();
} catch (error) {
  console.error('Failed to initialize Ayrshare service:', error);
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
    const { 
      post, 
      platforms, 
      mediaUrls, 
      scheduleDate, 
      shortenLinks,
      facebookOptions,
      twitterOptions,
      linkedInOptions,
      instagramOptions
    } = body;

    // Validate required fields
    if (!post || !platforms || !Array.isArray(platforms) || platforms.length === 0) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields: post and platforms are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate platforms
    const validPlatforms = ['twitter', 'facebook', 'instagram', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'reddit', 'telegram'];
    const invalidPlatforms = platforms.filter(p => !validPlatforms.includes(p));
    if (invalidPlatforms.length > 0) {
      return new Response(JSON.stringify({
        success: false,
        error: `Invalid platforms: ${invalidPlatforms.join(', ')}. Valid platforms: ${validPlatforms.join(', ')}`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare post data
    const postData = {
      post,
      platforms,
      mediaUrls: mediaUrls || [],
      scheduleDate,
      shortenLinks,
      facebookOptions,
      twitterOptions,
      linkedInOptions,
      instagramOptions
    };

    console.log('📱 Publishing social media post:', {
      platforms,
      postLength: post.length,
      mediaCount: (mediaUrls || []).length,
      scheduled: !!scheduleDate
    });

    // Publish the post
    const result = await ayrshareService.publishPost(postData);

    console.log('✅ Post published successfully:', result);

    return new Response(JSON.stringify({
      success: true,
      data: result
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error publishing social media post:', error);

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

    // Handle general errors
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to publish social media post'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET({ url }) {
  try {
    // Check if service is available
    if (!ayrshareService) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Ayrshare service not available'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const searchParams = new URL(url).searchParams;
    const action = searchParams.get('action');

    switch (action) {
      case 'history':
        const platform = searchParams.get('platform');
        const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined;
        
        const history = await ayrshareService.getPostHistory(platform, limit);
        
        return new Response(JSON.stringify({
          success: true,
          data: history
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });

      case 'profiles':
        const profilePlatform = searchParams.get('platform');
        if (!profilePlatform) {
          return new Response(JSON.stringify({
            success: false,
            error: 'Platform parameter is required for profiles'
          }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        
        const profile = await ayrshareService.getProfile(profilePlatform);
        
        return new Response(JSON.stringify({
          success: true,
          data: profile
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });

      default:
        return new Response(JSON.stringify({
          success: false,
          error: 'Invalid action. Supported actions: history, profiles'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
    }

  } catch (error) {
    console.error('❌ Error in social media GET endpoint:', error);

    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to process request'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
