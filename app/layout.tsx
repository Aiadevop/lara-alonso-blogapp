import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/laralonsoround.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/laralonsoround.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/laralonsoround.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white antialiased`} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
