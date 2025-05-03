"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Clock, Zap, ShoppingCart, Shield } from "lucide-react";

const features = [
  {
    title: "Hızlı Sipariş",
    description: "Kullanıcı dostu arayüz ile kolay ve hızlı sipariş verme",
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Temassız Ödeme",
    description: "Kredi kartı, banka kartı ve mobil ödeme desteği",
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Zaman Tasarrufu",
    description: "Sıra bekleme süresini ortadan kaldırır",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Verimlilik Artışı",
    description: "Personel verimliliğini artırır ve maliyetleri düşürür",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
  }
];

const benefits = [
  "Personel maliyetlerinde tasarruf",
  "Sıra ve bekleme sürelerinde azalma",
  "Sipariş hatalarının minimuma indirilmesi",
  "Müşteri memnuniyetinde artış",
  "7/24 kesintisiz hizmet imkanı",
  "Ürün ve kampanya tanıtımı yapabilme",
  "Satış ve müşteri verilerinin analizi",
  "Kolay entegrasyon ve kurulum"
];

export default function SelfServisKioskPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          <Image
            src="/images/kiosk/kiosk.png"
            alt="Self Servis Kiosk"
            fill
            className="object-contain"
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
              Self Servis Kiosk
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              Kasiyere ihtiyaç duyulmadan kiosk cihazı üzerinden sipariş vermeye ve siparişin ödemesini almaya yarayan çözüm
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
                  Fiyat Teklifi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Self Servis Kiosk <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern ve kullanıcı dostu kiosk çözümlerimiz ile işletmenizin verimliliğini artırın
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

      {/* Main Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center p-4">
                <Image
                  src="/images/kiosk/kiosk1.svg"
                  alt="Self Servis Kiosk"
                  width={200}
                  height={200}
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
                  Self Servis <span className="text-blue-600">Kiosk Çözümü</span> Nedir?
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Kasiyere ihtiyaç duyulmadan kiosk cihazı üzerinden sipariş vermeye ve siparişin ödemesini almaya yarayan bir projedir.
                </p>
                <p className="text-gray-600 mb-4">
                  Müşteriler, dokunmatik ekran üzerinden menüyü görüntüleyebilir, ürün seçimi yapabilir ve ödeme işlemlerini tamamlayabilir.
                </p>
                <p className="text-gray-600 mb-4">
                  Özellikle fast-food restoranlar, kafeler, sinemalar ve perakende mağazaları için ideal bir çözümdür.
                </p>
                <p className="text-gray-600">
                  robotPOS yazılımı ile tam entegre çalışan self servis kiosk çözümümüz, işletmenizin verimliliğini artırırken, müşteri memnuniyetini de yükseltir.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
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
                  Kiosk <span className="text-blue-600">Kullanım Alanları</span>
                </h2>
                <p className="text-gray-600 mb-4">
                  Self servis kiosk çözümlerimizin birçok farklı sektörde kullanılabilir:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium">Restoranlar ve Kafeler:</span> Müşterilerin kendi siparişlerini oluşturması ve ödemelerini yapması için.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium">Fast-Food Zincirleri:</span> Sıra bekleme süresini azaltmak ve sipariş sürecini hızlandırmak için.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium">Sinemalar ve Eğlence Merkezleri:</span> Bilet satışı ve yiyecek-içecek siparişi için.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium">Perakende Mağazaları:</span> Ürün bilgisi sorgulama ve self-checkout için.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center p-4">
                <Image
                  src="/images/kiosk/kiosk2.jpg"
                  alt="Kiosk Kullanım Alanları"
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Self Servis Kiosk <span className="text-blue-600">Avantajları</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Self servis kiosk çözümlerimizin işletmenize sağladığı avantajlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md"
              >
                <div className="bg-blue-100 p-1.5 rounded-lg flex-shrink-0">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
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
              Self Servis Kiosk Çözümlerimizi Keşfedin
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              İşletmenizin ihtiyaçlarına uygun self servis kiosk çözümleri için hemen iletişime geçin
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50"
              asChild
            >
              <a href="/demo-talebi">
                Fiyat Teklifi Alın
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
