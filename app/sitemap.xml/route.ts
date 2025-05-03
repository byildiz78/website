import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Blog yazısı tipi tanımı
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  images?: {
    original_url: string;
    local_path: string;
  }[];
}

// Desteklenen diller
const languages = ['tr', 'en', 'ru', 'ar'];
const defaultLanguage = 'tr';

// Ana URL'yi ayarla
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.robotpos.com';

// Statik sayfalar
const staticPages = [
  '', // Ana sayfa
  '/hakkimizda',
  '/iletisim',
  '/referanslar',
  '/sss',
  '/demo-talebi',
  '/blog',
  '/urunler',
  '/urunler/yazilim-urunleri/satis-noktasi-yonetimi',
  '/urunler/yazilim-urunleri/stok-maliyet-yonetimi',
  '/urunler/yazilim-urunleri/sadakat-ve-kazanc-arttirici-cozumler',
  '/urunler/yazilim-urunleri/zincir-magaza-yonetimi',
  '/urunler/donanim-urunleri/dokunmatik-terminal',
  '/urunler/donanim-urunleri/mobil-terminaller',
  '/urunler/donanim-urunleri/self-servis-kiosk',
  '/urunler/donanim-urunleri/okc-urunleri',
  '/robotpos-cozum-uretir/qr-menu-siparis',
];

export async function GET() {
  try {
    // Blog yazılarını al
    const blogPostsPath = path.join(process.cwd(), 'public', 'files', 'blog_posts.json');
    const blogPostsData = fs.readFileSync(blogPostsPath, 'utf8');
    const blogPosts = JSON.parse(blogPostsData) as BlogPost[];
    
    // XML başlangıcı
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
    
    // Statik sayfaları ekle
    staticPages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${page}</loc>\n`;
      
      // Alternatif dil bağlantıları
      languages.forEach(lang => {
        const langPrefix = lang === defaultLanguage ? '' : `/${lang}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${langPrefix}${page}" />\n`;
      });
      
      const today = new Date().toISOString().split('T')[0];
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += '  </url>\n';
    });
    
    // Blog yazılarını ekle
    blogPosts.forEach((post: BlogPost) => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}/${post.slug}</loc>\n`;
      
      // Alternatif dil bağlantıları (blog yazıları için)
      languages.forEach(lang => {
        const langPrefix = lang === defaultLanguage ? '' : `/${lang}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${langPrefix}/${post.slug}" />\n`;
      });
      
      // Blog yazısı tarihi
      const lastmod = new Date(post.date).toISOString().split('T')[0];
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += '    <changefreq>monthly</changefreq>\n';
      xml += '    <priority>0.7</priority>\n';
      xml += '  </url>\n';
    });
    
    // XML sonlandırma
    xml += '</urlset>';
    
    // XML içeriğini döndür
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Sitemap oluşturulurken hata:', error);
    return new NextResponse(`Sitemap oluşturulurken hata oluştu`, { status: 500 });
  }
}
