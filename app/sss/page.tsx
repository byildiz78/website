"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ChevronDown, ShoppingCart, Building2, Monitor, Headphones, ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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

  // Filter questions based on search term
  const filteredFAQs = Object.entries(faqData).map(([key, category]) => ({
    ...category,
    key,
    questions: category.questions.filter(
      q => q.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

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

      {/* Search Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Soru ara..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {filteredFAQs.map((category) => (
              category.questions.length > 0 && (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Category Header */}
                  <button
                    className={`w-full px-6 py-4 flex items-center justify-between ${
                      expandedCategory === category.key ? 'bg-blue-50' : 'hover:bg-gray-50'
                    } transition-all duration-300`}
                    onClick={() => setExpandedCategory(
                      expandedCategory === category.key ? null : category.key
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        expandedCategory === category.key ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      } transition-all duration-300`}>
                        {category.icon}
                      </div>
                      <h2 className="text-xl font-semibold">{category.title}</h2>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      expandedCategory === category.key ? 'rotate-180 text-blue-600' : ''
                    }`} />
                  </button>

                  {/* Questions */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedCategory === category.key ? 'max-h-[2000px]' : 'max-h-0'
                  }`}>
                    <div className="divide-y divide-gray-100">
                      {category.questions.map((question, index) => (
                        <div key={index} className="px-6 py-4">
                          <div className="flex flex-col gap-2">
                            {/* Answer Tag */}
                            <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full w-fit">
                              <Check className="w-4 h-4" />
                              <span className="text-sm font-medium">Evet</span>
                            </div>
                            {/* Question */}
                            <div className="text-gray-700">{question}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
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
              <Link href="/demo-talebi">
                Sizi Arayalım
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}