// API endpoint to get Auth0 ID token for Paragon authentication
// This uses Auth0 integration instead of custom JWT signing

import { auth0 } from '../../../lib/auth0.js';

export async function GET(request) {
  try {
    // Get the user session from Auth0
    const session = await auth0.getSession(request);
    
    if (!session || !session.user) {
      return new Response(JSON.stringify({
        success: false,
        error: 'User not authenticated with Auth0',
        redirectTo: '/api/auth/login'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get the ID token from the session
    const idToken = session.idToken;
    
    if (!idToken) {
      return new Response(JSON.stringify({
        success: false,
        error: 'ID token not available in session',
        message: 'Please re-authenticate to get a fresh token'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Return the Auth0 ID token for use with Paragon
    return new Response(JSON.stringify({
      success: true,
      userToken: idToken,
      user: {
        id: session.user.sub,
        email: session.user.email,
        name: session.user.name,
        picture: session.user.picture
      },
      message: 'Auth0 ID token retrieved successfully',
      metadata: {
        auth_provider: 'auth0',
        token_type: 'id_token',
        domain: process.env.AUTH0_DOMAIN,
        audience: process.env.AUTH0_AUDIENCE
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Auth0 Paragon token API error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message || 'Failed to get Auth0 token',
      message: 'Please try logging in again'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
