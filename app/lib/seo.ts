import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Lara Alonso @aiadevop - Desarrolladora Frontend',
    template: '%s | Lara Alonso @aiadevop'
  },
  description: 'Lara Alonso @aiadevop | Desarrolladora Frontend especializada en React, Next.js y JavaScript. Portfolio y blog con tutoriales de desarrollo web.',
  keywords: ['desarrollo frontend', 'React', 'Next.js', 'JavaScript', 'programación web', 'Lara Alonso', 'aiadevop'],
  authors: [{ name: 'Lara Alonso', url: 'https://lara-alonso.com' }],
  creator: 'Lara Alonso @aiadevop',
  publisher: 'Lara Alonso',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lara-alonso.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://lara-alonso.com',
    title: 'Lara Alonso @aiadevop - Desarrolladora Frontend',
    description: 'Lara Alonso @aiadevop | Desarrolladora Frontend especializada en React, Next.js y JavaScript. Portfolio y blog con tutoriales de desarrollo web.',
    siteName: 'Lara Alonso Blog',
    images: [
      {
        url: 'https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png',
        width: 1200,
        height: 630,
        alt: 'Lara Alonso @aiadevop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lara Alonso @aiadevop - Desarrolladora Frontend',
    description: 'Lara Alonso @aiadevop | Desarrolladora Frontend especializada en React, Next.js y JavaScript.',
    images: ['https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png'],
    creator: '@aiadevop',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const generatePageMetadata = (
  title: string,
  description: string,
  path: string = '/'
): Metadata => ({
  ...defaultMetadata,
  title,
  description,
  alternates: {
    canonical: `https://lara-alonso.com${path}`,
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title,
    description,
    url: `https://lara-alonso.com${path}`,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title,
    description,
  },
})
