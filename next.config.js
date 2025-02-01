/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/career1',
  assetPrefix: '/career1',
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['picsum.photos'],
  }
}

module.exports = nextConfig 