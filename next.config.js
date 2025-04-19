/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['placehold.co', 'dummyimage.com'],
    remotePatterns: [
      {
        protocol: 'https',
          hostname: 'placehold.co', 
      }, 
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
    ],
  },
};

module.exports = nextConfig;
