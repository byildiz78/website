import { NextRequest, NextResponse } from 'next/server';
import { getNewBlogPosts, addNewBlogPost } from '@/lib/db-new';
import { BlogPost } from '@/types/blog';
import { verifyToken } from '@/app/api/auth';

// GET: Tüm yeni blog yazılarını getir
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

    const posts = await getNewBlogPosts();
    
    // Veri yapısını kontrol et ve düzelt
    const formattedPosts = posts?.map(post => {
      return {
        id: post.id || Date.now().toString(),
        title: post.title,
        slug: post.slug,
        content: post.content,
        date: post.date,
        images: post.images || []
      };
    }) || [];
    
    console.log('API: Yeni blog yazıları başarıyla getirildi', { 
      postsCount: formattedPosts.length, 
      samplePost: formattedPosts.length > 0 ? JSON.stringify(formattedPosts[0]).substring(0, 100) : 'Yazı yok' 
    });
    
    return NextResponse.json({ posts: formattedPosts });
  } catch (error) {
    console.error('Yeni blog yazıları getirilirken hata oluştu:', error);
    return NextResponse.json({ error: 'Yeni blog yazıları getirilirken bir hata oluştu', posts: [] }, { status: 500 });
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
      images: data.images || []
    };

    const post = await addNewBlogPost(newPost);
    console.log('API: Yeni blog yazısı başarıyla eklendi', { postId: post?.id || null });
    return NextResponse.json({ post: post || null }, { status: 201 });
  } catch (error) {
    console.error('Yeni blog yazısı eklenirken hata oluştu:', error);
    return NextResponse.json({ error: 'Yeni blog yazısı eklenirken bir hata oluştu', post: null }, { status: 500 });
  }
}
