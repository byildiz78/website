import { NextRequest, NextResponse } from 'next/server';
import { getBlogPostBySlug, updateBlogPost, deleteBlogPost } from '../../../../../lib/db';
import { verifyToken } from '@/app/api/auth';

// GET: Belirli bir blog yazısını getir
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
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

    const { slug } = params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
      return NextResponse.json({ error: 'Blog yazısı bulunamadı' }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Blog yazısı getirilirken hata oluştu:', error);
    return NextResponse.json({ error: 'Blog yazısı getirilirken bir hata oluştu' }, { status: 500 });
  }
}

// PUT: Blog yazısını güncelle
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
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

    const { slug } = params;
    const data = await request.json();
    
    // En az bir alan güncellenmelidir
    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: 'Güncellenecek en az bir alan gereklidir' }, { status: 400 });
    }

    const updatedPost = await updateBlogPost(slug, data);

    if (!updatedPost) {
      return NextResponse.json({ error: 'Blog yazısı bulunamadı' }, { status: 404 });
    }

    return NextResponse.json({ post: updatedPost });
  } catch (error) {
    console.error('Blog yazısı güncellenirken hata oluştu:', error);
    return NextResponse.json({ error: 'Blog yazısı güncellenirken bir hata oluştu' }, { status: 500 });
  }
}

// DELETE: Blog yazısını sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
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

    const { slug } = params;
    const success = await deleteBlogPost(slug);

    if (!success) {
      return NextResponse.json({ error: 'Blog yazısı bulunamadı' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog yazısı başarıyla silindi' });
  } catch (error) {
    console.error('Blog yazısı silinirken hata oluştu:', error);
    return NextResponse.json({ error: 'Blog yazısı silinirken bir hata oluştu' }, { status: 500 });
  }
}
