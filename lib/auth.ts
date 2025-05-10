import jwt from 'jsonwebtoken';

// JWT secret key from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'robotpos-admin-secret-key';

// JWT token oluştur
export function createToken(username: string): string {
  return jwt.sign(
    { username },
    JWT_SECRET,
    { expiresIn: '24h' } // 24 saat geçerli
  );
}

// JWT token doğrula
export async function verifyToken(token: string): Promise<boolean> {
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch (error) {
    console.error('Token doğrulama hatası:', error);
    return false;
  }
}

// Admin kullanıcı bilgilerini kontrol et
export function validateCredentials(username: string, password: string): boolean {
  // Gerçek uygulamada bu bilgiler veritabanında saklanmalıdır
  // Şifre hash'lenmiş olarak saklanmalıdır
  const validUsername = process.env.ADMIN_USER_NAME;
  const validPassword = process.env.ADMIN_PASSWORD;
  
  if (!validUsername || !validPassword) {
    console.error('Admin kullanıcı adı veya şifre environment variable\'larda tanımlanmamış');
    return false;
  }

  return username === validUsername && password === validPassword;
}
