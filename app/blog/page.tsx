'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/files/blog_posts.json');
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
    // HTML etiketlerini temizle
    const plainText = content.replace(/<[^>]+>/g, ' ');
    // Fazla boşlukları temizle
    const cleanText = plainText.replace(/\s+/g, ' ').trim();
    // Belirli uzunlukta özet oluştur
    return cleanText.length > maxLength 
      ? cleanText.substring(0, maxLength) + '...' 
      : cleanText;
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

  return (
    <>
      <PageHeader 
        title="Blog" 
        description="Restoran ve kafe yönetimi hakkında bilgiler ve sektörel makaleler"
        centered
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white" 
      />
      
      <Container className="py-12">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Öne çıkan yazı - en son yazı */}
            {blogPosts.length > 0 && (
              <div className="featured-blog-post h-[500px] animate-fadeIn">
                <Image
                  src={getCoverImage(blogPosts[0])}
                  alt={blogPosts[0].title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                <div className="featured-blog-overlay"></div>
                <div className="featured-blog-content">
                  <div className="featured-blog-date">
                    {formatDate(blogPosts[0].date)}
                  </div>
                  <h2 className="featured-blog-title">
                    {blogPosts[0].title}
                  </h2>
                  <p className="featured-blog-excerpt">
                    {getExcerpt(blogPosts[0].content, 200)}
                  </p>
                  <Link 
                    href={`/${blogPosts[0].slug}`} 
                    className="mt-4 inline-flex items-center px-6 py-2 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors"
                  >
                    Devamını Oku
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            )}
            
            {/* Diğer yazılar */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Tüm Yazılar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation in-view">
                {blogPosts.slice(1).map((post) => (
                  <article key={post.slug} className="blog-card h-full flex flex-col">
                    <Link href={`/${post.slug}`} className="blog-card-image-container">
                      <Image
                        src={getCoverImage(post)}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="blog-card-image"
                      />
                    </Link>
                    <div className="blog-card-content flex-grow flex flex-col">
                      <div className="blog-card-date">
                        {formatDate(post.date)}
                      </div>
                      <Link href={`/${post.slug}`}>
                        <h3 className="blog-card-title">{post.title}</h3>
                      </Link>
                      <p className="blog-card-excerpt flex-grow">
                        {getExcerpt(post.content)}
                      </p>
                      <Link 
                        href={`/${post.slug}`} 
                        className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Devamını Oku
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
