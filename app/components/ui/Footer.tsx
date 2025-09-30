import Link from 'next/link'
import { SOCIAL_LINKS, SITE_CONFIG, SocialLink } from '../../lib/types'
import React from 'react'

interface FooterProps {
  variant?: 'default' | 'dark';
}

const SocialIcon = ({ icon, className }: { icon: string; className: string }) => {
  const icons: Record<string, React.ReactElement> = {
    github: (
      <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    linkedin: (
      <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  };
  
  return icons[icon] || null;
};

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export const Footer = ({ variant = 'default' }: FooterProps) => {
  const isDark = variant === 'dark';
  
  return (
    <>
      <footer className={classNames(
        'aria-labelledby="footer-heading"',
        isDark ? 'bg-black text-white' : 'bg-white'
      )}>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-1">
          <div className={classNames(
            'mt-1 border-t pt-8 md:flex md:items-center md:justify-between',
            isDark ? 'border-gray-700' : 'border-gray-900/10'
          )}>
            {/* Información principal */}
            <div className="md:order-1">
              <p className={classNames(
                'text-sm font-medium',
                isDark ? 'text-white' : 'text-gray-900'
              )}>
                Lara Alonso @aiadevop
              </p>
              <p className={classNames(
                'text-xs mt-1 max-w-md',
                isDark ? 'text-gray-300' : 'text-gray-600'
              )}>
                Soy programadora fullstack en España, especializada en desarrollo web y aplicaciones. Actualmente cursando un máster en Ciencia de Datos, combino desarrollo frontend y backend con análisis de datos. Explora mi portfolio y descubre mis proyectos.
              </p>
              <p className={classNames(
                'text-xs mt-1 font-medium',
                isDark ? 'text-violet-300' : 'text-violet-600'
              )}>
                ¡Tu visión mi código!
              </p>
            </div>

            {/* Iconos sociales */}
            <div className="flex space-x-6 md:order-2">
              {SOCIAL_LINKS.map((item: SocialLink) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    'transition-colors duration-200 hover:scale-110',
                    isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <SocialIcon icon={item.icon} className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 text-center md:text-left">
            <p className={classNames(
              'text-xs',
              isDark ? 'text-gray-400' : 'text-gray-500'
            )}>
              <Link 
                href={SITE_CONFIG.githubUrl}
                className={classNames(
                  'transition-colors duration-200',
                  isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'
                )}
              >
                &copy; 2023 {SITE_CONFIG.author} @aiadevop
              </Link>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Enlace de atribuciones */}
      <Link href="/atribuciones">
        <div className={classNames(
          'pt-8 text-xs leading-5 md:order-1 md:mt-0 pl-8 pb-8 transition-colors duration-200',
          isDark ? 'bg-black text-gray-400 hover:text-gray-300' : 'bg-white text-gray-300 hover:text-gray-500'
        )}>
          Gracias a todos los que han colaborado en este blog
        </div>
      </Link>
    </>
  )
}
