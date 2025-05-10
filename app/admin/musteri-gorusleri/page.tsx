"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface MusteriGorusu {
  baslik: string;
  icerik: string;
  resim: string;
}

export default function MusteriGorusleriPage() {
  const router = useRouter();
  const [musteriGorusleri, setMusteriGorusleri] = useState<MusteriGorusu[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGorus, setSelectedGorus] = useState<MusteriGorusu | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  useEffect(() => {
    const fetchMusteriGorusleri = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        
        if (!token) {
          router.push('/admin');
          return;
        }

        const response = await fetch('/api/admin/musteri-gorusleri', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Müşteri görüşleri yüklenirken bir hata oluştu');
        }

        const data = await response.json();
        setMusteriGorusleri(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Müşteri görüşleri yüklenirken bir hata oluştu');
        }
        console.error('Müşteri görüşleri yüklenirken hata:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMusteriGorusleri();
  }, [router]);

  const handleViewDetails = (gorus: MusteriGorusu) => {
    setSelectedGorus(gorus);
    setShowModal(true);
  };

  const handleDelete = async (baslik: string) => {
    try {
      setError(null);
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin');
        return;
      }

      const response = await fetch(`/api/admin/musteri-gorusleri/${encodeURIComponent(baslik)}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Müşteri görüşü silinirken bir hata oluştu');
      }

      // Silinen görüşü listeden kaldır
      setMusteriGorusleri(prevGorusler => prevGorusler.filter(gorus => gorus.baslik !== baslik));
      setConfirmDelete(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Müşteri görüşü silinirken bir hata oluştu');
      }
      console.error('Müşteri görüşü silinirken hata:', err);
    }
  };

  const filteredGorusler = musteriGorusleri.filter(gorus => 
    gorus.baslik.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Müşteri Görüşleri</h1>
        <button
          onClick={() => router.push('/admin/musteri-gorusleri/yeni')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Yeni Görüş Ekle
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Hata!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      <div className="mb-4">
        <input
          type="text"
          placeholder="Müşteri adına göre ara..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredGorusler.length === 0 ? (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>Hiç müşteri görüşü bulunamadı.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGorusler.map((gorus, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md bg-white">
              <div className="relative h-48 bg-gray-200">
                {gorus.resim ? (
                  <Image
                    src={`/${gorus.resim}`}
                    alt={gorus.baslik}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.png';
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-200">
                    <span className="text-gray-400">Resim Yok</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{gorus.baslik}</h2>
                <p className="text-gray-600 line-clamp-3">{gorus.icerik}</p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleViewDetails(gorus)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Detaylar
                  </button>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => router.push(`/admin/musteri-gorusleri/duzenle/${encodeURIComponent(gorus.baslik)}`)}
                      className="text-green-600 hover:text-green-800"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => setConfirmDelete(gorus.baslik)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detay Modalı */}
      {showModal && selectedGorus && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedGorus.baslik}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                    {selectedGorus.resim ? (
                      <Image
                        src={`/${selectedGorus.resim}`}
                        alt={selectedGorus.baslik}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder.png';
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-200">
                        <span className="text-gray-400">Resim Yok</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Resim yolu: {selectedGorus.resim || 'Belirtilmemiş'}</p>
                </div>
                
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Görüş İçeriği:</h3>
                    <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap">
                      {selectedGorus.icerik}
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2 mt-6">
                    <button
                      onClick={() => router.push(`/admin/musteri-gorusleri/duzenle/${encodeURIComponent(selectedGorus.baslik)}`)}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => {
                        setShowModal(false);
                        setConfirmDelete(selectedGorus.baslik);
                      }}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Silme Onay Modalı */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Silme Onayı</h3>
              <p className="mb-4">
                <strong>{confirmDelete}</strong> başlıklı müşteri görüşünü silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                >
                  İptal
                </button>
                <button
                  onClick={() => handleDelete(confirmDelete)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                  Sil
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
