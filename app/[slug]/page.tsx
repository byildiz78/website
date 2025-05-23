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
    original_url: string;
    local_path: string;
  }[];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [processedContent, setProcessedContent] = useState<string>('');

  // List of language codes to ignore for blog post fetching
  const ignoredSlugs = ["en", "ru", "az", "ar", "tr"]; // Add any other language codes ConveyThis might use

  useEffect(() => {
    // If the slug is an ignored language code, don't treat it as a blog post
    if (ignoredSlugs.includes(params.slug)) {
      setLoading(false);
      // Instead of setting an error that renders UI, we'll prepare to return null or a minimal loader.
      // We can set a specific state if needed, or just let the render condition handle it.
      // For now, we'll rely on the loading state and a check in the return statement.
      return;
    }

    async function fetchBlogPost() {
      try {
        const response = await fetch('/files/blog_posts.json');
        const data = await response.json();
        
        // Slug'a göre blog yazısını bul
        const foundPost = data.find((p: BlogPost) => p.slug === params.slug);
        
        if (foundPost) {
          setPost(foundPost);
          
          // İçeriği işle ve düzenle
          let content = foundPost.content;
          
          // İçeriği paragraflar halinde düzenle
          content = content.replace(/\n\n/g, '</p><p>');
          content = content.replace(/\n/g, '<br />');
          
          // HTML etiketlerini düzenle - artık CSS sınıflarını globals.css'ten alıyoruz
          // Başlıklar için özel sınıf eklemeye gerek yok, blog-content içinde tanımlı
          
          // Resimleri düzenle
          content = content.replace(/<img([^>]*)src="([^"]*)"([^>]*)>/gi, 
            (match: string, before: string, src: string, after: string) => {
              // Eğer resim blog-images klasöründen geliyorsa, düzgün bir şekilde göster
              if (src.includes('/images/blog-images/')) {
                return `<figure class="my-8"><img${before}src="${src}"${after} alt="Blog görseli" /></figure>`;
              }
              return match; // Diğer resimleri olduğu gibi bırak
            }
          );
          
          // Boş paragrafları temizle
          content = `<div class="blog-content">${content}</div>`;
          content = content.replace(/<p[^>]*>\s*<\/p>/gi, '');
          content = content.replace(/<p[^>]*><br \/>\s*<\/p>/gi, '');
          
          setProcessedContent(content);
        } else {
          setError('Blog yazısı bulunamadı');
        }
      } catch (error) {
        console.error('Blog yazısı yüklenirken hata oluştu:', error);
        setError('Blog yazısı yüklenirken bir hata oluştu');
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPost();
  }, [params.slug]);

  // Tarih formatını düzenleme
  function formatDate(dateString: string) {
    try {
      const date = new Date(dateString);
      return format(date, 'd MMMM yyyy', { locale: tr });
    } catch (error) {
      return dateString;
    }
  }

  // If it's an ignored slug, return null to let ConveyThis control the page
  if (ignoredSlugs.includes(params.slug)) {
    return null; // Or a <div className="min-h-screen"></div> to provide a basic layout container
  }

  if (loading) {
    return (
      <Container className="py-12">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Container>
    );
  }

  if (error || !post) {
    return (
      <Container className="py-12">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {error || 'Blog yazısı bulunamadı'}
          </h2>
          <p className="mb-8">Aradığınız içerik bulunamadı veya kaldırılmış olabilir.</p>
          <a 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Blog Sayfasına Dön
          </a>
        </div>
      </Container>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHeader 
        title={post.title}
        description={`${formatDate(post.date)}`}
        centered
        className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      />
      
      <Container className="py-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 lg:p-10 animate-fadeIn">
          {/* Ana görsel */}
          {post.images && post.images.length > 0 && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.images[0].local_path}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}
          
          {/* Blog içeriği */}
          <article className="mx-auto max-w-4xl">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
            
            <div className="mt-12 pt-6 border-t border-gray-200">
              <a href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Tüm Blog Yazılarına Dön
              </a>
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
}
