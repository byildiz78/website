"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Award, TrendingUp, Users, Star } from "lucide-react";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";

const features = [
  {
    title: "Müşteri Sadakati",
    description: "Müşteri bağlılığını artırarak tekrar ziyaretleri teşvik edin",
    icon: <Users className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Ödül Sistemi",
    description: "Alışveriş puanları ve özel indirimlerle müşterileri ödüllendirin",
    icon: <Gift className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Kazanç Artışı",
    description: "Müşteri harcamalarını ve ziyaret sıklığını artırın",
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Özel Kampanyalar",
    description: "Hedefli kampanyalar ile müşteri memnuniyetini artırın",
    icon: <Award className="w-6 h-6 text-blue-600" />,
  }
];

const benefits = [
  "Müşteri bağlılığını artırma",
  "Tekrar ziyaret oranlarını yükseltme",
  "Ortalama sepet tutarını artırma",
  "Müşteri davranışlarını analiz etme",
  "Kişiselleştirilmiş kampanyalar oluşturma",
  "Mobil uygulama entegrasyonu",
  "QR kod ile kolay kullanım",
  "Detaylı raporlama ve analiz"
];

const screenshots = [
  "/images/sadakat/sadakat-screens/sadakat-dashboard.png",
  "/images/sadakat/sadakat-screens/sadakat02.png",
  "/images/sadakat/sadakat-screens/sadakat03.png",
  "/images/sadakat/sadakat-screens/sadakat04.png",
  "/images/sadakat/sadakat-screens/sadakat05.png"
];

export default function SadakatVeKazancArttiriciCozumlerPage() {
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
            src="/images/sadakat/sadakat-dashboard.png"
            alt="Sadakat ve Kazanç Arttırıcı Çözümler"
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
              Sadakat Yönetimi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              Müşteri bağlılığını artırarak işletmenizin kazancını yükseltin
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
                  src="/images/sadakat/sadakat-screens/sadakat02.png"
                  alt="Sadakat Yönetimi Dashboard"
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
                  Müşteri Sadakat Yönetimi Sistemi <span className="text-blue-600">Yazılımı</span> Nedir?
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Yapılan alışverişlerde üyelerin, hak kullanımı ya da indirim kazanmalarını sağlayan bir entegrasyon sistemidir.
                </p>
                <p className="text-gray-600 mb-4">
                  APP uygulaması üzerinden QR sistemi ya da benzersiz bir kod ile kazanılan hakların müşterilere tanımlanmasını sağlar.
                </p>
                <p className="text-gray-600 mb-4">
                  Müşterilerinizin alışveriş alışkanlıklarını takip ederek, onlara özel kampanyalar sunmanıza olanak tanır.
                </p>
                <p className="text-gray-600">
                  İşletmenizin müşteri sadakatini artırarak, tekrar ziyaret oranlarını ve ortalama sepet tutarını yükseltir.
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
              Sadakat Yönetimi <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern ve kullanıcı dostu sadakat yönetimi çözümümüz ile işletmenizi bir adım öne taşıyın
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

      {/* Detailed Section */}
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
                  Müşteri <span className="text-blue-600">Sadakat Programları</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Farklı müşteri segmentlerine özel sadakat programları oluşturun
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Star className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Puan Sistemi</h3>
                      <p className="text-gray-600">Müşterileriniz her alışverişte puan kazanır ve bu puanları indirim olarak kullanabilir.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Star className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Özel Kampanyalar</h3>
                      <p className="text-gray-600">Doğum günü indirimleri, özel günlerde kampanyalar ve kişiye özel teklifler sunun.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Star className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Mobil Entegrasyon</h3>
                      <p className="text-gray-600">Müşterileriniz mobil uygulama üzerinden puanlarını takip edebilir ve kampanyalardan haberdar olabilir.</p>
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
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/sadakat/sadakat-screens/sadakat03.png"
                  alt="Sadakat Programları"
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
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/sadakat/sadakat-screens/sadakat04.png"
                  alt="Sadakat Yönetimi Avantajları"
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
                  Sadakat Yönetiminin <span className="text-blue-600">Avantajları</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Sadakat yönetimi çözümümüz işletmenize ve müşterilerinize birçok avantaj sağlar
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
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  {/* Screenshot Gallery */}
  <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ekran <span className="text-blue-600">Görüntüleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS Sadakat Yönetimi çözümünün tüm özelliklerini keşfedin
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
              Sadakat Yönetimi Çözümümüzü Keşfedin
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Müşteri bağlılığını artırmak ve işletmenizin kazancını yükseltmek için hemen iletişime geçin
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
