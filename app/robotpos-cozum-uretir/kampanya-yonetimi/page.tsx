"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Percent, Tag, Calendar, Settings, BarChart3, Target, Clock, Gift } from "lucide-react";

const features = [
  {
    title: "Esnek Promosyon Tanımları",
    description: "Tek ürün, ürün grubu veya tüm ürünler için promosyonlar oluşturun",
    icon: <Settings className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Şube Bazlı Kampanyalar",
    description: "Tüm şubelerinizde veya sadece belirli şubelerde geçerli kampanyalar",
    icon: <Target className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Zaman Bazlı Kampanyalar",
    description: "Belirli tarih ve saat aralıklarında geçerli promosyonlar",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Öncelik Sıralaması",
    description: "Birden fazla kampanyanın öncelik sırasını belirleyebilme",
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
  }
];

const campaignTypes = [
  "2 alana 1 bedava",
  "İkincisi %50 indirimli",
  "Belirli tutarın üzerinde hediye ürün",
  "Minimum adisyon tutarına göre indirim",
  "Belirli ürün gruplarında özel fiyatlar",
  "Happy hour indirimleri",
  "Doğum günü özel kampanyaları",
  "Sadakat kartı sahiplerine özel kampanyalar"
];

export default function KampanyaYonetimiPage() {
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
            src="/images/kampanya/promotionsbanner.webp"
            alt="Kampanya ve Promosyon Yönetimi"
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
              Kampanya ve Promosyon Yönetimi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              Satışlarınızı artıracak esnek kampanya çözümleri
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
                  Demo Talebi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Description Section */}
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
                  src="/images/kampanya/promosyon-tanim.png"
                  alt="Promosyon Tanımlama Ekranı"
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
                  Esnek <span className="text-blue-600">Promosyon Listesi</span> Modülü
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Şubelerinizde uygulanacak çeşitli promosyonları kolayca oluşturun
                </p>
                <p className="text-gray-600 mb-4">
                  Promosyon Listesi modülümüz, şubelerinizde uygulanacak çeşitli promosyonlar oluşturmanıza olanak tanır. Bu modül sayesinde, tüm şubelerinizde veya sadece belirli bir şubede geçerli olacak şekilde promosyonlar tanımlayabilirsiniz.
                </p>
                <p className="text-gray-600 mb-4">
                  Örneğin, "2 alana 1 bedava" veya "İkincisi %50 indirimli" gibi kampanyalar oluşturabilirsiniz. Bu promosyonlar, satışları artırmak ve müşteri memnuniyetini sağlamak amacıyla esnek bir şekilde ayarlanabilir.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Kampanya Yönetimi <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Satışlarınızı artırmak için tasarlanmış güçlü kampanya yönetim araçları
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Promosyon <span className="text-blue-600">Tanımlama Süreci</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kolay ve hızlı bir şekilde promosyonlarınızı oluşturun
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Şube Seçimi</h3>
                <p className="text-gray-700">
                  Promosyon Listesi modülüne giriş yaptığınızda, ekranın sol tarafında "Tüm Şubeler" ve ayrı ayrı şube seçenekleri yer alır. Yeni bir promosyon tanımlaması yapmak istediğinizde, öncelikle bu promosyonun tüm şubelerde mi yoksa sadece belirli bir şubede mi geçerli olacağını seçmeniz gerekir.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Promosyon Bilgileri</h3>
                <p className="text-gray-700">
                  Şube seçimini tamamladıktan sonra, ekranın üst kısmında bulunan "Yeni Ekle" butonuna basarak promosyon tanımlama ekranına geçiş yapabilirsiniz. Promosyon adını, geçerlilik tarihini ve saat aralığını belirledikten sonra, promosyon içeriğini oluşturmak için Koşul ekranında bir başlangıç belirlemeniz gerekmektedir.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Koşul Tanımlama</h3>
                <p className="text-gray-700">
                  Bu aşamada, promosyonu aşağıdaki seçenekler üzerinden tanımlayabilirsiniz:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Tek Bir Ürün: Belirli bir ürün üzerinde promosyon tanımlayabilirsiniz.</li>
                  <li>Bir Ürün Grubu: Belirli bir ürün grubuna yönelik promosyon oluşturabilirsiniz.</li>
                  <li>Ürün Listesi: Seçim yapacağınız bir ürün listesi üzerinden promosyon uygulayabilirsiniz.</li>
                  <li>Tüm Ürünler: Promosyonun tüm ürünleri kapsayacak şekilde tanımlayabilirsiniz.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Öncelik ve Minimum Tutar</h3>
                <p className="text-gray-700">
                  Promosyon oluşturma sürecinde, belirli bir minimum adisyon tutarı belirleyebilir ve bu tutarı ilgili alana doldurabilirsiniz. Ayrıca, birden fazla promosyonun aynı anda geçerli olabileceği durumlarda, hangi promosyonun öncelikli olarak çalışacağını belirlemek için Öncelik Sırası bölümünden sıralama yapabilirsiniz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Oluşturabileceğiniz <span className="text-blue-600">Kampanya Türleri</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Müşterilerinizin ilgisini çekecek çeşitli kampanya seçenekleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {campaignTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <div className="mr-3 text-blue-500">
                    {index % 2 === 0 ? <Percent className="h-5 w-5" /> : <Gift className="h-5 w-5" />}
                  </div>
                  <p className="font-medium text-gray-800">{type}</p>
                </div>
              </motion.div>
            ))}
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
                  Kampanya Yönetimi Çözümümüzü Keşfedin
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Satışlarınızı artırmak ve müşteri memnuniyetini sağlamak için esnek kampanya çözümlerimizi deneyin
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
