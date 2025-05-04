import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Instagram görsellerinin bulunduğu klasör
    const instagramImagesDir = path.join(process.cwd(), 'public', 'images', 'instagram_images');
    
    // Klasördeki tüm dosyaları oku
    const files = fs.readdirSync(instagramImagesDir);
    
    // Sadece görsel dosyalarını filtrele
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });
    
    return NextResponse.json({ 
      images: imageFiles,
      count: imageFiles.length 
    });
  } catch (error) {
    console.error('Instagram görsellerini okurken hata:', error);
    return NextResponse.json(
      { error: 'Görsel dosyaları okunamadı' }, 
      { status: 500 }
    );
  }
}
