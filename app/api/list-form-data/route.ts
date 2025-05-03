import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    // Form verileri dizini
    const formDataDir = path.join(process.cwd(), 'public', 'form-data');
    
    // Dizin yoksa oluştur
    if (!fs.existsSync(formDataDir)) {
      fs.mkdirSync(formDataDir, { recursive: true });
      return NextResponse.json({ formEntries: [] });
    }
    
    // Dizindeki tüm JSON dosyalarını oku
    const files = fs.readdirSync(formDataDir).filter(file => file.endsWith('.json'));
    
    // Her dosyadan form verilerini oku
    const formEntries = files.map(file => {
      const filePath = path.join(formDataDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const formData = JSON.parse(fileContent);
      
      return {
        ...formData,
        filePath: `/form-data/${file}`
      };
    });
    
    return NextResponse.json({ formEntries });
  } catch (error: any) {
    console.error('Form verilerini listeleme hatası:', error);
    return NextResponse.json(
      { error: `Form verilerini listelerken bir hata oluştu: ${error.message}` },
      { status: 500 }
    );
  }
}
