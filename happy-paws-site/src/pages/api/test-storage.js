/**
 * Test API endpoint for storage functionality
 */

import { getOrganization, setOrganization, debugStorage } from '../utils/storage.js';

export async function GET({ request }) {
    try {
        const url = new URL(request.url);
        const action = url.searchParams.get('action') || 'get';
        const orgId = url.searchParams.get('orgId') || '3';
        
        let result;
        
        switch (action) {
            case 'get':
                result = getOrganization(orgId);
                break;
                
            case 'set':
                const testData = {
                    ein: '99-9999999',
                    name: 'Test Organization Update'
                };
                result = setOrganization(orgId, testData);
                break;
                
            case 'debug':
                debugStorage();
                result = { message: 'Debug info logged to console' };
                break;
                
            default:
                result = { error: 'Invalid action' };
        }
        
        return new Response(JSON.stringify({
            success: true,
            action,
            orgId,
            result
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        
    } catch (error) {
        console.error('Storage test error:', error);
        
        return new Response(JSON.stringify({
            success: false,
            error: error.message,
            stack: error.stack
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}

export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
