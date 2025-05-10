import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { verifyToken } from '@/lib/auth';
import path from 'path';

interface MusteriGorusu {
  baslik: string;
  icerik: string;
  resim: string;
}

// Müşteri görüşlerini JSON dosyasından oku
async function getMusteriGorusleri(): Promise<MusteriGorusu[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'files', 'musteri-gorusleri.json');
    const data = await readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Müşteri görüşleri okunamadı:', error);
    return [];
  }
}

// Müşteri görüşlerini JSON dosyasına yaz
async function saveMusteriGorusleri(musteriGorusleri: MusteriGorusu[]): Promise<void> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'files', 'musteri-gorusleri.json');
    await writeFile(filePath, JSON.stringify(musteriGorusleri, null, 2), 'utf8');
  } catch (error) {
    console.error('Müşteri görüşleri kaydedilemedi:', error);
    throw new Error('Müşteri görüşleri kaydedilemedi');
  }
}

// GET: Tüm müşteri görüşlerini getir
export async function GET(request: NextRequest) {
  try {
    // Token doğrulama
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Yetkilendirme başarısız' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    try {
      await verifyToken(token);
    } catch (error) {
      return NextResponse.json({ error: 'Geçersiz token' }, { status: 401 });
    }

    const musteriGorusleri = await getMusteriGorusleri();
    return NextResponse.json(musteriGorusleri);
  } catch (error) {
    console.error('Müşteri görüşleri getirilirken hata:', error);
    return NextResponse.json({ error: 'Müşteri görüşleri getirilirken bir hata oluştu' }, { status: 500 });
  }
}

// POST: Yeni müşteri görüşü ekle
export async function POST(request: NextRequest) {
  try {
    // Token doğrulama
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Yetkilendirme başarısız' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    try {
      await verifyToken(token);
    } catch (error) {
      return NextResponse.json({ error: 'Geçersiz token' }, { status: 401 });
    }

    const body = await request.json();
    
    // Gerekli alanların kontrolü
    if (!body.baslik || !body.icerik) {
      return NextResponse.json({ error: 'Başlık ve içerik alanları zorunludur' }, { status: 400 });
    }

    const yeniGorus: MusteriGorusu = {
      baslik: body.baslik,
      icerik: body.icerik,
      resim: body.resim || ''
    };

    // Mevcut müşteri görüşlerini al
    const musteriGorusleri = await getMusteriGorusleri();
    
    // Aynı başlıkta bir görüş var mı kontrol et
    const existingIndex = musteriGorusleri.findIndex(gorus => gorus.baslik === yeniGorus.baslik);
    if (existingIndex !== -1) {
      return NextResponse.json({ error: 'Bu başlıkta bir müşteri görüşü zaten mevcut' }, { status: 400 });
    }

    // Yeni görüşü ekle
    musteriGorusleri.push(yeniGorus);
    
    // Değişiklikleri kaydet
    await saveMusteriGorusleri(musteriGorusleri);
    
    return NextResponse.json({ message: 'Müşteri görüşü başarıyla eklendi', gorus: yeniGorus });
  } catch (error) {
    console.error('Müşteri görüşü eklenirken hata:', error);
    return NextResponse.json({ error: 'Müşteri görüşü eklenirken bir hata oluştu' }, { status: 500 });
  }
}

// PUT: Müşteri görüşünü güncelle
export async function PUT(request: NextRequest) {
  try {
    // Token doğrulama
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Yetkilendirme başarısız' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    try {
      await verifyToken(token);
    } catch (error) {
      return NextResponse.json({ error: 'Geçersiz token' }, { status: 401 });
    }

    const body = await request.json();
    
    // Gerekli alanların kontrolü
    if (!body.baslik || !body.icerik) {
      return NextResponse.json({ error: 'Başlık ve içerik alanları zorunludur' }, { status: 400 });
    }

    if (!body.originalBaslik) {
      return NextResponse.json({ error: 'Orijinal başlık bilgisi eksik' }, { status: 400 });
    }

    const guncelGorus: MusteriGorusu = {
      baslik: body.baslik,
      icerik: body.icerik,
      resim: body.resim || ''
    };

    // Mevcut müşteri görüşlerini al
    const musteriGorusleri = await getMusteriGorusleri();
    
    // Güncellenecek görüşü bul
    const existingIndex = musteriGorusleri.findIndex(gorus => gorus.baslik === body.originalBaslik);
    if (existingIndex === -1) {
      return NextResponse.json({ error: 'Güncellenecek müşteri görüşü bulunamadı' }, { status: 404 });
    }

    // Başlık değiştiyse ve yeni başlık zaten varsa hata ver
    if (body.baslik !== body.originalBaslik) {
      const duplicateIndex = musteriGorusleri.findIndex(gorus => gorus.baslik === body.baslik);
      if (duplicateIndex !== -1 && duplicateIndex !== existingIndex) {
        return NextResponse.json({ error: 'Bu başlıkta bir müşteri görüşü zaten mevcut' }, { status: 400 });
      }
    }

    // Görüşü güncelle
    musteriGorusleri[existingIndex] = guncelGorus;
    
    // Değişiklikleri kaydet
    await saveMusteriGorusleri(musteriGorusleri);
    
    return NextResponse.json({ message: 'Müşteri görüşü başarıyla güncellendi', gorus: guncelGorus });
  } catch (error) {
    console.error('Müşteri görüşü güncellenirken hata:', error);
    return NextResponse.json({ error: 'Müşteri görüşü güncellenirken bir hata oluştu' }, { status: 500 });
  }
}
