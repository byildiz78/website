"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Referans {
  referans_tipi: string;
  adi: string;
  logo_yolu: string;
  sube_sayisi?: number;
  sehir?: string;
}

export default function AdminReferanslarPage() {
  const router = useRouter();
  const [referanslar, setReferanslar] = useState<Referans[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedReferans, setSelectedReferans] = useState<Referans | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    async function fetchReferanslar() {
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
        
        // API'den referansları getir
        const response = await fetch('/api/admin/referanslar', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Referanslar yüklenirken bir hata oluştu');
        }
        
        const data = await response.json();
        console.log('API yanıtı:', data);
        
        if (data && Array.isArray(data.referanslar)) {
          setReferanslar(data.referanslar);
        } else {
          console.warn('API\'den gelen veri yapısı beklenen formatta değil:', data);
          setReferanslar([]);
        }
      } catch (error) {
        console.error('Referanslar yüklenirken hata oluştu:', error);
        setError('Referanslar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        setReferanslar([]);
      } finally {
        setLoading(false);
      }
    }

    fetchReferanslar();
  }, [router]);

  // Referans tiplerini al (benzersiz)
  const referansTipleri = ['all', ...Array.from(new Set(referanslar.map(ref => ref.referans_tipi)))];

  // Filtrelenmiş referanslar
  const filteredReferanslar = referanslar.filter(referans => {
    // Tip filtreleme
    const typeMatch = filterType === 'all' || referans.referans_tipi === filterType;
    
    // Arama filtreleme
    const searchMatch = searchTerm === '' || 
      referans.adi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (referans.sehir && referans.sehir.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return typeMatch && searchMatch;
  });
  
  function openModal(referans: Referans) {
    setSelectedReferans(referans);
    setShowModal(true);
  }
  
  function closeModal() {
    setShowModal(false);
    setSelectedReferans(null);
  }
  
  async function handleDelete(referans: Referans) {
    if (confirm(`"${referans.adi}" referansını silmek istediğinize emin misiniz?`)) {
      try {
        // JWT token'ı localStorage'dan al
        const token = localStorage.getItem('adminToken');
        
        if (!token) {
          router.push('/admin');
          return;
        }
        
        // Referansı silmek için API çağrısı yap
        const response = await fetch(`/api/admin/referanslar/${encodeURIComponent(referans.adi)}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Referans silinirken bir hata oluştu');
        }
        
        // UI'dan referansı kaldır
        setReferanslar(referanslar.filter(ref => ref.adi !== referans.adi));
        closeModal();
        alert('Referans başarıyla silindi');
      } catch (error) {
        console.error('Referans silinirken hata oluştu:', error);
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert('Referans silinirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        }
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
      <h1 className="text-2xl font-bold mb-6">Referanslar</h1>
      
      {error && (
        <div className="bg-red-100 p-4 mb-6 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <div>
          <Link 
            href="/admin/referanslar/yeni" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Yeni Referans Ekle
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {/* Arama kutusu */}
          <div>
            <input
              type="text"
              placeholder="Referans ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded px-3 py-2 w-full md:w-64"
            />
          </div>
          
          {/* Tip filtresi */}
          <div>
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              {referansTipleri.map((tip, index) => (
                <option key={index} value={tip}>
                  {tip === 'all' ? 'Tüm Tipler' : tip}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Yükleniyor...</p>
        </div>
      ) : (
        <div>
          <p className="mb-4 font-bold">
            Toplam {filteredReferanslar.length} referans bulundu
            {filterType !== 'all' && ` (${filterType} kategorisinde)`}
            {searchTerm && ` "${searchTerm}" araması için`}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredReferanslar.map((referans, index) => (
              <div 
                key={index} 
                className="border p-4 rounded bg-white shadow cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="h-20 flex items-center justify-center mb-4 bg-gray-50 rounded overflow-hidden">
                  {referans.logo_yolu ? (
                    <Image
                      src={`/${referans.logo_yolu}`}
                      alt={referans.adi}
                      width={120}
                      height={60}
                      className="object-contain max-h-16"
                    />
                  ) : (
                    <div className="text-gray-400">Logo yok</div>
                  )}
                </div>
                
                <h2 className="text-lg font-bold truncate">{referans.adi}</h2>
                
                <div className="mt-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {referans.referans_tipi}
                  </span>
                  
                  {referans.sube_sayisi && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-2">
                      {referans.sube_sayisi} Şube
                    </span>
                  )}
                  
                  {referans.sehir && (
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded ml-2">
                      {referans.sehir}
                    </span>
                  )}
                </div>
                
                <div className="mt-4">
                  <button
                    onClick={() => openModal(referans)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                  >
                    Detayları Görüntüle
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Modal */}
          {showModal && selectedReferans && (
            <Modal isOpen={showModal} onClose={closeModal}>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{selectedReferans.adi}</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6 flex justify-center bg-gray-50 p-4 rounded">
                {selectedReferans.logo_yolu ? (
                  <Image
                    src={`/${selectedReferans.logo_yolu}`}
                    alt={selectedReferans.adi}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                ) : (
                  <div className="text-gray-400">Logo yok</div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Referans Tipi</p>
                  <p className="font-medium">{selectedReferans.referans_tipi}</p>
                </div>
                
                {selectedReferans.sube_sayisi && (
                  <div>
                    <p className="text-sm text-gray-500">Şube Sayısı</p>
                    <p className="font-medium">{selectedReferans.sube_sayisi}</p>
                  </div>
                )}
                
                {selectedReferans.sehir && (
                  <div>
                    <p className="text-sm text-gray-500">Şehir</p>
                    <p className="font-medium">{selectedReferans.sehir}</p>
                  </div>
                )}
                
                <div>
                  <p className="text-sm text-gray-500">Logo Yolu</p>
                  <p className="font-medium text-sm break-all">{selectedReferans.logo_yolu}</p>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-4">
                <button 
                  onClick={() => router.push(`/admin/referanslar/duzenle/${encodeURIComponent(selectedReferans.adi)}`)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Düzenle
                </button>
                <button 
                  onClick={() => handleDelete(selectedReferans)}
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
