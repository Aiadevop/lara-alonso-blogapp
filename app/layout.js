import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lara Alonso - @aiadevop',
  description: 'Lara Alonso | Frontend Developer Portfolio Blog',
}

export default function RootLayout({ children }) {
  return (    
    <html lang="es">
      <head></head>
      <body className={inter.className} suppressHydrationWarning={true} > 
        {children}
      </body>
    </html>
  )
}
