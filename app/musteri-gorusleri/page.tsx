"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Building2, Star, Users } from "lucide-react";

// Define the testimonial type
type Testimonial = {
  baslik: string;
  icerik: string;
  resim: string;
};

export default function CustomerTestimonialsPage() {
  // Import testimonials data inside the component
  const testimonials = require("@/public/files/musteri-gorusleri.json") as Testimonial[];
  
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
            alt="robotPOS Müşteri Görüşleri"
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
              Müşteri Görüşleri
            </h1>
            <p className="text-xl text-blue-50">
              Türkiye'nin önde gelen markalarının tercihi robotPOS
            </p>
          </motion.div>
        </div>
      </section>

     
      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-16">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={testimonial.baslik}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="relative w-full md:w-80 h-80 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl group-hover:from-blue-100 group-hover:to-blue-50 transition-colors duration-500" />
                    <div className="absolute inset-4 rounded-xl overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={testimonial.resim}
                          alt={testimonial.baslik}
                          fill
                          className="object-contain transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {testimonial.baslik}
                      </h2>
                      <div className="text-blue-600 opacity-50 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                        <Quote className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                      {testimonial.icerik.split('\n\n').map((paragraph: string, i: number) => (
                        paragraph.trim() && (
                          <p 
                            key={i} 
                            className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                          >
                            {paragraph}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}