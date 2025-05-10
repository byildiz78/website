"use client";

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ReferansFormData {
  referans_tipi: string;
  adi: string;
  logo_yolu: string;
  sube_sayisi?: number;
  sehir?: string;
}

interface UploadResponse {
  message: string;
  filePath: string;
}

export default function YeniReferansPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<ReferansFormData>({
    referans_tipi: 'Zincir İşletmeler',
    adi: '',
    logo_yolu: '',
    sube_sayisi: undefined,
    sehir: '',
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const referansTipleri = ['Zincir İşletmeler', 'Özel Projeler', 'Tekil İşletmeler'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'number') {
      setFormData({
        ...formData,
        [name]: value === '' ? undefined : parseInt(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Logo yolu değiştiğinde önizleme göster
    if (name === 'logo_yolu' && value) {
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
        logo_yolu: data.filePath
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
    setLoading(true);
    setError(null);

    try {
      // Form doğrulama
      if (!formData.adi.trim()) {
        throw new Error('Referans adı zorunludur');
      }

      if (!formData.logo_yolu.trim()) {
        throw new Error('Logo yolu zorunludur');
      }

      // Referans tipine göre zorunlu alanları kontrol et
      if (formData.referans_tipi === 'Zincir İşletmeler' && !formData.sube_sayisi) {
        throw new Error('Zincir işletmeler için şube sayısı zorunludur');
      }

      if ((formData.referans_tipi === 'Özel Projeler' || formData.referans_tipi === 'Tekil İşletmeler') && !formData.sehir) {
        throw new Error('Özel projeler ve tekil işletmeler için şehir bilgisi zorunludur');
      }

      // JWT token'ı localStorage'dan al
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin');
        return;
      }
      
      // API çağrısı yap
      const response = await fetch('/api/admin/referanslar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Referans eklenirken bir hata oluştu');
      }
      
      const data = await response.json();
      console.log('API yanıtı:', data);
      
      // Başarılı
      alert('Referans başarıyla eklendi!');
      router.push('/admin/referanslar');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Referans eklenirken bir hata oluştu');
      }
      console.error('Referans eklenirken hata:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Yeni Referans Ekle</h1>
        <button
          onClick={() => router.push('/admin/referanslar')}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          Geri Dön
        </button>
      </div>

      {error && (
        <div className="bg-red-100 p-4 mb-6 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="referans_tipi" className="block text-sm font-medium text-gray-700 mb-1">
                  Referans Tipi*
                </label>
                <select
                  id="referans_tipi"
                  name="referans_tipi"
                  value={formData.referans_tipi}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  {referansTipleri.map((tip) => (
                    <option key={tip} value={tip}>
                      {tip}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="adi" className="block text-sm font-medium text-gray-700 mb-1">
                  Referans Adı*
                </label>
                <input
                  type="text"
                  id="adi"
                  name="adi"
                  value={formData.adi}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="logo_yolu" className="block text-sm font-medium text-gray-700 mb-1">
                  Logo*
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    id="logo_yolu"
                    name="logo_yolu"
                    value={formData.logo_yolu}
                    onChange={handleChange}
                    placeholder="images/reflogo/logo.png"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
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

              {formData.referans_tipi === 'Zincir İşletmeler' && (
                <div>
                  <label htmlFor="sube_sayisi" className="block text-sm font-medium text-gray-700 mb-1">
                    Şube Sayısı*
                  </label>
                  <input
                    type="number"
                    id="sube_sayisi"
                    name="sube_sayisi"
                    value={formData.sube_sayisi || ''}
                    onChange={handleChange}
                    min="1"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              )}

              {(formData.referans_tipi === 'Özel Projeler' || formData.referans_tipi === 'Tekil İşletmeler') && (
                <div>
                  <label htmlFor="sehir" className="block text-sm font-medium text-gray-700 mb-1">
                    Şehir*
                  </label>
                  <input
                    type="text"
                    id="sehir"
                    name="sehir"
                    value={formData.sehir || ''}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo Önizleme
              </label>
              <div className="border border-gray-300 rounded-md p-4 h-40 flex items-center justify-center bg-gray-50">
                {previewImage ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={previewImage}
                      alt="Logo önizleme"
                      fill
                      className="object-contain"
                      onError={() => {
                        setPreviewImage(null);
                        setError('Logo yükleme hatası: Görsel bulunamadı veya yol hatalı');
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
                    <p className="mt-2">Logo yüklemek için tıklayın veya sürükleyin</p>
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
                      logo_yolu: ''
                    });
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  className="text-sm text-red-600 hover:text-red-800 mt-2"
                >
                  Logoyu Kaldır
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => router.push('/admin/referanslar')}
              className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Kaydediliyor...
                </span>
              ) : (
                'Kaydet'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
