"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, FileText, PieChart, LineChart, TrendingUp, Smartphone } from "lucide-react";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";
import { PageHero } from "@/components/ui/page-hero";

const benefits = [
  "İşletme verilerinize her yerden erişin",
  "Detaylı ve kapsamlı analiz raporları oluşturun",
  "Satış ve karlılık trendlerini takip edin",
  "Şubeleriniz arasında karşılaştırmalı raporlar alın",
  "Otomatik raporlama ile zaman kazanın",
  "Veri odaklı kararlar alın"
];

const screenshots = [
  "/images/raporlama-analiz/raporlama-screens/01.png",
  "/images/raporlama-analiz/raporlama-screens/02.png",
  "/images/raporlama-analiz/raporlama-screens/03.png",
  "/images/raporlama-analiz/raporlama-screens/04.png",
  "/images/raporlama-analiz/raporlama-screens/05.png",
  "/images/raporlama-analiz/raporlama-screens/06.png",
  "/images/raporlama-analiz/raporlama-screens/07.png"
];

export default function RaporlamaVeAnalizPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Raporlama ve Analiz"
        subtitle="Yapay Zeka Destekli Merkezi Raporlama Araçları"
        backgroundImage="/images/raporlama-analiz/ai-analiz-video.webm"
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
      </PageHero>{/* Detaylı Raporlama Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/raporlama-analiz/raporlama-screens/01.png"
                  alt="Detaylı Raporlama"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/raporlama-analiz/Android_iOS_Windows-1080x675-e1558891152651.webp"
                  alt="Mobil Raporlama"
                  width={400}
                  height={200}
                  className="w-full h-auto max-w-[200px] mx-auto"
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
                  Detaylı <span className="text-blue-600">Raporlama İmkanı</span>
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  İnternet'in olduğu her yerden raporlarınıza erişin, detaylı analizler yapın.
                </p>
                <p className="text-gray-600 mb-4">
                  İşletmeniz ve operasyonlarınız için kritik değer taşıyan verilerinize, İşletme içerisinden, herhangi bir tarayıcıdan veya mobil cihazlar için hazırlanmış Mobil uygulamalarımızdan gerçek zamanlı olarak erişebilirsiniz.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
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

      {/* Merkezi Raporlama Section */}
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
                  Merkezi Raporlama <span className="text-blue-600">Platformu</span>
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Verilerinizi canlı olarak takip edin
                </p>
                <p className="text-gray-600 mb-4">
                  Birden fazla şubesi bulunan işletmeler için özel olarak tasarlanmış, Merkezi Raporlama Platformu ile tüm verilere gerçek zamanlı erişim.
                </p>
                <p className="text-gray-600 mb-4">
                  Bayi, Bölge Sorumlusu, Bölge Müdürü, İşletme Sahibi gibi hiyerarşi tanımları ile, sadece belirli şubelere ve belirli raporlama erişim imkanı.
                </p>
                <p className="text-gray-600">
                  E-posta görevleri ile raporların dilenen saatte dilenen kullanıcılara gönderimi. Olay bildirimleri ile tanımlı durumlarda, kullanıcıların notifikasyon ile uyarılması.
                </p>
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
                  src="/images/raporlama-analiz/raporlama-screens/02.png"
                  alt="Merkezi Raporlama"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yapay Zeka Destekli Raporlama Araçları Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block relative">
              <h2 className="text-4xl font-bold mb-4 relative z-10">
                Yapay Zeka Destekli <span className="text-blue-600">Raporlama Araçları</span>
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg blur-md -z-10"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              Verilerinizle günlük dilde konuşun, anında analiz sonuçları alın
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-lg"></div>
                <video 
                  src="/images/raporlama-analiz/ai-analiz-video.webm" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto relative rounded-xl"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-lg"></div>
                <Image
                  src="/images/raporlama-analiz/raporlama-screens/06.png"
                  alt="Yapay Zeka Destekli Raporlama"
                  width={600}
                  height={400}
                  className="w-full h-auto relative rounded-xl"
                />
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-3">Yapay Zeka Asistanınız</h3>
                <p className="mb-4">
                  "Geçen hafta en çok satılan ürünler hangileri?"
                </p>
                <div className="flex items-center space-x-2 text-blue-100 text-sm">
                  <span>Sorgunuz anında analiz ediliyor</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-blue-100 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-100 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-100 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="h-full flex flex-col justify-center">
                <p className="text-gray-600 mb-4">
                  Artık karmaşık sorgular oluşturmaya veya teknik bilgiye ihtiyacınız yok. Yapay zeka destekli raporlama araçlarımız sayesinde, günlük konuşma diliyle veri tabanınızı sorgulayabilir, analizler yapabilir ve öngörüler elde edebilirsiniz.
                </p>
                <p className="text-gray-600 mb-6">
                  Örneğin, "Geçen aya göre en çok satış artışı gösteren 5 ürünü göster" veya "Hangi şubemiz bu ay en yüksek ciroyu elde etti?" gibi doğal dil sorguları yapabilirsiniz. Yapay zeka, sorgunuzu analiz eder ve veri tabanınızdan ilgili verileri çekerek size anlamlı sonuçlar sunar.
                </p>
                
                <div className="space-y-4 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0 mt-1">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Doğal Dil Sorguları</h3>
                      <p className="text-gray-600">Teknik SQL bilgisi olmadan günlük dilde veri tabanınızı sorgulayın</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0 mt-1">
                      <PieChart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Otomatik Veri Analizi</h3>
                      <p className="text-gray-600">Yapay zeka, verilerinizi analiz ederek anlamlı içgörüler ve öneriler sunar</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0 mt-1">
                      <LineChart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Tahmine Dayalı Analizler</h3>
                      <p className="text-gray-600">Geçmiş verilerinize dayanarak gelecek trendleri ve satış tahminleri oluşturun</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Raporlama ve Analiz <span className="text-blue-600">Avantajları</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS Raporlama ve Analiz çözümleri ile işletmenize sağlayacağınız faydalar
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
                className="flex items-center space-x-3 bg-gray-50 p-6 rounded-xl shadow-md"
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

     
      {/* Screenshot Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ekran <span className="text-blue-600">Görüntüleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS Raporlama ve Analiz modülünün tüm özelliklerini keşfedin
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

    </div>
  );
}
