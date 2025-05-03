import React from "react";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Ürünler",
    links: [
      { name: "Satış Noktası (POS)", href: "/urunler/yazilim-urunleri/satis-noktasi-pos" },
      { name: "Stok Maliyet Yönetimi", href: "/urunler/yazilim-urunleri/stok-maliyet-yonetimi" },
      { name: "Sadakat ve Kazanç Arttırıcı Çözümler", href: "/urunler/yazilim-urunleri/sadakat-ve-kazanc-arttirici-cozumler" },
      { name: "İş Verimliliği", href: "/urunler/yazilim-urunleri/is-verimliligi" },
      { name: "Zincir Mağaza Yönetimi", href: "/urunler/yazilim-urunleri/zincir-magaza-yonetimi" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "Referanslarımız", href: "/referanslar" },
      { name: "Müşteri Görüşleri", href: "/musteri-gorusleri" },
      { name: "Haberler", href: "/haberler" },
      { name: "Kariyer", href: "/kurumsal/kariyer" },
    ],
  },
  {
    title: "Destek",
    links: [
      { name: "SSS", href: "/sss" },
      { name: "İletişim", href: "/iletisim" },
      { name: "QR Menü Sipariş", href: "/robotpos-cozum-uretir/qr-menu-siparis" },
      { name: "Gizlilik Politikası", href: "/kurumsal/gizlilik-politikasi" },
      { name: "Aydınlatma Metni", href: "/kurumsal/aydinlatma-metni" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/robotPOS" },
  { icon: Twitter, href: "https://twitter.com/robotPOS" },
  { icon: Instagram, href: "https://instagram.com/robotPOS" },
  { icon: Linkedin, href: "https://linkedin.com/company/robotPOS" },
  { icon: Youtube, href: "https://youtube.com/robotPOS" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <a href="/" className="inline-block">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  robotPOS
                </span>
              </a>
              <p className="text-gray-400 mt-4 leading-relaxed">
                robotPOS, café, restoran işletmelerine yönelik yenilikçi yazılım ve donanım çözümleri sunan öncü bir POS ve işletme yönetim sistemidir.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600/10 transition-colors">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <span className="ml-3">0850 811 0 456</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="ml-3">info@robotPOS.com</span>
              </div>
              <div className="flex items-start text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600/10 transition-colors mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="ml-3">
                 Adres: Aydınevler Mah. Durak Sokak No:19 Maltepe/İstanbul
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-lg font-semibold relative inline-block">
                {section.title}
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-12 border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-blue-600/10 hover:text-blue-400 transition-all duration-300 text-gray-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <div className="text-gray-500 text-sm">
            {new Date().getFullYear()} robotPOS. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}