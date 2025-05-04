"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, FileText, Users, BarChart2, Calculator, Database, ClipboardList } from "lucide-react";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";

const features = [
  {
    title: "Stok Kartları",
    description: "Detaylı stok kartları ile ürünlerinizi kolayca yönetin",
    icon: <Package className="w-6 h-6 text-blue-600" />,
    image: "/images/inventory-screens/031-stok-karti.webp"
  },
  {
    title: "Alım Belgeleri",
    description: "Alım süreçlerinizi eksiksiz takip edin",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    image: "/images/inventory-screens/04-fatura-belge-detay.webp"
  },
  {
    title: "Sınırsız Depo Tanımı",
    description: "İstediğiniz kadar depo tanımlayın ve yönetin",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    image: "/images/inventory-screens/07-Depo-Yonetimi.webp"
  },
  {
    title: "Cari Hesap Takibi",
    description: "Tedarikçi ve müşteri hesaplarınızı tek noktadan yönetin",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    image: "/images/inventory-screens/021-cari-kart.webp"
  },
  {
    title: "Reçete Yönetimi",
    description: "Üretim reçetelerinizi oluşturun ve maliyetleri hesaplayın",
    icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
    image: "/images/inventory-screens/08-Recete-Yonetimi.webp"
  },
  {
    title: "Maliyet Yönetimi",
    description: "Maliyetlerinizi detaylı analiz edin ve kontrol altında tutun",
    icon: <Calculator className="w-6 h-6 text-blue-600" />,
    image: "/images/inventory-screens/09-Maliyet-Yonetimi.webp"
  }
];

const benefits = [
  "Stok maliyetlerini optimize edin",
  "Fire ve kayıpları minimize edin",
  "Tedarik süreçlerini iyileştirin",
  "Karlılığınızı artırın",
  "Envanter yönetimini kolaylaştırın",
  "Raporlama ve analizlerle doğru kararlar alın"
];

const screenshots = [
  "/images/inventory-screens/02-cari-yonetimi.webp",
  "/images/inventory-screens/03-stok-yonetimi.webp",
  "/images/inventory-screens/04-fatura-belge-detay.webp",
  "/images/inventory-screens/04-fatura-irsaliye.webp",
  "/images/inventory-screens/05-Kasa-Yonetimi.webp",
  "/images/inventory-screens/06-Finans-Yonetimi.webp",
  "/images/inventory-screens/07-Depo-Yonetimi.webp",
  "/images/inventory-screens/08-Recete-Yonetimi.webp",
  "/images/inventory-screens/09-Maliyet-Yonetimi.webp",
  "/images/inventory-screens/10-Rapor-Merkezi.webp",
  "/images/inventory-screens/021-cari-kart.webp",
  "/images/inventory-screens/031-stok-karti.webp",
  "/images/inventory-screens/donemkapanisdepobazli.webp",
  "/images/inventory-screens/donemkapanisgrupbazli.webp",
  "/images/inventory-screens/sshot-11.webp"
];

export default function StokMaliyetYonetimiPage() {
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
            src="/images/inventory-screens/03-stok-yonetimi.webp"
            alt="Stok Maliyet Yönetimi"
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
              Stok Maliyet Yönetimi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              Yüksek Verimlilik, Operasyonel Fayda. Stoklarınızı kontrol altında tutun, maliyetlerinizi yönetin.
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
                <a href="/demo-talebi">
                  Sizi Arayalım
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Kapsamlı <span className="text-blue-600">Özellikler</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detaylı ve kapsamlı stok maliyet yönetim sistemimiz ile kontrolü elinize alın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/inventory-screens/10-Rapor-Merkezi.webp"
                  alt="Maliyet Raporları"
                  width={600}
                  height={400}
                  className="w-full h-auto"
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
                  Maliyetleri kontrol altında tutun, <span className="text-blue-600">kazancınızı artırın</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Detaylı ve kapsamlı stok maliyet yönetim sistemimiz ile işletmenizin karlılığını artırın.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
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
              <a href="/demo-talebi">
                Sizi Arayalım
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
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
              robotPOS Stok Maliyet Yönetimi modülünün tüm özelliklerini keşfedin
            </p>
          </div>
          
          <ScreenshotGallery images={screenshots} />
        </div>
      </section>
    </div>
  );
}