const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Değiştirilecek dosyaların listesi
const filesToProcess = [
  'app/urunler/yazilim-urunleri/satis-noktasi-pos/page.tsx',
  'app/urunler/yazilim-urunleri/sadakat-ve-kazanc-arttirici-cozumler/page.tsx',
  'app/urunler/yazilim-urunleri/raporlama-ve-analiz/page.tsx',
  'app/urunler/yazilim-urunleri/is-verimliligi/page.tsx',
  'app/urunler/yazilim-urunleri/entegrasyonlar/page.tsx',
  'app/urunler/donanim-urunleri/self-servis-kiosk/page.tsx',
  'app/urunler/donanim-urunleri/okc-urunleri/page.tsx',
  'app/urunler/donanim-urunleri/dokunmatik-terminal/page.tsx',
  'app/urunler/donanim-urunleri/mobil-terminaller/page.tsx',
  'app/robotpos-cozum-uretir/cozumler/page.tsx',
  'app/robotpos-cozum-uretir/qr-menu-siparis/page.tsx',
  'app/robotpos-cozum-uretir/kampanya-yonetimi/page.tsx',
  'app/kurumsal/kariyer/page.tsx',
  'app/hakkimizda/page.tsx',
  'app/admin/form-verileri/page.tsx',
  'app/[slug]/page.tsx',
  'app/blog/[slug]/page.tsx'
];

async function processFile(filePath) {
  try {
    // Dosyanın tam yolunu oluştur
    const fullPath = path.join(process.cwd(), filePath);
    
    // Dosyayı oku
    let content = await readFileAsync(fullPath, 'utf8');
    
    // Link import'unu kaldır
    content = content.replace(/import Link from ["']next\/link["'];?\n?/g, '');
    
    // Link bileşenlerini <a> etiketleriyle değiştir
    content = content.replace(/<Link\s+href=["']([^"']+)["'](.*?)>/g, '<a href="$1"$2>');
    content = content.replace(/<\/Link>/g, '</a>');
    
    // Değiştirilmiş içeriği yaz
    await writeFileAsync(fullPath, content, 'utf8');
    
    console.log(`✅ ${filePath} dosyası başarıyla güncellendi.`);
  } catch (error) {
    console.error(`❌ ${filePath} dosyası güncellenirken hata oluştu:`, error);
  }
}

async function main() {
  console.log('Link bileşenlerini değiştirme işlemi başlatılıyor...');
  
  // Tüm dosyaları işle
  for (const file of filesToProcess) {
    await processFile(file);
  }
  
  console.log('İşlem tamamlandı!');
}

main().catch(console.error);
