"use client";

import Image from "next/image";
import { Shield, Zap, PieChart, ArrowRight, Check, Star, BarChart, Clock, Users, Database, Receipt, Smartphone, Store, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";
import { SectionDivider } from "@/components/ui/section-divider";
import Link from "next/link";

const features = [
  {
    title: "Kolay Kullanım",
    description: "Restoran otomasyon sistemimiz, öğrenilmesi ve kullanılması en kolay çözümdür. Temel fonksiyonlar 15 dakika içerisinde öğrenilebilir, personel eğitimi minimum sürede tamamlanır.",
    icon: <Shield className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Hızlı İşlem",
    description: "Az dokunuş çok iş mantığı ile kurgulanmıştır. Yoğun saatlerde bile hızlı sipariş alma, adisyon açma ve hesap kapama işlemlerini saniyeler içinde tamamlayabilirsiniz.",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Tam Kontrol",
    description: "Restoran kontrol sistemi olarak tüm süreçlerinizi tek bir platformdan yönetmenizi sağlar. Satışlardan stok yönetimine, personel performansından müşteri ilişkilerine kadar her şey kontrolünüz altında.",
    icon: <PieChart className="w-6 h-6 text-blue-600" />,
  },
];

const benefits = [
  "Sipariş ve Adisyon Yönetimi",
  "Masa Takibi ve Rezervasyon",
  "Stok ve Maliyet Kontrolü",
  "Personel Performans Takibi",
  "Müşteri Sadakat Programları",
  "Detaylı Raporlama ve Analiz",
  "Mobil Uygulama Entegrasyonu",
  "Çoklu Şube Yönetimi",
];

const usageAreas = [
  { title: "Restoranlar", icon: "/icons/restaurant.svg" },
  { title: "Kafeler", icon: "/icons/cafe.svg" },
  { title: "Fast Food", icon: "/icons/fastfood.svg" },
  { title: "Pastaneler", icon: "/icons/bakery.svg" },
];

const screenshots = [
  "/images/pos-screen/pos01.webp",
  "/images/pos-screen/pos02.webp",
  "/images/pos-screen/pos03.webp",
  "/images/pos-screen/pos04.webp",
];

const faqItems = [
  {
    question: "Restoran otomasyon sistemi nedir ve neden kullanmalıyım?",
    answer: "Restoran otomasyon sistemi, işletmenizin sipariş alma, stok takibi, personel yönetimi, müşteri ilişkileri ve finansal raporlama gibi tüm operasyonel süreçlerini dijital ortamda yönetmenizi sağlayan yazılım çözümüdür. İşletmenizin verimliliğini artırmak, maliyetleri düşürmek, hataları azaltmak ve müşteri memnuniyetini yükseltmek için kullanılır."
  },
  {
    question: "RobotPOS restoran otomasyon sistemini kullanmak için teknik bilgiye ihtiyacım var mı?",
    answer: "Hayır, RobotPOS kullanıcı dostu arayüzü sayesinde teknik bilgiye ihtiyaç duymadan kolayca kullanılabilir. Temel fonksiyonlar 15 dakika içinde öğrenilebilir ve kapsamlı eğitim desteği sunuyoruz."
  },
  {
    question: "Mevcut sistemimden RobotPOS restoran otomasyon sistemine geçiş yapabilir miyim?",
    answer: "Evet, mevcut sisteminizdeki verileri RobotPOS'a aktarabilir ve sorunsuz bir geçiş sağlayabiliriz. Uzman ekibimiz, geçiş sürecinde size destek olacak ve işletmenizin kesintisiz çalışmasını sağlayacaktır."
  },
  {
    question: "RobotPOS restoran kontrol sistemi internet bağlantısı olmadan çalışır mı?",
    answer: "Evet, RobotPOS offline çalışma özelliğine sahiptir. İnternet bağlantınız kesilse bile işlemlerinize devam edebilir, bağlantı sağlandığında verileriniz otomatik olarak senkronize edilir."
  },
  {
    question: "Restoran otomasyon sistemi maliyeti nedir?",
    answer: "RobotPOS restoran otomasyon sistemi, işletmenizin büyüklüğü ve ihtiyaçlarına göre özelleştirilebilen farklı paketler sunmaktadır. Detaylı fiyat bilgisi için bizimle iletişime geçebilirsiniz."
  }
];

const keyFeatures = [
  {
    title: "Sipariş Yönetimi",
    description: "Masadan, self servis kiosk'tan veya mobil cihazlardan hızlı ve hatasız sipariş alma",
    icon: <Receipt className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Stok Takibi",
    description: "Gerçek zamanlı stok takibi, otomatik uyarılar ve tedarik zinciri yönetimi",
    icon: <Database className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Personel Yönetimi",
    description: "Vardiya planlama, performans takibi ve yetkilendirme sistemi",
    icon: <Users className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Raporlama ve Analiz",
    description: "Detaylı satış, maliyet ve karlılık raporları, özelleştirilebilir dashboard",
    icon: <BarChart className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Mobil Erişim",
    description: "Mobil cihazlardan restoran kontrol ve yönetim imkanı",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Merkezi Kontrol",
    description: "Tüm restoran operasyonlarını tek bir merkezden kontrol etme ve yönetme",
    icon: <Monitor className="w-6 h-6 text-blue-600" />,
  },
];

export default function RestoranOtomasyonPage() {
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
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/pos-screen/pos01.webp"
              alt="Restoran Otomasyon Sistemi"
              fill
              priority
              className="object-cover"
              style={{ filter: "brightness(0.4)" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-block py-1 px-3 bg-blue-600/70 rounded-full text-sm font-medium">20+ Yıllık Deneyim</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Profesyonel <span className="text-blue-400">Restoran Otomasyon</span> ve Kontrol Sistemi
            </h1>
            <p className="text-xl mb-8">
              İşletmenizin tüm ihtiyaçlarını karşılayan, kullanımı kolay ve hızlı restoran otomasyon sistemi ile verimliliğinizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/demo-talebi">Sizi Arayalım</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/iletisim">Bizimle İletişime Geçin</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Modern İşletmeler İçin <span className="text-blue-600">Restoran Otomasyon</span> Çözümü
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                RobotPOS restoran otomasyon sistemi, yiyecek-içecek sektöründeki işletmelerin sipariş alma, stok takibi, personel yönetimi, müşteri ilişkileri ve raporlama gibi tüm ihtiyaçlarını karşılamak üzere tasarlanmış kapsamlı bir çözümdür.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Kullanıcı dostu arayüzü ve güçlü özellikleriyle, işletmenizin operasyonel verimliliğini artırırken, tam kontrol imkanı sunar. Restoran kontrol sistemimiz, küçük kafelerden büyük restoran zincirlerine kadar her ölçekteki işletme için özelleştirilebilir çözümler sunar.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/adisyon-programi" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Adisyon Programımızı İnceleyin
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/pos-sistemi" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  POS Sistemimizi İnceleyin
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/pos-screen/pos02.webp"
                alt="Restoran Otomasyon Sistemi Arayüzü"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Restoran Otomasyon Sistemimizin <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              RobotPOS restoran otomasyon sistemi, işletmenizin ihtiyaçlarını karşılamak için tasarlanmış kapsamlı özellikler sunar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 bg-blue-50 p-3 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Restoran Kontrol Sistemimizin <span className="text-blue-600">Temel Özellikleri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              RobotPOS, işletmenizin tüm ihtiyaçlarını karşılayan kapsamlı kontrol özellikleri sunar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="bg-blue-50 p-3 rounded-full h-fit">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Restoran Otomasyon Sistemimizin <span className="text-blue-600">Ekran Görüntüleri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              RobotPOS restoran otomasyon sisteminin kullanıcı dostu arayüzünü keşfedin.
            </p>
          </motion.div>

          <ScreenshotGallery images={screenshots} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Restoran Kontrol Sistemimizin <span className="text-blue-600">Avantajları</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                RobotPOS restoran otomasyon sistemi, işletmenize sayısız avantaj sağlar. İşte bunlardan bazıları:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-green-50 p-1 rounded-full">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/pos-screen/pos03.webp"
                alt="Restoran Otomasyon Sistemi Kullanımı"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Restoran Otomasyon Sistemimizin <span className="text-blue-600">Kullanım Alanları</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              RobotPOS restoran otomasyon sistemi, farklı işletme türleri için özelleştirilebilir çözümler sunar.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {usageAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <div className="mb-4 mx-auto w-16 h-16 relative">
                  <Image
                    src={area.icon}
                    alt={area.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Sıkça Sorulan <span className="text-blue-600">Sorular</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Restoran otomasyon sistemi hakkında merak ettiğiniz soruların cevaplarını bulun.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              İlgili <span className="text-blue-600">Çözümlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Restoran otomasyon sistemimizi tamamlayan diğer çözümlerimizi keşfedin.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src="/images/features/pos.jpg"
                  alt="Adisyon Programı"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Adisyon Programı</h3>
                <p className="text-gray-600 mb-4">
                  Restoranlar ve kafeler için özel olarak tasarlanmış adisyon yönetim sistemi.
                </p>
                <Link href="/adisyon-programi" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Detaylı Bilgi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src="/images/inventory-screens/02-cari-yonetimi.webp"
                  alt="Stok ve Maliyet Yönetimi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Stok ve Maliyet Yönetimi</h3>
                <p className="text-gray-600 mb-4">
                  Stok seviyelerini takip edin, maliyetleri kontrol altında tutun.
                </p>
                <Link href="/urunler/yazilim-urunleri/stok-maliyet-yonetimi" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Detaylı Bilgi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Restoran Otomasyon Sistemimizi Hemen Deneyin</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            İşletmenizi dijitalleştirin, verimliliğinizi artırın ve müşteri memnuniyetini yükseltin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/demo-talebi">Sizi Arayalım</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link href="/urunler/yazilim-urunleri/satis-noktasi-pos">Satış Noktası Çözümümüzü İnceleyin</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
