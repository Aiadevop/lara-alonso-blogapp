/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@headlessui/react', '@heroicons/react'],
  },
  
  // Configuración de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
    minimumCacheTTL: 60,
  },

  // Compresión
  compress: true,

  // Headers de seguridad y performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirecciones para SEO
  async redirects() {
    return [
      {
        source: '/frontend-development-tips',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Configuración de webpack para optimizaciones
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones para producción
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }

    return config
  },

  // Configuración de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // Configuración de ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Configuración de output
  output: 'standalone',

  // Configuración de trailing slash
  trailingSlash: false,

  // Configuración de poweredByHeader
  poweredByHeader: false,
}

module.exports = nextConfig