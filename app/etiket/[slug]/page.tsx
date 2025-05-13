"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Tag } from 'lucide-react';

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

export default function TagPage({ params }: { params: { slug: string } }) {
  // URL'den gelen slug parametresini al
  const { slug } = params;
  
  // Slug'u düzgün bir şekilde formatlayarak göster
  const formattedTag = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-blue-900/30 z-10"></div>
        <div className="container mx-auto px-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="flex items-center mb-4">
              <Tag className="text-white mr-2" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {formattedTag}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Aradığınız etiket için özel içerik bulunamadı. Diğer etiketleri keşfedin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tag Cloud Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tüm Etiketler</h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 p-8 bg-white rounded-xl shadow-lg"
            >
              {tags.map((tag, index) => (
                <a 
                  key={tag.name} 
                  href={tag.href}
                  className={`${fontSizes[tag.size]} ${colorClasses[index % colorClasses.length]} text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md`}
                >
                  {tag.name}
                </a>
              ))}
            </motion.div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Tüm etiketleri ana etiket sayfasında görüntüleyebilirsiniz.
              </p>
              <a href="/etiket" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                Etiket Sayfasına Dön <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Suggested Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Önerilen İçerikler</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Restoran Programı</h3>
                <p className="text-gray-600 mb-4">
                  Restoranınızı yönetmek için ihtiyacınız olan tüm özellikler.
                </p>
                <a href="/restoran-programi" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  İncele <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Adisyon Programı</h3>
                <p className="text-gray-600 mb-4">
                  Hızlı ve kolay adisyon yönetimi için profesyonel çözüm.
                </p>
                <a href="/adisyon-programi" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  İncele <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">POS Sistemi</h3>
                <p className="text-gray-600 mb-4">
                  Modern işletmeler için gelişmiş POS çözümleri.
                </p>
                <a href="/pos-sistemi" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  İncele <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
