import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Hardcoded credentials for development - in production, use environment variables securely
const ADMIN_USERNAME = 'robotpos';
const ADMIN_PASSWORD = '123!';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    console.log('Login attempt for user:', username);

    // Check if credentials match
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Create a JWT token
      const token = jwt.sign(
        { username, role: 'admin' },
        'robotpos-admin-secret-key',
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
