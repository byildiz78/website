"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Clock, BarChart3, Zap, FileText } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";

export default function RestaurantPOSIntegrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Restoran Yazarkasa Entegrasyonu"
        subtitle="Yasal zorunluluklarınızı karşılayan, işletmenizi güvence altına alan kusursuz yazarkasa entegrasyonu"
        backgroundImage="/images/general/ingenico.jpg"
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
      </PageHero>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                ÖKC Entegrasyonlu <span className="text-blue-600">Restoran Otomasyon Sistemi</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Maliye Bakanlığı'nın getirdiği zorunlulukları karşılayan, cezalardan koruyan ve işletmenizi dijital çağa taşıyan robotPOS yazarkasa entegrasyonu çözümü ile tanışın.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is ÖKC Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">
                ÖKC Nedir ve <span className="text-blue-600">Neden Önemlidir?</span>
              </h2>
              <p className="text-gray-600 mb-6">
                ÖKC (Ödeme Kaydedici Cihaz), satış işlemlerini kaydederek Gelir İdaresi Başkanlığı (GİB) ile veri paylaşımı yapan elektronik cihazlardır. Yeni nesil yazarkasa POS cihazları, vergi bilgilerini elektronik olarak kaydederek mali şeffaflığı artırır ve vergi kaçakçılığını önler.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Mali Şeffaflık</h3>
                    <p className="text-gray-600">Tüm satış verileriniz elektronik ortamda güvenle saklanır ve raporlanır.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Yasal Zorunluluk</h3>
                    <p className="text-gray-600">Perakende satış yapan tüm işletmeler için ÖKC kullanımı zorunludur.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Dijital Dönüşüm</h3>
                    <p className="text-gray-600">Geleneksel yazarkasalardan dijital sistemlere geçiş, işletmenizi geleceğe hazırlar.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative"
            >
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/general/pos.jpg"
                  alt="Yeni Nesil Yazarkasa POS Cihazı"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                  unoptimized={true}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                robotPOS Yazarkasa Entegrasyonunun <span className="text-blue-600">Avantajları</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Kusursuz entegrasyon ile işletmenizi yasal cezalardan koruyun, operasyonel verimliliğinizi artırın
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-blue-500"
            >
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Maliye Cezalarına Son</h3>
              <p className="text-gray-600">
                Otomatik veri aktarımı sayesinde mali denetimlerde karşılaşılabilecek yüksek cezalardan korunun. Tüm satışlarınız otomatik olarak yazar kasaya işlenir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-green-500"
            >
              <Zap className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Kolay Kullanım</h3>
              <p className="text-gray-600">
                Teknoloji korkusuna son! Kullanıcı dostu arayüz ile personel eğitimi minimum sürede tamamlanır. Karmaşık işlemler otomatikleştirilmiştir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-purple-500"
            >
              <Clock className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Zaman Tasarrufu</h3>
              <p className="text-gray-600">
                Manuel işlemlere son! Otomatik veri aktarımı sayesinde zamandan tasarruf edin ve işletmenizin diğer alanlarına odaklanın.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-yellow-500"
            >
              <BarChart3 className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Detaylı Raporlama</h3>
              <p className="text-gray-600">
                Satış verilerinizi anlık olarak takip edin, detaylı raporlar ile işletmenizin finansal durumunu analiz edin ve stratejik kararlar alın.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-red-500"
            >
              <FileText className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Hatasız Kayıt</h3>
              <p className="text-gray-600">
                İnsan kaynaklı hataları minimuma indirin. Otomatik entegrasyon sayesinde tüm satışlarınız doğru ve eksiksiz şekilde kaydedilir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-indigo-500"
            >
              <Shield className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">7/24 Teknik Destek</h3>
              <p className="text-gray-600">
                Sorun yaşadığınızda yanınızdayız. Uzman teknik ekibimiz 7/24 hizmetinizde, işletmenizin kesintisiz çalışmasını sağlıyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Kimler İçin <span className="text-blue-600">Zorunlu?</span>
              </h2>
              <p className="text-gray-600 mb-6">
                ÖKC kullanımı, perakende satış yapan tüm işletmeler için zorunludur. Özellikle aşağıdaki işletmeler bu kapsamda değerlendirilmektedir:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Restoranlar ve Kafeler</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Fast-Food İşletmeleri</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Pastaneler ve Fırınlar</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Barlar ve Gece Kulüpleri</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Oteller ve Konaklama Tesisleri</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Catering Hizmetleri</span>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-gray-600 italic">
                  Belirli bir ciroyu aşan işletmeler için ÖKC kullanımı zorunludur. Küçük ölçekli işletmeler dahi bu düzenlemeye uymak zorundadır, aksi takdirde ağır idari cezalarla karşı karşıya kalabilirler.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/general/pos.jpg"
                  alt="Yeni Nesil Yazarkasa POS Cihazı"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                  unoptimized={true}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                İşletmenizi Güvence Altına Alın
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                robotPOS yazarkasa entegrasyonu ile mali cezalardan korunun, işletmenizi dijital çağa taşıyın ve rekabet avantajı kazanın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/iletisim">
                    Bize Ulaşın
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Sıkça Sorulan <span className="text-blue-600">Sorular</span>
                </h2>
                <p className="text-gray-600">
                  Yazarkasa entegrasyonu hakkında merak edilenler
                </p>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3">Mevcut POS sistemimi değiştirmem gerekiyor mu?</h3>
                <p className="text-gray-600">
                  Hayır, robotPOS çözümü mevcut POS sisteminizle entegre çalışabilir. Uzman ekibimiz, mevcut sisteminizi değerlendirerek en uygun entegrasyon yöntemini belirleyecektir.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3">Entegrasyon süreci ne kadar sürer?</h3>
                <p className="text-gray-600">
                  Entegrasyon süreci işletmenizin büyüklüğüne ve mevcut altyapınıza bağlı olarak değişmekle birlikte, genellikle 1-3 iş günü içerisinde tamamlanmaktadır. Süreç boyunca işletmenizin kesintisiz çalışması için gerekli önlemler alınmaktadır.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3">Personelime eğitim verilecek mi?</h3>
                <p className="text-gray-600">
                  Evet, entegrasyon tamamlandıktan sonra personel eğitimi ücretsiz olarak sağlanmaktadır. Kullanıcı dostu arayüzümüz sayesinde eğitim süreci kısa ve verimli geçmektedir.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3">Teknik destek hizmetiniz var mı?</h3>
                <p className="text-gray-600">
                  Evet, 7/16 teknik destek hizmetimiz bulunmaktadır. İşletmenizin kesintisiz çalışması için uzman ekibimiz her zaman yanınızdadır.
                </p>
              </motion.div>

             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
