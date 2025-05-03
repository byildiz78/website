import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Girdi doğrulama fonksiyonu
function validateInput(formData: FormData) {
  // Gerekli alanların varlığını kontrol et
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  
  if (!name || !email || !phone) {
    return { valid: false, error: 'İsim, e-posta ve telefon alanları zorunludur.' };
  }
  
  // E-posta formatını kontrol et
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Geçersiz e-posta formatı.' };
  }
  
  // XSS koruması için girdileri temizle
  const message = formData.get('message') as string;
  const sanitizedData = {
    name: sanitizeInput(name),
    email: sanitizeInput(email),
    phone: sanitizeInput(phone),
    message: message ? sanitizeInput(message) : '',
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

// Dosya güvenliği kontrolü
function validateFile(file: File | null) {
  if (!file) return { valid: true };
  
  // Dosya boyutu kontrolü (10MB)
  if (file.size > 10 * 1024 * 1024) {
    return { valid: false, error: 'Dosya boyutu 10MB\'ı aşamaz.' };
  }
  
  // Dosya tipi kontrolü
  const validTypes = ['.pdf', '.doc', '.docx', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (!validTypes.some(type => file.name.toLowerCase().endsWith(type) || file.type.includes(type))) {
    return { valid: false, error: 'Geçersiz dosya formatı. Lütfen PDF, DOC veya DOCX formatında bir dosya yükleyin.' };
  }
  
  return { valid: true };
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Girdi doğrulama
    const validation = validateInput(formData);
    if (!validation.valid) {
      return NextResponse.json({ success: false, error: validation.error }, { status: 400 });
    }
    
    // Doğrulanmış veriyi kullan
    const data = validation.data!;
    
    // CV dosyasını al ve doğrula
    const cvFile = formData.get('cv') as File | null;
    const fileValidation = validateFile(cvFile);
    if (!fileValidation.valid) {
      return NextResponse.json({ success: false, error: fileValidation.error }, { status: 400 });
    }
    
    console.log('Form verileri:', { ...data, cvFile: cvFile?.name });
    
    // CV dosyasını kaydet (eğer varsa)
    let cvFilePath = '';
    let cvFileName = '';
    
    if (cvFile) {
      // Dosya adını güvenli hale getir
      const fileExtension = path.extname(cvFile.name);
      const sanitizedFileName = sanitizeInput(path.basename(cvFile.name, fileExtension));
      cvFileName = `cv_${Date.now()}_${sanitizedFileName}${fileExtension}`;
      
      // CV dosyaları dizinini oluştur (yoksa)
      const cvDir = path.join(process.cwd(), 'public', 'uploads', 'cv');
      if (!fs.existsSync(cvDir)) {
        fs.mkdirSync(cvDir, { recursive: true });
      }
      
      // Dosyayı kaydet
      cvFilePath = path.join(cvDir, cvFileName);
      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      fs.writeFileSync(cvFilePath, buffer);
      
      console.log(`CV dosyası kaydedildi: ${cvFilePath}`);
    }
    
    // Form verilerini bir JSON dosyasına kaydet
    const applicationData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      cvFileName: cvFileName || null,
      date: new Date().toISOString(),
    };
    
    // Başvuru verileri dizinini oluştur (yoksa)
    const applicationsDir = path.join(process.cwd(), 'public', 'form-data', 'career');
    if (!fs.existsSync(applicationsDir)) {
      fs.mkdirSync(applicationsDir, { recursive: true });
    }
    
    // Benzersiz bir dosya adı oluştur
    const fileName = `application_${Date.now()}.json`;
    const filePath = path.join(applicationsDir, fileName);
    
    // Verileri dosyaya yaz
    fs.writeFileSync(filePath, JSON.stringify(applicationData, null, 2));
    
    console.log(`Başvuru verileri kaydedildi: ${filePath}`);
    
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
              <h2>Kariyer Başvurusu</h2>
            </div>
            <div class="content">
              <div class="field">
                <p class="label">İsim:</p>
                <p>${data.name}</p>
              </div>
              <div class="field">
                <p class="label">Telefon:</p>
                <p>${data.phone}</p>
              </div>
              <div class="field">
                <p class="label">E-posta:</p>
                <p>${data.email}</p>
              </div>
              <div class="field">
                <p class="label">Mesaj:</p>
                <p>${data.message || 'Mesaj belirtilmemiş'}</p>
              </div>
              ${cvFileName ? `
              <div class="field">
                <p class="label">CV Dosyası:</p>
                <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.robotpos.com'}/uploads/cv/${cvFileName}">CV Dosyasını İndir</a></p>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Bu e-posta robotPOS web sitesi üzerinden gönderilmiştir.</p>
              <p> robotPOS</p>
            </div>
          </div>
        </body>
        </html>
      `;

      // E-posta gönderme
      console.log('E-posta gönderiliyor...');
      
      // E-posta ekleri
      const attachments = [];
      if (cvFilePath) {
        attachments.push({
          filename: cvFile?.name,
          path: cvFilePath
        });
      }
      
      const mailOptions = {
        from: `"${process.env.SMTP_DISPLAY_NAME || 'RobotPOS Web Sitesi'}" <${process.env.SMTP_USER_NAME}>`,
        to: 'info@robotpos.com',
        subject: 'Kariyer Başvurusu Alındı',
        html: htmlContent,
        replyTo: data.email,
        attachments
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
      message: 'Başvurunuz başarıyla alındı',
      emailSent,
      emailError,
      filePath: `/form-data/career/${fileName}`,
      cvPath: cvFileName ? `/uploads/cv/${cvFileName}` : null
    });
  } catch (error: any) {
    console.error('Başvuru kaydetme hatası:', error);
    return NextResponse.json(
      { error: `Başvurunuz kaydedilirken bir hata oluştu: ${error.message}` },
      { status: 500 }
    );
  }
}
