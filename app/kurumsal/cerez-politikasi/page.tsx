"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[200px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/general/ofis.webp"
            alt="robotPOS Çerez Politikası"
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
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Çerez Politikası
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Çerez ve İzleme Aracı Politikası<br />
              robotPOS BİLGİSAYAR SİSTEMLERİ SANAYİ VE TİCARET A.Ş.
            </h2>

            <h3 className="text-xl font-bold mt-8 mb-4">1. Veri sorumlusu</h3>
            <p>
              robotPOS Bilgisayar Sistemleri Sanayi ve Ticaret A.Ş. (bundan böyle "biz" olarak anılacaktır), olarak web sitelerimiz üzerindeki Çerezlerin, Takip Araçların ve Sosyal Medya Eklentilerin kullanımı hakkında sizleri bilgilendirmek isteriz.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">2. Tanım</h3>
            <p>
              Web sitelerimizde "Çerezler" kullanılmaktadır. Çerezler, web sitelerimizden bilgisayarınızın veya mobil cihazınızın sabit diskine aktarılan ve web sitemizi ziyaret ettiğinizde orada saklanan küçük metin dosyalarıdır. Bu, tarayıcı oturumunuz sırasında veya web sitemize yapacağınız bir sonraki ziyaretiniz için eylemlerinizi ve tercih ettiğiniz ayarları kaydedecektir. Web sitelerimizi tekrar ziyaret etmeniz halinde, bu bilgiler sunucuya geri gönderilecektir. Bu sayede bilgisayarınız veya mobil cihazınız otomatik olarak yeniden tanınmaktadır ve örneğin tercih ettiğiniz ayarlar yüklenir. Bu, web sitemizi her ziyaret ettiğinizde bunları ayarlamanıza gerek kalmaması avantajını sunar. Tekliflerimizi, internetteki görünürlüğümüzü ve reklamlarımızı içerik, grafik ve teknoloji açısından ihtiyaçlarınıza göre geliştirmek için tercihlerinizi takip etmek ve web sitelerimiz için kullanım verilerini istatistiksel olarak değerlendirmek için Çerezler kullanabiliriz. Web sitelerimizde pikseller, dönüşüm izleme gibi teknikler kullanabiliriz.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">2.1. Çerez Tipleri</h3>
            <p>Web sitelerimizde çeşitli çerezler kullanılmaktadır:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Oturum Çerezleri:</strong> Oturum çerezleri ziyaretçilerimizin web sitesini ziyaretleri süresince kullanılan, tarayıcı kapatıldıktan sonra silinen geçici çerezlerdir. Bu tür çerezlerin kullanılmasının temel amacı ziyaretiniz süresince İnternet Sitesinin düzgün bir biçimde çalışmasının teminini sağlamaktır.
              </li>
              <li>
                <strong>Kalıcı Çerezler:</strong> Kalıcı çerezler web sitemizin işlevselliğini artırmak, ziyaretçilerimize daha hızlı ve iyi bir hizmet sunmak amacıyla kullanılan çerez türleridir. Bu tür çerezler tercihlerinizi hatırlamak için kullanılır ve tarayıcılar vasıtasıyla cihazınızda depolanır.
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">2.2. Amaçlar</h3>
            <p>Çerezler, aşağıdaki amaçlarla kullanılır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web sitelerinin belirli işlevlerinin gerçekleştirilmesi</li>
              <li>Analiz ve istatistik</li>
              <li>Reklam / (Yeniden pazarlama) pazarlama</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">2.3. Saklama Süresi</h3>
            <p>Çerezler, farklı süreler boyunca saklanmaktadır:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Oturum Çerezleri:</strong> Oturum Çerezleri sadece web sitemize yaptığınız ziyaret süresince saklanır.
              </li>
              <li>
                <strong>Kalıcı Çerezler:</strong> Kalıcı Çerezler, bilgisayarınızın veya mobil cihazınızın sabit diskinde, web sitemize yaptığımız ziyaretlerin veya bir tarayıcı oturumunun ötesinde saklanır.
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">3. Web sitelerimizde bulunan çerezlere ilişkin ileri bilgiler</h3>
            <h4 className="text-lg font-semibold mt-6 mb-3">3.1. Gerekli Çerezler</h4>
            <p>Web sitelerimizde, web sitelerinin düzgün bir şekilde çalışmasını sağlayan Çerezler aşağıda sayılı amaçlar doğrultusunda kullanılmaktadır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kullanıcının alan adı bağlamında Çerezler izin durumunu kaydetme</li>
              <li>Kullanıcının tarayıcıda JavaScript'i devre dışı bırakıp bırakmadığını kaydetme</li>
              <li>Dil, yer, görüntülenecek arama sonuçları gibi tercihleri saklama</li>
              <li>Web sitemizi ekranınıza en uygun şekilde gösterebilmemiz için tarayıcı ayarlarınızı okuma</li>
              <li>Web sitelerini, erişilebilir kalması için eşit olarak yükleme</li>
              <li>Web sitelerini nasıl kullandığınıza bağlı olarak web sitelerimizi gerçek zamanlı olarak optimize etmek</li>
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-3">3.2. Analiz Çerezleri</h4>
            <p>Web sitelerimizde, web sitelerimizin kullanımını ölçmemizi sağlayan Çerezler, aşağıdaki amaçlarla kullanılır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ziyaretçilerin sayısının web sitemizden takip edilmesi</li>
              <li>Ziyaretçinin web sitelerini nasıl kullandığı hakkında istatistiksel veriler oluşturmak için kullanılan münhasır dijital kimliği kaydetme</li>
              <li>Her ziyaretçinin web sitemizde geçirdiği süreyi takip etmek</li>
              <li>Web sitelerini optimize etmek</li>
              <li>Sitelerimizin hangi bölümlerinin geliştirilmesinin gerektiğini değerlendirmek</li>
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-3">3.3. Sosyal Medya Çerezleri</h4>
            <p>Web sitelerimizde, web sitemizin içeriğini sosyal medya üzerinden paylaşmak böylece seçilen sosyal medyadaki kullanıcıların doğrudan web sitemizdeki belirli içerikleri paylaşması ve beğenmesi amacıyla Çerezler kullanılır.</p>
            <p>Bu sosyal medya kanalları kişisel verilerinizi kendi amaçları için toplayabilir. Toplanan kişisel verileriniz ve sosyal medya taraflarınca belirlenen Çerezler hakkında daha fazla bilgi için lütfen ilgili sorumluların gizlilik ve Çerez politikalarını inceleyebilirsiniz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://en-gb.facebook.com/about/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Facebook</a></li>
              <li><a href="https://policies.google.com/privacy?hl=gb" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GooglePlus ve Youtube</a></li>
              <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a></li>
              <li><a href="https://help.instagram.com/155833707900388" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Instagram</a></li>
              <li><a href="https://policy.pinterest.com/de/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Pinterest</a></li>
              <li><a href="https://privacy.xing.com/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">XING</a></li>
              <li><a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Twitter</a></li>
              <li><a href="https://foursquare.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">FourSquare</a></li>
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-3">3.4. Hedeflenmiş Reklam Çerezleri</h4>
            <p>Web sitelerimizde hedefli reklamlar ve içerik görüntülemek için Hedeflenmiş Reklam Çerezleri, aşağıdaki amaçlarla kullanılır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>İlgi alanlarınızı kaydetmek ve bunlara erişmek</li>
              <li>Reklamlara kaç ziyaretçinin tıkladığını takip etme</li>
              <li>İhtiyaçlarınıza, ilgi alanlarınıza veya tercihlerinize göre hazırlanmış reklamları göstermek için kullanılacak üçüncü taraf hizmetleri</li>
              <li>Bir cihazdaki bir reklam başka bir cihazda bir eylemi tetiklediyse ("Cihazlar Arası İzleme"), birden fazla cihazı bir ziyaretçiye eşleştirmek</li>
              <li>İlgi alanlarınıza göre özelleştirilmiş pazarlama e-postaları göndermek</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">4. Çerezlerin yönetimi & silinmesi ve onayın geri alınması</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>Web sitelerimizi ziyaret ettiğinizde, web sitelerimizde Çerezlerin kullanımı hakkında sizi bilgilendiren bir başlık görünür. Kapat (X) düğmesini tıklatarak, web sitelerimizde Çerezlerin kullanımını kabul edersiniz.</li>
              <li>Tarayıcı ayarlarınızı değiştirerek ve Çerezlerin ayarını devre dışı bırakarak ve önceden ayarlanmış Çerezleri silerek, onayınızı istediğiniz zaman geri çekebilirsiniz.</li>
              <li>Üçüncü Şahıs Çerezleri ile ilgili rızanızı geri alınmasının istenmesi halinde, lütfen ilgili Çerezin sağlayıcısıyla iletişime geçin.</li>
            </ul>

            <p className="mt-4">Tarayıcı ayarlarınızı nasıl değiştireceğinizle ilgili ayrıntılar için, lütfen tarayıcınızın yönergelerine veya yardım işlevlerine bakınız:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Firefox</a></li>
              <li><a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Internet Explorer</a></li>
              <li><a href="https://help.apple.com/safari/mac/8.0/#/sfri11471" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Safari</a></li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">5. Sorumsuzluk</h3>
            <p>
              İş bu Çerez ve İzleme Aracı Politikasında zaman zaman değişiklikler yapabiliriz. Yeni politikalar, yayınlandıklarında geçerli olacaktır. Politikalarımızı kabul etmemeniz halinde, tercihlerinizi tarayıcı ayarlarınızdan her zaman değiştirebilirsiniz. Değişiklikler yürürlüğe girdikten sonra Web sitelerimize erişmeye veya hizmetlerimizi kullanmaya devam ederek, değiştirilmiş Çerez ve İzleme Aracı Politikasına bağlı olmayı kabul edersiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}