import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Get credentials from environment variables
const ADMIN_USERNAME = process.env.ADMIN_USER_NAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Check if environment variables are set
if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
  console.error('Admin kullanıcı adı veya şifre environment variable\'larda tanımlanmamış');
}

// Debug: Log the environment variables (in development only)
if (process.env.NODE_ENV !== 'production') {
  console.log('Environment check - ADMIN_USER_NAME defined:', !!ADMIN_USERNAME);
  console.log('Environment check - ADMIN_PASSWORD defined:', !!ADMIN_PASSWORD);
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    console.log('Login attempt for user:', username);
    
    // Debug: Log credential comparison (without exposing actual values)
    if (process.env.NODE_ENV !== 'production') {
      console.log('Comparing credentials:');
      console.log('- Expected username:', ADMIN_USERNAME);
      console.log('- Provided username:', username);
      console.log('- Username match:', username === ADMIN_USERNAME);
      console.log('- Password match:', password === ADMIN_PASSWORD);
    }

    // Strict check for credentials - both must be defined and match exactly
    if (ADMIN_USERNAME && ADMIN_PASSWORD && 
        username === ADMIN_USERNAME && 
        password === ADMIN_PASSWORD) {
      
      // Create a JWT token with a secure secret
      const jwtSecret = process.env.JWT_SECRET || 'robotpos-admin-secret-key';
      if (!process.env.JWT_SECRET) {
        console.warn('JWT_SECRET not defined in environment, using fallback secret');
      }
      
      const token = jwt.sign(
        { username, role: 'admin' },
        jwtSecret,
        { expiresIn: '24h' }
      );

      return NextResponse.json({ success: true, token });
    } else {
      // For security, don't specify which credential was wrong
      return NextResponse.json(
        { success: false, message: 'Geçersiz kullanıcı adı veya şifre' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}
