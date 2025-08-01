// Configuración centralizada del proyecto
export const config = {
  // Configuración del sitio
  site: {
    name: 'Lara Alonso Blog',
    description: 'Blog de desarrollo frontend y tips de programación',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lara-alonso.com',
    author: 'Lara Alonso',
    github: 'https://github.com/Aiadevop/',
  },
  
  // Configuración de API
  api: {
    marvel: {
      baseUrl: 'https://gateway.marvel.com/v1/public',
      publicKey: process.env.DISNEY_PUBLIC_KEY,
      privateKey: process.env.DISNEY_PRIVATE_KEY,
      tsHash: process.env.TS_HASH,
      hash: process.env.HASH_MD5_MARVEL,
    },
    supabase: {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }
  },
  
  // Configuración de imágenes
  images: {
    defaultQuality: 80,
    defaultWidth: 800,
    formats: ['webp', 'avif'],
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'gateway.marvel.com'
    ]
  },
  
  // Configuración de paginación
  pagination: {
    postsPerPage: 12,
    maxPages: 10,
  },
  
  // Configuración de caché
  cache: {
    revalidate: 3600, // 1 hora
    maxAge: 86400, // 24 horas
  },
  
  // Configuración de analytics
  analytics: {
    enabled: process.env.NODE_ENV === 'production',
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    vercelAnalytics: true,
  },
  
  // Configuración de SEO
  seo: {
    defaultTitle: 'Lara Alonso - Frontend Developer',
    defaultDescription: 'Blog de desarrollo frontend con Next.js, React y más',
    defaultImage: '/img/laraAlonso.png',
    twitterHandle: '@aiadevop',
  }
}

// Función para obtener configuración según el entorno
export function getConfig(env = process.env.NODE_ENV) {
  const baseConfig = { ...config }
  
  if (env === 'development') {
    return {
      ...baseConfig,
      analytics: {
        ...baseConfig.analytics,
        enabled: false,
      }
    }
  }
  
  return baseConfig
} 