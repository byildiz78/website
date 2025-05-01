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
    link: "/urunler/satis-noktasi",
    bgImage: "/images/features/pos.jpg"
  },
  {
    title: "Stok Maliyet Yönetimi",
    description: "Stok seviyelerini izleyin, maliyetleri kontrol edin ve ürün karlılığınızı analiz edin.",
    icon: <Package className="w-6 h-6 text-blue-600" />,
    link: "/urunler/stok-maliyet-yonetimi",
    bgImage: "https://images.pexels.com/photos/7947772/pexels-photo-7947772.jpeg"
  },
  {
    title: "Sadakat ve Kazanç",
    description: "Müşteri sadakat programları ile tekrar satışları artırın ve yeni müşteriler kazanın.",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    link: "/urunler/sadakat-ve-kazanc",
    bgImage: "https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg"
  },
  {
    title: "Kampanya Yönetimi",
    description: "Özel kampanyalar oluşturun, indirimleri yönetin ve satışlarınızı artırın.",
    icon: <Percent className="w-6 h-6 text-blue-600" />,
    link: "/urunler/kampanya-yonetimi",
    bgImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  },
  {
    title: "Raporlama ve Analiz",
    description: "Kapsamlı raporlama araçları ile işletme performansınızı analiz edin ve veri odaklı kararlar verin.",
    icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
    link: "/urunler/raporlama-ve-analiz",
    bgImage: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
  },
  {
    title: "Paket Servis",
    description: "Paket servis süreçlerinizi optimize edin, teslimat sürelerini takip edin ve müşteri memnuniyetini artırın.",
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    link: "/urunler/paket-servis",
    bgImage: "https://images.pexels.com/photos/6169049/pexels-photo-6169049.jpeg"
  },
  {
    title: "QR Menü ve Sipariş",
    description: "Müşterilerinize dijital menü sunun ve mobil cihazlardan sipariş almayı kolaylaştırın.",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    link: "/urunler/qr-menu-siparis",
    bgImage: "https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg"
  },
  {
    title: "İş Verimliliği",
    description: "İş süreçlerinizi optimize eden çözümlerle zaman tasarrufu sağlayın ve operasyonel verimliliği artırın.",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    link: "/urunler/is-verimliligi",
    bgImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
  }
];

export const whyChooseUs = [
  {
    title: "Kolay ve Pratik Kullanım",
    description: "İş akışınıza ve çalışma şeklinize uyum sağlayan, kullanımı pratik, kolay öğrenilen yıllarca sorunsuz kullanacağınız çözümler.",
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    link: "/urunler"
  },
  {
    title: "20 Yıllık Deneyim",
    description: "2003 yılından bu yana, butik işletmelerden, 100'lerce şubesi bulunan restoran ve kafe zincirlerine, uçtan uca yönetim çözümleri üretiyoruz.",
    icon: <Award className="w-6 h-6 text-blue-600" />,
    link: "/kurumsal/hakkimizda"
  },
  {
    title: "Uzmanlaşmış Çözümler",
    description: "Yalnızca Restoran ve Cafe Otomasyonu konusunda çalışıyor ve her geçen gün daha da uzmanlaşıyoruz.",
    icon: <Target className="w-6 h-6 text-blue-600" />,
    link: "/urunler"
  },
  {
    title: "Yeni Nesil Teknoloji",
    description: "Yeni Nesil restoran, cafe otomasyonu çözümlerimiz ile daima yanınızdayız.",
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    link: "/urunler"
  }
];