/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com"],
    unoptimized: false, // Görüntü optimizasyonunu etkinleştir
    formats: ['image/webp'], // WebP formatını kullan
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Responsive görüntü boyutları
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Daha küçük görüntü boyutları
    minimumCacheTTL: 60, // 60 saniye minimum önbellek süresi
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
        // GTranslate için dil alt dizinlerini destekle
        {
          source: '/en/:path*',
          destination: '/:path*',
        },
        {
          source: '/ru/:path*',
          destination: '/:path*',
        },
        {
          source: '/ar/:path*',
          destination: '/:path*',
        },
        // Blog yazıları için özel yönlendirme
        {
          source: '/blog/:slug',
          destination: '/:slug',
        },
        // Diğer diller için gerekirse buraya ekleyebilirsiniz
      ],
    };
  },
};

module.exports = nextConfig;