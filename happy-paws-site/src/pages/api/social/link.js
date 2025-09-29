/**
 * API Endpoint for Social Media Account Linking
 * 
 * Handles JWT generation and linking URL creation for social account connection
 * POST /api/social/link - Generate linking URL for social account connection
 */

import { generateJWT } from '../../../social/ayrshare.ts';

// Xano Configuration
const XANO_CONFIG = {
    linkSocialUrl: import.meta.env.VITE_XANO_LINK_SOCIAL_URL || 'https://x8ki-letl-twmt.n7.xano.io/api:siXQEdjz/link-social',
    token: import.meta.env.VITE_XANO_AUTH_TOKEN || import.meta.env.VITE_XANO_ORGANIZATIONS_TOKEN || 'mGDOpzrGb2PvfCn4tOJB7drqYvs'
};

// Helper function to make Xano requests
async function makeXanoRequest(endpoint, options = {}) {
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${XANO_CONFIG.token}`,
            ...options.headers
        },
        ...options
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Xano API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { userId, redirectUrl, domain } = body;

    // Validate required fields
    if (!userId) {
      return new Response(JSON.stringify({
        success: false,
        error: 'userId is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('🔗 Generating social linking URL for user:', userId);

    // Call Xano endpoint to generate JWT and linking URL
    const result = await makeXanoRequest(XANO_CONFIG.linkSocialUrl, {
      method: 'POST',
      body: JSON.stringify({
        userId,
        redirectUrl: redirectUrl || `${new URL(request.url).origin}/admin/social-linked`,
        domain: domain || 'barkhaus.com'
      })
    });

    if (!result.success) {
      // Handle case where user needs to create a profile first
      if (result.needsProfile) {
        return new Response(JSON.stringify({
          success: false,
          error: result.error,
          needsProfile: true,
          code: 'PROFILE_REQUIRED'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      throw new Error(result.error || 'Failed to generate linking URL');
    }

    console.log('✅ Social linking URL generated:', {
      userId,
      profileKey: result.profileKey,
      hasUrl: !!result.linkingUrl
    });

    return new Response(JSON.stringify({
      success: true,
      data: {
        linkingUrl: result.linkingUrl,
        jwt: result.jwt,
        profileKey: result.profileKey,
        userId: result.userId,
        redirectUrl: result.redirectUrl
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error generating social linking URL:', error);

    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to generate social linking URL'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    const userId = searchParams.get('userId');

    if (!userId) {
      return new Response(JSON.stringify({
        success: false,
        error: 'userId parameter is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('🔍 Getting social profile status for user:', userId);

    // Get user's social profile to check connection status
    const profileData = await makeXanoRequest(
      `${XANO_CONFIG.linkSocialUrl.replace('/link-social', '/social-profiles')}?user_id=${userId}`,
      { method: 'GET' }
    );

    let connectedNetworks = [];
    try {
      connectedNetworks = JSON.parse(profileData.connected_networks || '[]');
    } catch (e) {
      console.error('Error parsing connected networks:', e);
    }

    return new Response(JSON.stringify({
      success: true,
      data: {
        hasProfile: !!profileData.profile_key,
        profileKey: profileData.profile_key,
        connectedNetworks: connectedNetworks,
        title: profileData.title,
        lastUpdated: profileData.updated_at
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error getting social profile status:', error);

    // If profile doesn't exist, return appropriate response
    if (error.message.includes('not found') || error.message.includes('404')) {
      return new Response(JSON.stringify({
        success: true,
        data: {
          hasProfile: false,
          connectedNetworks: [],
          needsProfile: true
        }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to get social profile status'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
