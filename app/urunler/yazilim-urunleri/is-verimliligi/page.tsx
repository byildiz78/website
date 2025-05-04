"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Smartphone, Clock, Users, BarChart2, Calculator, Database, ClipboardList } from "lucide-react";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";
import { PageHero } from "@/components/ui/page-hero";

const features = [
  {
    title: "Mutfak Ekranı",
    description: "Sipariş hazırlama süreçlerini optimize edin",
    icon: <Utensils className="w-6 h-6 text-blue-600" />,
    image: "/images/is-verimliligi/verimlilik-screens/mutfakekranikds.png"
  },
  {
    title: "Mobil Terminal",
    description: "Masa başında sipariş alma ve yönetim",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    image: "/images/is-verimliligi/verimlilik-screens/el-terminali.webp"
  },
  {
    title: "Hızlı Sipariş İşleme",
    description: "Sipariş süreçlerini hızlandırın",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    image: "/images/is-verimliligi/verimlilik-screens/mobil01.webp"
  },
  {
    title: "Personel Verimliliği",
    description: "Personel performansını takip edin ve artırın",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    image: "/images/is-verimliligi/verimlilik-screens/mobil02.webp"
  }
];

const benefits = [
  "Sipariş hazırlama süresini kısaltın",
  "Mutfak ve kasa arasındaki iletişimi güçlendirin",
  "Personel verimliliğini artırın",
  "Müşteri memnuniyetini yükseltin",
  "Operasyonel hataları azaltın",
  "Hızlı ve doğru servis sağlayın"
];

const screenshots = [
  "/images/is-verimliligi/verimlilik-screens/mutfakekranikds.png",
  "/images/is-verimliligi/verimlilik-screens/el-terminali.webp",
  "/images/is-verimliligi/verimlilik-screens/mobil01.webp",
  "/images/is-verimliligi/verimlilik-screens/mobil02.webp"
];

export default function IsVerimliligiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Is Verimliligi"
        subtitle="robotPOS'un verimliliği arttıran çözümleri ile tanışın"
        backgroundImage="/images/is-verimliligi/mutfak-banner-min.webp"
      >
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
      </PageHero>{/* Mutfak Ekranı Section */}
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
                  src="/images/is-verimliligi/mutfak-banner-min.webp"
                  alt="Mutfak Ekranı"
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
                  Mutfak Ekranı İle <span className="text-blue-600">Sipariş Hazırlama</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Mutfak ve Kasa Arasında Uzun Mesafelere Son
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-xl flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-800">Bölüm Bazlı Sipariş Yönetimi</h3>
                      <p className="text-sm text-gray-600">Siparişler ilgili mutfak/bar bölümünde otomatik görüntülenir</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-800">Esnek Çıktı Seçenekleri</h3>
                      <p className="text-sm text-gray-600">Yazıcı çıktısı veya dokunmatik ekrandan onay seçenekleri</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-800">Hazırlanma Süresi Takibi</h3>
                      <p className="text-sm text-gray-600">Ürünlerin mutfaktaki hazırlanma sürelerini ölçme ve analiz etme</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-800">Anlık Bildirimler</h3>
                      <p className="text-sm text-gray-600">Sipariş hazır olduğunda garsona otomatik bildirim gönderme</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm">
                    robotPOS mutfak ekranı çözümü ile farklı üretim noktalarınız için özelleştirilmiş seçenekler sunabilirsiniz. İçecek bölümünde ekran, sıcak mutfakta yazıcı gibi hibrit çözümler oluşturabilir, sipariş akışınızı optimize edebilirsiniz.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobil Terminal Section */}
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
                  Mobil Terminal <span className="text-blue-600">Sipariş</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Siparişlerinizi Mobil Terminal ile masa başında alabilirsiniz. Android tabanlı Mobil Terminallerimizi kullanarak, konuklarınızın tüm siparişlerini, masa başında toplayabilir, zaman ve personel tasarrufu sağlayabilirsiniz.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.slice(2, 6).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/is-verimliligi/el-terminali.webp"
                  alt="Mobil Terminal"
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              İş Verimliliği <span className="text-blue-600">Avantajları</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS İş Verimliliği çözümleri ile işletmenize sağlayacağınız faydalar
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
                className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-md"
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
              robotPOS İş Verimliliği modülünün tüm özelliklerini keşfedin
            </p>
          </div>
          
          <ScreenshotGallery images={screenshots} />
        </div>
      </section>
    </div>
  );
}
