"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { ShoppingCart, Users, Package, Truck, Smartphone, Percent, CreditCard, FileText } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const features: Feature[] = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Tezgah Satış",
    description: "Hızlı ve kolay satış işlemleri",
    link: "/urunler/tezgah-satis"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Self Servis",
    description: "Müşteri odaklı sipariş sistemi",
    link: "/urunler/self-servis"
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Sadakat Yönetimi",
    description: "Müşteri bağlılığını artırın",
    link: "/urunler/sadakat-yonetimi"
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Paket Servis",
    description: "Teslimat süreçlerini yönetin",
    link: "/urunler/paket-servis"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "QR Menü Sipariş",
    description: "Dijital menü ve sipariş alma",
    link: "/urunler/qr-menu"
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: "Kampanya Yönetimi",
    description: "Satışları artırıcı kampanyalar",
    link: "/urunler/kampanya-yonetimi"
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Ön Ödemeli Satış",
    description: "Ön ödemeli kart sistemleri",
    link: "/urunler/on-odemeli-satis"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Alakart Servis",
    description: "Masa servis yönetimi",
    link: "/urunler/alakart-servis"
  }
];

export function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Robotpos <span className="text-gray-600">Çözüm Üretir!</span>
          </h2>
          <p className="section-subtitle">
            İhtiyaçlarınızı tek bir çatı altında çözüme kavuşturuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`group hover-lift hover-glow border-none bg-white/50 backdrop-blur-sm ${
                inView ? 'animate-fadeIn' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={feature.link} className="block p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </Link>
            </Card>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link 
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Ücretsiz Demo İçin Sizi Arayalım
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}