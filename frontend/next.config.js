/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal public site: no auth/API routes, so a fully static export is fine.
  output: 'export',
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    }
    return config
  }
}

module.exports = nextConfig
