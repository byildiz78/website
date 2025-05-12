'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/ui/page-header';

export default function DemoCenterPage() {
  return (
    <>
      <PageHeader 
        title="Demo Center" 
        description="Ürünlerimizi canlı olarak deneyimleyin"
        centered
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      />
      
      <Container className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Ürünlerimizi İncelemek İster misiniz?</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Canlı Demo Merkezi</h3>
              <p className="text-gray-600 mb-6">
                Restoran yönetim sistemimizin tüm özelliklerini canlı olarak aşağıda deneyimleyebilirsiniz. 
                Stok yönetimi, sipariş takibi, raporlama ve daha fazlasını keşfedin.
              </p>
            </div>
            
            <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow-lg">
              <div className="relative pb-[56.25%] h-0 overflow-hidden w-full">
                <iframe 
                  src="http://37.27.41.168:3099" 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ minHeight: '600px' }}
                  title="Demo Merkezi"
                  allowFullScreen
                />
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="http://37.27.41.168:3099" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Yeni Sekmede Aç
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kolay Kullanım</h3>
              <p className="text-gray-600">Kullanıcı dostu arayüzümüz sayesinde sistemi hızlıca öğrenin ve işlerinizi kolaylaştırın.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kapsamlı Özellikler</h3>
              <p className="text-gray-600">Stok yönetimi, sipariş takibi, müşteri yönetimi ve daha fazlasını tek bir platformda keşfedin.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hızlı Performans</h3>
              <p className="text-gray-600">Yüksek performanslı sistemimiz sayesinde işlemlerinizi hızlıca tamamlayın ve zaman kazanın.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Daha Fazla Bilgi İçin</h3>
            <p className="text-gray-600 mb-8">
              Ürünlerimiz hakkında daha fazla bilgi almak veya özel demo talep etmek için bizimle iletişime geçebilirsiniz.
            </p>
            
            <Link 
              href="/iletisim" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
