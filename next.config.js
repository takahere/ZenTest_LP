/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/career1',
  assetPrefix: '/career1',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['picsum.photos'],
    unoptimized: true
  },
  output: 'standalone'
}

module.exports = nextConfig 