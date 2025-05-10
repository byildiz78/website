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

// Tüm referansları getir
export async function GET(request: NextRequest) {
  try {
    // Yetkilendirme kontrolü
    const authCheck = await checkAuth(request);
    if (!authCheck.authorized) {
      return NextResponse.json({ error: authCheck.message }, { status: 401 });
    }

    // Dosyayı oku
    const fileContent = fs.readFileSync(referanslarFilePath, 'utf8');
    const referanslar = JSON.parse(fileContent);

    return NextResponse.json({ referanslar }, { status: 200 });
  } catch (error) {
    console.error('Referanslar getirilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Referanslar getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// Yeni referans ekle
export async function POST(request: NextRequest) {
  try {
    // Yetkilendirme kontrolü
    const authCheck = await checkAuth(request);
    if (!authCheck.authorized) {
      return NextResponse.json({ error: authCheck.message }, { status: 401 });
    }

    // İstek gövdesini al
    const body = await request.json();
    const newReferans: Referans = body;

    // Gerekli alanların kontrolü
    if (!newReferans.adi || !newReferans.referans_tipi || !newReferans.logo_yolu) {
      return NextResponse.json(
        { error: 'Referans adı, tipi ve logo yolu zorunludur' },
        { status: 400 }
      );
    }

    // Referans tipine göre zorunlu alanları kontrol et
    if (newReferans.referans_tipi === 'Zincir İşletmeler' && !newReferans.sube_sayisi) {
      return NextResponse.json(
        { error: 'Zincir işletmeler için şube sayısı zorunludur' },
        { status: 400 }
      );
    }

    if ((newReferans.referans_tipi === 'Özel Projeler' || newReferans.referans_tipi === 'Tekil İşletmeler') && !newReferans.sehir) {
      return NextResponse.json(
        { error: 'Özel projeler ve tekil işletmeler için şehir bilgisi zorunludur' },
        { status: 400 }
      );
    }

    // Mevcut referansları oku
    const fileContent = fs.readFileSync(referanslarFilePath, 'utf8');
    const referanslar: Referans[] = JSON.parse(fileContent);

    // Aynı isimde referans var mı kontrol et
    const existingReferans = referanslar.find(r => r.adi === newReferans.adi);
    if (existingReferans) {
      return NextResponse.json(
        { error: 'Bu isimde bir referans zaten mevcut' },
        { status: 400 }
      );
    }

    // Yeni referansı ekle
    referanslar.push(newReferans);

    // Dosyaya kaydet
    fs.writeFileSync(referanslarFilePath, JSON.stringify(referanslar, null, 2), 'utf8');

    return NextResponse.json(
      { message: 'Referans başarıyla eklendi', referans: newReferans },
      { status: 201 }
    );
  } catch (error) {
    console.error('Referans eklenirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Referans eklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// Referansı güncelle
export async function PUT(request: NextRequest) {
  try {
    // Yetkilendirme kontrolü
    const authCheck = await checkAuth(request);
    if (!authCheck.authorized) {
      return NextResponse.json({ error: authCheck.message }, { status: 401 });
    }

    // İstek gövdesini al
    const body = await request.json();
    const { originalName, updatedReferans } = body;

    if (!originalName || !updatedReferans) {
      return NextResponse.json(
        { error: 'Orijinal isim ve güncellenmiş referans bilgileri gereklidir' },
        { status: 400 }
      );
    }

    // Gerekli alanların kontrolü
    if (!updatedReferans.adi || !updatedReferans.referans_tipi || !updatedReferans.logo_yolu) {
      return NextResponse.json(
        { error: 'Referans adı, tipi ve logo yolu zorunludur' },
        { status: 400 }
      );
    }

    // Referans tipine göre zorunlu alanları kontrol et
    if (updatedReferans.referans_tipi === 'Zincir İşletmeler' && !updatedReferans.sube_sayisi) {
      return NextResponse.json(
        { error: 'Zincir işletmeler için şube sayısı zorunludur' },
        { status: 400 }
      );
    }

    if ((updatedReferans.referans_tipi === 'Özel Projeler' || updatedReferans.referans_tipi === 'Tekil İşletmeler') && !updatedReferans.sehir) {
      return NextResponse.json(
        { error: 'Özel projeler ve tekil işletmeler için şehir bilgisi zorunludur' },
        { status: 400 }
      );
    }

    // Mevcut referansları oku
    const fileContent = fs.readFileSync(referanslarFilePath, 'utf8');
    const referanslar: Referans[] = JSON.parse(fileContent);

    // Orijinal referansı bul
    const referansIndex = referanslar.findIndex(r => r.adi === originalName);
    if (referansIndex === -1) {
      return NextResponse.json(
        { error: 'Güncellenecek referans bulunamadı' },
        { status: 404 }
      );
    }

    // İsim değiştirilmişse, yeni isimde başka bir referans var mı kontrol et
    if (originalName !== updatedReferans.adi) {
      const existingReferans = referanslar.find(r => r.adi === updatedReferans.adi);
      if (existingReferans) {
        return NextResponse.json(
          { error: 'Bu isimde bir referans zaten mevcut' },
          { status: 400 }
        );
      }
    }

    // Referansı güncelle
    referanslar[referansIndex] = updatedReferans;

    // Dosyaya kaydet
    fs.writeFileSync(referanslarFilePath, JSON.stringify(referanslar, null, 2), 'utf8');

    return NextResponse.json(
      { message: 'Referans başarıyla güncellendi', referans: updatedReferans },
      { status: 200 }
    );
  } catch (error) {
    console.error('Referans güncellenirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Referans güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
