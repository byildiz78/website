'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Container } from '../../../components/ui/container';
import { PageHeader } from '../../../components/ui/page-header';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  images: {
    local_path: string;
  }[];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [iframeHeight, setIframeHeight] = useState(500); // Varsayılan yükseklik
  
  // iframe'den gelen mesajları dinle
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Mesajın tipini ve yüksekliğini kontrol et
      if (event.data && event.data.type === 'resize' && event.data.height) {
        setIframeHeight(event.data.height);
      }
    };
    
    // Mesaj dinleyicisini ekle
    window.addEventListener('message', handleMessage);
    
    // Temizlik fonksiyonu
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        // Dosya adında boşluk olduğu için encodeURIComponent kullanıyoruz
        const response = await fetch('/files/blog_posts%20new.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Blog verileri yüklendi:', data.length, 'yazı');
        
        // Slug'a göre blog yazısını bul
        const foundPost = data.find((p: BlogPost) => p.slug === params.slug);
        
        if (foundPost) {
          console.log('Blog yazısı bulundu:', foundPost.title);
          setPost(foundPost);
        } else {
          console.error('Blog yazısı bulunamadı, slug:', params.slug);
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

  // HTML içeriğini güvenli bir şekilde render etme
  function renderHtmlContent(content: string) {
    return { __html: content };
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
        <div className="flex flex-col justify-center items-center min-h-[400px]">
          <h2 className="text-2xl font-bold text-red-500 mb-4">{error || 'Blog yazısı bulunamadı'}</h2>
          <a href="/blog_new" className="text-blue-600 hover:text-blue-800">
            Blog sayfasına dön
          </a>
        </div>
      </Container>
    );
  }

  return (
    <>
      <PageHeader 
        title={post.title}
        centered
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      />
      
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Blog başlık ve tarih */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="text-gray-500">{formatDate(post.date)}</div>
          </div>
          
          {/* Kapak resmi */}
          {post.images && post.images.length > 0 && (
            <div className="relative w-full h-[400px] mb-8">
              <Image
                src={post.images[0].local_path}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}
          
          {/* Blog içeriği - Güvenli bir şekilde izole edilmiş */}
          <div className="blog-content-container relative border rounded-lg overflow-hidden mb-8">
            <iframe 
              srcDoc={`
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>
                    html, body {
                      height: auto;
                      overflow: visible;
                    }
                    body {
                      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                      line-height: 1.6;
                      color: #333;
                      padding: 20px;
                      margin: 0;
                    }
                    img {
                      max-width: 100%;
                      height: auto;
                      border-radius: 8px;
                    }
                    h1, h2, h3, h4, h5, h6 {
                      margin-top: 1.5em;
                      margin-bottom: 0.5em;
                      font-weight: 600;
                      line-height: 1.25;
                    }
                    p {
                      margin-bottom: 1.5em;
                    }
                    a {
                      color: #3182ce;
                      text-decoration: none;
                    }
                    a:hover {
                      text-decoration: underline;
                    }
                    ul, ol {
                      padding-left: 1.5em;
                      margin-bottom: 1.5em;
                    }
                    li {
                      margin-bottom: 0.5em;
                    }
                    blockquote {
                      border-left: 4px solid #e2e8f0;
                      padding-left: 1em;
                      margin-left: 0;
                      color: #4a5568;
                    }
                    pre {
                      background-color: #f7fafc;
                      padding: 1em;
                      border-radius: 8px;
                      overflow-x: auto;
                    }
                    code {
                      background-color: #f7fafc;
                      padding: 0.2em 0.4em;
                      border-radius: 3px;
                      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
                    }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      margin-bottom: 1.5em;
                    }
                    th, td {
                      padding: 0.5em;
                      border: 1px solid #e2e8f0;
                    }
                    th {
                      background-color: #f7fafc;
                    }
                  </style>
                  <script>
                    // Sayfa yüklendiğinde ve içerik değiştiğinde ebeveyn pencereye yüksekliği bildir
                    window.addEventListener('load', sendHeight);
                    window.addEventListener('resize', sendHeight);
                    
                    // Görsel yüklendiğinde yüksekliği güncelle
                    document.addEventListener('DOMContentLoaded', function() {
                      const images = document.querySelectorAll('img');
                      let loadedImages = 0;
                      
                      if (images.length === 0) {
                        // Görsel yoksa hemen yüksekliği gönder
                        sendHeight();
                      } else {
                        // Tüm görseller yüklendiğinde yüksekliği güncelle
                        images.forEach(img => {
                          if (img.complete) {
                            loadedImages++;
                            if (loadedImages === images.length) {
                              sendHeight();
                            }
                          } else {
                            img.addEventListener('load', function() {
                              loadedImages++;
                              if (loadedImages === images.length) {
                                sendHeight();
                              }
                            });
                            
                            img.addEventListener('error', function() {
                              loadedImages++;
                              if (loadedImages === images.length) {
                                sendHeight();
                              }
                            });
                          }
                        });
                      }
                    });
                    
                    // Mutasyon gözlemcisi - DOM değişikliklerini izle
                    const observer = new MutationObserver(function() {
                      // Biraz gecikme ile yüksekliği güncelle (DOM değişikliklerinin tamamlanması için)
                      setTimeout(sendHeight, 100);
                    });
                    
                    observer.observe(document.documentElement, {
                      childList: true,
                      subtree: true,
                      attributes: true,
                      characterData: true
                    });
                    
                    function sendHeight() {
                      const docHeight = Math.max(
                        document.body.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.scrollHeight,
                        document.documentElement.offsetHeight
                      );
                      window.parent.postMessage({ type: 'resize', height: docHeight }, '*');
                    }
                  </script>
                </head>
                <body>
                  ${post.content}
                </body>
                </html>
              `}
              className="w-full border-0"
              style={{ height: `${iframeHeight}px`, width: '100%', overflow: 'hidden' }}
              title={post.title}
              sandbox="allow-same-origin allow-scripts allow-popups"
              loading="lazy"
              scrolling="no"
            />
          </div>
          
          {/* Diğer görseller */}
          {post.images && post.images.length > 1 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Görseller</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-[250px]">
                    <Image
                      src={image.local_path}
                      alt={`${post.title} - Görsel ${index + 2}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Geri dönüş linki */}
          <div className="mt-12">
            <a 
              href="/blog_new" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
              </svg>
              Blog Sayfasına Dön
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
