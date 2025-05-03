"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Zap, PieChart, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";
import { SectionDivider } from "@/components/ui/section-divider";

const features = [
  {
    title: "Kolay",
    description: "Öğrenilmesi ve kullanılması en kolay sistemdir. Kullanımı son derece kolay ve anlaşılırdır. Temel Fonksiyonlar 15 dakika içerisinde öğrenilebilir.",
    icon: <Shield className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Hızlı",
    description: "Az Dokunuş çok iş mantığı ile kurgulanmıştır. Performanslı çalışır, iş akışına göre kişiselleştirilebilir ve az dokunuşla, çok işlem yapılabilmesini sağlar.",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Sorunsuz",
    description: "Veri güvenliği ön planda tutularak geliştirilmiştir. Yoğun gün ve saatlerinizde, sizi yarı yolda bırakmamak üzere tasarlanmıştır.",
    icon: <PieChart className="w-6 h-6 text-blue-600" />,
  },
];

const benefits = [
  "Kolay Kullanım",
  "Kolay Masa Takibi",
  "Çağrı Yönetimi",
  "Müşteri Sadakat Kartı",
  "Adisyon Hatalarına Son",
  "Kayıp ve Kaçak Kontrolü",
  "Stok Maliyet / Üretim Yönetimi",
];

const usageAreas = [
  { title: "Restoranlar", icon: "/icons/restaurant.svg" },
  { title: "Pastaneler", icon: "/icons/bakery.svg" },
  { title: "Kafeler", icon: "/icons/cafe.svg" },
  { title: "Dernek ve Klüpler", icon: "/icons/club.svg" },
  { title: "Fast Food", icon: "/icons/fastfood.svg" },
  { title: "Perakende", icon: "/icons/retail.svg" },
];

const screenshots = [
  "/images/pos-screen/pos01.webp",
  "/images/pos-screen/pos02.webp",
  "/images/pos-screen/pos03.webp",
  "/images/pos-screen/pos04.webp",
];

export default function POSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/general/res-1-min.webp"
            alt="Modern Restaurant POS System"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50" />
        </motion.div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Satış Yönetim Sistemi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              En Kolay, En Hızlı, En Sorunsuz Restoran Yönetim Sistemi
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-300"
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

      {/* Features Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-50 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  En <span className="text-blue-600">{feature.title}</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
      <Image
      src="/images/general/ecosystem.png"
      alt="Ecosystem"
      width={600}
      height={400}
      className="w-full"
      />
      </div>
      </section>
      {/* Screenshots Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold mb-3">
              Ekran <span className="text-blue-600">Görüntüleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS'un kullanıcı dostu arayüzü ve güçlü özellikleriyle tanışın. Modern tasarımı ve pratik kullanımıyla işletmenizin verimliliğini artırın.
            </p>
          </motion.div>

          <ScreenshotGallery images={screenshots} />
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-blue-500/20"></div>
                <Image
                  src="/images/general/rs5-min.webp"
                  alt="Sipariş Yönetimi"
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
                <h2 className="text-4xl font-bold mb-4">
                  Sipariş <span className="text-blue-600">Yönetimi</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Her tür gıda işletmesine kolaylıkla adapte olur, iş gücünden, zamandan tasarruf sağlar ve kazanç artırır.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-blue-50 p-1.5 rounded-lg flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Areas Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">
              Nerelerde <span className="text-blue-600">Kullanılır</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {usageAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Image
                    src={area.icon}
                    alt={area.title}
                    width={32}
                    height={32}
                    className="text-blue-600 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600">
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
            <p className="text-lg text-blue-100 mb-6">
              robotPOS'un sunduğu avantajları keşfedin.
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