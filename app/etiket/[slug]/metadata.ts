import { Metadata } from 'next';

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  // URL'den gelen slug parametresini al
  const { slug } = params;
  
  // Slug'u düzgün bir şekilde formatlayarak göster
  const formattedTag = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedTag} | Etiket | robotPOS`,
    description: `${formattedTag} ile ilgili içerikler ve robotPOS'un sunduğu çözümler hakkında bilgi alın.`,
    keywords: `${formattedTag}, robotpos, restoran programı, adisyon programı, pos sistemi`,
    openGraph: {
      title: `${formattedTag} | Etiket | robotPOS`,
      description: `${formattedTag} ile ilgili içerikler ve robotPOS'un sunduğu çözümler hakkında bilgi alın.`,
      url: `https://www.robotpos.com/etiket/${slug}`,
      siteName: 'robotPOS',
      locale: 'tr_TR',
      type: 'website',
    },
  };
};
