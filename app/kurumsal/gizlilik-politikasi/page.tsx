"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
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
            alt="robotPOS Gizlilik Politikası"
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
              Gizlilik Politikası
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="prose prose-lg max-w-none pt-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                robotPOS BİLGİSAYAR SİSTEMLERİ SANAYİ VE TİCARET A.Ş.<br />
                KİŞİSEL VERİLERİNİZİN KORUNMASINA İLİŞKİN BİLGİLENDİRME
              </h2>

              <p>
                Kişisel verilerin işlenmesinde başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerinin korunmasını amaçlayan 7 Nisan 2016 tarihli ve 29677 Sayılı Resmî Gazete'de yayımlanan 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")'nun "Veri Sorumlusunun Aydınlatma Yükümlülüğü" başlıklı 10. maddesi ile 10 Mart 2018 tarih ve 30356 sayılı Resmi Gazete'de yayımlanan Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca işbu Aydınlatma Metni ile veri sorumlusu sıfatıyla robotPOS Bilgisayar Sistemleri Sanayi ve Ticaret A.Ş. ("robotPOS" veya "Şirket") olarak işlenen kişisel verileriniz hakkında sizleri bilgilendirmeyi hedeflemekteyiz.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">A- FİZİKSEL ZİYARETÇİLERİMİZ</h3>
              <h4 className="text-lg font-semibold mb-4">İŞLENEN KİŞİSEL VERİLER</h4>
              <p>robotPOS yerleşkesini ziyaret etmeniz halinde aşağıdaki kişisel verileriniz işlenmektedir;</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fiziksel Mekân Güvenliğinin Temini: Görüntü Kaydı Alan CCTV Kayıtları.</li>
                <li>İşlem Güvenliği Bilgileriniz: IP adresi bilgileri, internet sitesi giriş çıkış bilgileri, Log Kayıtları.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">B- MÜŞTERİLERİMİZ</h3>
              <h4 className="text-lg font-semibold mb-4">İŞLENEN KİŞİSEL VERİLER</h4>
              <p>robotPOS ile ilişkiniz kapsamında aşağıdaki kişisel verileriniz işlenmektedir;</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kimlik Bilgileriniz: Ad Soyadı, TCKN, uyruk, Pasaport Numarası, Doğum Yeri, Doğum Tarihi, Cinsiyet Bilgisi, İmza.</li>
                <li>İletişim Bilgileriniz: Adres Bilgisi, E-Posta, Telefon Numarası.</li>
                <li>Finansal Bilgileriniz: Banka, Hesap ve Kart Bilgileri, Fatura ve Borç Bilgisi</li>
                <li>Risk Yönetimi Bilgileriniz: Ticari, Teknik, İdari Risklerin Yönetilmesi İçin İşlenen Bilgiler</li>
                <li>Fiziksel Mekân Güvenliğine İlişkin Bilgileriniz: CCTV Kayıtları.</li>
                <li>Görsel ve İşitsel Kayıtlara İlişkin Bilgileriniz: Fotoğraf, Video Kayıtları.</li>
                <li>Mesleki Deneyim Bilgileriniz: Meslek Bilgisi.</li>
                <li>Müşteri İşlem Bilgileriniz: Talep ve Şikâyet Bilgisi Sipariş Bilgisi, fatura, senet, çek bilgileri</li>
                <li>İşlem Güvenliği Bilgileriniz: IP adresi bilgileri, internet sitesi giriş çıkış bilgileri. Kullanıcı Adları, Şifreler, Log Kayıtları</li>
                <li>Pazarlamaya İlişkin Bilgileriniz: Anket ve Kampanya Çalışmasıyla Elde Edilen Bilgiler.</li>
                <li>Hukuki İşlem Bilgileriniz: Adli Makamlarla Yazışmalardaki Bilgiler, Dava Dosyasındaki Bilgiler.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">C- TEDARİKÇİLERİMİZ/ İŞ ORTAKLARIMIZ</h3>
              <h4 className="text-lg font-semibold mb-4">İŞLENEN KİŞİSEL VERİLER</h4>
              <p>robotPOS ile ilişkiniz kapsamında yetkililerinizin ve/veya çalışanlarınızın aşağıdaki kişisel verileri işlenmektedir;</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kimlik Bilgileriniz: Ad Soyadı, TCKN/VKN, İmza.</li>
                <li>İletişim Bilgileriniz: Adres Bilgisi, E-Posta, Telefon Numarası.</li>
                <li>Finans Bilgileriniz: Banka ve Hesap Bilgileri, Fatura Bilgisi.</li>
                <li>Fiziksel Mekân Güvenliğine İlişkin Bilgileriniz: CCTV Kayıtları.</li>
                <li>Hukuki İşlem Bilgileriniz: Adli Makamlarla Yazışmalardaki Bilgiler, Dava Dosyasındaki Bilgiler.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">D. KİŞİSEL VERİLERİNİZİN KORUNMASINA YÖNELİK HAKLARINIZ</h3>
              <p>Bu Aydınlatma Metni'nin "İletişim" bölümünde yer alan yöntemlerle Şirketimize başvurarak,</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,</li>
                <li>KVKK'da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
                <li>Yukarıda belirtilen düzeltme, silinme ve yok edilme şeklindeki haklarınız uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                <li>İşlenen kişisel verilerinizin münhasıran otomatik sistemler ile analiz edilmesi sureti ile aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
                <li>Kişisel verilerinizin ilgili mevzuata aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararınızın giderilmesini talep etme haklarına sahipsiniz.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">E. ÇAĞRI MERKEZİ ARACILIĞIYLA İLETİŞİME GEÇİLMESİ</h3>
              <p>
                robotPOS ile ilişkiniz kapsamında kimlik bilgileriniz, iletişim bilgileriniz ve konuşma esnasında bizimle paylaşmanız halinde diğer kişisel verileriniz sizlere doğru hitap edilebilmesi, talep, şikâyet takibinin yapılması ve cevaplandırılması, hizmet içeriklerimiz ile ilgili bilgi aktarımının gerçekleştirilmesi, hukuk işlerinin takibi ve yürütülmesi amacıyla işlenmekte saklanmaktadır.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">F. HAK VE TALEPLERİNİZ İÇİN İLETİŞİM</h3>
              <p>
                KVKK'nın 11. maddesi gereğince kişisel verilerinize ilişkin yasal haklarınız kapsamındaki taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'de belirtilen şartlara uygun düzenlenmiş dilekçeyle Aydınevler Mah. Durak Sokak No:19 Maltepe/İstanbul adresine kimlik tespiti yapılmak suretiyle bizzat elden iletebilir ya da noter kanalıyla ulaştırabilirsiniz. Bunun yanı sıra, robotPOS@hs01.kep.tr kayıtlı elektronik posta (KEP) adresine, güvenli elektronik imza ve mobil imza ya da tarafınızca robotPOS'a daha önce bildirilen ve tarafımızca teyit edilmiş olan robotPOS'ta bulunan sistemimizdeki elektronik posta adresini kullanmak suretiyle info@robotPOS.com elektronik posta adresine iletebilirsiniz.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">G. AYDINLATMA METNİ HAKKINDA</h3>
              <p>
                Bu Aydınlatma Metni robotPOS tarafından yayımlandığı tarih itibariyle geçerli olacaktır. robotPOS, bu Aydınlatma Metni'nde, gerekli olduğu takdirde, her zaman değişiklik yapabilir. robotPOS tarafından yapılacak değişiklikler, Aydınlatma Metni'nin yayımlanmasıyla birlikte geçerlilik kazanır.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}