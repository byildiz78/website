import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import type { FormDataType, PlatformType } from "@/app/ihtiyac-tespiti/types";

interface StepContactProps {
  formData: FormDataType;
  onlinePlatforms: PlatformType[];
  updateFormData: (section: keyof FormDataType, field: string, value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function StepContact({ formData, onlinePlatforms, updateFormData, onSubmit }: StepContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    title: '',
    description: '',
    contentVariant: 'default' as 'default' | 'success' | 'error' | 'loading'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form doğrulama
    if (!formData.contact.name || !formData.contact.company || !formData.contact.phone || !formData.contact.email) {
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
    if (!emailRegex.test(formData.contact.email)) {
      // Modal ile hata göster
      setModalProps({
        title: "Hata!",
        description: "Lütfen geçerli bir e-posta adresi girin.",
        contentVariant: "error"
      });
      setModalOpen(true);
      return;
    }
    
    setIsSubmitting(true);
    
    // Gönderim başladı modalı göster
    setModalProps({
      title: "Gönderiliyor...",
      description: "Form verileriniz işleniyor, lütfen bekleyin.",
      contentVariant: "loading"
    });
    setModalOpen(true);
    
    try {
      // Özet metni oluştur
      const summaryText = generateSummaryText(formData, onlinePlatforms);
      
      // API'ye gönderilecek veriyi hazırla
      const apiData = {
        name: formData.contact.name,
        company: formData.contact.company,
        email: formData.contact.email,
        phone: formData.contact.phone,
        message: formData.contact.notes,
        subject: "İhtiyaç Tespiti Formu",
        formSummary: summaryText
      };
      
      // API'ye gönder
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
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
        
        // Form başarıyla gönderildi, bir sonraki adıma geç
        setTimeout(() => {
          setModalOpen(false);
          onSubmit(e);
        }, 1500);
      } else {
        throw new Error(data.error || "Form gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      
      // Hata modalı göster
      setModalProps({
        title: "Hata!",
        description: "Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        contentVariant: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Özet metni oluşturma fonksiyonu
  const generateSummaryText = (formData: FormDataType, platforms: PlatformType[]): string => {
    let summary = "İHTİYAÇ TESPİTİ FORMU ÖZETİ\n\n";
    
    // Cihaz ihtiyaçları
    summary += "CİHAZ İHTİYAÇLARI:\n";
    if (formData.devices.touchTerminal > 0) {
      summary += `- ${formData.devices.touchTerminal} adet Dokunmatik Terminal\n`;
    }
    if (formData.devices.waiterTerminal > 0) {
      summary += `- ${formData.devices.waiterTerminal} adet Garson El Terminali\n`;
    }
    if (formData.devices.touchTerminal === 0 && formData.devices.waiterTerminal === 0) {
      summary += "- Cihaz seçilmedi\n";
    }
    
    // Üretim noktaları
    summary += "\nÜRETİM NOKTALARI:\n";
    if (formData.productionPoints.printer > 0) {
      summary += `- ${formData.productionPoints.printer} adet Mutfak Yazıcısı\n`;
    }
    if (formData.productionPoints.kitchenScreen > 0) {
      summary += `- ${formData.productionPoints.kitchenScreen} adet Mutfak Ekranı\n`;
    }
    if (formData.productionPoints.printer === 0 && formData.productionPoints.kitchenScreen === 0) {
      summary += "- Üretim noktası seçilmedi\n";
    }
    
    // Online platformlar
    summary += "\nONLINE PLATFORM ENTEGRASYONLARI:\n";
    const selectedPlatforms = Object.entries(formData.platforms)
      .filter(([_, selected]) => selected)
      .map(([key, _]) => {
        const platform = platforms.find(p => p.id === key);
        return platform ? platform.name : key;
      });
    
    if (selectedPlatforms.length > 0) {
      selectedPlatforms.forEach(platform => {
        summary += `- ${platform}\n`;
      });
    } else {
      summary += "- Platform seçilmedi\n";
    }
    
    // Notlar
    if (formData.contact.notes) {
      summary += "\nEK NOTLAR:\n";
      summary += formData.contact.notes;
    }
    
    return summary;
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-6">İletişim Bilgileriniz</h2>
      <p className="text-center text-gray-600 mb-8">
        Size özel teklifimizi hazırlayabilmemiz için iletişim bilgilerinizi paylaşın
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-medium">Ad Soyad *</Label>
            <Input 
              id="name" 
              value={formData.contact.name}
              onChange={(e) => updateFormData('contact', 'name', e.target.value)}
              required
              placeholder="Ad Soyad"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company" className="font-medium">Firma Adı *</Label>
            <Input 
              id="company" 
              value={formData.contact.company}
              onChange={(e) => updateFormData('contact', 'company', e.target.value)}
              required
              placeholder="Firma Adı"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="font-medium">E-posta Adresi *</Label>
            <Input 
              id="email" 
              type="email"
              value={formData.contact.email}
              onChange={(e) => updateFormData('contact', 'email', e.target.value)}
              required
              placeholder="ornek@firma.com"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="font-medium">Telefon Numarası *</Label>
            <Input 
              id="phone" 
              value={formData.contact.phone}
              onChange={(e) => updateFormData('contact', 'phone', e.target.value)}
              required
              placeholder="05XX XXX XX XX"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="notes" className="font-medium">Ek Notlar</Label>
          <textarea
            id="notes"
            className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            value={formData.contact.notes}
            onChange={(e) => updateFormData('contact', 'notes', e.target.value)}
            placeholder="Eklemek istediğiniz notlar..."
          />
        </div>
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Gönderiliyor...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Teklif İste
              </>
            )}
          </Button>
        </div>
      </form>
      
      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalProps.title}
        description={modalProps.description}
        contentVariant={modalProps.contentVariant}
      />
    </div>
  );
}
