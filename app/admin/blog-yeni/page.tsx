"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  images: {
    local_path: string;
  }[];
}

export default function AdminBlogYeniPage() {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState<BlogPost | null>(null);

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
        
        // API üzerinden blog yazılarını getir
        const response = await fetch('/api/admin/blog-yeni', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Blog yazıları yüklenirken bir hata oluştu');
        }
        
        const data = await response.json();
        console.log('API yanıtı:', data);
        
        if (data && data.posts && Array.isArray(data.posts)) {
          setBlogPosts(data.posts);
        } else {
          console.warn('API yanıtı beklenen formatta değil:', data);
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
    setIsEditing(false);
    setEditedPost(null);
  }
  
  function startEditing() {
    if (!selectedPost) return;
    setIsEditing(true);
    setEditedPost({...selectedPost});
  }
  
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!editedPost) return;
    
    const { name, value } = e.target;
    
    // Başlık değiştiğinde otomatik slug oluştur
    if (name === 'title') {
      setEditedPost({
        ...editedPost,
        title: value,
        slug: generateSlug(value)
      });
    } else {
      setEditedPost({
        ...editedPost,
        [name]: value
      });
    }
  }
  
  // Görsel yükleme durumu
  const [imageUploading, setImageUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Görsel ekleme
  function addImage() {
    if (!editedPost) return;
    
    setEditedPost({
      ...editedPost,
      images: [...(editedPost.images || []), { local_path: '' }]
    });
  }

  // Görsel silme
  function removeImage(index: number) {
    if (!editedPost || !editedPost.images) return;
    
    const newImages = [...editedPost.images];
    newImages.splice(index, 1);
    
    setEditedPost({
      ...editedPost,
      images: newImages
    });
  }

  // Görsel değiştirme
  function handleImageChange(index: number, value: string) {
    if (!editedPost || !editedPost.images) return;
    
    const newImages = [...editedPost.images];
    newImages[index] = { local_path: value };
    
    setEditedPost({
      ...editedPost,
      images: newImages
    });
  }

  // Görsel yükleme
  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    
    // Dosya türünü kontrol et
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setUploadError('Geçersiz dosya türü. Sadece JPEG, PNG, GIF ve WEBP dosyaları kabul edilir.');
      return;
    }

    // Dosya boyutunu kontrol et (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setUploadError('Dosya boyutu çok büyük. Maksimum 5MB olabilir.');
      return;
    }

    try {
      setImageUploading(true);
      setUploadError(null);

      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/admin');
        return;
      }

      // FormData oluştur
      const formData = new FormData();
      formData.append('file', file);

      // API'ye gönder
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Görsel yüklenirken bir hata oluştu');
      }

      const data = await response.json();
      console.log('Görsel yükleme yanıtı:', data);

      // Görsel yolunu güncelle
      handleImageChange(index, data.filePath);

    } catch (error) {
      console.error('Görsel yükleme hatası:', error);
      setUploadError(`Görsel yüklenirken bir hata oluştu: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`);
    } finally {
      setImageUploading(false);
    }
  }
  
  // Slug oluşturma fonksiyonu
  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  
  async function handleSaveEdit() {
    if (!editedPost) return;
    
    try {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin');
        return;
      }
      
      // API üzerinden blog yazısını güncelle
      const response = await fetch(`/api/admin/blog-yeni/${selectedPost?.slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editedPost)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Blog yazısı güncellenirken bir hata oluştu');
      }
      
      const data = await response.json();
      console.log('Güncelleme API yanıtı:', data);
      
      // State'i güncelle
      setBlogPosts(blogPosts.map(post => 
        post.slug === editedPost.slug ? editedPost : post
      ));
      
      setIsEditing(false);
      setSelectedPost(editedPost);
      alert('Blog yazısı başarıyla güncellendi');
    } catch (error) {
      console.error('Blog yazısı güncellenirken hata oluştu:', error);
      alert(`Blog yazısı güncellenirken bir hata oluştu: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`);
    }
  }
  
  async function handleDelete(slug: string) {
    if (confirm('Bu blog yazısını silmek istediğinize emin misiniz?')) {
      try {
        const token = localStorage.getItem('adminToken');
        
        if (!token) {
          router.push('/admin');
          return;
        }
        
        // API üzerinden blog yazısını sil
        const response = await fetch(`/api/admin/blog-yeni/${slug}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Blog yazısı silinirken bir hata oluştu');
        }
        
        const data = await response.json();
        console.log('Silme API yanıtı:', data);
        
        // State'i güncelle
        setBlogPosts(blogPosts.filter(post => post.slug !== slug));
        closeModal();
        alert('Blog yazısı başarıyla silindi');
      } catch (error) {
        console.error('Blog yazısı silinirken hata oluştu:', error);
        alert(`Blog yazısı silinirken bir hata oluştu: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`);
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
      <h1 className="text-2xl font-bold mb-6">Blog Yeni Yazıları</h1>
      
      {error && (
        <div className="bg-red-100 p-4 mb-6 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      <div className="mb-6 flex gap-4">
        <Link 
          href="/admin/blog" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Standart Blog Yönetimine Dön
        </Link>
        <Link 
          href="/admin/blog-yeni/yeni" 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
        </div>
      )}
      
      {/* Blog Detay Modalı */}
      <Modal isOpen={showModal} onClose={closeModal}>
        {selectedPost && !isEditing && (
          <div>
            <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
            <p className="text-gray-600 mb-4">{formatDate(selectedPost.date)}</p>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">İçerik:</h3>
              <div className="p-4 bg-gray-50 rounded border">
                <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">Görseller:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedPost.images && selectedPost.images.length > 0 ? (
                  selectedPost.images.map((image, index) => (
                    <div key={index} className="border p-2 rounded">
                      <p className="text-sm mb-2 truncate">{image.local_path}</p>
                      <div className="relative h-40">
                        <img 
                          src={image.local_path} 
                          alt={`Görsel ${index + 1}`}
                          className="w-full h-full object-cover rounded"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/blog-placeholder.jpg';
                          }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Görsel bulunamadı</p>
                )}
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={startEditing}
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
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Kapat
              </button>
            </div>
          </div>
        )}
        
        {/* Düzenleme Formu */}
        {isEditing && editedPost && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Blog Yazısını Düzenle</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Başlık:</label>
              <input
                type="text"
                name="title"
                value={editedPost.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Slug:</label>
              <input
                type="text"
                name="slug"
                value={editedPost.slug}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                URL-dostu bir slug otomatik oluşturulur, ancak isterseniz düzenleyebilirsiniz.
              </p>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Tarih:</label>
              <input
                type="text"
                name="date"
                value={editedPost.date}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Format: YYYY-MM-DD HH:MM:SS (örn: 2025-05-04 09:15:00)
              </p>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">İçerik (HTML):</label>
              <textarea
                name="content"
                value={editedPost.content}
                onChange={handleInputChange}
                rows={15}
                className="w-full p-2 border rounded font-mono text-sm"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                HTML formatında içerik girebilirsiniz. Markdown formatında başlıklar için ## kullanabilirsiniz.
              </p>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Görseller:</label>
              
              {uploadError && (
                <div className="bg-red-100 p-3 mb-3 rounded text-red-700 text-sm">
                  {uploadError}
                </div>
              )}
              
              {editedPost.images && editedPost.images.map((image, index) => (
                <div key={index} className="flex flex-col mb-4 border p-4 rounded bg-gray-50">
                  <div className="flex items-center mb-2">
                    <input
                      type="text"
                      value={image.local_path}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      className="flex-grow p-2 border rounded"
                      placeholder="Görsel yolu (örn: /images/blog-images/gorsel.jpg)"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="ml-2 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                      disabled={editedPost.images.length <= 1}
                    >
                      Sil
                    </button>
                  </div>
                  
                  <div className="flex items-center mt-2">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/gif,image/webp"
                      onChange={(e) => handleImageUpload(e, index)}
                      className="hidden"
                      id={`edit-image-upload-${index}`}
                      disabled={imageUploading}
                    />
                    <label 
                      htmlFor={`edit-image-upload-${index}`}
                      className={`cursor-pointer bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 ${imageUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {imageUploading ? 'Yükleniyor...' : 'Görsel Yükle'}
                    </label>
                    
                    {image.local_path && (
                      <div className="ml-4 flex-grow">
                        <div className="relative h-20 w-20 overflow-hidden rounded border">
                          <img 
                            src={image.local_path} 
                            alt="Görsel Önizleme" 
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/blog-placeholder.jpg';
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addImage}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Yeni Görsel Ekle
              </button>
              
              <p className="text-sm text-gray-500 mt-1">
                Görseller için dosya yükleyebilir veya mevcut görsel yollarını belirtebilirsiniz. İlk görsel kapak resmi olarak kullanılır.
              </p>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={handleSaveEdit}
                className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 disabled:bg-gray-400"
              >
                Kaydet
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedPost(null);
                }}
                className="bg-gray-300 text-gray-800 px-6 py-3 rounded hover:bg-gray-400"
              >
                İptal
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
