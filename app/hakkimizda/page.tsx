"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Building2, Users, Cog, Check, Clock, Code, Lightbulb, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    value: "10+",
    label: "Ülkede Hizmet"
  },
  {
    icon: <Cog className="w-8 h-8 text-blue-400" />,
    value: "%100",
    label: "Yerli Yazılım"
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-400" />,
    value: "4.000+",
    label: "Şubede Aktif"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    value: "80+",
    label: "Zincir Marka"
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-400" />,
    value: "22+",
    label: "Yıllık Deneyim"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    value: "100+",
    label: "Kişilik Ekip"
  }
];

const strengths = [
  {
    icon: <Check className="w-6 h-6 text-blue-500" />,
    title: "Müşteri Odaklı Çözümler",
    description: "İşletmenizin ihtiyaçlarına özel, butik çözümler geliştiriyoruz."
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    title: "Hızlı Mevzuat Adaptasyonu",
    description: "Değişen mevzuatlara hızla adapte olarak işletmenizin kesintisiz çalışmasını sağlıyoruz."
  },
  {
    icon: <Building2 className="w-6 h-6 text-blue-500" />,
    title: "Merkezi Yönetim Liderliği",
    description: "Merkezi yönetim çözümlerinde sektör lideriyiz."
  },
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: "Özelleştirilebilir Çözümler",
    description: "Çözümlerimiz işletmenizin operasyonlarıyla tam uyumlu çalışacak şekilde özelleştirilebilir."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
    title: "Nitelikli Ar-Ge",
    description: "Nitelikli yazılım ve Ar-Ge ekiplerimiz hızlı ve etkin çözümler üretir."
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    title: "Teknoloji Takibi",
    description: "Değişen ve gelişen teknolojileri müşterilerimiz için önceden araştırmak ve analiz etmek."
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-500" />,
    title: "Kesintisiz Destek",
    description: "7x16 Çağrı Merkezimiz ile kesintisiz destek sağlarız."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/general/ofis.webp"
            alt="robotPOS"
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
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kurumsal
            </h1>
            <p className="text-xl text-blue-50 mb-4">
            Restoran Otomasyon konusunda Türkiye'nin önde gelen kurumlarına çözümler üretiyoruz            </p>
       
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            robotPOS Otomasyon <span className="text-blue-600">Sistemleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yeme-içme sektörünün önde gelen firmaları için geliştirmiş olduğumuz yazılım ve donanım ürünleri ile uçtan uca otomasyon çözümleri üretiyoruz.
          </p>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/general/rs5-min.webp"
              alt="robotPOS"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Biz <span className="text-blue-600">Kimiz?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Tek işimiz var ve işimizi çok seviyoruz...
            </p>
            <p className="text-gray-600 mb-6">
              2003 yılından bu yana yalnızca gıda firmaları için, Satış ve Merkezi Yönetim Çözümleri üretiyoruz.
            </p>
            <p className="text-gray-600">
              İlk günkü heyecanımız ve yıllardır hizmet vermekte olduğumuz kullanıcılarımızın geri bildirimleri ile, her geçen gün biraz daha uzmanlaşıyor her geçen gün işimizi daha çok seviyoruz.
            </p>
            <div className="mt-8 p-6 bg-blue-600 text-white rounded-xl">
              <p className="italic">
                "Başarılı olmanın tek yolunun "müşteri memnuniyetinden" geçtiğini biliyor ve tüm iş süreçlerimizi bu ilke çerçevesinde yapılandırıyoruz."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Strengths Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Neden <span className="text-blue-600">robotPOS</span>?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Özellikle birden fazla şubeye sahip olan gıda işletmelerinin sorunlarına cevap verebilen katma değerli çözümler geliştiriyoruz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    {strength.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{strength.title}</h3>
                    <p className="text-gray-600">{strength.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-600">Misyonumuz</h2>
              <p className="text-gray-600">
                Ülkemizdeki gıda işletmeciliğinin altyapı standartlarını dünya kalitesine yükseltmek ve müşterilerine en hızlı ve sorunsuz çözümler sunmak hedefiyle yola koyulan robotPOS, bu amaçla 22 yılı aşkın süredir faaliyet gösteriyor.
              </p>
              <p className="text-gray-600">
                Ürün ve hizmetleriyle sadece Türkiye'de değil, 10 farklı ülkede de yer alan robotPOS, gelecek yıllarda daha çok ülkeye açılarak, gıda işletmeciliği özelinde otomasyon sistemleri alanının Türkiye'den çıkan öncü firması konumunu güçlendirmeyi planlıyor.
              </p>
            </div>
            
            {/* Vision */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-600">Vizyonumuz</h2>
              <p className="text-gray-600">
                Dijitalleşen dünyanın ihtiyaçlarını farkında olan, ürün ve sistemlerini tüm dünyayı takip ederek geliştiren ve özelleştiren robotPOS, müşterilerini çağın gereklerine uygun otomasyon sistemleriyle buluşturuyor.
              </p>
              <p className="text-gray-600">
                Türkiye'yi başarıyla temsil eden gıda işletmelerinin ardındaki çözüm ortağı olmak ve katma değer yaratarak müşterileriyle omuz omuza yeni başarılara imza atmak isteyen robotPOS, müşteri memnuniyeti odaklı yaklaşımı disiplin edinerek faaliyetlerini sürdürüyor.
              </p>
            </div>
          </div>
        </div>

        {/* Comprehensive Solutions Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Uçtan Uca <span className="text-blue-600">Çözümler</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Çok şubeli yapılarda önemini gösteren kapsamlı çözümlerimiz ile zincir işletmelerin operasyonlarının tek bir sistem üzerinden canlı olarak takip edilebilmesini sağlıyoruz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Merkezi Satış Yönetimi", icon: <Building2 className="w-10 h-10 text-blue-500" /> },
              { title: "Merkezi Ürün Yönetimi", icon: <Cog className="w-10 h-10 text-blue-500" /> },
              { title: "Merkezi Stok Yönetimi", icon: <Check className="w-10 h-10 text-blue-500" /> },
              { title: "Şube Ağı Yönetimi", icon: <Globe className="w-10 h-10 text-blue-500" /> },
              { title: "Merkezi Üretim", icon: <Cog className="w-10 h-10 text-blue-500" /> },
              { title: "Sevkiyat-Lojistik Yönetimi", icon: <Clock className="w-10 h-10 text-blue-500" /> },
              { title: "Merkezi Raporlama", icon: <Lightbulb className="w-10 h-10 text-blue-500" /> },
              { title: "Kesintisiz Destek", icon: <Headphones className="w-10 h-10 text-blue-500" /> },
              { title: "Özelleştirilebilir Çözümler", icon: <Code className="w-10 h-10 text-blue-500" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-50 p-4 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-10 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                365 gün <span className="text-blue-100">Destek İmkanı</span>
              </h2>
              <p className="text-xl text-blue-100 mb-4">
                Talep ve Sorunlarınız için 7x16 açık çözüm noktası
              </p>
              <p className="text-blue-50">
                Uzman ve güler yüzlü ekibimiz ve 7x16 açık Çağrı Merkezimiz ile kullanıcılarımıza ürünlerimizi kesintisiz olarak kullanmaları için destek hizmeti veriyoruz
              </p>
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                asChild
              >
                <a href="/iletisim">
                  Destek Alın
                </a>
              </Button>
            </div>
            <div className="relative h-full min-h-[300px]">
              <Image
                src="/images/general/ofis.webp"
                alt="robotPOS Support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}