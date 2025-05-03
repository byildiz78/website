'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/ui/page-header';
import Link from 'next/link'; // Link bileşeni için gerekli import eklendi

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

  useEffect(() => {
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
          
          // Başlıkları düzenle
          content = content.replace(/<h([1-6])>(.*?)<\/h([1-6])>/g, 
            (match: string, openLevel: string, text: string, closeLevel: string) => {
              return `<h${openLevel} class="text-2xl font-bold mt-6 mb-4">${text}</h${closeLevel}>`;
            }
          );
          
          // Listeleri düzenle
          content = content.replace(/<ul>([\s\S]*?)<\/ul>/g, 
            (match: string, items: string) => {
              return `<ul class="list-disc pl-6 my-4">${items}</ul>`;
            }
          );
          
          content = content.replace(/<li>(.*?)<\/li>/g, 
            (match: string, text: string) => {
              return `<li class="mb-2">${text}</li>`;
            }
          );
          
          // Resimleri düzenle
          content = content.replace(/<img(.*?)src="([^"]*)"(.*?)>/g, 
            (match: string, before: string, src: string, after: string) => {
              // Eğer resim blog-images klasöründen geliyorsa, düzgün bir şekilde göster
              if (src.includes('/images/blog-images/')) {
                return `<div class="my-8"><img${before}src="${src}"${after} class="rounded-lg mx-auto max-w-full" /></div>`;
              }
              return match; // Diğer resimleri olduğu gibi bırak
            }
          );
          
          // Paragrafları düzenle
          content = `<p>${content}</p>`;
          content = content.replace(/<p><\/p>/g, '');
          
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
            Blog Ana Sayfasına Dön
          </a>
        </div>
      </Container>
    );
  }

  return (
    <>
      <PageHeader title={post.title} description="" />
      
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-gray-500">{formatDate(post.date)}</p>
          </div>
          
          {post.images && post.images.length > 0 && (
            <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden shadow-md">
              <Image
                src={post.images[0].local_path}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <article className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-sm">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </article>
          
          {/* Diğer resimler varsa onları da göster */}
          {post.images && post.images.length > 1 && (
            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">İlgili Görseller</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={image.local_path}
                      alt={`${post.title} - Görsel ${index + 2}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
              </svg>
              Tüm Blog Yazılarına Dön
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
