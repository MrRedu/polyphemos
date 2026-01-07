import type { NextConfig } from 'next'
import { API_MEDIA_BASE_URL } from './lib/constants'

const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(API_MEDIA_BASE_URL).hostname,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
