"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, FileText, PieChart, LineChart, TrendingUp, Smartphone } from "lucide-react";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";

const benefits = [
  "İşletme verilerinize her yerden erişin",
  "Detaylı ve kapsamlı analiz raporları oluşturun",
  "Satış ve karlılık trendlerini takip edin",
  "Şubeleriniz arasında karşılaştırmalı raporlar alın",
  "Otomatik raporlama ile zaman kazanın",
  "Veri odaklı kararlar alın"
];

const screenshots = [
  "/images/raporlama-analiz/raporlama-screens/webrapor01.webp",
  "/images/raporlama-analiz/raporlama-screens/webrapor02.webp",
  "/images/raporlama-analiz/raporlama-screens/webrapor03.webp",
  "/images/raporlama-analiz/raporlama-screens/webrapor04.webp",
  "/images/raporlama-analiz/raporlama-screens/webrapor05.webp"
];

export default function RaporlamaVeAnalizPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/raporlama-analiz/destek-3-min.webp"
            alt="Raporlama ve Analiz"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </motion.div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Raporlama ve Analiz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              Yüksek Verimlilik, Operasyonel Fayda.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                asChild
              >
                <Link href="/demo-talebi">
                  Sizi Arayalım
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detaylı Raporlama Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/raporlama-analiz/raporlama-screens/webrapor01.webp"
                  alt="Detaylı Raporlama"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/raporlama-analiz/Android_iOS_Windows-1080x675-e1558891152651.webp"
                  alt="Mobil Raporlama"
                  width={400}
                  height={200}
                  className="w-full h-auto max-w-[200px] mx-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Detaylı <span className="text-blue-600">Raporlama İmkanı</span>
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  İnternet'in olduğu her yerden raporlarınıza erişin, detaylı analizler yapın.
                </p>
                <p className="text-gray-600 mb-4">
                  İşletmeniz ve operasyonlarınız için kritik değer taşıyan verilerinize, İşletme içerisinden, herhangi bir tarayıcıdan veya mobil cihazlar için hazırlanmış Mobil uygulamalarımızdan gerçek zamanlı olarak erişebilirsiniz.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl"
                  >
                    <div className="bg-blue-100 p-1.5 rounded-lg flex-shrink-0">
                      <BarChart2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Merkezi Raporlama Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Merkezi Raporlama <span className="text-blue-600">Platformu</span>
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Verilerinizi canlı olarak takip edin
                </p>
                <p className="text-gray-600 mb-4">
                  Birden fazla şubesi bulunan işletmeler için özel olarak tasarlanmış, Merkezi Raporlama Platformu ile tüm verilere gerçek zamanlı erişim.
                </p>
                <p className="text-gray-600 mb-4">
                  Bayi, Bölge Sorumlusu, Bölge Müdürü, İşletme Sahibi gibi hiyerarşi tanımları ile, sadece belirli şubelere ve belirli raporlama erişim imkanı.
                </p>
                <p className="text-gray-600">
                  E-posta görevleri ile raporların dilenen saatte dilenen kullanıcılara gönderimi. Olay bildirimleri ile tanımlı durumlarda, kullanıcıların notifikasyon ile uyarılması.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/raporlama-analiz/raporlama-screens/webrapor02.webp"
                  alt="Merkezi Raporlama"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Raporlama ve Analiz <span className="text-blue-600">Avantajları</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS Raporlama ve Analiz çözümleri ile işletmenize sağlayacağınız faydalar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-50 p-6 rounded-xl shadow-md"
              >
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <BarChart2 className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Screenshot Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ekran <span className="text-blue-600">Görüntüleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS Raporlama ve Analiz modülünün tüm özelliklerini keşfedin
            </p>
          </div>
          
          <ScreenshotGallery images={screenshots} />
        </div>
      </section>


       {/* CTA Section */}
       <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              İşletmenizi Dijital Dünyaya Taşıyın
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              robotPOS'un sunduğu avantajları keşfedin
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/demo-talebi">
                Sizi Arayalım
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
