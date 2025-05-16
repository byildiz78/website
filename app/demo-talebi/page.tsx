"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Building2, User, MapPin, MessageSquare, Clock } from "lucide-react";
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

const timeRanges = [
  "09:00 - 12:00",
  "12:00 - 15:00",
  "15:00 - 18:00",
  "18:00 sonrası",
  "Herhangi bir zaman"
];

const features = [
  { title: "7/16 Destek", description: "Teknik destek ekibimiz her zaman yanınızda" },
  { title: "Kolay Kullanım", description: "15 dakikada öğrenin, hemen kullanmaya başlayın" },
  { title: "Kapsamlı Eğitim", description: "Kurulum ve eğitim tamamen tarafımızca yapılır" },
];

export default function DemoRequestPage() {
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
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    timeRange: "",
    message: ""
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
            ? "Form başarıyla gönderildi ve e-posta iletildi. En kısa sürede sizinle iletişime geçeceğiz."
            : "Form başarıyla kaydedildi. En kısa sürede sizinle iletişime geçeceğiz.",
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
      <section className="relative h-[300px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/general/res-1-min.webp"
            alt="robotPOS Demo"
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
              robotPOS ile tanışmak ister misiniz?
            </h1>
            <p className="text-xl text-blue-50">
              Katma değerli çözümlerimiz ile tanışmak ve size nasıl faydalı olabileceğimiz konusunu değerlendirmek üzere bizim ile iletişime geçebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 space-y-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
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