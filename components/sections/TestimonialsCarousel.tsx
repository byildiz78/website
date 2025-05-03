"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote, ArrowRight, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";
import defaultTestimonials from "@/public/files/musteri-gorusleri.json";

// Define the testimonial type
type Testimonial = {
  id: string | number;
  quote: string;
  author: string;
  position: string;
  company?: string;
  image: string;
};

// Define the raw testimonial type from JSON
type RawTestimonial = {
  baslik: string;
  icerik: string;
  resim: string;
};

interface TestimonialsCarouselProps {
  maxTestimonials?: number;
  testimonials?: Array<Testimonial | RawTestimonial>;
}

export function TestimonialsCarousel({
  maxTestimonials = 5,
  testimonials: providedTestimonials
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Process testimonials based on their format
  const processTestimonials = (data: Array<Testimonial | RawTestimonial>) => {
    return data.map(item => {
      // Check if it's already in the expected format
      if ('quote' in item && 'author' in item) {
        return item as Testimonial;
      }
      
      // Otherwise, convert from raw format
      const rawItem = item as RawTestimonial;
      return {
        id: rawItem.baslik,
        quote: rawItem.icerik.split('\n')[0], // Get first paragraph as quote
        author: rawItem.baslik.split('-')[0].trim(), // Get name before dash
        position: rawItem.baslik.includes('-') ? rawItem.baslik.split('-')[1].trim() : '',
        image: rawItem.resim
      };
    });
  };

  // Use provided testimonials or fall back to default
  const allTestimonials = processTestimonials(providedTestimonials || defaultTestimonials);
  
  // Get a subset of testimonials for the carousel
  const displayedTestimonials = allTestimonials.slice(0, maxTestimonials);

  const nextTestimonial = () => {
    if (displayedTestimonials.length <= 1) return;
    setActiveIndex((prev) => 
      prev === displayedTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    if (displayedTestimonials.length <= 1) return;
    setActiveIndex((prev) => 
      prev === 0 ? displayedTestimonials.length - 1 : prev - 1
    );
  };

  // Otomatik geçiş için useEffect
  useEffect(() => {
    // Bileşen görünür değilse veya otomatik oynatma kapalıysa çalışma
    if (!inView || !autoplay) return;
    
    // Timer'ı başlat
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => {
        // Bir sonraki indeksi hesapla
        return prevIndex === displayedTestimonials.length - 1 ? 0 : prevIndex + 1;
      });
    }, 5000); // 5 saniyede bir geçiş yap
    
    // Temizleme fonksiyonu
    return () => {
      clearInterval(timer);
    };
  }, [inView, autoplay, displayedTestimonials.length]); // Bağımlılıkları doğru şekilde belirt

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-50/30">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="section-title mb-2 inline-block bg-blue-100/50 text-blue-600 px-6 py-2 rounded-full">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto text-gray-600">
            Kullanıcılarımızın robotPOS deneyimleri hakkında düşünceleri
          </p>
        </div>

        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
          
          {/* Main testimonial cards */}
          <div className="relative min-h-[250px]">
            {displayedTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`w-full transition-all duration-500 transform ${
                  index === activeIndex 
                    ? "opacity-100 scale-100 relative" 
                    : "opacity-0 scale-95 absolute top-0 left-0"
                }`}
              >
                <CardContent className="p-6 md:p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-blue-600">
                      <Quote className="h-8 w-8" />
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-base md:text-lg flex-grow italic text-gray-700 mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <Avatar className="h-12 w-12 mr-4 ring-2 ring-blue-100">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback className="bg-blue-600 text-white">
                        {testimonial.author
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      {testimonial.position && (
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons */}
          {displayedTestimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-blue-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors z-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </button>
            </>
          )}

          {/* Navigation dots */}
          {displayedTestimonials.length > 1 && (
            <div className="flex justify-center items-center mt-6 space-x-3">
              {displayedTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Read More Link */}
          <div className="text-center mt-8">
            <a 
              href="/musteri-gorusleri" 
              className="inline-flex items-center bg-white py-2 px-4 rounded-full shadow-sm text-blue-600 hover:text-blue-700 font-medium group transition-all duration-300 hover:shadow"
            >
              <span>Tüm Müşteri Görüşlerini İncele</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}