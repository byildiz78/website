"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  images: {
    local_path: string;
  }[];
}

export default function AdminBlogYeniAddPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const [newPost, setNewPost] = useState<BlogPost>({
    title: '',
    slug: '',
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    content: '',
    images: [{ local_path: '' }]
  });

  useEffect(() => {
    // Token kontrolü
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
    }
  }, [router]);

  // Slug oluşturma fonksiyonu
  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  // Form değişikliklerini işleme
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    
    // Başlık değiştiğinde otomatik slug oluştur
    if (name === 'title') {
      setNewPost({
        ...newPost,
        title: value,
        slug: generateSlug(value)
      });
    } else {
      setNewPost({
        ...newPost,
        [name]: value
      });
    }
  }

  // Görsel yükleme durumu
  const [imageUploading, setImageUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Görsel ekleme
  function addImage() {
    setNewPost({
      ...newPost,
      images: [...newPost.images, { local_path: '' }]
    });
  }

  // Görsel silme
  function removeImage(index: number) {
    const newImages = [...newPost.images];
    newImages.splice(index, 1);
    setNewPost({
      ...newPost,
      images: newImages
    });
  }

  // Görsel değiştirme
  function handleImageChange(index: number, value: string) {
    const newImages = [...newPost.images];
    newImages[index] = { local_path: value };
    setNewPost({
      ...newPost,
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

  // Form gönderme
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Validasyon
    if (!newPost.title || !newPost.slug || !newPost.date || !newPost.content) {
      setError('Lütfen tüm alanları doldurun');
      return;
    }
    
    // Boş görselleri temizle
    const filteredImages = newPost.images.filter(img => img.local_path.trim() !== '');
    
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin');
        return;
      }
      
      // API üzerinden yeni blog yazısı ekle
      const postData = {
        ...newPost,
        images: filteredImages,
        id: Date.now().toString() // Benzersiz ID oluştur
      };
      
      console.log('Gönderilecek yeni blog yazısı:', postData);
      
      const response = await fetch('/api/admin/blog-yeni', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Blog yazısı eklenirken bir hata oluştu');
      }
      
      const data = await response.json();
      console.log('API yanıtı:', data);
      
      setSuccess(true);
      
      // 2 saniye sonra blog yönetim sayfasına yönlendir
      setTimeout(() => {
        router.push('/admin/blog-yeni');
      }, 2000);
      
    } catch (error) {
      console.error('Blog yazısı eklenirken hata oluştu:', error);
      setError(`Blog yazısı eklenirken bir hata oluştu: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Yeni Blog Yazısı Ekle</h1>
      
      <div className="mb-6">
        <Link 
          href="/admin/blog-yeni" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Blog Yeni Yönetimine Dön
        </Link>
      </div>
      
      {error && (
        <div className="bg-red-100 p-4 mb-6 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 p-4 mb-6 rounded">
          <p className="text-green-700">Blog yazısı başarıyla eklendi! Yönlendiriliyorsunuz...</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Başlık:</label>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Slug:</label>
          <input
            type="text"
            name="slug"
            value={newPost.slug}
            onChange={handleChange}
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
            value={newPost.date}
            onChange={handleChange}
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
            value={newPost.content}
            onChange={handleChange}
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
          
          {newPost.images.map((image, index) => (
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
                  disabled={newPost.images.length <= 1}
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
                  id={`image-upload-${index}`}
                  disabled={imageUploading}
                />
                <label 
                  htmlFor={`image-upload-${index}`}
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
        
        <div className="mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? 'Ekleniyor...' : 'Blog Yazısını Ekle'}
          </button>
        </div>
      </form>
    </div>
  );
}
