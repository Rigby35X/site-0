/**
 * API Endpoint for Social Media Analytics via Ayrshare
 * 
 * Handles analytics retrieval from the admin dashboard
 * GET /api/social/analytics
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
    const postIds = searchParams.get('postIds');
    const platforms = searchParams.get('platforms');

    // Parse platforms if provided
    let platformArray;
    if (platforms) {
      platformArray = platforms.split(',').map(p => p.trim());
    }

    if (postIds) {
      // Bulk analytics request
      const postIdArray = postIds.split(',').map(id => id.trim());
      
      console.log('📊 Fetching bulk analytics for posts:', postIdArray);
      
      const analytics = await ayrshareService.getBulkAnalytics(postIdArray, platformArray);
      
      return new Response(JSON.stringify({
        success: true,
        data: analytics
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } else if (postId) {
      // Single post analytics request
      console.log('📊 Fetching analytics for post:', postId);
      
      const analytics = await ayrshareService.getAnalytics(postId, platformArray);
      
      return new Response(JSON.stringify({
        success: true,
        data: analytics
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } else {
      return new Response(JSON.stringify({
        success: false,
        error: 'Either postId or postIds parameter is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('❌ Error fetching social media analytics:', error);

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
      error: error.message || 'Failed to fetch social media analytics'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
