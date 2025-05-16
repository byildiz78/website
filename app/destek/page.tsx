"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Archive, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";

// Define the download items
const downloadItems = [
  {
    name: "Uzak Destek Aracı (64-bit)",
    description: "64-bit sistemler için uzaktan destek uygulaması. PC adı ile kurulum yapar.",
    icon: <FileCode className="h-10 w-10 text-green-500" />,
    filePath: "/alacati/uzakdestek64.exe",
    fileSize: "3.3 MB",
    fileType: "Uygulama"
  },
  {
    name: "RobotPOS Destek Aracı",
    description: "Otomatik Kurulum scriptini içerir. İstemci adını kullanıcının girmesini sağlar.",
    icon: <FileText className="h-10 w-10 text-blue-500" />,
    filePath: "/alacati/robotposdestek.bat",
    fileSize: "4.2 KB",
    fileType: "Batch Dosyası"
  },
  {
    name: "Uzak Destek Aracı",
    description: "Yukarıdaki iki dosyayı içeren arşiv dosyasıdır.",
    icon: <Archive className="h-10 w-10 text-purple-500" />,
    filePath: "/alacati/uzakdestek.rar",
    fileSize: "1.5 MB",
    fileType: "RAR Arşivi"
  }
];

export default function DestekPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Teknik Destek"
        subtitle="İhtiyacınız olan destek araçlarını buradan indirebilirsiniz"
        backgroundImage="/images/general/support-hero.webp"
      />

      {/* Download Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Destek Araçları
            </h2>
            <p className="text-lg text-gray-700 mb-10 text-center">
              RobotPOS teknik destek ekibimizin size daha hızlı yardımcı olabilmesi için aşağıdaki araçları kullanabilirsiniz.
            </p>

            <div className="grid gap-8 md:grid-cols-1">
              {downloadItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 flex items-start space-x-6">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                        <span className="flex items-center">
                          <span className="font-medium">Boyut:</span>
                          <span className="ml-1">{item.fileSize}</span>
                        </span>
                        <span className="flex items-center">
                          <span className="font-medium">Tür:</span>
                          <span className="ml-1">{item.fileType}</span>
                        </span>
                      </div>
                      <Button 
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <a href={item.filePath} download>
                          <Download className="mr-2 h-4 w-4" />
                          İndir
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kullanım Talimatları
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                <li>
                  <span className="font-medium">Uzak Destek Aracı 64-bit (uzakdestek64.exe):</span> 64-bit işletim sistemleri için optimize edilmiş uzak destek uygulamasıdır. Doğrudan çalıştırabilirsiniz. PC adınızı otomatik olarak kullanarak kurulum yapar.
                </li>
                <li>
                  <span className="font-medium">RobotPOS Destek Aracı (robotposdestek.bat):</span> Bu dosyayı indirdikten sonra çift tıklayarak çalıştırın. Cihaz adını girmeniz istenecektir. Otomatik kurulum scriptini çalıştırarak teknik destek ekibimizin bilgisayarınıza güvenli bir şekilde bağlanmasını sağlar.
                </li>
                <li>
                  <span className="font-medium">Uzak Destek Aracı (uzakdestek.rar):</span> Bu sıkıştırılmış dosya, yukarıdaki iki dosyayı içerir. Arşiv içeriğini bir klasöre çıkararak ihtiyacınız olan dosyaya erişebilirsiniz.
                </li>
              </ol>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg text-blue-800">
                <p className="font-medium">Not:</p>
                <p>Teknik destek ekibimiz sizinle iletişime geçtiğinde, hangi aracı kullanmanız gerektiğini size bildirecektir. Lütfen ekibimizin yönlendirmelerine uyunuz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
