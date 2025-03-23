/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Uses SWC for minification (faster than Terser)
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable optimizations for packages
  optimizePackageImports: [
    'framer-motion',
    'lucide-react',
    'date-fns',
    'react-day-picker',
    '@radix-ui/react-icons',
  ],
  // Configure compression
  compress: true,
  // Enable browser source maps in production for better debugging
  productionBrowserSourceMaps: false,
  // Disable x-powered-by header
  poweredByHeader: false,
  webpack: (config, { dev, isServer }) => {
    // Fix for "Cannot read properties of undefined (reading 'call')"
    config.module.parser = {
      ...config.module.parser,
      javascript: {
        ...config.module.parser?.javascript,
        exportsPresence: 'error',
      },
    };
    
    // Add optimizations for production builds
    if (!dev && !isServer) {
      // Split chunks more aggressively for production
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    return config;
  },
};

module.exports = nextConfig; 