/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com"],
    unoptimized: true,
  },
  // Disable webpack cache to resolve restoration issues
  webpack: (config) => {
    config.cache = false;
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
  
  // Çok esnek Content Security Policy - Tüm harici scriptleri izin ver
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src * 'self'; script-src * 'self' 'unsafe-inline' 'unsafe-eval'; style-src * 'self' 'unsafe-inline'; img-src * 'self' data: blob:; font-src * 'self' data:; connect-src * 'self'; frame-src * 'self'; object-src 'none';"
          }
        ]
      }
    ];
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
      ]
    };
  },
};

module.exports = nextConfig;