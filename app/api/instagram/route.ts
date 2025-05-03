import { NextResponse } from 'next/server';
import { getServerConfig } from '../../../lib/config';

export async function GET(request: Request) {
  try {
    // Get the URL parameters
    const { searchParams } = new URL(request.url);
    const fields = searchParams.get('fields') || 'id,media_url,permalink,caption,timestamp';
    const limit = searchParams.get('limit') || '12';
    
    // Get the access token from environment variable using our config utility
    const { instagramAccessToken } = getServerConfig();
    
    if (!instagramAccessToken) {
      console.error('Instagram access token is missing');
      return NextResponse.json(
        { 
          error: 'Instagram access token is not configured',
          debug: { 
            envVarExists: typeof process.env.INSTAGRAM_ACCESS_TOKEN !== 'undefined'
          }
        },
        { status: 500 }
      );
    }
    
    // Log request details (for debugging)
    console.log('Instagram API request:', {
      url: `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}`,
      accessTokenLength: instagramAccessToken.length
    });
    
    // Fetch Instagram posts using the Graph API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&access_token=${instagramAccessToken}&limit=${limit}`
    );
    
    // Log response status (for debugging)
    console.log('Instagram API response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Instagram API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to fetch Instagram posts', details: errorData },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    
    // Log success (for debugging)
    console.log('Instagram API success, posts count:', data.data?.length || 0);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in Instagram API route:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        message: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
