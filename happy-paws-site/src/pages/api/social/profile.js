/**
 * API Endpoint for Social Media Profile Management
 * 
 * Handles profile creation and management for multi-user Ayrshare integration
 * GET /api/social/profile - Get user's social profile
 * POST /api/social/profile - Create a new social profile
 * DELETE /api/social/profile - Delete a social profile
 */

import { createProfile, getProfileByKey, deleteProfile } from '../../../social/ayrshare.ts';

// Xano Configuration
const XANO_CONFIG = {
    createProfileUrl: import.meta.env.VITE_XANO_CREATE_PROFILE_URL || 'https://x8ki-letl-twmt.n7.xano.io/api:siXQEdjz/create-profile',
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

export async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    const userId = searchParams.get('userId');
    const profileKey = searchParams.get('profileKey');

    if (!userId && !profileKey) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Either userId or profileKey parameter is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (profileKey) {
      // Get profile by profile key from Ayrshare
      console.log('🔍 Getting profile by key:', profileKey);
      
      const profileData = await getProfileByKey(profileKey);
      
      return new Response(JSON.stringify({
        success: true,
        data: profileData
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      // Get profile by user ID from Xano database
      console.log('🔍 Getting profile for user:', userId);
      
      const profileData = await makeXanoRequest(
        `${XANO_CONFIG.createProfileUrl.replace('/create-profile', '/social-profiles')}?user_id=${userId}`,
        { method: 'GET' }
      );
      
      return new Response(JSON.stringify({
        success: true,
        data: profileData
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('❌ Error getting social profile:', error);

    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to get social profile'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { userId, title } = body;

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

    console.log('👤 Creating social profile for user:', userId);

    // Call Xano endpoint to create profile
    const result = await makeXanoRequest(XANO_CONFIG.createProfileUrl, {
      method: 'POST',
      body: JSON.stringify({
        userId,
        title: title || 'Barkhaus User Profile'
      })
    });

    console.log('✅ Social profile created:', result);

    return new Response(JSON.stringify({
      success: true,
      data: result
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error creating social profile:', error);

    // Handle specific error cases
    if (error.message.includes('already has a social profile')) {
      return new Response(JSON.stringify({
        success: false,
        error: 'User already has a social profile',
        code: 'PROFILE_EXISTS'
      }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to create social profile'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function DELETE({ request }) {
  try {
    const body = await request.json();
    const { userId, profileKey } = body;

    if (!userId && !profileKey) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Either userId or profileKey is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('🗑️ Deleting social profile:', { userId, profileKey });

    if (profileKey) {
      // Delete from Ayrshare
      await deleteProfile(profileKey);
    }

    if (userId) {
      // Delete from Xano database
      await makeXanoRequest(
        `${XANO_CONFIG.createProfileUrl.replace('/create-profile', '/social-profiles')}`,
        {
          method: 'DELETE',
          body: JSON.stringify({ user_id: userId })
        }
      );
    }

    console.log('✅ Social profile deleted successfully');

    return new Response(JSON.stringify({
      success: true,
      message: 'Social profile deleted successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Error deleting social profile:', error);

    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to delete social profile'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
