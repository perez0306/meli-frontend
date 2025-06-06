import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'http2.mlstatic.com' },
      { hostname: 'encrypted-tbn0.gstatic.com' },
      { hostname: 'http2.mlstatic.com' },
    ],
  },
};

export default nextConfig;
