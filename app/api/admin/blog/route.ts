import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts, addBlogPost } from '../../../../lib/db';
import { BlogPost } from '../../../../types/blog';
import { verifyToken } from '@/app/api/auth';

// GET: Tüm blog yazılarını getir
export async function GET(request: NextRequest) {
  try {
    // Token doğrulama
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Yetkilendirme başlığı eksik' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const isValid = verifyToken(token);

    if (!isValid) {
      return NextResponse.json({ error: 'Geçersiz token' }, { status: 401 });
    }

    const posts = await getBlogPosts();
    
    // Veri yapısını kontrol et ve düzelt
    const formattedPosts = posts?.map(post => {
      // JSON dosyasındaki original_link alanını originalLink olarak düzelt
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
    }) || [];
    
    console.log('API: Blog yazıları başarıyla getirildi', { 
      postsCount: formattedPosts.length, 
      samplePost: formattedPosts.length > 0 ? JSON.stringify(formattedPosts[0]).substring(0, 100) : 'Yazı yok' 
    });
    
    return NextResponse.json({ posts: formattedPosts });
  } catch (error) {
    console.error('Blog yazıları getirilirken hata oluştu:', error);
    return NextResponse.json({ error: 'Blog yazıları getirilirken bir hata oluştu', posts: [] }, { status: 500 });
  }
}

// POST: Yeni blog yazısı ekle
export async function POST(request: NextRequest) {
  try {
    // Token doğrulama
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Yetkilendirme başlığı eksik' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const isValid = verifyToken(token);

    if (!isValid) {
      return NextResponse.json({ error: 'Geçersiz token' }, { status: 401 });
    }

    const data = await request.json();
    
    // Gerekli alanların kontrolü
    if (!data.title || !data.slug || !data.content || !data.date) {
      return NextResponse.json({ error: 'Başlık, slug, içerik ve tarih alanları zorunludur' }, { status: 400 });
    }

    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: data.title,
      slug: data.slug,
      content: data.content,
      date: data.date,
      originalLink: data.originalLink || '',
      image: data.image || '',
      imageAlt: data.imageAlt || '',
    };

    const post = await addBlogPost(newPost);
    console.log('API: Blog yazısı başarıyla eklendi', { postId: post?.id || null });
    return NextResponse.json({ post: post || null }, { status: 201 });
  } catch (error) {
    console.error('Blog yazısı eklenirken hata oluştu:', error);
    return NextResponse.json({ error: 'Blog yazısı eklenirken bir hata oluştu', post: null }, { status: 500 });
  }
}
