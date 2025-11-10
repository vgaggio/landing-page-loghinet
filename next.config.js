/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // si tu dominio no está en raíz (por ejemplo /loghinet/)
  // basePath: '/loghinet',
  // assetPrefix: '/loghinet/',
}
module.exports = nextConfig
