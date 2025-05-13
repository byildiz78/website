"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

// Etiketler ve ilgili sayfaları
type TagSize = 'sm' | 'md' | 'lg' | 'xl';

interface Tag {
  name: string;
  href: string;
  size: TagSize;
}

const tags: Tag[] = [
  { name: 'Restoran Programı', href: '/restoran-programi', size: 'lg' },
  { name: 'Adisyon Programı', href: '/adisyon-programi', size: 'xl' },
  { name: 'POS Sistemi', href: '/pos-sistemi', size: 'lg' },
  { name: 'Restoran Otomasyon', href: '/restoran-otomasyon', size: 'xl' },
  { name: 'Satış Noktası', href: '/urunler/yazilim-urunleri/satis-noktasi-pos', size: 'md' },
  { name: 'Stok Yönetimi', href: '/urunler/yazilim-urunleri/stok-maliyet-yonetimi', size: 'md' },
  { name: 'Raporlama', href: '/urunler/yazilim-urunleri/raporlama-ve-analiz', size: 'sm' },
  { name: 'Mobil POS', href: '/urunler/donanim-urunleri/mobil-terminaller', size: 'sm' },
  { name: 'Dokunmatik Ekran', href: '/urunler/donanim-urunleri/dokunmatik-terminal', size: 'md' },
  { name: 'Self Servis Kiosk', href: '/urunler/donanim-urunleri/self-servis-kiosk', size: 'sm' },
  { name: 'QR Menü', href: '/robotpos-cozum-uretir/qr-menu-siparis', size: 'md' },
  { name: 'Zincir Mağaza', href: '/urunler/yazilim-urunleri/zincir-magaza-yonetimi', size: 'sm' },
  { name: 'Sadakat Programı', href: '/urunler/yazilim-urunleri/sadakat-ve-kazanc-arttirici-cozumler', size: 'md' },
];

// Font boyutlarını belirle
const fontSizes = {
  sm: 'text-sm md:text-base',
  md: 'text-base md:text-lg',
  lg: 'text-lg md:text-xl',
  xl: 'text-xl md:text-2xl',
};

// Renk sınıfları
const colorClasses = [
  'bg-blue-500 hover:bg-blue-600',
  'bg-indigo-500 hover:bg-indigo-600',
  'bg-purple-500 hover:bg-purple-600',
  'bg-green-500 hover:bg-green-600',
  'bg-teal-500 hover:bg-teal-600',
  'bg-cyan-500 hover:bg-cyan-600',
];

// Metadata ayrı bir dosyada tanımlanmalı

export default function TagCloudPage() {
  const [shuffledTags, setShuffledTags] = useState(tags);

  // Sayfa yüklendiğinde etiketleri karıştır
  useEffect(() => {
    const shuffled = [...tags].sort(() => Math.random() - 0.5);
    setShuffledTags(shuffled);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
        {/* Animasyonlu arka plan desenleri */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-blue-900/50 z-10"></div>
        <div className="container mx-auto px-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="inline-block">Etiket</span>{" "}
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Bulutu
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              İlgilendiğiniz konuları keşfedin ve ilgili içeriklere hızlıca ulaşın.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tag Cloud Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2 text-center">Popüler Etiketler</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 p-8 bg-white rounded-xl shadow-lg relative overflow-hidden"
            >
              {/* Dekoratif arka plan deseni */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute rounded-full border border-blue-500"
                      style={{
                        width: Math.random() * 200 + 50,
                        height: Math.random() * 200 + 50,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {shuffledTags.map((tag, index) => (
                <motion.a 
                  key={tag.name} 
                  href={tag.href}
                  className={`${fontSizes[tag.size]} ${colorClasses[index % colorClasses.length]} text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md relative z-10`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  {tag.name}
                </motion.a>
              ))}
            </motion.div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Aradığınız etiketi bulamadınız mı? Tüm ürün ve çözümlerimiz için ana sayfamızı ziyaret edin.
              </p>
              <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                Ana Sayfaya Dön <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2 text-center">Öne Çıkan İçerikler</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 relative overflow-hidden group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Dekoratif arka plan şekli */}
                <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-blue-100 opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                
                <h3 className="text-2xl font-semibold mb-3 relative z-10">Restoran Otomasyon Sistemleri</h3>
                <p className="text-gray-600 mb-4 relative z-10">
                  Modern restoranların ihtiyaç duyduğu tüm otomasyon çözümleri tek bir platformda. Siparişten raporlamaya kadar tüm süreçleri yönetin.
                </p>
                <a href="/restoran-otomasyon" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group relative z-10">
                  <span>Daha Fazla Bilgi</span> 
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.span>
                </a>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 relative overflow-hidden group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Dekoratif arka plan şekli */}
                <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-purple-100 opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                
                <h3 className="text-2xl font-semibold mb-3 relative z-10">Adisyon Programı Özellikleri</h3>
                <p className="text-gray-600 mb-4 relative z-10">
                  Kullanımı kolay, hızlı ve güvenilir adisyon programı ile işletmenizi yönetin. Masa takibi, sipariş alma ve ödeme işlemlerini kolaylaştırın.
                </p>
                <a href="/adisyon-programi" className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center group relative z-10">
                  <span>Daha Fazla Bilgi</span>
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.span>
                </a>
              </motion.div>
              
              <motion.div 
                className="md:col-span-2 mt-6 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl shadow-lg text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Dekoratif arka plan deseni */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute rounded-full border-2 border-white"
                      style={{
                        width: Math.random() * 300 + 100,
                        height: Math.random() * 300 + 100,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Tüm Çözümlerimizi Keşfedin</h3>
                  <p className="text-white/90 mb-6 max-w-3xl">
                    robotPOS, restoran ve perakende işletmeleri için geliştirilmiş kapsamlı çözümler sunar. POS sistemleri, adisyon programları, stok yönetimi ve daha fazlası için ürünlerimizi inceleyin.
                  </p>
                  <a href="/urunler/yazilim-urunleri/satis-noktasi-pos" className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-full transition-colors duration-300">
                    Tüm Ürünleri Görüntüle
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
     
    </div>
  );
}
