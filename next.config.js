/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig; 