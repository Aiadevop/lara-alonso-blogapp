import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lara Alonso lara-alonso @aiadevop Blog Next.js React OpenAI ChatGPT',
  description: 'Lara Alonso lara-alonso @aiadevop | Frontend Developer Portfolio Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head></head>
      <body className={inter.className} suppressHydrationWarning={true} >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
