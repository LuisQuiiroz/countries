/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  async redirects () {
    return [
      {
        source: '/country',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
