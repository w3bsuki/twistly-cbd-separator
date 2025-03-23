import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    // Fix for "Cannot read properties of undefined (reading 'call')"
    config.module.parser = {
      ...config.module.parser,
      javascript: {
        ...config.module.parser?.javascript,
        exportsPresence: 'error',
      },
    };
    
    return config;
  },
};

export default nextConfig; 