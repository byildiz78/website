"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Building2, User, MessageSquare, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Modal } from "@/components/ui/modal";

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
  
  const handleCityChange = (value: string) => {
    setFormData(prev => ({ ...prev, city: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form doğrulama
    if (!formData.name || !formData.company || !formData.phone || !formData.email || !formData.city) {
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
      <section className="relative h-[300px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/general/ofis.webp"
            alt="RobotPOS Office"
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
              İletişim
            </h1>
            <p className="text-xl text-blue-50">
              Size nasıl yardımcı olabileceğimizi öğrenmek için bizimle iletişime geçin
            </p>
          </motion.div>
        </div>
      </section>

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
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">
                Sizi <span className="text-blue-600">Arayalım</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="İsminiz"
                    className="pl-10"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Firma Adı"
                    className="pl-10"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon"
                    className="pl-10"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail Adresiniz"
                    className="pl-10"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <Select onValueChange={handleCityChange} value={formData.city}>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Şehir Seçiniz" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="relative md:col-span-2">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınız"
                    className="pl-10 min-h-[120px]"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                        <span>Gönderiliyor...</span>
                      </div>
                    ) : (
                      "Gönder"
                    )}
                  </Button>
                </div>
              </form>
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