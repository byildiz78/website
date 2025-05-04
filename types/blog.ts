export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  originalLink?: string;
  // original_link özelliğini kaldırıyoruz, sadece originalLink kullanacağız
  date: string;
  content: string;
  image?: string;
  imageAlt?: string;
  images?: {
    original_url: string;
    local_path: string;
  }[];
}
