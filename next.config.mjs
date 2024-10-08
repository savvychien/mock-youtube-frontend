const BASE_URL = 'http://localhost:3000';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BASE_URL}/:path*`
      },
      {
        source: '/:path*',
        destination: '/:path*'
      }
    ]
  }
};

export default nextConfig;
