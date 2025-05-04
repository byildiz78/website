import {
  ShoppingCart,
  BarChart2,
  ListChecks,
  Users,
  Smartphone,
  Package,
  Percent,
  Truck,
  Clock,
  Sparkles,
  Target,
  Award,
  Settings,
} from "lucide-react";

export const productFeatures = [
  {
    title: "Satış Noktası Yönetimi",
    description: "Hızlı ve kolay kullanımlı POS çözümü ile satışlarınızı yönetin, ödemeleri kabul edin ve işletmenizi büyütün.",
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    href: "/urunler/yazilim-urunleri/satis-noktasi-pos",
    bgImage: "/images/features/pos.jpg"
  },
  {
    title: "Stok Maliyet Yönetimi",
    description: "Stok seviyelerini izleyin, maliyetleri kontrol edin ve ürün karlılığınızı analiz edin.",
    icon: <Package className="w-6 h-6 text-blue-600" />,
    href: "/urunler/yazilim-urunleri/stok-maliyet-yonetimi",
    bgImage: "/images/general/Inventory-Management-System-1.webp"
  },
  {
    title: "Sadakat ve Kazanç",
    description: "Müşteri sadakat programları ile tekrar satışları artırın ve yeni müşteriler kazanın.",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    href: "/urunler/yazilim-urunleri/sadakat-ve-kazanc-arttirici-cozumler",
    bgImage: "/images/general/res-1-min.webp"
  },
  {
    title: "Kampanya Yönetimi",
    description: "Özel kampanyalar oluşturun, indirimleri yönetin ve satışlarınızı artırın.",
    icon: <Percent className="w-6 h-6 text-blue-600" />,
    href: "/robotpos-cozum-uretir/kampanya-yonetimi",
    bgImage: "/images/general/rs4-min.webp"
  },
  {
    title: "Raporlama ve Analiz",
    description: "Kapsamlı raporlama araçları ile işletme performansınızı analiz edin ve veri odaklı kararlar verin.",
    icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
    href: "/urunler/yazilim-urunleri/raporlama-ve-analiz",
    bgImage: "/images/raporlama-analiz/Improve-Reporting-For-Project-Management.png"
  },
  {
    title: "Satış Tipine Göre Çözümler",
    description: "Masa,Paket,Self Servis,Tezgah Satış için kolaylaştırıcı çözümler.",
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    href: "/robotpos-cozum-uretir/cozumler",
    bgImage: "/images/general/pos.jpg"
  },
  {
    title: "QR Menü ve Sipariş",
    description: "Müşterilerinize dijital menü sunun ve mobil cihazlardan sipariş almayı kolaylaştırın.",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    href: "/robotpos-cozum-uretir/qr-menu-siparis",
    bgImage: "/images/general/qrmenuorder.jpg"
  },
  {
    title: "İş Verimliliği",
    description: "İş süreçlerinizi optimize eden çözümlerle zaman tasarrufu sağlayın ve operasyonel verimliliği artırın.",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    href: "/urunler/yazilim-urunleri/is-verimliligi",
    bgImage: "/images/general/business-efficiency.jpg"
  }
];

export const whyChooseUs = [
  {
    title: "Kolay ve Pratik Kullanım",
    description: "İş akışınıza ve çalışma şeklinize uyum sağlayan, kullanımı pratik, kolay öğrenilen yıllarca sorunsuz kullanacağınız çözümler.",
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    href: "/urunler"
  },
  {
    title: "22 Yıllık Deneyim",
    description: "2003 yılından bu yana, butik işletmelerden, 100'lerce şubesi bulunan restoran ve kafe zincirlerine, uçtan uca yönetim çözümleri üretiyoruz.",
    icon: <Award className="w-6 h-6 text-blue-600" />,
    href: "/kurumsal/hakkimizda"
  },
  {
    title: "Uzmanlaşmış Çözümler",
    description: "Yalnızca Restoran ve Cafe Otomasyonu konusunda çalışıyor ve her geçen gün daha da uzmanlaşıyoruz.",
    icon: <Target className="w-6 h-6 text-blue-600" />,
    href: "/urunler"
  },
  {
    title: "Yeni Nesil Teknoloji",
    description: "Yeni Nesil restoran, cafe otomasyonu çözümlerimiz ile daima yanınızdayız.",
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    href: "/urunler"
  }
];