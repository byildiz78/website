import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Get credentials from environment variables
const ADMIN_USERNAME = process.env.ADMIN_USER_NAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Check if environment variables are set
if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
  console.error('Admin kullanıcı adı veya şifre environment variable\'larda tanımlanmamış');
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    console.log('Login attempt for user:', username);

    // Check if credentials match
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Create a JWT token
      const token = jwt.sign(
        { username, role: 'admin' },
        process.env.JWT_SECRET || 'robotpos-admin-secret-key',
        { expiresIn: '24h' }
      );

      return NextResponse.json({ success: true, token });
    } else {
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
