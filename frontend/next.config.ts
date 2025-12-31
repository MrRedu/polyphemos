import type { NextConfig } from 'next';
import { API_MEDIA_BASE_URL, ENVIRONMENT } from './lib/constants';

const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents: true,

  images: {
    dangerouslyAllowLocalIP: ENVIRONMENT === 'development',
    remotePatterns: [
      {
        protocol: ENVIRONMENT === 'development' ? 'http' : 'https',
        hostname: new URL(API_MEDIA_BASE_URL).hostname,
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
