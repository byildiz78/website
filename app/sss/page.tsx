"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ShoppingCart, Building2, Monitor, Headphones, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("pos"); // Default açık kategori

  // FAQ Categories and Questions
  const faqData = {
    pos: {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Satış Noktası (POS)",
      questions: [
        "Satışlar canlı olarak takip edilebiliyor mu?",
        "Şubede ürünler satılırken, canlı olarak stok hareketleri gerçekleşiyor mu?",
        "Adet ürünlerde, satış yaparken, kalan ürün adetini ekrandan takip edebiliyormuyuz?",
        "Şubeler merkeze, online olarak ürün talebinde bulunabiliyorlar mı?",
        "Şubelere merkezden gönderilen stok malları, otomatik olarak şube deposuna işlenebiliyor mu?",
        "Aynı anda, tüm şube verilerine, internet üzerinden ulaşılabiliyor mu?",
        "Aynı anda, tüm şube verilerine, telefon üzerinden ulaşılabiliyor mu?",
        "Yemek Sepetinden gelen siparişler, otomatik olarak sisteme düşebiliyor mu?",
        "Web Sitesinden gelen siparişler otomatik olarak sisteme düşebiliyor mu?",
        "Merkez kullanıcısının, gerek stok, gerek se satış işlemleri için, sisteme müdaha etmesi gerekiyor mu, yoksa tüm işlemler otomatik olarak mı gerçekleşiyor?",
        "Müşterilere, indirim ve/veya puan kart verilebiliyor mu?",
        "Bir şubede, indirimi veya puan kartı olan bir müşteri, indirimini veya puan'ini ek bir işlem yapmaksızın diğer şubede kullanabiliyor mu?",
        "Ön Muhasebe işlemleri, sistem üzerinden takip edilebiliyor mu? (Kasa, Cari, Banka vb)",
        "Franchesee lere gönderilen ürünler için, bayiler borçlandırılabiliyor mu?"
      ]
    },
    chainManagement: {
      icon: <Building2 className="w-6 h-6" />,
      title: "Zincir Mağaza Yönetimi",
      questions: [
        "Satışlar canlı olarak takip edilebiliyor mu?",
        "Şubede ürünler satılırken, canlı olarak stok hareketleri gerçekleşiyor mu?",
        "Adet ürünlerde, satış yaparken, kalan ürün adetini ekrandan takip edebiliyormuyuz?",
        "Şubeler merkeze, online olarak ürün talebinde bulunabiliyorlar mı?",
        "Şubelere merkezden gönderilen stok malları, otomatik olarak şube deposuna işlenebiliyor mu?",
        "Aynı anda, tüm şube verilerine, internet üzerinden ulaşılabiliyor mu?",
        "Aynı anda, tüm şube verilerine, telefon üzerinden ulaşılabiliyor mu?",
        "Yemek Sepetinden gelen siparişler, otomatik olarak sisteme düşebiliyor mu?",
        "Web Sitesinden gelen siparişler otomatik olarak sisteme düşebiliyor mu?",
        "Merkez kullanıcısının, gerek stok, gerek se satış işlemleri için, sisteme müdaha etmesi gerekiyor mu, yoksa tüm işlemler otomatik olarak mı gerçekleşiyor?",
        "Müşterilere, indirim ve/veya puan kart verilebiliyor mu?",
        "Bir şubede, indirimi veya puan kartı olan bir müşteri, indirimini veya puan'ini ek bir işlem yapmaksızın diğer şubede kullanabiliyor mu?",
        "Ön Muhasebe işlemleri, sistem üzerinden takip edilebiliyor mu? (Kasa, Cari, Banka vb)",
        "Franchesee lere gönderilen ürünler için, bayiler borçlandırılabiliyor mu?"
      ]
    },
    hardware: {
      icon: <Monitor className="w-6 h-6" />,
      title: "Donanım Ürünleri",
      questions: [
        "Donanım ürünleri sektörel dayanıma sahip mi?",
        "Masa başında sipariş almak için, el terminali veya tablet kullanılabiliyor mu?",
        "Siparişleri üretim noktalarında takip etmek için Dokunmatik Mutfak ekranı (KDS) kullanılabiliyor mu?",
        "Peşin satışta, Müşteri Sıramatik mantığı ile, numara verilip daha sonra çağırılabiliyor mu?",
        "İşlemler Personel manyetik kartı veya parmak izi okuyucu ile yapılabiliyor mu?"
      ]
    },
    support: {
      icon: <Headphones className="w-6 h-6" />,
      title: "Teknik Servis Hizmetleri",
      questions: [
        "Her türlü soru ve sorun için aranabilecek bir Çağrı Merkezi var mı?",
        "Bünyemizde bulunan tüm şube ve kullanıcıların, aldıkları teknik destek hizmetleri aylık olarak raporlanabiliyor mu?",
        "destek@robotPOS.com adresine gönderilen her e-posta otomatik olarak, Çağrı merkezi işlem kuyruğuna ekleniyor mu?",
        "Telefon ve internet ile çözümlenemeyen sorunlar için yerinde Hizmet alınabiliyor mu?",
        "Merkezi Yönetim Sistemi için, tüm kurgu ve işleyişimize hakim, Proje Sorumlusu atanıyor mu?"
      ]
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/general/res-1-min.webp"
            alt="robotPOS SSS"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </motion.div>
        <div className="container relative z-10 h-full mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sık Sorulan Sorular
            </h1>
            <p className="text-xl text-blue-50">
              Müşterilerimizin merak ettikleri ve sıkça sordukları soruları sizin için derledik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-6">
            {Object.entries(faqData).map(([key, category]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                  className={`w-full px-6 py-4 flex items-center justify-between ${
                    expandedCategory === key ? 'bg-blue-50 border-b border-gray-200' : 'hover:bg-gray-50'
                  } transition-all duration-300`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      expandedCategory === key ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    } transition-all duration-300`}>
                      {category.icon}
                    </div>
                    <h2 className="text-xl font-semibold">{category.title}</h2>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                    expandedCategory === key ? 'rotate-180 text-blue-600' : 'text-gray-400'
                  }`} />
                </button>

                {/* Questions */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedCategory === key ? 'max-h-[2000px]' : 'max-h-0'
                }`}>
                  <div className="p-6 grid gap-4">
                    {category.questions.map((question, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                            <Check className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="text-gray-800 font-medium">{question}</p>
                            <p className="text-green-600 font-semibold mt-2">Evet</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Hala Sorularınız Var Mı?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.
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