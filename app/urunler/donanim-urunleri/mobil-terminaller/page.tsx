"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Cpu, Battery, Wifi, Shield } from "lucide-react";

const features = [
  {
    title: "Android İşletim Sistemi",
    description: "Android 10.4 işletim sistemi ile uyumlu çalışma",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Güçlü İşlemci",
    description: "8 Core 1.3 Ghz işlemci ile hızlı performans",
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "HD Ekran",
    description: "5.0'' HD 1280x720 Nits Ekran",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Yeterli RAM",
    description: "4 GB Ram ile akıcı çalışma",
    icon: <Battery className="w-6 h-6 text-blue-600" />,
  }
];

const specifications = [
  { name: "İşletim Sistemi", value: "Android 10.4" },
  { name: "İşlemci", value: "8 Core 1.3 Ghz İşlemci" },
  { name: "Ekran", value: "5.0'' HD 1280x720 Nits Ekran" },
  { name: "RAM", value: "4 GB Ram" },
  { name: "Depolama", value: "64 GB Dahili Hafıza" },
  { name: "Bağlantı", value: "Wi-Fi, Bluetooth, 4G LTE" },
  { name: "Batarya", value: "4000 mAh Uzun Ömürlü Batarya" },
  { name: "Kamera", value: "8 MP Arka Kamera, QR Kod Okuyucu" }
];

const benefits = [
  "Hızlı sipariş alma",
  "Kablosuz çalışma imkanı",
  "Uzun batarya ömrü",
  "Hafif ve ergonomik tasarım",
  "Dayanıklı yapı",
  "Kolay kullanım",
  "robotPOS yazılımı ile tam uyum",
  "QR kod okuma özelliği"
];

export default function MobilTerminallerPage() {
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
            src="/images/general/mobilterminal.png"
            alt="Mobil Terminaller"
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
              Mobil Terminaller
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              İşletmenizde hızlı ve esnek sipariş alma imkanı sunan mobil çözümler
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
                  Fiyat Teklifi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
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
              Mobil Terminal <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Yüksek performanslı ve kullanışlı mobil terminallerimiz ile işletmenizin verimliliğini artırın
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
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/general/mobilterminal.png"
                  alt="Mobil Terminal"
                  width={300}
                  height={200}
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
                  Mobil Terminal <span className="text-blue-600">Çözümleri</span>
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  robotPOS mobil terminalleri, işletmenizde sipariş alma süreçlerini hızlandırır ve verimliliği artırır.
                </p>
                <p className="text-gray-600 mb-4">
                  Android işletim sistemi üzerinde çalışan mobil terminallerimiz, robotPOS yazılımı ile tam uyumlu çalışarak, garsonlarınızın masadan sipariş almasını kolaylaştırır.
                </p>
                <p className="text-gray-600 mb-4">
                  Güçlü donanım özellikleri ve uzun batarya ömrü sayesinde, yoğun iş temposunda bile kesintisiz hizmet sunar.
                </p>
                <p className="text-gray-600">
                  Hafif ve ergonomik tasarımı ile personelin tüm gün boyunca rahatça kullanabileceği mobil terminallerimiz, işletmenizin verimliliğini artırmak için ideal çözümdür.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Teknik <span className="text-blue-600">Özellikler</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS Mobil Terminal Özellikleri
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={spec.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col sm:flex-row py-4 px-6"
                  >
                    <div className="font-medium text-gray-900 w-full sm:w-1/3 mb-1 sm:mb-0">
                      {spec.name}:
                    </div>
                    <div className="text-gray-600 w-full sm:w-2/3">
                      {spec.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                  Mobil Terminallerin <span className="text-blue-600">Avantajları</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Mobil terminal çözümlerimizin işletmenize sağladığı avantajlar
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
                      <Wifi className="w-4 h-4 text-blue-600" />
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
                  src="/images/general/mobilterminal.png"
                  alt="Mobil Terminal Avantajları"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
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
              Mobil Terminal Çözümlerimizi Keşfedin
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              İşletmenizin ihtiyaçlarına uygun mobil terminal çözümleri için hemen iletişime geçin
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/demo-talebi">
                Fiyat Teklifi Alın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
