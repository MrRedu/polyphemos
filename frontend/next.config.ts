import type { NextConfig } from 'next';
import { API_MEDIA_BASE_URL } from './lib/constants';

const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: API_MEDIA_BASE_URL,
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
