import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { verifyToken } from '@/lib/auth';

// Logo yükleme için hedef dizin
const uploadDir = path.join(process.cwd(), 'public', 'images', 'reflogo');

// Yetkilendirme kontrolü
async function checkAuth(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { authorized: false, message: 'Yetkilendirme başlığı eksik veya geçersiz' };
  }

  const token = authHeader.split(' ')[1];
  const verified = await verifyToken(token);
  
  if (!verified) {
    return { authorized: false, message: 'Geçersiz veya süresi dolmuş token' };
  }

  return { authorized: true };
}

// Dosya adını güvenli hale getir
function sanitizeFilename(filename: string): string {
  // Dosya adından özel karakterleri ve boşlukları kaldır
  return filename
    .replace(/[^a-zA-Z0-9_.-]/g, '_')
    .replace(/\s+/g, '_')
    .toLowerCase();
}

// Dosya uzantısını kontrol et
function isAllowedFileType(filename: string): boolean {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
  const ext = path.extname(filename).toLowerCase();
  return allowedExtensions.includes(ext);
}

export async function POST(request: NextRequest) {
  try {
    // Yetkilendirme kontrolü
    const authCheck = await checkAuth(request);
    if (!authCheck.authorized) {
      return NextResponse.json({ error: authCheck.message }, { status: 401 });
    }

    // FormData olarak gönderilen dosyayı al
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 400 });
    }

    // Dosya boyutunu kontrol et (5MB maksimum)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'Dosya boyutu çok büyük. Maksimum 5MB olmalıdır.' },
        { status: 400 }
      );
    }

    // Dosya tipini kontrol et
    if (!isAllowedFileType(file.name)) {
      return NextResponse.json(
        { error: 'Desteklenmeyen dosya formatı. Sadece JPG, PNG, GIF, SVG ve WEBP formatları desteklenmektedir.' },
        { status: 400 }
      );
    }

    // Yükleme dizininin varlığını kontrol et, yoksa oluştur
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Dosya adını güvenli hale getir ve benzersiz bir isim oluştur
    const timestamp = Date.now();
    const sanitizedFilename = sanitizeFilename(file.name);
    const uniqueFilename = `${timestamp}_${sanitizedFilename}`;
    const filePath = path.join(uploadDir, uniqueFilename);

    // Dosyayı oku ve kaydet
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, new Uint8Array(bytes));

    // Başarılı yanıt döndür
    const relativePath = `images/reflogo/${uniqueFilename}`;
    return NextResponse.json(
      { 
        message: 'Dosya başarıyla yüklendi',
        filePath: relativePath
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Dosya yüklenirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Dosya yüklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
