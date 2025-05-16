"use client";

import Image from "next/image";
import { Shield, Zap, PieChart, ArrowRight, Check, Star, BarChart, Clock, Users, Database, Receipt } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";
import { SectionDivider } from "@/components/ui/section-divider";
import { ExperienceBadge } from "@/components/ui/experience-badge";
import Link from "next/link";

const features = [
  {
    title: "Kolay Kullanım",
    description: "Restoran programımız, öğrenilmesi ve kullanılması en kolay sistemdir. Temel fonksiyonlar 15 dakika içerisinde öğrenilebilir, personel eğitimi minimum sürede tamamlanır.",
    icon: <Shield className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Hızlı İşlem",
    description: "Az dokunuş çok iş mantığı ile kurgulanmıştır. Yoğun saatlerde bile hızlı sipariş alma, adisyon açma ve hesap kapama işlemlerini saniyeler içinde tamamlayabilirsiniz.",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Güvenilir Sistem",
    description: "Veri güvenliği ön planda tutularak geliştirilmiştir. Yoğun gün ve saatlerinizde, sizi yarı yolda bırakmamak üzere tasarlanmış, 7/24 çalışan güvenilir bir sistemdir.",
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
    question: "Restoran programı nedir ve neden kullanmalıyım?",
    answer: "Restoran programı, işletmenizin sipariş alma, stok takibi, personel yönetimi, müşteri ilişkileri ve finansal raporlama gibi tüm operasyonel süreçlerini dijital ortamda yönetmenizi sağlayan yazılım çözümüdür. İşletmenizin verimliliğini artırmak, maliyetleri düşürmek, hataları azaltmak ve müşteri memnuniyetini yükseltmek için kullanılır."
  },
  {
    question: "RobotPOS restoran programını kullanmak için teknik bilgiye ihtiyacım var mı?",
    answer: "Hayır, RobotPOS kullanıcı dostu arayüzü sayesinde teknik bilgiye ihtiyaç duymadan kolayca kullanılabilir. Temel fonksiyonlar 15 dakika içinde öğrenilebilir ve kapsamlı eğitim desteği sunuyoruz."
  },
  {
    question: "Mevcut sistemimden RobotPOS'a geçiş yapabilir miyim?",
    answer: "Evet, mevcut sisteminizdeki verileri RobotPOS'a aktarabilir ve sorunsuz bir geçiş sağlayabiliriz. Uzman ekibimiz, geçiş sürecinde size destek olacak ve işletmenizin kesintisiz çalışmasını sağlayacaktır."
  },
  {
    question: "RobotPOS restoran programı internet bağlantısı olmadan çalışır mı?",
    answer: "Evet, RobotPOS offline çalışma özelliğine sahiptir. İnternet bağlantınız kesilse bile işlemlerinize devam edebilir, bağlantı sağlandığında verileriniz otomatik olarak senkronize edilir."
  },
  {
    question: "Restoran programı maliyeti nedir?",
    answer: "RobotPOS restoran programı, işletmenizin büyüklüğü ve ihtiyaçlarına göre özelleştirilebilen farklı paketler sunmaktadır. Detaylı fiyat bilgisi için bizimle iletişime geçebilirsiniz."
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
    title: "Müşteri İlişkileri",
    description: "Sadakat programları, kampanya yönetimi ve müşteri veritabanı",
    icon: <Star className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Hız ve Verimlilik",
    description: "Hızlı işlem yapma, bekleme sürelerini azaltma ve operasyonel verimlilik",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
  },
];

export default function RestaurantProgramPage() {
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
              src="/images/blog-images/cafeteria-siparis-programi-1024x574_5865d43c.jpg"
              alt="Restoran Programı"
              fill
              priority
              className="object-cover"
              style={{ filter: "brightness(0.4)" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60" />
        </motion.div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-4">
              <ExperienceBadge />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Restoran Programı
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-6 text-blue-50"
            >
              İşletmenizin Tüm İhtiyaçlarını Karşılayan Kapsamlı Restoran Yönetim Sistemi
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-300"
                asChild
              >
                <a href="/demo-talebi">
                  Sizi Arayalım Talebi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
                asChild
              >
                <a href="/iletisim">
                  Bize Ulaşın
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Modern İşletmeler İçin <span className="text-blue-600">Restoran Programı</span>
            </h2>
            <p className="text-lg text-gray-600">
              RobotPOS restoran programı, işletmenizin tüm süreçlerini dijitalleştirerek verimliliği artırır, maliyetleri düşürür ve müşteri memnuniyetini yükseltir. 2003 yılından bu yana 4000'den fazla işletme tarafından tercih edilen çözümümüz, restoran yönetiminde yeni bir çağ başlatıyor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Restoran Programı <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              RobotPOS restoran programı, işletmenizin tüm ihtiyaçlarını karşılayan kapsamlı özellikler sunar. Modern ve kullanıcı dostu arayüzü ile personel eğitim süresini minimuma indirir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Restoran Programı <span className="text-blue-600">Arayüzü</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern ve kullanıcı dostu arayüzümüz ile restoran yönetimi artık çok daha kolay. Sezgisel tasarım sayesinde personel eğitim süresi minimuma iner.
            </p>
          </motion.div>

          <ScreenshotGallery images={screenshots} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-blue-500/20"></div>
                <Image
                  src="/images/general/rs5-min.webp"
                  alt="Restoran Programı Avantajları"
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
                <h2 className="text-4xl font-bold mb-4">
                  Restoran Programı <span className="text-blue-600">Avantajları</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  RobotPOS restoran programı, işletmenize sağladığı sayısız avantajla operasyonel verimliliği artırır ve maliyetleri düşürür. İşte size sunduğumuz bazı avantajlar:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                      <Check className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Restoran Programı <span className="text-blue-600">Kullanım Alanları</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              RobotPOS restoran programı, farklı türdeki yiyecek-içecek işletmelerinin ihtiyaçlarına göre özelleştirilebilir çözümler sunar.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {usageAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-blue-50 w-20 h-20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Image
                    src={area.icon}
                    alt={area.title}
                    width={40}
                    height={40}
                    className="text-blue-600 group-hover:scale-110 transition-transform"
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
              Restoran programı hakkında merak ettiğiniz soruların cevaplarını bulun.
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
              Restoran programımızı tamamlayan diğer çözümlerimizi keşfedin.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  Siparişleri hızlı ve hatasız şekilde alın, adisyonları kolayca yönetin.
                </p>
                <Link href="urunler/yazilim-urunleri/satis-noktasi-pos" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
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
    </div>
  );
}