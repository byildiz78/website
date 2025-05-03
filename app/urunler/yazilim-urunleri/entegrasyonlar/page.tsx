"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2 } from "lucide-react";

interface Entegrasyon {
  ad: string;
  aciklama: string;
  logoUrl: string;
}

export default function EntegrasyonlarPage() {
  const [entegrasyonlar, setEntegrasyonlar] = useState<Entegrasyon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEntegrasyonlar() {
      try {
        const response = await fetch('/files/entegrasyonlar.json');
        const data = await response.json();
        setEntegrasyonlar(data);
      } catch (error) {
        console.error('Entegrasyonlar yüklenirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEntegrasyonlar();
  }, []);

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
            src="/images/general/integrations.webp"
            alt="Entegrasyonlar"
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
              Entegrasyonlar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              Harici sistemler ile kusursuz Entegrasyon çalışmaları yaparak, iş süreçlerinizi kolaylaştırıyoruz
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

      {/* Entegrasyonlar Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Entegrasyon <span className="text-blue-600">Çözümlerimiz</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              robotPOS, işletmenizin ihtiyaç duyduğu bir çok sistemle entegre çalışır
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {entegrasyonlar.map((entegrasyon, index) => (
                <motion.div
                  key={entegrasyon.ad}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="h-32 w-full relative mb-6 flex items-center justify-center">
                      <Image
                        src={entegrasyon.logoUrl}
                        alt={entegrasyon.ad}
                        width={150}
                        height={100}
                        className="object-contain max-h-32"
                        unoptimized={true}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">{entegrasyon.ad}</h3>
                    <p className="text-gray-600 text-center">{entegrasyon.aciklama}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-blue-50 p-8">
                <div className="grid grid-cols-3 gap-4">
                  {entegrasyonlar.slice(0, 6).map((entegrasyon, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <Image
                        src={entegrasyon.logoUrl}
                        alt={entegrasyon.ad}
                        width={80}
                        height={60}
                        className="object-contain h-16"
                        unoptimized={true}
                      />
                    </div>
                  ))}
                </div>
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
                  Entegrasyonların <span className="text-blue-600">Faydaları</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  robotPOS'un sunduğu entegrasyon çözümleri ile işletmenize değer katın.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Link2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Tek Noktadan Yönetim</h3>
                    <p className="text-gray-600">Tüm sistemlerinizi tek bir noktadan yönetin, veri tekrarını önleyin.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Link2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Zaman Tasarrufu</h3>
                    <p className="text-gray-600">Manuel işlemleri otomatikleştirerek zaman kazanın.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Link2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hata Oranını Azaltma</h3>
                    <p className="text-gray-600">Otomatik entegrasyonlar ile insan kaynaklı hataları minimize edin.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Link2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Müşteri Memnuniyeti</h3>
                    <p className="text-gray-600">Daha hızlı ve hatasız hizmet ile müşteri memnuniyetini artırın.</p>
                  </div>
                </div>
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
              Entegrasyon İhtiyaçlarınız İçin Bize Ulaşın
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Özel entegrasyon ihtiyaçlarınız için çözüm üretiyoruz
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
