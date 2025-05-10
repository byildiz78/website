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

// GET: Belirli bir müşteri görüşünü getir
export async function GET(
  request: NextRequest,
  { params }: { params: { baslik: string } }
) {
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

    const baslik = decodeURIComponent(params.baslik);
    const musteriGorusleri = await getMusteriGorusleri();
    
    const gorus = musteriGorusleri.find(g => g.baslik === baslik);
    if (!gorus) {
      return NextResponse.json({ error: 'Müşteri görüşü bulunamadı' }, { status: 404 });
    }
    
    return NextResponse.json(gorus);
  } catch (error) {
    console.error('Müşteri görüşü getirilirken hata:', error);
    return NextResponse.json({ error: 'Müşteri görüşü getirilirken bir hata oluştu' }, { status: 500 });
  }
}

// DELETE: Müşteri görüşünü sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: { baslik: string } }
) {
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

    const baslik = decodeURIComponent(params.baslik);
    let musteriGorusleri = await getMusteriGorusleri();
    
    const initialLength = musteriGorusleri.length;
    musteriGorusleri = musteriGorusleri.filter(gorus => gorus.baslik !== baslik);
    
    if (musteriGorusleri.length === initialLength) {
      return NextResponse.json({ error: 'Silinecek müşteri görüşü bulunamadı' }, { status: 404 });
    }
    
    // Değişiklikleri kaydet
    await saveMusteriGorusleri(musteriGorusleri);
    
    return NextResponse.json({ message: 'Müşteri görüşü başarıyla silindi' });
  } catch (error) {
    console.error('Müşteri görüşü silinirken hata:', error);
    return NextResponse.json({ error: 'Müşteri görüşü silinirken bir hata oluştu' }, { status: 500 });
  }
}
