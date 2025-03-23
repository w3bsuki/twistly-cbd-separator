/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configure compression
  compress: true,
  // Disable x-powered-by header
  poweredByHeader: false,
  webpack: (config) => {
    // Fix for "Cannot read properties of undefined (reading 'call')"
    if (config.module && config.module.parser) {
      config.module.parser.javascript = {
        ...config.module.parser.javascript,
        exportsPresence: 'error',
      };
    }
    
    return config;
  },
};

module.exports = nextConfig; 