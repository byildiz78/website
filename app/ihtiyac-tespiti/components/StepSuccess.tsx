import React from "react";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FormDataType, PlatformType } from "@/app/ihtiyac-tespiti/types";

interface StepSuccessProps {
  formData: FormDataType;
  onlinePlatforms: PlatformType[];
  downloadPDF: () => void;
}

export function StepSuccess({ formData, onlinePlatforms, downloadPDF }: StepSuccessProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4">
          <Check className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Talebiniz Alındı</h2>
        <p className="text-gray-600 mb-8">
          İhtiyaçlarınıza özel teklifimiz en kısa sürede hazırlanacak ve sizinle iletişime geçilecektir.
        </p>
      </div>
      
      <Card className="p-6 border-l-4 border-l-green-500">
        <h3 className="text-xl font-bold mb-4 text-green-700">Talep Özeti</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cihaz İhtiyacı */}
            <Card className="p-4 border border-gray-200 bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">1</span>
                Cihaz İhtiyacı
              </h4>
              
              {(formData.devices.touchTerminal > 0 || formData.devices.waiterTerminal > 0) ? (
                <ul className="space-y-2 list-inside">
                  {formData.devices.touchTerminal > 0 && (
                    <li className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {formData.devices.touchTerminal} adet Dokunmatik Terminal
                    </li>
                  )}
                  
                  {formData.devices.waiterTerminal > 0 && (
                    <li className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {formData.devices.waiterTerminal} adet Garson El Terminali
                    </li>
                  )}
                </ul>
              ) : (
                <p className="text-gray-600">Seçilen cihaz bulunmamaktadır.</p>
              )}
            </Card>
            
            {/* Üretim Noktaları */}
            <Card className="p-4 border border-gray-200 bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">2</span>
                Üretim Noktaları
              </h4>
              
              {(formData.productionPoints.printer > 0 || formData.productionPoints.kitchenScreen > 0) ? (
                <ul className="space-y-2 list-inside">
                  {formData.productionPoints.printer > 0 && (
                    <li className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {formData.productionPoints.printer} adet Mutfak Yazıcısı
                    </li>
                  )}
                  
                  {formData.productionPoints.kitchenScreen > 0 && (
                    <li className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {formData.productionPoints.kitchenScreen} adet Mutfak Ekranı
                    </li>
                  )}
                </ul>
              ) : (
                <p className="text-gray-600">Seçilen üretim noktası bulunmamaktadır.</p>
              )}
            </Card>
            
            {/* Online Platform Entegrasyonları */}
            <Card className="p-4 border border-gray-200 bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">3</span>
                Online Platform Entegrasyonları
              </h4>
              
              {Object.entries(formData.platforms).some(([_, value]) => value) ? (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(formData.platforms).map(([key, value]) => {
                    if (value) {
                      const platform = onlinePlatforms.find(p => p.id === key);
                      return platform ? (
                        <span 
                          key={key} 
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${platform.color}`}
                        >
                          <Check className="w-3 h-3 mr-1" />
                          {platform.name}
                        </span>
                      ) : null;
                    }
                    return null;
                  })}
                </div>
              ) : (
                <p className="text-gray-600">Seçilen platform bulunmamaktadır.</p>
              )}
            </Card>
            
            {/* İletişim Bilgileri */}
            <Card className="p-4 border border-gray-200 bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">4</span>
                İletişim Bilgileri
              </h4>
              
              <div className="space-y-2">
                <div className="flex">
                  <span className="font-medium w-20">Ad Soyad:</span>
                  <span className="text-gray-700">{formData.contact.name}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-20">Firma:</span>
                  <span className="text-gray-700">{formData.contact.company}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-20">E-posta:</span>
                  <span className="text-gray-700">{formData.contact.email}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-20">Telefon:</span>
                  <span className="text-gray-700">{formData.contact.phone}</span>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Notlar */}
          {formData.contact.notes && (
            <Card className="p-4 border border-gray-200 bg-gray-50">
              <h4 className="font-semibold text-gray-700 mb-2">Ek Notlar</h4>
              <p className="text-gray-600 italic">{formData.contact.notes}</p>
            </Card>
          )}
        </div>
      </Card>
      
      <div className="flex justify-center space-x-4">
        <Button 
          onClick={downloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Özeti İndir
        </Button>
        
        <Button
          onClick={() => window.location.href = "/iletisim"}
          variant="outline"
        >
          İletişime Geç
        </Button>
      </div>
    </div>
  );
}
