"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, Globe, MapPin } from "lucide-react";

const partners = [
  {
    country: "AZERBAYCAN YETKİLİ ÇÖZÜM ORTAĞI",
    name: "Business Solutions & Consulting",
    logo: "/images/partners/crea-logo.png",
    contact: {
      mobile: "+994 77 277 0072",
      email: "ahmetkeser@crea.az",
      web: "www.crea.az"
    }
  },
  {
    country: "GÜRCİSTAN YETKİLİ ÇÖZÜM ORTAĞI",
    name: "CREA International",
    logo: "/images/partners/crea-logo.png",
    contact: {
      mobile: "+995 599 40 65 30",
      email: "info@creageorgia.com",
      web: "www.creageorgia.com"
    }
  }
];

export default function SolutionPartnersPage() {
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
            src="/images/general/ofis.webp"
            alt="robotPOS Çözüm Ortakları"
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
              Çözüm Ortaklarımız
            </h1>
            <p className="text-xl text-blue-50">
              Yurt dışı operasyonlarımızı yürüten güvenilir iş ortaklarımız
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office Image Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <div className="aspect-[21/9] relative">
              <Image
                src="/images/general/ofis.webp"
                alt="robotPOS Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">robotPOS Genel Merkez</h2>
              <p className="text-lg opacity-90">
                Aydınevler Mah. Durak Sokak No:19 - Maltepe / İstanbul / TÜRKİYE
              </p>
            </div>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Partner Card Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <Building2 className="w-8 h-8" />
                    <h2 className="text-xl font-bold">{partner.country}</h2>
                  </div>
                </div>

                {/* Partner Info */}
                <div className="p-8">
                  {/* Logo */}
                  <div className="mb-8 relative h-20">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Company Name */}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    {partner.name}
                  </h3>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <a href={`tel:${partner.contact.mobile}`} className="hover:text-blue-600 transition-colors">
                        {partner.contact.mobile}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <a href={`mailto:${partner.contact.email}`} className="hover:text-blue-600 transition-colors">
                        {partner.contact.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600" />
                      </div>
                      <a href={`https://${partner.contact.web}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        {partner.contact.web}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}