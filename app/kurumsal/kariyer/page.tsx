"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Upload, Users2, Briefcase, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Modal } from "@/components/ui/modal";

export default function CareerPage() {
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
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
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form doğrulama
    if (!formData.name || !formData.phone || !formData.email) {
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
    
    // CV dosyası kontrolü
    if (!cvFile) {
      // Modal ile uyarı göster
      setModalProps({
        title: "Uyarı",
        description: "CV dosyası yüklemek ister misiniz? CV olmadan da başvurunuzu gönderebilirsiniz.",
        contentVariant: "default"
      });
      setModalOpen(true);
    }
    
    setLoading(true);
    
    // Gönderim başladı modalı göster
    setModalProps({
      title: "Gönderiliyor...",
      description: "Başvurunuz işleniyor, lütfen bekleyin.",
      contentVariant: "loading"
    });
    setModalOpen(true);
    
    try {
      // FormData oluştur
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('phone', formData.phone);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      
      // CV dosyası varsa ekle
      if (cvFile) {
        submitData.append('cv', cvFile);
      }
      
      // API'ye gönder
      const response = await fetch('/api/send-career-application', {
        method: 'POST',
        body: submitData,
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Başarı modalı göster
        setModalProps({
          title: "Başarılı!",
          description: data.emailSent 
            ? "Başvurunuz başarıyla alındı ve e-posta gönderildi. En kısa sürede sizinle iletişime geçeceğiz." 
            : "Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.",
          contentVariant: "success"
        });
        setModalOpen(true);
        
        // Formu sıfırla
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        setCvFile(null);
        
        // Dosya seçim alanını sıfırla
        const fileInput = document.getElementById('cv') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      } else {
        // Hata modalı göster
        setModalProps({
          title: "Hata!",
          description: data.error || "Başvurunuz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
          contentVariant: "error"
        });
        setModalOpen(true);
        console.error("Başvuru gönderme hatası:", data.error);
      }
    } catch (error) {
      // Hata modalı göster
      setModalProps({
        title: "Hata!",
        description: "Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.",
        contentVariant: "error"
      });
      setModalOpen(true);
      console.error("Başvuru gönderme hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Dosya boyutu kontrolü (10MB'dan küçük olmalı)
      if (file.size > 10 * 1024 * 1024) {
        // Modal ile hata göster
        setModalProps({
          title: "Hata!",
          description: "Dosya boyutu çok büyük. Lütfen 10MB'dan küçük bir dosya seçin.",
          contentVariant: "error"
        });
        setModalOpen(true);
        
        // Dosya seçimini sıfırla
        e.target.value = '';
        return;
      }
      
      // Dosya tipi kontrolü
      const validTypes = ['.pdf', '.doc', '.docx', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.some(type => file.name.toLowerCase().endsWith(type) || file.type.includes(type))) {
        // Modal ile hata göster
        setModalProps({
          title: "Hata!",
          description: "Geçersiz dosya formatı. Lütfen PDF, DOC veya DOCX formatında bir dosya seçin.",
          contentVariant: "error"
        });
        setModalOpen(true);
        
        // Dosya seçimini sıfırla
        e.target.value = '';
        return;
      }
      
      setCvFile(file);
    }
  };

  return (
    <div className="min-h-screen">
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
            alt="robotPOS Kariyer"
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
              Kariyer
            </h1>
            <p className="text-xl text-blue-50">
              Ekibimize katılın, geleceği birlikte şekillendirelim
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <div className="space-y-12">
            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">
                robotPOS <span className="text-blue-600">Kariyer</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Ekibimize katkı sağlayabilecek takım arkadaşları arıyoruz.
              </p>
              <p className="text-gray-600">
                Maksimum müşteri memnuniyetini hedefleyen takımımız, üretilen değerleri ileri taşıyacak, 
                yeni fikir ve tecrübelere daima açıktır.
              </p>
            </motion.div>

            {/* Why Join Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Users2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Dinamik Ekip</h3>
                <p className="text-gray-600 text-sm">
                  Genç ve dinamik bir ekiple çalışma fırsatı
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Kariyer Fırsatı</h3>
                <p className="text-gray-600 text-sm">
                  Sürekli gelişim ve yükselme imkanı
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Sürekli Eğitim</h3>
                <p className="text-gray-600 text-sm">
                  Düzenli eğitim ve gelişim programları
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Users2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Sosyal İmkanlar</h3>
                <p className="text-gray-600 text-sm">
                  Zengin yan haklar ve sosyal aktiviteler
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/general/ofis.webp"
                alt="robotPOS Office"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">robotPOS Genel Merkez</h2>
                <p className="text-sm opacity-90">
                  Aydınevler Mah. Durak Sokak No:19 - Maltepe / İstanbul
                </p>
              </div>
            </motion.div>
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">
              Başvuru <span className="text-blue-600">Formu</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ad, Soyad</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Adınız ve soyadınız"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Telefon numaranız"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="E-mail adresiniz"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mesaj</Label>
                <Textarea
                  id="message"
                  placeholder="Kendinizi kısaca tanıtın"
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv">CV Yükle</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('cv')?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    {cvFile ? cvFile.name : "CV Dosyası Seç"}
                  </Button>
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  PDF, DOC veya DOCX formatında dosya yükleyebilirsiniz (max. 10MB)
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <a 
                      href="/kurumsal/aydinlatma-metni"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Aydınlatma Metnini
                    </a>{" "}
                    okudum, onaylıyorum
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Kişisel verileriniz başvurunuzun değerlendirilmesi amacıyla işlenecektir
                  </p>
                </div>
              </div>

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
                  "Başvuruyu Gönder"
                )}
              </Button>
            </form>
          </motion.div>
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