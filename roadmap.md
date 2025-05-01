# RobotPOS Web Sitesi Yeniden Yapılandırma Planı

## Tamamlanan İşler
- [x] Proje yapısı oluşturuldu
- [x] Temel bileşenler oluşturuldu (Header, Footer, Layout)
- [x] Ana sayfa temel yapısı kuruldu
- [ ] Ürün sayfaları oluşturuldu
- [ ] Referanslar sayfası oluşturuldu
- [ ] Kurumsal sayfalar oluşturuldu
- [ ] SSS sayfası oluşturuldu
- [ ] İletişim sayfası oluşturuldu

### Ana Menü Yapısı

- **Ürünler** (Dropdown menü)
  - Satış Noktası (POS)
  - Stok Maliyet Yönetimi
  - Sadakat ve Kazanç
  - Arttırıcı Çözümler
  - İş verimliliği
  - Raporlama ve Analiz
  - Zincir Mağaza Yönetimi
  - Entegrasyonlar

- **Referanslar**
  - Müşteri referansları ve başarı hikayeleri

- **Müşteri**
  - Müşteri ilişkileri ve destek

- **Haberler**
  - Şirket haberleri ve duyurular

- **SSS**
  - Sıkça sorulan sorular

- **Kurumsal** (Dropdown menü)
  - Hakkımızda
  - Referanslarımız
  - Müşteri Görüşleri
  - Bizden Haberler
  - Restoran Yazılımı Makaleleri
  - Kariyer
  - İletişim

- **İletişim**
  - İletişim bilgileri ve formu

### Ana Ürün Kategorileri

1. **Satış Noktası Yönetimi**
   - Her tip gıda işletmesinde kullanılabilen POS sistemi
   - Cafe ve Restoran Otomasyonu için pratik çözümler

2. **Zincir Mağaza Yönetimi**
   - Birden fazla şubesi bulunan işletmeler için uzaktan yönetim çözümleri

3. **Donanım Ürünleri**
   - 7x24 kullanıma uygun endüstriyel donanım seçenekleri
   - Kesintisiz iş akışı sağlayan çözümler

### Ürün Özellikleri

- Tezgah Satış
- Self Servis
- Sadakat Yönetimi
- Paket Servis
- Stok Yönetimi
- Ön Ödemeli Satış
- Alakart Servis
- Kampanya Yönetimi
- QR menü Sipariş

### Diğer Önemli Bölümler

- **Neden Robotpos?** - Ürün avantajları ve özellikleri
- **Bizim İçin Ne Dediler?** - Müşteri görüşleri ve referanslar
- **En İyi İşletmelerin Tercihi** - Referans müşteriler
- **Rakamlarla Robotpos** - İstatistikler ve başarılar
- **İletişim Bilgileri** - Adres, telefon, e-posta


### Genel Tasarım Prensipleri

- Mevcut marka kimliğini koruyarak modern bir görünüm
- Tutarlı renk paleti (mevcut mavi, beyaz ve kırmızı tonları)
- Daha fazla beyaz alan kullanımı
- Daha modern tipografi
- Daha büyük ve yüksek kaliteli görseller
- Mobil öncelikli tasarım yaklaşımı
- Erişilebilirlik standartlarına uygunluk (WCAG 2.1 AA)

### Özel İyileştirmeler

- **Header**: Daha modern ve yapışkan (sticky) bir navigasyon
- **Hero Bölümü**: Daha etkileyici, tam genişlikte bir slider
- **Ürün Kartları**: Daha modern, hover efektleri ile zenginleştirilmiş kartlar
- **Müşteri Görüşleri**: Daha şık bir carousel/slider tasarımı
- **Referanslar**: Grid tabanlı, filtrelenebilir referans galerisi
- **İstatistikler**: Animasyonlu sayaçlar ve daha görsel bir sunum
- **Footer**: Daha organize ve kullanıcı dostu bir yapı

## Sayfa Yapısı ve Bileşenler

### Sayfa Yapısı

1. **Ana Sayfa**
   - Hero Slider
   - Ürün Kategorileri
   - Neden Robotpos?
   - Özellikler Grid'i
   - Müşteri Görüşleri
   - Referanslar
   - İstatistikler
   - İletişim CTA

2. **Ürünler Sayfaları**
   - Her ürün kategorisi için detaylı sayfa
   - Özellikler listesi
   - Fayda açıklamaları
   - Görsel galeri
   - Demo talep formu

3. **Referanslar Sayfası**
   - Filtrelenebilir referans galerisi
   - Başarı hikayeleri
   - Müşteri görüşleri

4. **Kurumsal Sayfalar**
   - Hakkımızda
   - Ekip
   - Kariyer
   - Blog/Haberler

5. **SSS Sayfası**
   - Kategorilere ayrılmış sıkça sorulan sorular
   - Arama fonksiyonu

6. **İletişim Sayfası**
   - İletişim formu
   - Harita
   - İletişim bilgileri

### Ortak Bileşenler

1. **Header**
   - Logo
   - Ana Menü
   - Mobil Menü
   - Dil Seçimi (gelecekte eklenebilir)
   - İletişim Butonu

2. **Footer**
   - Menü Bağlantıları
   - İletişim Bilgileri
   - Sosyal Medya Bağlantıları
   - Telif Hakkı Bilgisi

3. **Ürün Kartı**
   - Görsel
   - Başlık
   - Kısa Açıklama
   - CTA Butonu

4. **Müşteri Görüşü Kartı**
   - Alıntı
   - Müşteri Fotoğrafı
   - Müşteri Adı ve Pozisyonu
   - Şirket Adı/Logosu

5. **Referans Logosu**
   - Şirket Logosu
   - Şube Sayısı
   - Hover durumunda kısa bilgi

6. **CTA Bölümü**
   - Başlık
   - Alt Başlık
   - Aksiyon Butonu

7. **İstatistik Kartı**
   - Sayı
   - Başlık
   - İkon