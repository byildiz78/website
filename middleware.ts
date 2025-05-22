import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';

// IP bazlı istek sayaçları
const ipRequestCounts = new Map<string, { count: number, timestamp: number }>();
const RATE_LIMIT = 100; // 5 dakika içinde maksimum istek sayısı
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 dakika (milisaniye cinsinden)

const SUPPORTED_LANGUAGES = ['en', 'ru', 'az', 'ar']; // Default language 'tr' is not included
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  let { pathname } = request.nextUrl;
  const originalPathname = pathname; // Keep original for specific checks if needed later

  // Check if the pathname starts with a supported language code
  const firstSegment = pathname.split('/')[1];
  if (SUPPORTED_LANGUAGES.includes(firstSegment) && !PUBLIC_FILE.test(pathname)) {
    // Construct the new path without the language code
    const newPathname = pathname.substring(firstSegment.length + 1) || '/';
    const url = request.nextUrl.clone();
    url.pathname = newPathname;
    // Update pathname for subsequent logic in this middleware
    pathname = newPathname; 
    // Rewrite the URL for Next.js routing, but keep the browser URL intact
    // IMPORTANT: We create a new NextResponse for the rewrite and then copy existing headers to it later
    // This is because we might return early for sitemaps, etc.
    // For now, let's just modify the request.nextUrl.pathname for internal routing
    // and let the main response be constructed later.
    // This approach is simpler if we don't need to return immediately after rewrite.
    request.nextUrl.pathname = newPathname;
  }

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
  // Use the potentially modified pathname for API checks
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

  // Sitemap.xml için doğru içerik türünü ayarla
  // Use the originalPathname for sitemap checks as sitemaps shouldn't have lang prefix issues
  if (originalPathname === '/sitemap.xml' || originalPathname.endsWith('/sitemap.xml')) {
    response.headers.set('Content-Type', 'application/xml');
    return response;
  }

  // Test-sitemap.xml için doğru içerik türünü ayarla
  if (originalPathname === '/test-sitemap.xml' || originalPathname.endsWith('/test-sitemap.xml')) {
    response.headers.set('Content-Type', 'application/xml');
    return response;
  }

  // If a rewrite happened, we need to ensure NextResponse.rewrite is used if we were to return early.
  // However, since we modify request.nextUrl.pathname and let it flow to NextResponse.next(),
  // it should be handled correctly by Next.js internal routing.
  // If the path was rewritten, the 'response' from NextResponse.next() will already be for the rewritten path.

  return response;
}

// Middleware'in çalışacağı yolları belirt
export const config = {
  matcher: [
    // Match all paths except for static assets, images, and favicon
    '/((?!_next/static|_next/image|favicon.ico).*)',
    // Explicitly include API routes if not covered by the general matcher for some reason
    // (though the above should cover them if they don't have extensions)
    // '/api/:path*',
    // Sitemaps are already covered by the general matcher as they don't have extensions
    // '/sitemap.xml',
    // '/test-sitemap.xml'
  ],
};
