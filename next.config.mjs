const BASE_URL = 'http://localhost:3000';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${BASE_URL}/:path*`
      }
    ]
  }
};

export default nextConfig;
