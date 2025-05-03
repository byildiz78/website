"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  LayoutGrid, 
  ShoppingBag, 
  ShoppingCart, 
  Truck, 
  CreditCard,
  Users,
  CalendarDays,
  BarChart3,
  Scan,
  Scale,
  Clock,
  Package,
  Phone,
  MapPin,
  Headset,
  Wallet,
  BarChart,
  Building
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const solutionCategories = [
  {
    id: "masa-satis",
    title: "Masa Satış",
    icon: <LayoutGrid className="w-6 h-6" />,
    description: "Restoran ve kafelerde masa bazlı satış yönetimi çözümleri",
    features: [
      {
        title: "Bölüm, Masa Yönetimi",
        description: "Restoranınızı bölümlere ayırarak masa düzenini kolayca yönetin",
        icon: <LayoutGrid className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Rezervasyon Yönetimi",
        description: "Masa rezervasyonlarını takip edin ve çakışmaları önleyin",
        icon: <CalendarDays className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Doluluk Analizleri",
        description: "Masa kullanım oranlarını ve doluluk durumunu analiz edin",
        icon: <BarChart3 className="w-6 h-6 text-blue-600" />
      }
    ]
  },
  {
    id: "tezgah-satis",
    title: "Tezgah Satış",
    icon: <ShoppingBag className="w-6 h-6" />,
    description: "Hızlı ve verimli tezgah satış çözümleri",
    features: [
      {
        title: "Tezgahtan Satış Çözümleri",
        description: "Hızlı ve pratik tezgah satış ekranları ile operasyonlarınızı hızlandırın",
        icon: <ShoppingBag className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Barkodlu Satış Desteği",
        description: "Barkod okuyucu ile hızlı ürün tanıma ve satış işlemleri",
        icon: <Scan className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Terazi Entegrasyonu",
        description: "Elektronik terazilerle entegre çalışarak gramajlı ürün satışı yapın",
        icon: <Scale className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Müşteri Kuyruğa Alma Özellikleri",
        description: "Yoğun saatlerde müşteri sırasını düzenli bir şekilde yönetin",
        icon: <Users className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Dökme Ürün Satış Özellikleri",
        description: "Kilogram, litre veya adet bazlı dökme ürün satışlarını kolayca yönetin",
        icon: <Package className="w-6 h-6 text-blue-600" />
      }
    ]
  },
  {
    id: "al-gotur-satis",
    title: "Al Götür Satış",
    icon: <ShoppingCart className="w-6 h-6" />,
    description: "Hızlı ve pratik self-servis satış çözümleri",
    features: [
      {
        title: "Hızlı Satış Ekranları Oluşturma",
        description: "İhtiyacınıza göre özelleştirilebilen hızlı satış ekranları ile işlemleri hızlandırın",
        icon: <ShoppingCart className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Müşteri Bekletme Seçenekleri",
        description: "Siparişlerin hazırlanma sürecinde müşterileri bilgilendirin ve bekletme sürecini yönetin",
        icon: <Clock className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Sipariş No Takip Çözümleri",
        description: "Siparişleri numaralandırarak kolay takip edilmesini sağlayın",
        icon: <BarChart className="w-6 h-6 text-blue-600" />
      }
    ]
  },
  {
    id: "paket-satis",
    title: "Paket Satış",
    icon: <Truck className="w-6 h-6" />,
    description: "Kapsamlı paket servis ve teslimat yönetimi",
    features: [
      {
        title: "Gelişmiş Paket Servis Özellikleri",
        description: "Paket servis süreçlerinizi optimize eden gelişmiş özellikler",
        icon: <Truck className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Caller-ID Entegrasyonu",
        description: "Arayan müşterileri otomatik tanıyarak hızlı sipariş alma",
        icon: <Phone className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Kurye Yönetimi",
        description: "Kurye atama, rota optimizasyonu ve teslimat takibi",
        icon: <Users className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Google Maps Entegrasyonu",
        description: "Adres bulma ve rota optimizasyonu için harita entegrasyonu",
        icon: <MapPin className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Çağrı Merkezi Entegrasyonu",
        description: "Çağrı merkezi sistemleriyle entegre çalışarak sipariş süreçlerini hızlandırma",
        icon: <Headset className="w-6 h-6 text-blue-600" />
      }
    ]
  },
  {
    id: "on-odemeli-satis",
    title: "Ön Ödemeli Satış",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Kurumsal ve ön ödemeli kart sistemleri",
    features: [
      {
        title: "Para Dolum Özellikleri",
        description: "Ön ödemeli kartlara bakiye yükleme ve yönetme",
        icon: <Wallet className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Bakiye Kontrolü ve Yönetimi",
        description: "Belirlenen oranlarda negatif bakiye kullanımı ve bakiye takibi",
        icon: <CreditCard className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Kurum Mutabakat Yönetimi",
        description: "Kurumsal müşterilerle düzenli mutabakat ve raporlama",
        icon: <Building className="w-6 h-6 text-blue-600" />
      }
    ]
  }
];

export default function CozumlerPage() {
  const [activeTab, setActiveTab] = useState("masa-satis");

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
            src="/images/general/rs5-min.webp"
            alt="robotPOS Çözümleri"
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
              robotPOS Satış Çözümleri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              İşletmenizin her ihtiyacına uygun kapsamlı çözümler
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

      {/* Solutions Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Kapsamlı <span className="text-blue-600">Satış Çözümleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İşletmenizin türüne ve ihtiyaçlarınıza göre özelleştirilmiş satış çözümleri
            </p>
          </div>

          <Tabs 
            defaultValue="masa-satis" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {solutionCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 px-4 py-2"
                  >
                    <span className="hidden md:inline-flex">{category.icon}</span>
                    <span>{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {solutionCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={activeTab === category.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-blue-700">
                      {category.title} <span className="text-gray-800">Çözümleri</span>
                    </h3>
                    <p className="text-lg text-gray-600">
                      {category.description}
                    </p>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <p className="text-gray-700">
                        robotPOS {category.title} çözümleri, işletmenizin satış süreçlerini optimize etmek ve müşteri memnuniyetini artırmak için tasarlanmıştır. Kullanıcı dostu arayüzü ve güçlü özellikleriyle, satış operasyonlarınızı daha verimli hale getirir.
                      </p>
                    </div>
                    <div>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <a href="/demo-talebi">
                          Detaylı Bilgi Alın
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={activeTab === category.id ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                      <Image
                        src={`/images/general/pos.jpg`}
                        alt={`${category.title} Çözümü`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          // Fallback image if the specific one doesn't exist
                          e.currentTarget.src = "/images/general/pos.jpg";
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    <span className="text-blue-600">{category.title}</span> Özellikleri
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={activeTab === category.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
                      >
                        <div className="flex flex-col">
                          <div className="bg-blue-50 p-3 rounded-full w-fit mb-4">
                            {feature.icon}
                          </div>
                          <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              robotPOS ile <span className="text-blue-600">Avantajlarınız</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tüm satış çözümlerimizde ortak olan temel avantajlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-700">Kullanım Kolaylığı</h3>
              <p className="text-gray-600">
                Sezgisel arayüzler ve kolay kullanım ile personel eğitim süresini minimize edin. Kullanıcı dostu tasarım sayesinde operasyonlarınızı hızlandırın.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-700">Entegrasyon Kabiliyeti</h3>
              <p className="text-gray-600">
                Tüm çözümlerimiz birbiriyle ve diğer sistemlerle entegre çalışır. Muhasebe yazılımları, e-fatura sistemleri ve diğer iş uygulamalarıyla sorunsuz entegrasyon.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-700">Kapsamlı Raporlama</h3>
              <p className="text-gray-600">
                Tüm satış kanallarınızdan gelen verileri tek bir merkezde toplayarak detaylı raporlar oluşturun. Veri odaklı kararlar alın ve işletmenizi daha verimli hale getirin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-700">Ölçeklenebilirlik</h3>
              <p className="text-gray-600">
                İşletmeniz büyüdükçe çözümlerimiz de sizinle birlikte büyür. Tek şubeli işletmelerden yüzlerce şubeli zincirlere kadar her ölçekte işletme için uygun çözümler.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-700">Kesintisiz Destek</h3>
              <p className="text-gray-600">
                7/24 teknik destek ve düzenli güncellemelerle her zaman yanınızdayız. Uzman ekibimiz, karşılaşabileceğiniz her türlü sorunda size yardımcı olmak için hazır.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-700">Maliyet Avantajı</h3>
              <p className="text-gray-600">
                İhtiyacınız olan modülleri seçerek bütçenize uygun çözümler oluşturun. Modüler yapı sayesinde sadece ihtiyacınız olan özelliklere yatırım yapın.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  İşletmeniz İçin En Uygun Çözümü Keşfedin
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  robotPOS uzmanları, işletmenizin ihtiyaçlarına özel çözümler sunmak için yanınızda
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-blue-700"
                    asChild
                  >
                    <a href="/iletisim">
                      Bize Ulaşın
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
