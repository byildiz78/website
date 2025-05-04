"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

// Dosya adından tarih bilgisini çıkaran fonksiyon
function extractDateFromFilename(filename: string): Date | null {
  // Dosya adı formatı: YYYYMMDD_HHMMSS_*.jpg
  const match = filename.match(/^(\d{4})(\d{2})(\d{2})_/);
  if (!match) return null;
  
  const year = parseInt(match[1]);
  const month = parseInt(match[2]) - 1; // JavaScript'te aylar 0-11 arasında
  const day = parseInt(match[3]);
  
  return new Date(year, month, day);
}

export default function CalisiyoruzPage() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sunucu tarafında çalışmayı önle
    if (typeof window === "undefined") return;

    // Görsel dosyalarını dinamik olarak yükle
    const loadImages = async () => {
      try {
        const response = await fetch('/api/instagram-images');
        const data = await response.json();
        
        if (data.images && Array.isArray(data.images)) {
          // Tarihe göre sırala (en yeniden en eskiye)
          const sortedImages = [...data.images].sort((a, b) => {
            const dateA = extractDateFromFilename(a);
            const dateB = extractDateFromFilename(b);
            if (!dateA || !dateB) return 0;
            return dateB.getTime() - dateA.getTime();
          });
          
          setImages(sortedImages);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error("Resimler yüklenirken hata oluştu:", error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    // Otomatik slayt gösterisi - daha hızlı geçiş (2 saniye)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Yükleme durumunda gösterilecek içerik
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-blue-800 text-xl font-medium">Yükleniyor...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
        }
        #__next, main {
          height: 100%;
        }
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
          }
          50% {
            text-shadow: 0 0 16px rgba(59, 130, 246, 0.8);
          }
        }
        @keyframes borderPulse {
          0%, 100% {
            border-color: rgba(59, 130, 246, 0.6);
          }
          50% {
            border-color: rgba(99, 102, 241, 0.8);
          }
        }
      `}</style>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="text-center mb-4 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-xl blur-xl transform -translate-y-4"></div>
          <div className="relative inline-block py-2 px-6 mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white inline-flex items-center">
              <span className="mr-2" style={{ animation: 'textGlow 2s infinite' }}>Durmadan</span>
              <span className="relative">
                <span className="animate-pulse text-white/90">Çalışıyoruz</span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></span>
              </span>
            </h1>
          </div>
          <p className="text-sm text-blue-700 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm py-1 px-4 rounded-full inline-block">
            22 yıldır ilk günkü heyecan ile müşterilerimize en iyi hizmeti sunmak için her gün çalışıyoruz.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[480px] rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-blue-200" style={{ animation: 'borderPulse 4s infinite' }}>
          {/* Arka plan dekoratif elementler */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300 opacity-20 rounded-full blur-3xl"></div>
          
          {/* Resim slayt gösterisi - Sabit kalan kısım */}
          <div className="relative w-full h-full">
            {images.length > 0 && (
              <Image
                src={`/images/instagram_images/${images[currentIndex]}`}
                alt={`Çalışıyoruz - ${images[currentIndex]}`}
                fill
                className="object-cover transform scale-105 animate-subtle-zoom"
                style={{
                  animation: "subtle-zoom 10s infinite alternate ease-in-out"
                }}
                priority
              />
            )}
            
            {/* Daha hafif overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-800/20 to-transparent"></div>
            
            {/* Tarih bilgisi - Sadece bu kısım değişecek */}
            <AnimatePresence mode="wait">
              {images.length > 0 && extractDateFromFilename(images[currentIndex]) && (
                <motion.div 
                  key={currentIndex}
                  className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-600/80 to-blue-600/0 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
                        initial={{ scale: 0.8, rotate: -5 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3, ease: "backOut" }}
                      >
                        <div className="text-blue-600 font-bold text-lg">
                          {format(extractDateFromFilename(images[currentIndex])!, "d")}
                        </div>
                      </motion.div>
                      <div>
                        <motion.div 
                          className="text-white text-lg font-bold"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {format(extractDateFromFilename(images[currentIndex])!, "MMMM", { locale: tr })}
                        </motion.div>
                        <motion.div 
                          className="text-blue-100 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                        >
                          {format(extractDateFromFilename(images[currentIndex])!, "yyyy")}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Sol alt köşedeki 22 yıldır - Sabit kalan kısım */}
            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-blue-600 to-blue-500 shadow-xl py-2 px-4 rounded-full flex items-center space-x-2">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">22</span>
              </div>
              <div className="text-white font-medium text-sm">
                yıldır <span className="text-blue-100">ilk günkü heyecanla</span>
              </div>
            </div>
            
            {/* Sağ alt köşedeki durmadanÇalışıyoruz - Sabit kalan kısım */}
            <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md py-2 px-4 rounded-full border border-white/30">
              <span className="text-white font-medium">#durmadanÇalışıyoruz</span>
            </div>
          </div>
          
          {/* İlerleme çubuğu */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
            <motion.div 
              className="h-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Keyframe animasyonları için global stil
const globalStyles = `
@keyframes subtle-zoom {
  from { transform: scale(1.05); }
  to { transform: scale(1.1); }
}
`;

// Global stili head'e ekle
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = globalStyles;
  document.head.appendChild(style);
}
