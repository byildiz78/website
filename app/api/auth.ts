import jwt from 'jsonwebtoken';

// JWT token doğrulama fonksiyonu
export const verifyToken = (token: string): boolean => {
  try {
    // JWT secret key
    const secretKey = 'robotpos-admin-secret-key';
    
    // Token doğrulama
    const decoded = jwt.verify(token, secretKey);
    return !!decoded;
  } catch (error) {
    console.error('Token doğrulama hatası:', error);
    return false;
  }
};
