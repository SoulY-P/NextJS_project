/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
      loader: 'custom',
      loaderFile: './my-loader.ts',
    },
  }

module.exports = nextConfig
