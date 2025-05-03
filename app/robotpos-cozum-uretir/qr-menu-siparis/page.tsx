"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode, Smartphone, CreditCard, User, Clock } from "lucide-react";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";

const features = [
  {
    title: "Temassız Menü",
    description: "Kağıt menülere dokunmadan QR kod ile erişim",
    icon: <QrCode className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Kolay Sipariş",
    description: "Müşteriler kendi telefonlarından sipariş verebilir",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Online Ödeme",
    description: "Temassız ödeme seçenekleri ile güvenli işlem",
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Garson Çağırma",
    description: "Tek tıkla garson çağırma özelliği",
    icon: <User className="w-6 h-6 text-blue-600" />,
  }
];

const benefits = [
  "Çoklu dil seçeneği",
  "Online Ödeme",
  "Garson Çağırma",
  "Hesap İsteme",
  "Hijyenik sipariş süreci",
  "Kağıt israfını önleme",
  "Personel verimliliğini artırma",
  "Sipariş hatalarını azaltma"
];

const screenshots = [
  "/images/qr-menu/qr-screens/Resim4.png",
  "/images/qr-menu/qr-screens/Resim1.jpg",
  "/images/qr-menu/qr-screens/Resim2.jpg",
  "/images/qr-menu/qr-screens/Resim3.jpg"

];

export default function QrMenuSiparisPage() {
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
            src="/images/qr-menu/qrmenu.webp"
            alt="QR Menü ile Temassız Sipariş"
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
              QR Menü ile Temassız Sipariş
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              Hijyenik, Basit ve Etkin Sipariş Süreci
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
                  Demo Talebi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Description Section */}
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
                  src="/images/qr-menu/qr-screens/qrsiparis.png"
                  alt="QR Menü Örneği"
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
                  QR menü ile <span className="text-blue-600">Temassız Sipariş</span> Almak artık çok kolay
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Kağıt menülerin yerini hızlıca alacak akıllı çözüm
                </p>
                <p className="text-gray-600 mb-4">
                  Masa üzerine yerleştirilen QR kodlar ile konuklarınız menünüzü telefonlarına herhangi bir uygulama yüklemeksizin görüntüleyebilir
                </p>
                <p className="text-gray-600 mb-4">
                  Ürün görsellerini, özelliklerini inceleyebilir. Kendi siparişlerini oluşturup, kolayca mutfağınıza iletebilirler
                </p>
                <p className="text-gray-600">
                  Belirgin özellikle çoklu dil seçeneği, online ödeme, garson çağırma ve hesap isteme gibi fonksiyonlar sunar
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              QR Menü <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern ve kullanıcı dostu QR menü çözümümüz ile işletmenizi bir adım öne taşıyın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-3 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  QR Menü'nün <span className="text-blue-600">Avantajları</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  QR menü çözümümüz işletmenize ve müşterilerinize birçok avantaj sağlar
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl"
                  >
                    <div className="bg-blue-100 p-1.5 rounded-lg flex-shrink-0">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
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
                  src="/images/qr-menu/qr-screens/2020-06-13-13_08_21-.webp"
                  alt="QR Menü Mobil Görünüm"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
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
              robotPOS QR Menü çözümünün tüm özelliklerini keşfedin
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
              QR Menü Çözümümüzü Keşfedin
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Modern, hijyenik ve verimli sipariş süreci için hemen iletişime geçin
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

   
    </div>
  );
}
