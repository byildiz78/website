import { NextResponse } from 'next/server';

// Desteklenen diller
const languages = ['tr', 'en', 'ru', 'ar'];
const defaultLanguage = 'tr';

// Ana URL'yi ayarla
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.robotpos.com';

export async function GET() {
  try {
    // XML başlangıcı
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
    
    // Örnek sayfa
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}</loc>\n`;
    
    // Alternatif dil bağlantıları
    languages.forEach(lang => {
      const langPrefix = lang === defaultLanguage ? '' : `/${lang}`;
      xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${langPrefix}" />\n`;
    });
    
    const today = new Date().toISOString().split('T')[0];
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '  </url>\n';
    
    // XML sonlandırma
    xml += '</urlset>';
    
    // XML içeriğini döndür
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Test sitemap oluşturulurken hata:', error);
    return new NextResponse('Test sitemap oluşturulurken hata oluştu', { status: 500 });
  }
}
