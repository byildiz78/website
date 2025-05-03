import {
  Sparkles,
  Target,
  Award,
  Settings,
} from "lucide-react";

export const whyChooseUs = [
  {
    title: "Kolay ve Pratik Kullanım",
    description: "İş akışınıza ve çalışma şeklinize uyum sağlayan, kullanımı pratik, kolay öğrenilen yıllarca sorunsuz kullanacağınız çözümler.",
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    link: "/urunler"
  },
  {
    title: "22 Yıllık Deneyim",
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
