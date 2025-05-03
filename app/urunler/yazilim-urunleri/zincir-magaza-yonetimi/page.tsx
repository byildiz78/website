"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ChevronRight, BarChart3, Users, Package, Percent, PieChart } from "lucide-react";
import referansData from "@/public/files/referanslar.json";

export default function ZincirMagazaYonetimiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/general/merkeziyonetim.png"
            alt="robotPOS Zincir Mağaza Yönetimi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </motion.div>
        <div className="container relative z-10 h-full mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Zincir Mağaza Yönetimi
            </h1>
            <p className="text-xl text-blue-50">
              Çok şubeli işletmelerinizi merkezi bir sistem üzerinden etkin bir şekilde yönetin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Merkezi Yönetim Avantajları</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              robotPOS zincir mağaza yönetim sistemi, çok şubeli işletmelerin tüm operasyonlarını tek bir merkezden kontrol etmelerini sağlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
                title: "Merkezi Raporlama",
                description: "Tüm şubelerinizin performansını tek bir ekrandan takip edin ve karşılaştırmalı analizler yapın."
              },
              {
                icon: <Users className="h-10 w-10 text-blue-600" />,
                title: "Personel Yönetimi",
                description: "Şubeler arası personel performansını izleyin, yetkilendirme ve görev dağılımını merkezi olarak yönetin."
              },
              {
                icon: <Package className="h-10 w-10 text-blue-600" />,
                title: "Merkezi Stok Kontrolü",
                description: "Tüm şubelerinizin stok durumunu anlık olarak görüntüleyin, şubeler arası transferleri kolayca yönetin."
              },
              {
                icon: <Percent className="h-10 w-10 text-blue-600" />,
                title: "Kampanya Yönetimi",
                description: "Tüm şubelerinizde geçerli olacak kampanyaları merkezi olarak oluşturun ve yönetin."
              },
              {
                icon: <PieChart className="h-10 w-10 text-blue-600" />,
                title: "Finansal Analiz",
                description: "Şubelerinizin finansal performansını karşılaştırın, karlılık analizleri yapın."
              },
              {
                icon: <ChevronRight className="h-10 w-10 text-blue-600" />,
                title: "Entegrasyon",
                description: "E-ticaret, muhasebe ve diğer sistemlerle entegre çalışarak veri bütünlüğü sağlayın."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/general/merkeziyonetim.png"
                  alt="robotPOS Zincir Mağaza Yönetimi"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Zincir Mağazalarınızı Tek Merkezden Yönetin</h2>
              <div className="space-y-4 text-lg">
                <p>
                  robotPOS, özellikle gıda ve perakende sektörlerinde faaliyet gösteren zincir mağazalar için kapsamlı bir yönetim ve otomasyon çözümleri sunmaktadır. Bu çözümler, çok şubeli işletmelerin operasyonlarını merkezi bir sistem üzerinden etkin bir şekilde yönetmelerine olanak tanır.
                </p>
                <p>
                  Zincir Mağaza Yönetimi sistemimiz, çok sayıda şubesi bulunan işletmeler için merkezi yönetim, stok kontrolü ve raporlama imkanı sağlar. Bu sistem, şubeler arası koordinasyonu artırarak verimliliği maksimize eder.
                </p>
                <p>
                  Kullanımı kolay ve hızlı olan Satış Noktası (POS) Sistemimiz, satış işlemlerini pratikleştirir ve müşteri memnuniyetini artırır. Stok Maliyet Yönetimi çözümümüz, üretimden satışa kadar olan süreçte stokların etkin yönetimini sağlar, böylece maliyet kontrolü ve karlılık artışı hedeflenir.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zincir Mağaza Yönetiminin Faydaları</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              robotPOS zincir mağaza yönetim sistemi ile işletmenizin verimliliğini artırın, maliyetlerinizi düşürün.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Tüm şubelerin merkezi kontrolü ile operasyonel verimlilik",
              "Şubeler arası stok transferi ve optimizasyonu",
              "Merkezi fiyatlama ve kampanya yönetimi",
              "Karşılaştırmalı şube performans analizleri",
              "Müşteri sadakat programlarının merkezi yönetimi",
              "Gerçek zamanlı satış ve stok raporları",
              "Şubeler arası standartlaşma ve kalite kontrolü",
              "Merkezi muhasebe ve finans yönetimi"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-lg"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Referanslarımız</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin önde gelen zincir işletmeleri robotPOS'u tercih ediyor
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {referansData
              .filter(ref => ref.referans_tipi === "Zincir İşletmeler")
              .slice(0, 10) // Limit to first 10 references
              .map((reference, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center"
                >
                  <div className="h-20 w-full relative mb-4 flex items-center justify-center">
                    <Image
                      src={reference.logo_yolu}
                      alt={reference.adi}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-medium text-center">{reference.adi}</p>
                  {reference.sube_sayisi && (
                    <div className="mt-2 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      +{reference.sube_sayisi} Şube
                    </div>
                  )}
                </motion.div>
              ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/referanslar" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Tüm referanslarımızı görüntüleyin
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Zincir Mağazalarınızı Daha Verimli Yönetmeye Başlayın
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              robotPOS zincir mağaza yönetim çözümleri ile işletmenizi büyütün
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Bizimle İletişime Geçin
              </Link>
              <Link
                href="/demo-talebi"
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Demo Talep Edin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
