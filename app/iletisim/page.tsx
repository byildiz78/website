"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Building2, User, MessageSquare, Globe, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Çağrı Merkezi",
    value: "+90 (850) 811 04 56",
    href: "tel:+908508110456"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "E-mail",
    value: "info@robotpos.com",
    href: "mailto:info@robotpos.com"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Adres",
    value: "Aydınevler Mah. Durak Sokak No:19 - Maltepe / İstanbul / TÜRKİYE",
    href: "https://maps.google.com/?q=Aydınevler+Mah.+Durak+Sokak+No:19+Maltepe+İstanbul"
  }
];

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

export default function ContactPage() {
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    timeRange: '',
    message: ''
  });
  
  // Modal state
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalProps, setModalProps] = React.useState({
    title: '',
    description: '',
    contentVariant: 'default' as 'default' | 'success' | 'error' | 'loading'
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
    if (!formData.name || !formData.company || !formData.phone || !formData.email || !formData.city || !formData.timeRange) {
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Başarı modalı göster
        setModalProps({
          title: "Başarılı!",
          description: data.emailSent 
            ? "Mesajınız başarıyla gönderildi ve e-posta iletildi. En kısa sürede sizinle iletişime geçeceğiz." 
            : "Mesajınız başarıyla kaydedildi. En kısa sürede sizinle iletişime geçeceğiz.",
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
          message: '',
        });
      } else {
        // Hata modalı göster
        setModalProps({
          title: "Hata!",
          description: data.error || "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
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
        title="İletişim"
        subtitle="Size nasıl yardımcı olabileceğimizi öğrenmek için bizimle iletişime geçin"
        backgroundImage="/images/general/ofis.webp"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            {/* Office Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/general/ofis.webp"
                  alt="RobotPOS Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">RobotPOS Genel Merkez</h2>
                <p className="text-sm opacity-90">
                  Aydınevler Mah. Durak Sokak No:19 - Maltepe / İstanbul / TÜRKİYE
                </p>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.title === "Adres" ? "_blank" : undefined}
                  rel={info.title === "Adres" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="aspect-video w-full rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.8997901565584!2d29.128138715845757!3d40.94649907930905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadda0619d79cf%3A0x646c17a2b4df3bcc!2sRobotpos%20A.%C5%9E.!5e0!3m2!1str!2str!4v1682446543401!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-2xl p-8 border border-blue-100 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2 text-blue-800">
                  Sizi <span className="text-blue-600 relative">
                    Arayalım
                    <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-200"></span>
                  </span>
                </h2>
                <p className="text-gray-600 mb-6">Bilgilerinizi bırakın, uzman ekibimiz size ulaşsın</p>
                
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
                    <Select onValueChange={(value) => handleSelectChange('city', value)} value={formData.city}>
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
                    <Select onValueChange={(value) => handleSelectChange('timeRange', value)} value={formData.timeRange}>
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
                  
                  <div className="relative md:col-span-2 group">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mesajınız"
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
                          <span>Gönder</span>
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

            {/* Solution Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">
                Çözüm <span className="text-blue-600">Ortaklarımız</span>
              </h2>

              <div className="space-y-6">
                {partners.map((partner, index) => (
                  <div 
                    key={partner.country}
                    className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-sm font-semibold text-blue-600 mb-3">
                      {partner.country}
                    </h3>
                    <h4 className="text-lg font-medium mb-4">
                      {partner.name}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${partner.contact.mobile}`} className="text-gray-600 hover:text-blue-600">
                          {partner.contact.mobile}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${partner.contact.email}`} className="text-gray-600 hover:text-blue-600">
                          {partner.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <a href={`https://${partner.contact.web}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                          {partner.contact.web}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Modal */}
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