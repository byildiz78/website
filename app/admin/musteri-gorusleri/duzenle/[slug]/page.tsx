"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface MusteriGorusuFormData {
  baslik: string;
  icerik: string;
  resim: string;
}

interface UploadResponse {
  message: string;
  filePath: string;
}

export default function DuzenleMusteriGorusuPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState<MusteriGorusuFormData>({
    baslik: '',
    icerik: '',
    resim: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [originalData, setOriginalData] = useState<MusteriGorusuFormData | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const decodedSlug = decodeURIComponent(params.slug);

  useEffect(() => {
    const fetchMusteriGorusu = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        
        if (!token) {
          router.push('/admin');
          return;
        }

        const response = await fetch(`/api/admin/musteri-gorusleri/${encodeURIComponent(decodedSlug)}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Müşteri görüşü yüklenirken bir hata oluştu');
        }

        const data = await response.json();
        setFormData(data);
        setOriginalData(data);
        
        if (data.resim) {
          setPreviewImage(`/${data.resim}`);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Müşteri görüşü yüklenirken bir hata oluştu');
        }
        console.error('Müşteri görüşü yüklenirken hata:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMusteriGorusu();
  }, [decodedSlug, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    // Resim yolu değiştiğinde önizleme göster
    if (name === 'resim' && value) {
      setPreviewImage(`/${value}`);
    }
  };
  
  // Dosya yükleme işlemi
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Dosya tipini kontrol et
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('Desteklenmeyen dosya formatı. Sadece JPG, PNG, GIF, SVG ve WEBP formatları desteklenmektedir.');
      return;
    }
    
    // Dosya boyutunu kontrol et (5MB maksimum)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setError('Dosya boyutu çok büyük. Maksimum 5MB olmalıdır.');
      return;
    }
    
    try {
      setUploading(true);
      setError(null);
      
      // JWT token'ı localStorage'dan al
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin');
        return;
      }
      
      // FormData oluştur
      const formDataObj = new FormData();
      formDataObj.append('file', file);
      
      // Dosyayı yükle
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataObj
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Dosya yüklenirken bir hata oluştu');
      }
      
      const data: UploadResponse = await response.json();
      console.log('Dosya yükleme yanıtı:', data);
      
      // Form verilerini güncelle
      setFormData(prevData => ({
        ...prevData,
        resim: data.filePath
      }));
      
      // Önizleme göster
      setPreviewImage(`/${data.filePath}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Dosya yüklenirken bir hata oluştu');
      }
      console.error('Dosya yüklenirken hata:', err);
    } finally {
      setUploading(false);
    }
  };
  
  // Dosya seçme diyaloğunu aç
  const handleSelectFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      setError(null);
      
      // Gerekli alanların kontrolü
      if (!formData.baslik || !formData.icerik) {
        setError('Başlık ve içerik alanları zorunludur');
        setSaving(false);
        return;
      }
      
      // JWT token'ı localStorage'dan al
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin');
        return;
      }
      
      // Müşteri görüşünü güncelle
      const response = await fetch('/api/admin/musteri-gorusleri', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          originalBaslik: originalData?.baslik
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Müşteri görüşü güncellenirken bir hata oluştu');
      }
      
      // Başarılı yanıt
      router.push('/admin/musteri-gorusleri');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Müşteri görüşü güncellenirken bir hata oluştu');
      }
      console.error('Müşteri görüşü güncellenirken hata:', err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Müşteri Görüşünü Düzenle</h1>
        <p className="text-gray-600">Müşteri görüşlerini buradan düzenleyebilirsiniz.</p>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Hata!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label htmlFor="baslik" className="block text-sm font-medium text-gray-700 mb-1">
                Başlık*
              </label>
              <input
                type="text"
                id="baslik"
                name="baslik"
                value={formData.baslik}
                onChange={handleChange}
                placeholder="Müşteri veya şirket adı"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="icerik" className="block text-sm font-medium text-gray-700 mb-1">
                İçerik*
              </label>
              <textarea
                id="icerik"
                name="icerik"
                value={formData.icerik}
                onChange={handleChange}
                placeholder="Müşteri görüşü"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="resim" className="block text-sm font-medium text-gray-700 mb-1">
                Resim
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  id="resim"
                  name="resim"
                  value={formData.resim}
                  onChange={handleChange}
                  placeholder="images/customerphotos/resim.jpg"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly={uploading}
                />
                <button
                  type="button"
                  onClick={handleSelectFile}
                  disabled={uploading}
                  className={`px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {uploading ? 'Yükleniyor...' : 'Dosya Seç'}
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png,image/gif,image/svg+xml,image/webp"
                  className="hidden"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Desteklenen formatlar: JPG, PNG, GIF, SVG, WEBP (Maksimum 5MB)
              </p>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resim Önizleme
            </label>
            <div className="border border-gray-300 rounded-md p-4 h-64 flex items-center justify-center bg-gray-50">
              {previewImage ? (
                <div className="relative w-full h-full">
                  <Image
                    src={previewImage}
                    alt="Resim önizleme"
                    fill
                    className="object-contain"
                    onError={() => {
                      setPreviewImage(null);
                      setError('Resim yükleme hatası: Görsel bulunamadı veya yol hatalı');
                    }}
                  />
                </div>
              ) : (
                <div 
                  className="text-gray-400 text-center cursor-pointer hover:text-gray-500" 
                  onClick={handleSelectFile}
                >
                  <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2">Resim yüklemek için tıklayın veya sürükleyin</p>
                </div>
              )}
            </div>
            {previewImage && (
              <button
                type="button"
                onClick={() => {
                  setPreviewImage(null);
                  setFormData({
                    ...formData,
                    resim: ''
                  });
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className="text-sm text-red-600 hover:text-red-800 mt-2"
              >
                Resmi Kaldır
              </button>
            )}
          </div>
        </div>
        
        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => router.push('/admin/musteri-gorusleri')}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
          >
            İptal
          </button>
          <button
            type="submit"
            disabled={saving}
            className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {saving ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
}
