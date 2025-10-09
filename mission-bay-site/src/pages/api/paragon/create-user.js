// API endpoint to create or retrieve Paragon users after Auth0 login
import { auth0 } from '../../../lib/auth0.js';

export async function POST(request) {
  try {
    // Check authentication
    const session = await auth0.getSession(request);
    if (!session || !session.user) {
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = session.user;
    const PARAGON_API_KEY = process.env.PARAGON_API_KEY;

    if (!PARAGON_API_KEY) {
      console.error('PARAGON_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'Paragon API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    try {
      // Create or retrieve Paragon user
      const paragonResponse = await fetch('https://api.useparagon.com/v1/users', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${PARAGON_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: user.email,
          external_id: user.sub, // Auth0 user ID
          metadata: {
            name: user.name || user.email,
            auth0_id: user.sub,
            organization: 'mission-bay-puppy-rescue',
            plan: user.app_metadata?.plan || 'free',
            created_at: new Date().toISOString()
          }
        })
      });

      const paragonData = await paragonResponse.json();

      if (!paragonResponse.ok) {
        // If user already exists, try to get existing user
        if (paragonResponse.status === 409 || paragonData.error?.includes('already exists')) {
          // Get existing user
          const getUserResponse = await fetch(`https://api.useparagon.com/v1/users/${user.sub}`, {
            headers: {
              'Authorization': `Bearer ${PARAGON_API_KEY}`,
              'Content-Type': 'application/json'
            }
          });

          if (getUserResponse.ok) {
            const existingUser = await getUserResponse.json();
            return new Response(JSON.stringify({
              success: true,
              user: existingUser,
              userToken: existingUser.userToken,
              message: 'Retrieved existing Paragon user'
            }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            });
          }
        }

        console.error('Paragon API error:', paragonData);
        return new Response(JSON.stringify({ 
          error: 'Failed to create Paragon user',
          details: paragonData.error || 'Unknown error'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // TODO: In a real application, you would store the userToken in your database
      // For now, we'll return it to be stored client-side (not recommended for production)
      
      return new Response(JSON.stringify({
        success: true,
        user: paragonData,
        userToken: paragonData.userToken,
        message: 'Paragon user created successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (paragonError) {
      console.error('Error calling Paragon API:', paragonError);
      return new Response(JSON.stringify({ 
        error: 'Failed to communicate with Paragon API',
        details: paragonError.message 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('Create Paragon user API error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Also support GET to retrieve existing user
export async function GET(request) {
  try {
    // Check authentication
    const session = await auth0.getSession(request);
    if (!session || !session.user) {
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = session.user;
    const PARAGON_API_KEY = process.env.PARAGON_API_KEY;

    if (!PARAGON_API_KEY) {
      return new Response(JSON.stringify({ error: 'Paragon API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    try {
      // Get existing Paragon user
      const getUserResponse = await fetch(`https://api.useparagon.com/v1/users/${user.sub}`, {
        headers: {
          'Authorization': `Bearer ${PARAGON_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      if (!getUserResponse.ok) {
        if (getUserResponse.status === 404) {
          return new Response(JSON.stringify({ 
            error: 'Paragon user not found',
            message: 'User needs to be created first'
          }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const errorData = await getUserResponse.json();
        return new Response(JSON.stringify({ 
          error: 'Failed to retrieve Paragon user',
          details: errorData.error || 'Unknown error'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const existingUser = await getUserResponse.json();
      
      return new Response(JSON.stringify({
        success: true,
        user: existingUser,
        userToken: existingUser.userToken,
        message: 'Retrieved Paragon user successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (paragonError) {
      console.error('Error calling Paragon API:', paragonError);
      return new Response(JSON.stringify({ 
        error: 'Failed to communicate with Paragon API',
        details: paragonError.message 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('Get Paragon user API error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
