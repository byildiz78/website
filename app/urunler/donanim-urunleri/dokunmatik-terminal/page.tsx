"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Cpu, HardDrive, Clock, Shield } from "lucide-react";

const features = [
  {
    title: "Endüstriyel Donanım",
    description: "Zorlu koşullara dayanıklı, uzun ömürlü donanım",
    icon: <Monitor className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Güçlü İşlemci",
    description: "Intel Celeron J6412 Quad Core 2.0 Ghz işlemci",
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Yüksek Depolama",
    description: "256 GB SSD ve 8GB DDR4 RAM",
    icon: <HardDrive className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "7/24 Çalışma",
    description: "Kesintisiz çalışma için optimize edilmiş sistem",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
  }
];

const specifications = [
  { name: "İşletim Sistemi", value: "Windows 10 IOT 64 Bit İşletim Sistemi" },
  { name: "İşlemci", value: "Intel Celeron J6412 Quad Core 2.0 Ghz Fansız İşlemci" },
  { name: "Bellek", value: "8GB DDR4 2666 Mhz Ram" },
  { name: "Disk", value: "256 GB SSD" },
  { name: "Monitör", value: "15'' Touch Screen LCD (1024x768), 5-Vire Capacitive Touch" },
  { name: "Müşteri Göstergesi", value: "9.7'' IPS Panel TFT LCD Monitör / Resim ve videoyu destekler (Opsiyonel)" },
  { name: "I/O Portlar", value: "2xRS232 PORT (COM PORT), 1x12V DC (12V 5A DEĞERİNDE GÜÇ GİRİŞİ), 1x CASHPORT (PARA ÇEKMECE PORTU), 4xUSB 3.0 PORT, 2xUSB 2.0 PORT, 1x RJ45 PORT 10/100 MBPS, 1x SES ÇIKIŞ, 1x HDMI PORT (DAHİLİ 2NCİ EKRAN PORTU MÜŞTERİ GÖSTERGESİ BAĞLANTI İÇİN), 1x PCI PORTU" },
  { name: "Boyut ve Ağırlık", value: "48cmx31cmx48cm (GxDxY, Müşteri Göstergesi dahil). Ağırlık (Kutu Hariç): 5,6 Kg (Kutu Dahil): 7,8 Kg" }
];

const benefits = [
  "Dayanıklı endüstriyel tasarım",
  "Fansız soğutma sistemi",
  "Kapasitif dokunmatik ekran",
  "Opsiyonel müşteri göstergesi",
  "Çoklu bağlantı noktaları",
  "Yüksek performans",
  "Uzun ömürlü kullanım",
  "Kompakt boyutlar"
];

export default function DokunmatikTerminalPage() {
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
            src="/images/general/dokunmatik.png"
            alt="Dokunmatik Terminal"
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
              Sektörel Dayanımlı Dokunmatik PC Terminal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              7×24 Kullanıma uygun Endüstriyel Donanım seçeneklerimiz ile Sorunsuz ve Kesintisiz bir iş akışı sağlıyoruz
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
              Dokunmatik Terminal <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Yüksek performanslı ve dayanıklı dokunmatik terminallerimiz ile işletmenizin verimliliğini artırın
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

      {/* Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Teknik <span className="text-blue-600">Özellikler</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS Dokunmatik PC Özellikleri
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
                  src="/images/general/dokunmatik.png"
                  alt="Dokunmatik Terminal"
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
                  Dokunmatik Terminalin <span className="text-blue-600">Avantajları</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Dayanıklı ve yüksek performanslı dokunmatik terminallerimizin sağladığı avantajlar
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
                      <Shield className="w-4 h-4 text-blue-600" />
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
              Dokunmatik Terminal Çözümlerimizi Keşfedin
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              İşletmenizin ihtiyaçlarına uygun dokunmatik terminal çözümleri için hemen iletişime geçin
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
