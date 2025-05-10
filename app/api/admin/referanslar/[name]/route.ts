import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { verifyToken } from '@/lib/auth';

// Referanslar JSON dosyasının yolu
const referanslarFilePath = path.join(process.cwd(), 'public', 'files', 'referanslar.json');

// Referans tipini tanımla
interface Referans {
  referans_tipi: string;
  adi: string;
  logo_yolu: string;
  sube_sayisi?: number;
  sehir?: string;
}

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

// Belirli bir referansı getir
export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    // Yetkilendirme kontrolü
    const authCheck = await checkAuth(request);
    if (!authCheck.authorized) {
      return NextResponse.json({ error: authCheck.message }, { status: 401 });
    }

    const decodedName = decodeURIComponent(params.name);

    // Dosyayı oku
    const fileContent = fs.readFileSync(referanslarFilePath, 'utf8');
    const referanslar: Referans[] = JSON.parse(fileContent);

    // Referansı bul
    const referans = referanslar.find(r => r.adi === decodedName);
    if (!referans) {
      return NextResponse.json(
        { error: 'Referans bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json({ referans }, { status: 200 });
  } catch (error) {
    console.error('Referans getirilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Referans getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// Referansı sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    // Yetkilendirme kontrolü
    const authCheck = await checkAuth(request);
    if (!authCheck.authorized) {
      return NextResponse.json({ error: authCheck.message }, { status: 401 });
    }

    const decodedName = decodeURIComponent(params.name);

    // Dosyayı oku
    const fileContent = fs.readFileSync(referanslarFilePath, 'utf8');
    const referanslar: Referans[] = JSON.parse(fileContent);

    // Silinecek referansı bul
    const referansIndex = referanslar.findIndex(r => r.adi === decodedName);
    if (referansIndex === -1) {
      return NextResponse.json(
        { error: 'Silinecek referans bulunamadı' },
        { status: 404 }
      );
    }

    // Referansı diziden çıkar
    const deletedReferans = referanslar.splice(referansIndex, 1)[0];

    // Güncellenmiş diziyi dosyaya kaydet
    fs.writeFileSync(referanslarFilePath, JSON.stringify(referanslar, null, 2), 'utf8');

    return NextResponse.json(
      { message: 'Referans başarıyla silindi', referans: deletedReferans },
      { status: 200 }
    );
  } catch (error) {
    console.error('Referans silinirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Referans silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
