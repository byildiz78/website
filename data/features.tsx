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
    icon: <ShoppingCart strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/urunler/yazilim-urunleri/satis-noktasi-pos",
    bgImage: "/images/features/pos.jpg",
    color: "blue",
    neonColor: "#3B82F6",
    darkColor: "#1E40AF"
  },
  {
    title: "Stok Maliyet Yönetimi",
    description: "Stok seviyelerini izleyin, maliyetleri kontrol edin ve ürün karlılığınızı analiz edin.",
    icon: <Package strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/urunler/yazilim-urunleri/stok-maliyet-yonetimi",
    bgImage: "/images/general/Inventory-Management-System-1.webp",
    color: "emerald",
    neonColor: "#10B981",
    darkColor: "#065F46"
  },
  {
    title: "Sadakat ve Kazanç",
    description: "Müşteri sadakat programları ile tekrar satışları artırın ve yeni müşteriler kazanın.",
    icon: <Users strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/urunler/yazilim-urunleri/sadakat-ve-kazanc-arttirici-cozumler",
    bgImage: "/images/general/res-1-min.webp",
    color: "purple",
    neonColor: "#8B5CF6",
    darkColor: "#5B21B6"
  },
  {
    title: "Kampanya Yönetimi",
    description: "Özel kampanyalar oluşturun, indirimleri yönetin ve satışlarınızı artırın.",
    icon: <Percent strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/robotpos-cozum-uretir/kampanya-yonetimi",
    bgImage: "/images/general/rs4-min.webp",
    color: "pink",
    neonColor: "#EC4899",
    darkColor: "#9D174D"
  },
  {
    title: "Raporlama ve Analiz",
    description: "Kapsamlı raporlama araçları ile işletme performansınızı analiz edin ve veri odaklı kararlar verin.",
    icon: <BarChart2 strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/urunler/yazilim-urunleri/raporlama-ve-analiz",
    bgImage: "/images/raporlama-analiz/Improve-Reporting-For-Project-Management.png",
    color: "cyan",
    neonColor: "#06B6D4",
    darkColor: "#0E7490"
  },
  {
    title: "Satış Tipine Göre Çözümler",
    description: "Masa,Paket,Self Servis,Tezgah Satış için kolaylaştırıcı çözümler.",
    icon: <Truck strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/robotpos-cozum-uretir/cozumler",
    bgImage: "/images/general/pos.jpg",
    color: "amber",
    neonColor: "#F59E0B",
    darkColor: "#B45309"
  },
  {
    title: "QR Menü ve Sipariş",
    description: "Müşterilerinize dijital menü sunun ve mobil cihazlardan sipariş almayı kolaylaştırın.",
    icon: <Smartphone strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/robotpos-cozum-uretir/qr-menu-siparis",
    bgImage: "/images/general/qrmenuorder.jpg",
    color: "indigo",
    neonColor: "#6366F1",
    darkColor: "#4338CA"
  },
  {
    title: "İş Verimliliği",
    description: "İş süreçlerinizi optimize eden çözümlerle zaman tasarrufu sağlayın ve operasyonel verimliliği artırın.",
    icon: <Clock strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/urunler/yazilim-urunleri/is-verimliligi",
    bgImage: "/images/general/business-efficiency.jpg",
    color: "teal",
    neonColor: "#14B8A6",
    darkColor: "#115E59"
  }
];

export const whyChooseUs = [
  {
    title: "Kolay ve Pratik Kullanım",
    description: "İş akışınıza ve çalışma şeklinize uyum sağlayan, kullanımı pratik, kolay öğrenilen yıllarca sorunsuz kullanacağınız çözümler.",
    icon: <Sparkles strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/urunler",
    color: "amber",
    neonColor: "#F59E0B",
    darkColor: "#B45309"
  },
  {
    title: "22 Yıllık Deneyim",
    description: "2003 yılından bu yana, butik işletmelerden, 100'lerce şubesi bulunan restoran ve kafe zincirlerine, uçtan uca yönetim çözümleri üretiyoruz.",
    icon: <Award strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/kurumsal/hakkimizda",
    color: "blue",
    neonColor: "#3B82F6",
    darkColor: "#1E40AF"
  },
  {
    title: "Uzmanlaşmış Çözümler",
    description: "Yalnızca Restoran ve Cafe Otomasyonu konusunda çalışıyor ve her geçen gün daha da uzmanlaşıyoruz.",
    icon: <Target strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/urunler",
    color: "red",
    neonColor: "#EF4444",
    darkColor: "#B91C1C"
  },
  {
    title: "Yeni Nesil Teknoloji",
    description: "Yeni Nesil restoran, cafe otomasyonu çözümlerimiz ile daima yanınızdayız.",
    icon: <Settings strokeWidth={1.5} className="w-8 h-8 group-hover:stroke-[2.5]" />,
    href: "/urunler",
    color: "purple",
    neonColor: "#8B5CF6",
    darkColor: "#5B21B6"
  }
];

// Animasyon ve stil özellikleri
export const cardAnimationProps = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  viewport: { once: true }
};

// Kart hover efektleri
export const cardHoverEffects = {
  whileHover: { 
    scale: 1.02,
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  },
  whileTap: { scale: 0.98 }
};

// Özel kart stilleri
export const cardStyles = {
  base: "group relative overflow-hidden rounded-md bg-gray-900/80 border border-gray-800 shadow-lg transition-all duration-300",
  iconWrapper: "absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-md bg-gray-800/90 transition-all duration-300 group-hover:scale-110",
  content: "relative z-10 p-6",
  title: "text-lg font-medium text-white mb-2 transition-all duration-300",
  description: "text-sm text-gray-300 transition-all duration-300 group-hover:text-white",
  link: "absolute inset-0 z-20",
  neonBorder: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300",
  neonGlow: "absolute -inset-px opacity-0 group-hover:opacity-50 blur-sm transition-all duration-300",
  neonLine: "absolute h-[1px] left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 group-hover:translate-y-0",
  arrow: "absolute bottom-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0",
  overlay: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40 group-hover:opacity-30",
  bgImage: "absolute inset-0 w-full h-full object-cover z-0 opacity-70 group-hover:opacity-80 transition-opacity duration-300 contrast-[1.1] brightness-[1.1]"
};