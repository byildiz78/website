"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { BlogPost } from '@/types/blog';

export default function AdminBlogPage() {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        setLoading(true);
        setError(null);
        
        // JWT token'ı localStorage'dan al
        const token = localStorage.getItem('adminToken');
        
        if (!token) {
          // Token yoksa login sayfasına yönlendir
          router.push('/admin');
          return;
        }
        
        // API'den blog yazılarını getir
        const response = await fetch('/api/admin/blog', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Blog yazıları yüklenirken bir hata oluştu');
        }
        
        const data = await response.json();
        console.log('API yanıtı:', data);
        
        if (data && Array.isArray(data.posts)) {
          setBlogPosts(data.posts);
        } else {
          console.warn('API\'den gelen veri yapısı beklenen formatta değil:', data);
          setBlogPosts([]);
        }
      } catch (error) {
        console.error('Blog yazıları yüklenirken hata oluştu:', error);
        setError('Blog yazıları yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, [router]);

  function formatDate(dateString: string) {
    try {
      return format(new Date(dateString), 'd MMMM yyyy', { locale: tr });
    } catch (error) {
      return dateString;
    }
  }
  
  function openModal(post: BlogPost) {
    console.log('Modal açılıyor:', post.title);
    setSelectedPost(post);
    setShowModal(true);
  }
  
  function closeModal() {
    setShowModal(false);
    setSelectedPost(null);
  }
  
  async function handleDelete(slug: string) {
    if (confirm('Bu blog yazısını silmek istediğinize emin misiniz?')) {
      try {
        const token = localStorage.getItem('adminToken');
        
        if (!token) {
          router.push('/admin');
          return;
        }
        
        const response = await fetch(`/api/admin/blog/${slug}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Blog yazısı silinirken bir hata oluştu');
        }
        
        setBlogPosts(blogPosts.filter(post => post.slug !== slug));
        closeModal();
        alert('Blog yazısı başarıyla silindi');
      } catch (error) {
        console.error('Blog yazısı silinirken hata oluştu:', error);
        alert('Blog yazısı silinirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
    }
  }

  // Basit bir modal bileşeni
  const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
    if (!isOpen) return null;
    
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Blog Yazıları</h1>
      
      {error && (
        <div className="bg-red-100 p-4 mb-6 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      <div className="mb-6">
        <Link 
          href="/admin/blog/yeni" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Yeni Blog Yazısı Ekle
        </Link>
      </div>
      
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Yükleniyor...</p>
        </div>
      ) : (
        <div>
          <p className="mb-4 font-bold">Toplam {blogPosts.length} blog yazısı bulundu.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="border p-4 rounded bg-white shadow cursor-pointer hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg font-bold truncate">{post.title}</h2>
                <p className="text-gray-600 text-sm">{formatDate(post.date)}</p>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                  {post.content && typeof post.content === 'string' 
                    ? post.content.replace(/<[^>]+>/g, '').substring(0, 100) + '...' 
                    : 'İçerik yok'}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => openModal(post)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                  >
                    Detayları Görüntüle
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Modal */}
          {showModal && selectedPost && (
            <Modal isOpen={showModal} onClose={closeModal}>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{selectedPost.title}</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{formatDate(selectedPost.date)}</p>
              
              <div className="prose max-w-none mb-6 border-t border-b py-4">
                {selectedPost.content && typeof selectedPost.content === 'string' 
                  ? <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                  : <p>İçerik yok</p>}
              </div>
              
              <div className="flex space-x-4 mt-4">
                <button 
                  onClick={() => router.push(`/admin/blog/duzenle/${selectedPost.slug}`)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Düzenle
                </button>
                <button 
                  onClick={() => handleDelete(selectedPost.slug)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Sil
                </button>
                <button 
                  onClick={closeModal}
                  className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
                >
                  Kapat
                </button>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}
