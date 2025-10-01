import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lara-alonso.com'),
  applicationName: 'Lara Alonso | @aiadevop',
  title: {
    default: 'Lara Alonso @aiadevop lara-alonso',
    template: '%s | Lara Alonso',
  },
  description: 'Lara Alonso lara-alonso @aiadevop | Frontend Developer Portfolio Blog',
  alternates: {
    canonical: '/',
    sitemap: '/sitemap.xml',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Lara Alonso | Portfolio y Blog',
    description: 'Frontend Developer. Diseño moderno, performance y accesibilidad.',
    siteName: 'lara-alonso',
    locale: 'es_ES',
    images: [
      {
        url: 'https://res.cloudinary.com/nodefacebook/image/upload/v1707993155/blogapp/og-default_jl1b0q.png',
        width: 1200,
        height: 630,
        alt: 'Lara Alonso - Portfolio y Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lara Alonso | Portfolio y Blog',
    description: 'Frontend Developer. Diseño moderno, performance y accesibilidad.',
    images: ['https://res.cloudinary.com/nodefacebook/image/upload/v1707993155/blogapp/og-default_jl1b0q.png'],
    creator: '@aiadevop',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: '/icons/favicon.png',
    shortcut: '/favicon.ico',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head></head>
      <body className={`${inter.className} min-h-screen bg-white`} suppressHydrationWarning={true}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-md">Saltar al contenido</a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
