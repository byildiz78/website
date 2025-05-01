"use client";

import Image from "next/image";
import { Shield, Zap, PieChart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "En Kolay",
    description: "Öğrenilmesi ve kullanılması en kolay sistemdir. Kullanımı son derece kolay ve anlaşılırdır. Temel Fonksiyonlar 15 dakika içerisinde öğrenilebilir.",
    icon: <Shield className="w-8 h-8 text-white" />,
  },
  {
    title: "En Hızlı",
    description: "Az Dokunuş çok iş mantığı ile kurgulanmıştır. Performanslı çalışır, iş akışına göre kişiselleştirilebilir ve az dokunuşla, çok işlem yapılabilmesini sağlar.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    title: "En Sorunsuz",
    description: "Veri güvenliği ön planda tutularak geliştirilmiştir. Yoğun gün ve saatlerinizde, sizi yarı yolda bırakmamak üzere tasarlanmıştır.",
    icon: <PieChart className="w-8 h-8 text-white" />,
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
  "/images/pos/screen1.jpg",
  "/images/pos/screen2.jpg",
  "/images/pos/screen3.jpg",
];

export default function POSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/6107775/pexels-photo-6107775.jpeg"
            alt="POS Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Satış Yönetim Sistemi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              En Kolay, En Hızlı, En Sorunsuz Restoran Yönetim Sistemi
            </p>
            <p className="text-lg text-gray-300">
              İş Akışınıza ve çalışma şeklinize uyum sağlayan, kullanımı pratik, kolay öğrenilen yıllarca sorunsuz kullanacağınız, yönetim çözümlerimiz ile tanışın..
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  En <span className="text-gray-800">{feature.title}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Management Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/7438101/pexels-photo-7438101.jpeg"
                alt="Sipariş Yönetimi"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold mb-6">
                Sipariş <span className="text-blue-600">Yönetimi</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Her tür gıda işletmesine kolaylıkla adapte olur, iş gücünden, zamandan tasarruf sağlar ve kazanç artırır.
              </p>
              <p className="text-gray-600">
                Sipariş Yönetimi uygulamalarımız, ihtiyaçlara en kapsamlı şekilde yanıt veriyor. Hizmet kalitenizi bir adım öteye taşıyarak, eksiksiz ve sorunsuz bir sipariş döngüsü oluşturmanıza yardımcı oluyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              RobotPos <span className="text-blue-600">İşletmenize Neler</span> Kazandırır?
            </h2>
            <p className="text-xl text-gray-600">
              Gelin Sizlere Kısaca Faydalarımızdan Bahsedelim
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/7438102/pexels-photo-7438102.jpeg"
                alt="RobotPOS Kullanımı"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Nerelerde <span className="text-blue-600">Kullanılır</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {usageAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-cyan-400 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={area.icon}
                    alt={area.title}
                    width={40}
                    height={40}
                    className="text-white"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">{area.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ekran <span className="text-blue-600">Görüntüleri</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}