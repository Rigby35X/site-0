// Admin API endpoint to get organization-specific token for Mailchimp integration
// Uses admin session (orgId + accessCode) instead of Auth0

import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { orgId, accessCode } = body;
    
    if (!orgId || !accessCode) {
      return new Response(JSON.stringify({ 
        error: 'Missing parameters',
        message: 'Organization ID and access code are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate admin session (same logic as admin dashboard)
    const validCodes = {
      '3': 'shelter123',
      '4': 'happy456', 
      '5': 'paws789',
      '6': 'second123',
      '7': 'loving456',
      '8': 'barkhaus789',
      '9': 'rangers789'
    };

    const expectedCode = validCodes[orgId];
    if (!expectedCode || accessCode !== expectedCode) {
      return new Response(JSON.stringify({ 
        error: 'Authentication failed',
        message: 'Invalid organization ID or access code'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate organization-specific token for Paragon
    // This would be used as the userToken in Paragon client
    const orgToken = `org-${orgId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    return new Response(JSON.stringify({
      success: true,
      userToken: orgToken,
      orgId: orgId,
      message: 'Organization token generated successfully',
      // Include organization context for Paragon
      metadata: {
        organization_id: orgId,
        type: 'admin_session',
        scope: 'mailchimp_integration'
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Admin Mailchimp token API error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { orgId, accessCode } = body;
    
    if (!orgId || !accessCode) {
      return new Response(JSON.stringify({ 
        error: 'Missing parameters',
        message: 'Organization ID and access code are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate admin session
    const validCodes = {
      '3': 'shelter123',
      '4': 'happy456', 
      '5': 'paws789',
      '6': 'second123',
      '7': 'loving456',
      '8': 'barkhaus789',
      '9': 'rangers789'
    };

    const expectedCode = validCodes[orgId];
    if (!expectedCode || accessCode !== expectedCode) {
      return new Response(JSON.stringify({ 
        error: 'Authentication failed',
        message: 'Invalid organization ID or access code'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate properly signed JWT token for Paragon
    const projectId = 'f8dcc8f0-7214-4bd6-8e84-99a82f7f6e6b';
    const currentTime = Math.floor(Date.now() / 1000);

    // Get the Paragon signing key from file
    const keyPath = path.join(process.cwd(), 'paragon-signing-key.pem');
    console.log('Reading signing key from:', keyPath);

    let signingKey;
    try {
      signingKey = fs.readFileSync(keyPath, 'utf8');
      console.log('Signing key loaded successfully, length:', signingKey.length);
    } catch (error) {
      console.error('Failed to read signing key file:', error.message);
      throw new Error('Paragon signing key file not found');
    }

    // Create JWT payload according to Paragon requirements
    const payload = {
      sub: `org-${orgId}`, // Subject (user identifier)
      aud: `useparagon.com/${projectId}`, // Audience (useparagon.com/{project-id})
      iat: currentTime, // Issued at
      exp: currentTime + (60 * 60), // Expires in 1 hour
      // Additional claims for organization context
      org_id: orgId,
      type: 'admin_session'
    };

    // Sign the JWT token with the Paragon private key using static import
    const jwtToken = jwt.sign(payload, signingKey, {
      algorithm: 'RS256',
      header: {
        typ: 'JWT',
        alg: 'RS256'
      }
    });

    return new Response(JSON.stringify({
      success: true,
      userToken: jwtToken,
      orgId: orgId,
      message: 'Signed JWT token generated successfully',
      metadata: {
        organization_id: orgId,
        type: 'admin_session',
        scope: 'mailchimp_integration',
        token_type: 'jwt_signed',
        algorithm: 'RS256',
        expires_in: 3600
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Admin Mailchimp token API error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
