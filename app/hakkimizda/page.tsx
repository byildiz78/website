"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Building2, Users, Cog } from "lucide-react";
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
    value: "3.000+",
    label: "Şubede Aktif"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    value: "100+",
    label: "Zincir Marka"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
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
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kurumsal
            </h1>
            <p className="text-xl text-blue-50">
              Restoran Otomasyon konusunda Türkiye'nin önde gelen kurumlarına çözümler üretiyoruz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            robotPOS Otomasyon <span className="text-gray-500">Sistemleri</span>
          </h2>
          <p className="text-xl text-gray-600">
            Gıda işletmeleri için çözümler üretiyoruz.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl"
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
            <div className="mt-8 p-6 bg-gray-700 text-white rounded-xl">
              <p className="italic">
                "Başarılı olmanın tek yolunun "müşteri memnuniyetinden" geçtiğini biliyor ve tüm iş süreçlerimizi bu ilke çerçevesinde yapılandırıyoruz."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-lg p-8 mb-24"
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

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Misyonumuz</h2>
            <p className="text-gray-600">
              Ülkemizdeki gıda işletmeciliğinin altyapı standartlarını dünya kalitesine yükseltmek ve müşterilerine en hızlı ve sorunsuz çözümler sunmak hedefiyle yola koyulan robotPOS, bu amaçla 16 yılı aşkın süredir faaliyet gösteriyor.
            </p>
            <p className="text-gray-600">
              Ürün ve hizmetleriyle sadece Türkiye'de değil, 10 farklı ülkede de yer alan robotPOS, gelecek yıllarda daha çok ülkeye açılarak, gıda işletmeciliği özelinde otomasyon sistemleri alanının Türkiye'den çıkan öncü firması konumunu güçlendirmeyi planlıyor.
            </p>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/general/rs4-min.webp"
              alt="robotPOS Mission"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/general/res-1-min.webp"
              alt="robotPOS Vision"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Vizyonumuz</h2>
            <p className="text-gray-600">
              Dijitalleşen dünyanın ihtiyaçlarını farkında olan, ürün ve sistemlerini tüm dünyayı takip ederek geliştiren ve özelleştiren robotPOS, müşterilerini çağın gereklerine uygun otomasyon sistemleriyle buluşturuyor.
            </p>
            <p className="text-gray-600">
              Türkiye'yi başarıyla temsil eden gıda işletmelerinin ardındaki çözüm ortağı olmak ve katma değer yaratarak müşterileriyle omuz omuza yeni başarılara imza atmak isteyen robotPOS, müşteri memnuniyeti odaklı yaklaşımı disiplin edinerek faaliyetlerini sürdürüyor.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              365 gün <span className="text-gray-500">Destek İmkanı</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Talep ve Sorunlarınız için 7x16 açık çözüm noktası
            </p>
            <p className="text-gray-600">
              Uzman ve güler yüzlü ekibimiz ve 7x16 açık Çağrı Merkezimiz ile kullanıcılarımıza ürünlerimizi kesintisiz olarak kullanmaları için destek hizmeti veriyoruz
            </p>
            <Button 
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
              asChild
            >
              <Link href="/iletisim">
                Destek Alın
              </Link>
            </Button>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/general/ofis.webp"
              alt="robotPOS Support"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Customer Focused Solutions Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/general/pos.jpg"
              alt="Customer Solutions"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Müşteri Odaklı <span className="text-gray-500">Çözümler</span>
            </h2>
            <h3 className="text-xl text-gray-500">Butik Çözümler Üretiyoruz</h3>
            <p className="text-gray-600">
              %100 yerli ürün ve hizmetleriyle, değişen mevzuatlara anında adapte olan ve gıda işletmelerinin faaliyetlerini kesintisiz sürdürmelerini sağlayan robotPOS, özelleştirilebilen çözümleri sayesinde işletmelere tam uyumluluk sunarken, ihtiyaçlara hızlı ve etkin çözümler vadediyor.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}