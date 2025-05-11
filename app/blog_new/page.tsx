'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Container } from '../../components/ui/container';
import { PageHeader } from '../../components/ui/page-header';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  images: {
    local_path: string;
  }[];
}

export default function BlogNewPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/files/blog_posts new.json');
        const data = await response.json();
        
        // Tarihe göre sırala (en yeni en üstte)
        const sortedData = [...data].sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        
        // 2025-04 tarihinden sonraki blog yazılarını filtrele
        const filteredData = sortedData.filter(post => {
          const postDate = new Date(post.date);
          const filterDate = new Date('2025-04-01');
          return postDate >= filterDate;
        });
        
        setBlogPosts(filteredData);
      } catch (error) {
        console.error('Blog yazıları yüklenirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  // İçerikten ilk paragrafı çıkarma fonksiyonu
  function getExcerpt(content: string, maxLength = 150) {
    try {
      // HTML içeriğinden DOCTYPE, html, head ve style etiketlerini çıkar
      let cleanContent = content;
      
      // DOCTYPE, html, head, style ve script etiketlerini temizle
      cleanContent = cleanContent
        .replace(/<!DOCTYPE[^>]*>/g, '')
        .replace(/<html[^>]*>/g, '')
        .replace(/<\/html>/g, '')
        .replace(/<head[\s\S]*?<\/head>/g, '')
        .replace(/<style[\s\S]*?<\/style>/g, '')
        .replace(/<script[\s\S]*?<\/script>/g, '');
      
      // Body etiketlerini temizle
      cleanContent = cleanContent.replace(/<body[^>]*>|<\/body>/g, '');
      
      // Tüm HTML etiketlerini temizle
      const plainText = cleanContent.replace(/<[^>]+>/g, ' ');
      
      // Fazla boşlukları temizle
      const cleanText = plainText.replace(/\s+/g, ' ').trim();
      
      // HTML karakter referanslarını dönüştür
      const decodedText = cleanText
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
      
      // Belirli uzunlukta özet oluştur
      return decodedText.length > maxLength 
        ? decodedText.substring(0, maxLength) + '...' 
        : decodedText;
    } catch (error) {
      console.error('Blog içeriği işlenirken hata:', error);
      return content.substring(0, maxLength) + '...';
    }
  }

  // Tarih formatını düzenleme
  function formatDate(dateString: string) {
    try {
      const date = new Date(dateString);
      return format(date, 'd MMMM yyyy', { locale: tr });
    } catch (error) {
      return dateString;
    }
  }

  // Blog yazısı için kapak resmi
  function getCoverImage(post: BlogPost) {
    if (post.images && post.images.length > 0) {
      return post.images[0].local_path;
    }
    return '/images/blog-placeholder.jpg'; // Varsayılan resim
  }

  // HTML içeriğini güvenli bir şekilde render etme
  function renderHtmlContent(content: string) {
    return { __html: content };
  }

  return (
    <>
      <PageHeader 
        title="Restoran Yönetimi Makaleleri" 
        description="Restoran ve kafe yönetimi hakkında bilgiler ve sektörel makaleler"
        centered
        className="bg-gradient-to-r from-blue-600 to-white text-black" 
      />
      
      <Container className="py-12">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Tüm Blog Yazıları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation in-view">
              {blogPosts.map((post) => (
                <article key={post.slug} className="blog-card h-full flex flex-col">
                  <a href={`/blog_new/${post.slug}`} className="blog-card-image-container">
                    <Image
                      src={getCoverImage(post)}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="blog-card-image"
                    />
                  </a>
                  <div className="blog-card-content flex-grow flex flex-col">
                    <div className="blog-card-date">
                      {formatDate(post.date)}
                    </div>
                    <a href={`/blog_new/${post.slug}`}>
                      <h3 className="blog-card-title">{post.title}</h3>
                    </a>
                    <div className="blog-card-excerpt flex-grow">
                      {getExcerpt(post.content)}
                    </div>
                    <a 
                      href={`/blog_new/${post.slug}`} 
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Devamını Oku
                      <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
