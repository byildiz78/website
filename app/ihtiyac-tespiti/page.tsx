"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormDataType, PlatformType } from "./types";
import { StepIndicator } from "./components/StepIndicator";
import { StepDevices } from "./components/StepDevices";
import { StepProductionPoints } from "./components/StepProductionPoints";
import { StepPlatforms } from "./components/StepPlatforms";
import { StepSummary } from "./components/StepSummary";
import { StepContact } from "./components/StepContact";
import { StepSuccess } from "./components/StepSuccess";

// Adım başlıkları
const steps = [
  "Cihaz Seçimi",
  "Üretim Noktaları",
  "Online Platformlar",
  "Özet",
  "İletişim Bilgileri",
  "Tamamlandı"
];

// Online platform seçenekleri
const onlinePlatforms: PlatformType[] = [
  { id: "yemeksepeti", name: "Yemek Sepeti", color: "bg-red-600 text-white" },
  { id: "getir", name: "Getir", color: "bg-purple-600 text-white" },
  { id: "foody", name: "Foody", color: "bg-green-600 text-white" },
  { id: "migros", name: "Migros Yemek", color: "bg-blue-600 text-white" },
  { id: "trendyol", name: "Trendyol Yemek", color: "bg-orange-600 text-white" }
];

export default function NeedAssessmentPage() {
  // Aktif adım
  const [currentStep, setCurrentStep] = useState(0);
  
  // Form verileri
  const [formData, setFormData] = useState<FormDataType>({
    devices: {
      touchTerminal: 0,
      waiterTerminal: 0
    },
    productionPoints: {
      printer: 0,
      kitchenScreen: 0
    },
    platforms: {
      yemeksepeti: false,
      getir: false,
      foody: false,
      migros: false,
      trendyol: false
    },
    contact: {
      name: "",
      company: "",
      email: "",
      phone: "",
      notes: ""
    }
  });

  // Form verilerini güncelleme fonksiyonu
  const updateFormData = (section: keyof FormDataType, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Sayı arttırma/azaltma fonksiyonu
  const updateCount = (section: 'devices' | 'productionPoints', field: string, increment: number) => {
    const currentValue = formData[section][field as keyof typeof formData[typeof section]];
    if (typeof currentValue === 'number') {
      const newValue = Math.max(0, currentValue + increment);
      updateFormData(section, field, newValue);
    }
  };

  // Platform seçim durumunu değiştirme
  const togglePlatform = (platformId: string) => {
    updateFormData('platforms', platformId, !formData.platforms[platformId]);
  };

  // Sonraki adıma geçme
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  // Önceki adıma dönme
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Form gönderme
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Burada form verilerini API'ye gönderme işlemi yapılabilir
    console.log("Form verileri:", formData);
    
    // Başarı sayfasına geçiş
    nextStep();
  };

  // PDF indirme simülasyonu
  const downloadPDF = () => {
    alert("Teklifiniz hazırlanıyor. Lütfen bekleyin.");
    // Gerçek uygulamada burada PDF oluşturma ve indirme işlemi yapılabilir
  };

  // Adım içeriği render fonksiyonu
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Cihaz Seçimi
        return <StepDevices formData={formData} updateCount={updateCount} />;
        
      case 1: // Üretim Noktaları
        return <StepProductionPoints formData={formData} updateCount={updateCount} />;
        
      case 2: // Online Platformlar
        return <StepPlatforms 
                 formData={formData} 
                 onlinePlatforms={onlinePlatforms} 
                 togglePlatform={togglePlatform} 
               />;
        
      case 3: // Özet
        return <StepSummary 
                 formData={formData} 
                 onlinePlatforms={onlinePlatforms} 
                 onContinue={nextStep} 
               />;
        
      case 4: // İletişim Bilgileri
        return <StepContact 
                 formData={formData} 
                 onlinePlatforms={onlinePlatforms}
                 updateFormData={updateFormData} 
                 onSubmit={handleSubmit} 
               />;
        
      case 5: // Tamamlandı - Başarı Sayfası
        return <StepSuccess 
                 formData={formData} 
                 onlinePlatforms={onlinePlatforms} 
                 downloadPDF={downloadPDF} 
               />;
        
      default:
        return null;
    }
  };

  // Navigasyon butonlarını gösterme durumu
  const showNavButtons = currentStep < 3 || currentStep === 4;
  const showBackButton = currentStep > 0 && currentStep !== 5;

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative h-[200px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600" />
        </motion.div>
        <div className="container relative z-10 h-full mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              İhtiyaç Tespiti
            </h1>
            <p className="text-xl text-white/80">
              Size özel çözüm için ihtiyaçlarınızı belirleyelim
            </p>
          </motion.div>
        </div>
      </section>

      {/* Adım göstergesi */}
      <div className="container mx-auto px-4 py-8">
        {currentStep < 5 && (
          <StepIndicator steps={steps.slice(0, 5)} currentStep={currentStep} />
        )}
        
        {/* Adım içeriği */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepContent()}
          </motion.div>
        </div>
        
        {/* Navigasyon butonları */}
        {showNavButtons && (
          <div className="flex justify-between mt-8">
            {showBackButton ? (
              <Button
                variant="outline"
                onClick={prevStep}
                className="flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Geri
              </Button>
            ) : (
              <div></div>
            )}
            
            {currentStep < 3 && (
              <Button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
              >
                İleri
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
