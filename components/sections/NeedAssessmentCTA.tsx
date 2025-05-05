import React from "react";
import { ArrowRight, CheckCircle, Monitor, Smartphone, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  "Cihaz ihtiyacınızı belirleyin",
  "Üretim noktalarınızı tanımlayın",
  "Online platform entegrasyonlarını seçin",
  "Hızlıca özel teklifinizi alın"
];

export function NeedAssessmentCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Sol taraf - Metin içeriği */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                İhtiyacınızı kendiniz belirtin, <span className="text-blue-600">hızlıca teklif alın</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                İşletmeniz için en uygun çözümü bulmak artık çok kolay. Sadece birkaç adımda ihtiyaçlarınızı belirleyin, 
                size özel hazırlanmış teklifinizi hemen alın.
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <a href="/ihtiyac-tespiti">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  İhtiyaç Tespiti Yap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>
          
          {/* Sağ taraf - Form ön izlemesi */}
          <div className="w-full md:w-1/2">
            <motion.div
              className="relative h-auto rounded-xl shadow-xl bg-white overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Form başlık bölümü */}
              <div className="bg-blue-600 p-4 text-white">
                <h3 className="text-lg font-semibold">İhtiyaç Tespiti Formu</h3>
                <div className="flex mt-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold mr-2 border-2 border-white">1</div>
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-sm font-bold mr-2">2</div>
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-sm font-bold mr-2">3</div>
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-sm font-bold">4</div>
                </div>
              </div>
              
              {/* Form içerik bölümü */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-center mb-4">Cihaz İhtiyacınızı Belirleyin</h4>
                
                {/* Dokunmatik Terminal */}
                <div className="mb-6 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="mr-4 text-blue-600">
                      <Monitor className="w-10 h-10" />
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold">Dokunmatik Terminal</h5>
                      <p className="text-sm text-gray-600">Kasa noktalarında kullanılacak dokunmatik ekranlı POS terminalleri</p>
                    </div>
                    <div className="flex items-center">
                      <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">-</button>
                      <span className="mx-3 font-semibold">2</span>
                      <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">+</button>
                    </div>
                  </div>
                </div>
                
                {/* Garson El Terminali */}
                <div className="mb-6 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="mr-4 text-blue-600">
                      <Smartphone className="w-10 h-10" />
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-semibold">Garson El Terminali</h5>
                      <p className="text-sm text-gray-600">Garsonların sipariş almak için kullanacağı mobil el terminalleri</p>
                    </div>
                    <div className="flex items-center">
                      <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">-</button>
                      <span className="mx-3 font-semibold">1</span>
                      <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">+</button>
                    </div>
                  </div>
                </div>
                
                {/* İleri butonu */}
                <div className="flex justify-end mt-6">
                  <a href="/ihtiyac-tespiti">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      İleri
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
