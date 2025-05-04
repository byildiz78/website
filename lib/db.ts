import { join } from 'path';
import { Low } from 'lowdb';
import { BlogPost } from '@/types/blog';
import fs from 'fs';
import path from 'path';

// JSON dosyasının yolunu belirle
const file = join(process.cwd(), 'public', 'files', 'blog_posts.json');
console.log('JSON dosya yolu:', file);

// Özel bir adapter oluştur
class CustomJSONAdapter<T> {
  private file: string;

  constructor(file: string) {
    this.file = file;
  }

  async read(): Promise<T | null> {
    try {
      console.log('Dosya okunuyor:', this.file);
      
      // Dosya var mı kontrol et
      if (!fs.existsSync(this.file)) {
        console.error('Dosya bulunamadı:', this.file);
        return null;
      }

      // Dosyayı oku
      const data = await fs.promises.readFile(this.file, 'utf-8');
      console.log('Dosya başarıyla okundu, ilk 100 karakter:', data.substring(0, 100));
      
      // JSON olarak parse et
      const parsedData = JSON.parse(data) as T;
      console.log('JSON parse edildi, veri tipi:', typeof parsedData, Array.isArray(parsedData) ? 'Array' : 'Object');
      
      if (Array.isArray(parsedData)) {
        console.log('Dizi uzunluğu:', parsedData.length);
      }
      
      return parsedData;
    } catch (error) {
      console.error('JSON dosyası okunurken hata oluştu:', error);
      return null;
    }
  }

  async write(data: T): Promise<void> {
    try {
      console.log('Dosyaya yazılıyor:', this.file);
      
      // Klasör yoksa oluştur
      const dir = path.dirname(this.file);
      if (!fs.existsSync(dir)) {
        await fs.promises.mkdir(dir, { recursive: true });
      }

      // Dosyaya yaz
      const json = JSON.stringify(data, null, 2);
      await fs.promises.writeFile(this.file, json);
      console.log('Dosya başarıyla yazıldı');
    } catch (error) {
      console.error('JSON dosyası yazılırken hata oluştu:', error);
    }
  }
}

// Adapter ve db instance oluştur
const adapter = new CustomJSONAdapter<BlogPost[]>(file);
const defaultData: BlogPost[] = [];
const db = new Low<BlogPost[]>(adapter, defaultData);

// Veritabanını yükle
export const loadDb = async () => {
  console.log('Veritabanı yükleniyor...');
  await db.read();
  console.log('Veritabanı yüklendi, veri var mı:', !!db.data, 'uzunluk:', db.data?.length || 0);
  return db;
};

// Blog post listesini getir
export const getBlogPosts = async () => {
  console.log('Blog yazıları getiriliyor...');
  const db = await loadDb();
  const posts = db.data || [];
  
  // Blog yazılarını doğru formata dönüştür
  const formattedPosts = posts.map(post => {
    return {
      id: post.id || Date.now().toString(),
      title: post.title,
      slug: post.slug,
      content: post.content,
      date: post.date,
      originalLink: post.originalLink || '',
      image: post.image || (post.images && post.images.length > 0 ? post.images[0].local_path : ''),
      images: post.images || []
    };
  });
  
  console.log('Blog yazıları getirildi, uzunluk:', formattedPosts.length);
  return formattedPosts;
};

// Blog post detayını getir
export const getBlogPostBySlug = async (slug: string) => {
  console.log('Blog yazısı getiriliyor, slug:', slug);
  const db = await loadDb();
  const post = (db.data || []).find(post => post.slug === slug);
  console.log('Blog yazısı getirildi, slug:', post?.slug);
  return post;
};

// Yeni blog post ekle
export const addBlogPost = async (post: BlogPost) => {
  console.log('Yeni blog yazısı ekleniyor...');
  const db = await loadDb();
  db.data = db.data || [];
  db.data.push(post);
  await db.write();
  console.log('Yeni blog yazısı eklendi, slug:', post.slug);
  return post;
};

// Blog post güncelle
export const updateBlogPost = async (slug: string, updatedPost: Partial<BlogPost>) => {
  console.log('Blog yazısı güncelleniyor, slug:', slug);
  const db = await loadDb();
  db.data = db.data || [];
  const index = db.data.findIndex(post => post.slug === slug);
  
  if (index !== -1) {
    db.data[index] = { ...db.data[index], ...updatedPost };
    await db.write();
    console.log('Blog yazısı güncellendi, slug:', db.data[index].slug);
    return db.data[index];
  }
  
  console.log('Blog yazısı güncellenemedi, slug:', slug);
  return null;
};

// Blog post sil
export const deleteBlogPost = async (slug: string) => {
  console.log('Blog yazısı siliniyor, slug:', slug);
  const db = await loadDb();
  db.data = db.data || [];
  const initialLength = db.data.length;
  db.data = db.data.filter(post => post.slug !== slug);
  
  if (db.data.length < initialLength) {
    await db.write();
    console.log('Blog yazısı silindi, slug:', slug);
    return true;
  }
  
  console.log('Blog yazısı silinemedi, slug:', slug);
  return false;
};
