"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Building2, User, MapPin, MessageSquare, Briefcase, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Modal } from "@/components/ui/modal";
import { PageHero } from "@/components/ui/page-hero";

const cities = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Yurt Dışı",
  "Adana",
  "Afyonkarahisar",
  "Ağrı",
  "Aksaray",
  "Amasya",
  "Antalya",
  "Ardahan",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bartın",
  "Batman",
  "Bayburt",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Düzce",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Iğdır",
  "Isparta",
  "Kahramanmaraş",
  "Karabük",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırıkkale",
  "Kırklareli",
  "Kırşehir",
  "Kilis",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Şanlıurfa",
  "Şırnak",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Uşak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak",
  "Diğer"
];

const timeRanges = [
  "09:00 - 12:00",
  "12:00 - 15:00",
  "15:00 - 18:00",
  "18:00 sonrası",
  "Herhangi bir zaman"
];

const businessTypes = [
  "Yazılım Şirketi",
  "Donanım Şirketi",
  "Sistem Entegratörü",
  "Danışmanlık Şirketi",
  "Bireysel Danışman",
  "Diğer"
];

const benefits = [

  {
    title: "Teknik Destek",
    description: "satış destek ve eğitim desteği"
  },
  {
    title: "Pazarlama Desteği",
    description: "Satışlarınızı artırmak için pazarlama materyalleri ve stratejileri"
  },
  {
    title: "Özel Fiyatlandırma",
    description: "Çözüm ortaklarına özel fiyatlandırma avantajları"
  }
];

export default function PartnerApplicationPage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    title: '',
    description: '',
    contentVariant: 'default' as 'default' | 'success' | 'error' | 'loading'
  });
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    timeRange: '',
    businessType: '',
    experience: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form doğrulama
    if (!formData.name || !formData.company || !formData.phone || !formData.email || !formData.city || !formData.timeRange || !formData.businessType) {
      // Modal ile hata göster
      setModalProps({
        title: "Hata!",
        description: "Lütfen tüm zorunlu alanları doldurun.",
        contentVariant: "error"
      });
      setModalOpen(true);
      return;
    }
    
    // E-posta doğrulama
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      // Modal ile hata göster
      setModalProps({
        title: "Hata!",
        description: "Lütfen geçerli bir e-posta adresi girin.",
        contentVariant: "error"
      });
      setModalOpen(true);
      return;
    }
    
    setLoading(true);
    
    // Gönderim başladı modalı göster
    setModalProps({
      title: "Gönderiliyor...",
      description: "Form verileriniz işleniyor, lütfen bekleyin.",
      contentVariant: "loading"
    });
    setModalOpen(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: "Çözüm Ortaklığı Başvurusu"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Başarı modalı göster
        setModalProps({
          title: "Başarılı!",
          description: data.emailSent
            ? "Başvurunuz başarıyla gönderildi ve e-posta iletildi. En kısa sürede sizinle iletişime geçeceğiz."
            : "Başvurunuz başarıyla kaydedildi. En kısa sürede sizinle iletişime geçeceğiz.",
          contentVariant: "success"
        });
        setModalOpen(true);

        // Form verilerini sıfırla
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          city: '',
          timeRange: '',
          businessType: '',
          experience: '',
          message: ''
        });
      } else {
        // Hata modalı göster
        setModalProps({
          title: "Hata!",
          description: data.error || "Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
          contentVariant: "error"
        });
        setModalOpen(true);
        console.error("Form gönderme hatası:", data.error);
      }
    } catch (error) {
      // Hata modalı göster
      setModalProps({
        title: "Hata!",
        description: "Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.",
        contentVariant: "error"
      });
      setModalOpen(true);
      console.error("Form gönderme hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <PageHero
        title="Çözüm Ortaklığı Başvuru"
        subtitle="robotPOS'un yenilikçi çözümlerini müşterilerinize sunarak birlikte büyüyelim"
        backgroundImage="/images/general/res-1-min.webp"
      />

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Çözüm Ortaklarımız Arıyoruz</h2>
              <p className="text-gray-600 mb-4">
                robotPOS olarak, katma değerli çözümlerimizin tanıtımı, satışı ve satış sonrası desteklerinde birlikte çalışabileceğimiz sektör profesyonellerine kapımız açık.
              </p>
              <p className="text-gray-600">
                Güçlü teknolojik altyapımız ve yenilikçi ürünlerimiz ile müşterilerinize değer katarken, birlikte büyüyelim.
              </p>
            </div>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-2xl p-8 border border-blue-100 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-blue-800">
                Başvuru <span className="text-blue-600 relative">
                  Formu
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-200"></span>
                </span>
              </h2>
              <p className="text-gray-600 mb-6">Çözüm ortağımız olmak için başvurunuzu yapın</p>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="İsminiz"
                    className="pl-10 border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors shadow-sm h-12 text-base"
                    required
                  />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Firma Adı"
                    className="pl-10 border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors shadow-sm h-12 text-base"
                    required
                  />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon"
                    className="pl-10 border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors shadow-sm h-12 text-base"
                    required
                  />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail Adresiniz"
                    className="pl-10 border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors shadow-sm h-12 text-base"
                    required
                  />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => handleSelectChange('city', value)}
                  >
                    <SelectTrigger className="pl-10 border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors shadow-sm h-12 text-base">
                      <SelectValue placeholder="Şehir Seçiniz" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <Select
                    value={formData.timeRange}
                    onValueChange={(value) => handleSelectChange('timeRange', value)}
                  >
                    <SelectTrigger className="pl-10 border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors shadow-sm h-12 text-base">
                      <SelectValue placeholder="Zaman Aralığı Seçiniz" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {timeRanges.map((timeRange) => (
                        <SelectItem key={timeRange} value={timeRange}>
                          {timeRange}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <Select
                    value={formData.businessType}
                    onValueChange={(value) => handleSelectChange('businessType', value)}
                  >
                    <SelectTrigger className="pl-10 border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors shadow-sm h-12 text-base">
                      <SelectValue placeholder="İş Alanınız" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <Input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Sektör Deneyiminiz (Yıl)"
                    className="pl-10 border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors shadow-sm h-12 text-base"
                  />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>

                <div className="relative md:col-span-2 group">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınız ve çözüm ortaklığı ile ilgili beklentileriniz"
                    className="pl-10 min-h-[120px] border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors shadow-sm text-base"
                  />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </div>
                
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-blue-200 transition-all duration-300 h-14 text-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                        <span>Gönderiliyor...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Başvuruyu Gönder</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </Button>
                </div>
                
                <div className="md:col-span-2 text-center text-sm text-gray-500 mt-2">
                  Bilgileriniz gizlilik politikamız kapsamında korunmaktadır
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalProps.title}
        description={modalProps.description}
        contentVariant={modalProps.contentVariant as any}
      />
    </div>
  );
}
