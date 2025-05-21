/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "images.unsplash.com", 
      "via.placeholder.com", 
      "scontent.cdninstagram.com", 
      "scontent-iad3-1.cdninstagram.com", 
      "scontent-iad3-2.cdninstagram.com",
      "graph.instagram.com",
      "scontent-fra3-1.cdninstagram.com",
      "scontent-fra3-2.cdninstagram.com",
      "scontent-fra5-1.cdninstagram.com",
      "scontent-fra5-2.cdninstagram.com",
      "instagram.fist1-1.fna.fbcdn.net",
      "instagram.fist1-2.fna.fbcdn.net",
      "instagram.fist2-1.fna.fbcdn.net",
      "instagram.fist2-2.fna.fbcdn.net",
      "instagram.fist4-1.fna.fbcdn.net",
      "instagram.fist4-2.fna.fbcdn.net",
      "instagram.fist7-1.fna.fbcdn.net",
      "instagram.fist7-2.fna.fbcdn.net",
      "cdninstagram.com"
    ],
    unoptimized: false, // Görüntü optimizasyonunu etkinleştir
    formats: ['image/webp'], // WebP formatını kullan
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Responsive görüntü boyutları
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Daha küçük görüntü boyutları
    minimumCacheTTL: 60, // 60 saniye minimum önbellek süresi
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
        pathname: '**',
      }
    ],
  },
  // Webpack cache'i etkinleştir - performans için önemli
  webpack: (config) => {
    // Webpack cache'i etkinleştir (false yerine)
    return config;
  },
  // Expose environment variables to the browser
  env: {
    INSTAGRAM_ACCESS_TOKEN: process.env.INSTAGRAM_ACCESS_TOKEN || '',
  },
  // Server-side environment variables
  serverRuntimeConfig: {
    INSTAGRAM_ACCESS_TOKEN: process.env.INSTAGRAM_ACCESS_TOKEN || '',
  },
  // Both client and server environment variables
  publicRuntimeConfig: {
    // Empty for now
  },
  
  // URL yapılandırması
  async rewrites() {
    return {
      beforeFiles: [
        // Blog yazıları için özel yönlendirme
        {
          source: '/blog/:slug',
          destination: '/:slug',
        },
      ],
    };
  },

  // Subdomain tabanlı dil yapısı için alan adı yapılandırması
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;