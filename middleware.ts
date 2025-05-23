import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// IP bazlı istek sayaçları
const ipRequestCounts = new Map<string, { count: number, timestamp: number }>();
const RATE_LIMIT = 100; // 5 dakika içinde maksimum istek sayısı
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 dakika (milisaniye cinsinden)

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const response = NextResponse.next({ request: { headers: new Headers(request.headers) } });
  
  // Güvenlik başlıkları ekle
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  
  // Çok daha esnek Content Security Policy ekle - Tüm harici scriptlere izin ver
  response.headers.set(
    'Content-Security-Policy',
    "default-src * 'self'; script-src * 'self' 'unsafe-inline' 'unsafe-eval'; style-src * 'self' 'unsafe-inline'; img-src * 'self' data: blob:; font-src * 'self' data:; connect-src * 'self'; frame-src * 'self'; object-src 'none';"
  );
  
  // API istekleri için rate limiting
  if (pathname.startsWith('/api/')) {
    const ip = request.ip || 'unknown';
    const now = Date.now();
    
    // IP için mevcut istek sayısını al veya yeni oluştur
    const ipData = ipRequestCounts.get(ip) || { count: 0, timestamp: now };
    
    // Zaman penceresi dışındaysa sayacı sıfırla
    if (now - ipData.timestamp > RATE_LIMIT_WINDOW) {
      ipData.count = 0;
      ipData.timestamp = now;
    }
    
    // İstek sayısını artır
    ipData.count += 1;
    ipRequestCounts.set(ip, ipData);
    
    // Rate limit aşıldıysa 429 hatası döndür
    if (ipData.count > RATE_LIMIT) {
      return new NextResponse(JSON.stringify({ error: 'Too many requests, please try again later.' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '300' // 5 dakika sonra tekrar deneyin
        }
      });
    }
  }

  // Sitemap.xml için doğru içerik türünü ve önbellek kontrolü başlıklarını ayarla
  if (pathname === '/sitemap.xml' || pathname.endsWith('/sitemap.xml')) {
    response.headers.set('Content-Type', 'application/xml; charset=utf-8');
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
    // API'den gelen yanıtı döndür
    return response;
  }

  return response;
}

// Middleware'in çalışacağı yolları belirt
export const config = {
  matcher: [
    // Match all paths except for static assets, images, and favicon
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
