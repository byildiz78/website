/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Disable webpack cache to resolve restoration issues
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;