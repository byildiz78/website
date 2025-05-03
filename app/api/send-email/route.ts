import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Girdi doğrulama fonksiyonu
function validateInput(data: any) {
  // Gerekli alanların varlığını kontrol et
  if (!data.name || !data.email) {
    return { valid: false, error: 'İsim ve e-posta alanları zorunludur.' };
  }
  
  // E-posta formatını kontrol et
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: 'Geçersiz e-posta formatı.' };
  }
  
  // XSS koruması için girdileri temizle
  const sanitizedData = {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    phone: data.phone ? sanitizeInput(data.phone) : '',
    company: data.company ? sanitizeInput(data.company) : '',
    city: data.city ? sanitizeInput(data.city) : '',
    message: data.message ? sanitizeInput(data.message) : '',
  };
  
  return { valid: true, data: sanitizedData };
}

// XSS koruması için basit bir temizleme fonksiyonu
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  try {
    // İstek gövdesini al
    const body = await req.json();
    
    // Girdi doğrulama
    const validation = validateInput(body);
    if (!validation.valid) {
      return NextResponse.json({ success: false, error: validation.error }, { status: 400 });
    }
    
    // Doğrulanmış veriyi kullan
    const data = validation.data!;
    
    console.log('Form verileri:', { ...data, message: data.message || 'Mesaj belirtilmemiş' });
    
    // Form verileri dizinini oluştur (yoksa)
    const formDataDir = path.join(process.cwd(), 'public', 'form-data');
    if (!fs.existsSync(formDataDir)) {
      fs.mkdirSync(formDataDir, { recursive: true });
    }
    
    // Benzersiz bir dosya adı oluştur
    const fileName = `form_${Date.now()}.json`;
    const filePath = path.join(formDataDir, fileName);
    
    // Verileri dosyaya yaz
    fs.writeFileSync(filePath, JSON.stringify({ ...data, date: new Date().toISOString() }, null, 2));
    
    console.log(`Form verileri kaydedildi: ${filePath}`);
    
    // E-posta göndermeyi dene
    let emailSent = false;
    let emailError = null;
    
    try {
      // E-posta göndermek için transporter oluştur
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT || 587),
        secure: false, // TLS için
        auth: {
          user: process.env.SMTP_USER_NAME,
          pass: process.env.SMTP_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      // HTML e-posta şablonu
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1e40af; color: white; padding: 15px; text-align: center; }
            .content { padding: 20px; border: 1px solid #ddd; border-top: none; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e40af; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Web Sitesi Form Bildirimi</h2>
            </div>
            <div class="content">
              <div class="field">
                <p class="label">İsim:</p>
                <p>${data.name}</p>
              </div>
              <div class="field">
                <p class="label">Firma:</p>
                <p>${data.company || 'Belirtilmemiş'}</p>
              </div>
              <div class="field">
                <p class="label">Telefon:</p>
                <p>${data.phone || 'Belirtilmemiş'}</p>
              </div>
              <div class="field">
                <p class="label">E-posta:</p>
                <p>${data.email}</p>
              </div>
              <div class="field">
                <p class="label">Şehir:</p>
                <p>${data.city || 'Belirtilmemiş'}</p>
              </div>
              <div class="field">
                <p class="label">Mesaj:</p>
                <p>${data.message || 'Mesaj belirtilmemiş'}</p>
              </div>
            </div>
            <div class="footer">
              <p>Bu e-posta robotPOS web sitesi üzerinden gönderilmiştir.</p>
              <p> ${new Date().getFullYear()} robotPOS</p>
            </div>
          </div>
        </body>
        </html>
      `;

      // E-posta gönderme
      console.log('E-posta gönderiliyor...');
      const mailOptions = {
        from: `"${process.env.SMTP_DISPLAY_NAME || 'RobotPOS Web Sitesi'}" <${process.env.SMTP_USER_NAME}>`,
        to: 'info@robotpos.com',
        subject: 'Web Sitesi Formu Dolduruldu',
        html: htmlContent,
        replyTo: data.email,
      };
      
      console.log('Mail seçenekleri:', mailOptions);
      
      const info = await transporter.sendMail(mailOptions);
      console.log('E-posta gönderildi:', info.response);
      emailSent = true;
    } catch (mailError: any) {
      console.error('E-posta gönderme hatası:', mailError);
      emailError = mailError.message;
      // E-posta gönderilemese bile devam et, çünkü veriler zaten kaydedildi
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form verileri başarıyla kaydedildi',
      emailSent,
      emailError,
      filePath: `/form-data/${fileName}`
    });
  } catch (error: any) {
    console.error('Form verilerini kaydetme hatası:', error);
    return NextResponse.json(
      { error: `Form verilerini kaydederken bir hata oluştu: ${error.message}` },
      { status: 500 }
    );
  }
}
