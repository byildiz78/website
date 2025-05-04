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