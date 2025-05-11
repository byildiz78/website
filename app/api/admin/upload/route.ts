import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Token doğrulama
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Yetkilendirme başarısız' }, { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    const isValid = verifyToken(token);
    
    if (!isValid) {
      return NextResponse.json({ error: 'Geçersiz token' }, { status: 401 });
    }

    // FormData'dan dosyayı al
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 400 });
    }

    // Dosya türünü kontrol et
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Geçersiz dosya türü. Sadece JPEG, PNG, GIF ve WEBP dosyaları kabul edilir.' }, { status: 400 });
    }

    // Dosya boyutunu kontrol et (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'Dosya boyutu çok büyük. Maksimum 5MB olabilir.' }, { status: 400 });
    }

    // Dosya adını güvenli hale getir ve benzersiz yap
    const originalName = file.name.replace(/[^a-zA-Z0-9_.-]/g, '_');
    const timestamp = Date.now();
    const extension = originalName.split('.').pop();
    const fileName = `${originalName.split('.')[0]}_${timestamp}.${extension}`;

    // Klasör yolunu oluştur
    const uploadDir = join(process.cwd(), 'public', 'images', 'blog-images');
    
    // Klasörün var olup olmadığını kontrol et, yoksa oluştur
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }
    
    // Dosya yolunu oluştur
    const filePath = join(uploadDir, fileName);
    
    // Dosyayı kaydet
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);
    
    // Başarılı yanıt döndür
    const publicPath = `/images/blog-images/${fileName}`;
    return NextResponse.json({ 
      success: true, 
      filePath: publicPath,
      fileName: fileName
    });
    
  } catch (error) {
    console.error('Dosya yükleme hatası:', error);
    return NextResponse.json({ error: 'Dosya yüklenirken bir hata oluştu' }, { status: 500 });
  }
}

// Maksimum dosya boyutu için route segment config
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
