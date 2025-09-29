/**
 * API Endpoint for Facebook Ads via Ayrshare
 * 
 * Handles Facebook ad campaign management from the admin dashboard
 * GET /api/social/ads - Get ad analytics
 * POST /api/social/ads - Create a Facebook ad campaign
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
    const adId = searchParams.get('adId');

    // Validate required parameters
    if (!adId) {
      return new Response(JSON.stringify({
        success: false,
        error: 'adId parameter is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('📊 Fetching Facebook ad analytics for:', adId);

    const analytics = await ayrshareService.getFacebookAdAnalytics(adId);

    return new Response(JSON.stringify({
      success: true,
      data: analytics
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error fetching Facebook ad analytics:', error);

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
      error: error.message || 'Failed to fetch Facebook ad analytics'
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
    const { 
      campaignName,
      adSetName,
      adName,
      objective,
      targeting,
      budget,
      creative,
      schedule
    } = body;

    // Validate required fields
    if (!campaignName || !adSetName || !adName || !objective || !targeting || !budget || !creative) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields: campaignName, adSetName, adName, objective, targeting, budget, and creative are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate creative fields
    if (!creative.headline || !creative.description || !creative.callToAction) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Creative must include headline, description, and callToAction'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate budget
    if (!budget.dailyBudget && !budget.lifetimeBudget) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Budget must include either dailyBudget or lifetimeBudget'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('📢 Creating Facebook ad campaign:', {
      campaignName,
      objective,
      dailyBudget: budget.dailyBudget,
      lifetimeBudget: budget.lifetimeBudget
    });

    const adData = {
      campaignName,
      adSetName,
      adName,
      objective,
      targeting,
      budget,
      creative,
      schedule
    };

    const result = await ayrshareService.createFacebookAd(adData);

    console.log('✅ Facebook ad campaign created successfully:', result);

    return new Response(JSON.stringify({
      success: true,
      data: result
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error creating Facebook ad campaign:', error);

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
      error: error.message || 'Failed to create Facebook ad campaign'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
