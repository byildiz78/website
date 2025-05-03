"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, MapPin, ArrowRight, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import referansData from "@/public/files/referanslar.json";

// Define types for the components
interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  colorClass: string;
}

interface ReferenceCardProps {
  data: {
    adi: string;
    logo_yolu: string;
    sube_sayisi?: number;
    sehir?: string;
    referans_tipi: string;
  };
  icon: LucideIcon;
  colorClass: string;
}

const SectionHeader = ({ icon: Icon, title, colorClass }: SectionHeaderProps) => {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(e.intersectionRatio < 1),
      { threshold: [1] }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={headerRef} className={`sticky top-20 z-30 bg-gradient-to-r ${
      colorClass.includes('blue') ? 'from-blue-400/20 to-blue-100/20' :
      colorClass.includes('red') ? 'from-red-400/20 to-red-100/20' :
      'from-emerald-400/20 to-emerald-100/20'
    } rounded-[2rem] py-8 px-4 mb-8`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3">
          <Icon className={`w-8 h-8 ${colorClass}`} />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

const ReferenceCard = ({ data, icon: Icon, colorClass }: ReferenceCardProps) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const isChainBusiness = data.referans_tipi === "Zincir İşletmeler";

  useEffect(() => {
    if (!data.sube_sayisi) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = data.sube_sayisi || 0; 
          const duration = 2000;
          const increment = Math.ceil(end / (duration / 16));
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [data.sube_sayisi]);

  // Zincir işletmeler için özel kart tasarımı
  if (isChainBusiness) {
    return (
      <Card 
        ref={cardRef} 
        className="group overflow-hidden bg-white relative transform hover:-translate-y-2 transition-all duration-500"
        style={{
          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Şube sayısı rozeti */}
        {data.sube_sayisi && (
          <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold px-4 py-2 z-10 rounded-bl-lg shadow-md">
            <span className="text-xl">{count}+</span> <span className="text-xs tracking-wider">ŞUBE</span>
          </div>
        )}
        
        {/* Logo alanı */}
        <div className="pt-12 pb-6 px-6">
          <div className="relative w-full h-40 mx-auto">
            <Image
              src={data.logo_yolu}
              alt={data.adi}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        {/* Mavi çizgi */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
        
        {/* İşletme adı */}
        <div className="p-6 text-center bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800">
            {data.adi}
          </h3>
        </div>
        
        {/* Hover efekti - Parlama */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-white/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </Card>
    );
  }

  // Diğer referans tipleri için mevcut kart tasarımı
  return (
    <Card ref={cardRef} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
      <div className="p-6 flex flex-col items-center">
        <div className="w-48 h-48 relative mb-6 bg-gray-50 rounded-xl p-6 group-hover:bg-gray-100 transition-colors">
          <Image
            src={data.logo_yolu}
            alt={data.adi}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="text-center">
          <h3 className="text-base font-medium text-gray-800 mb-3 line-clamp-1">
            {data.adi}
          </h3>
          {data.sube_sayisi ? (
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">
                {count}+
              </div>
              <div className={`inline-flex items-center px-3 py-1.5 rounded-full ${
                colorClass === 'text-blue-600' ? 'bg-blue-50 text-blue-600' :
                colorClass === 'text-red-500' ? 'bg-red-50 text-red-500' :
                'bg-emerald-50 text-emerald-600'
              }`}>
                <Icon className="w-4 h-4 mr-2" />
                <span className="font-medium">Şube</span>
              </div>
            </div>
          ) : (
            <div className={`inline-flex items-center px-3 py-1.5 rounded-full ${
              colorClass === 'text-blue-600' ? 'bg-blue-50 text-blue-600' :
              colorClass === 'text-red-500' ? 'bg-red-50 text-red-500' :
              'bg-emerald-50 text-emerald-600'
            }`}>
              <Icon className="w-4 h-4 mr-2" />
              <span className="font-medium">{data.sehir}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default function ReferencesPage() {
  // Filter references by type - moved inside the component
  const chainBusinesses = referansData.filter(ref => ref.referans_tipi === "Zincir İşletmeler");
  const specialProjects = referansData.filter(ref => ref.referans_tipi === "Özel Projeler");
  const individualBusinesses = referansData.filter(ref => ref.referans_tipi === "Tekil İşletmeler");
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/general/res-1-min.webp"
            alt="robotPOS References"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </motion.div>
        <div className="container relative z-10 h-full mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Referanslarımız
            </h1>
            <p className="text-xl text-blue-50">
              bazı referanslarımız
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Chain Businesses Section */}
        <section className="py-8">
          <SectionHeader
            icon={Building2}
            title="Zincir İşletmeler"
            colorClass="text-blue-600"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {chainBusinesses.map((business, index) => (
              <motion.div
                key={business.adi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ReferenceCard
                  data={business}
                  icon={Building2}
                  colorClass="text-blue-600"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Special Projects Section */}
        <section className="py-8">
          <SectionHeader
            icon={MapPin}
            title="Özel Projeler"
            colorClass="text-red-500"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specialProjects.map((project, index) => (
              <motion.div
                key={project.adi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ReferenceCard
                  data={project}
                  icon={MapPin}
                  colorClass="text-red-500"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Individual Businesses Section */}
        <section className="py-8">
          <SectionHeader
            icon={ArrowRight}
            title="Tekil İşletmeler"
            colorClass="text-emerald-600"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {individualBusinesses.map((business, index) => (
              <motion.div
                key={business.adi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ReferenceCard
                  data={business}
                  icon={MapPin}
                  colorClass="text-emerald-600"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}