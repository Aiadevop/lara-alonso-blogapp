'use client'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { NAVIGATION_ITEMS, SOCIAL_LINKS, SocialLink } from '../../lib/types'
import React from 'react'

interface SocialIconProps {
  icon: string;
  className: string;
}

interface NavbarProps {
  variant?: 'default' | 'dark';
}

const SocialIcon = ({ icon, className }: SocialIconProps) => {
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

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const isDark = variant === 'dark';
  
  return (
    <Disclosure as="nav" className={classNames(
      'sticky top-0 z-50 backdrop-blur-md border-b',
      isDark 
        ? 'bg-black/95 border-gray-700/50 text-white' 
        : 'bg-white/80 border-gray-200/50 text-gray-900'
    )}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo y nombre */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <Image
                      src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png"
                      width={40}
                      height={40}
                      alt="Lara Alonso"
                      className="rounded-full transition-transform duration-300 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="hidden sm:block">
                    <p className={classNames(
                      'text-sm font-semibold',
                      isDark ? 'text-white' : 'text-gray-900'
                    )}>
                      Lara Alonso
                    </p>
                    <p className={classNames(
                      'text-xs',
                      isDark ? 'text-gray-300' : 'text-gray-500'
                    )}>
                      @aiadevop
                    </p>
                  </div>
                </Link>
              </div>

              {/* Navegación central */}
              <div className="hidden md:flex items-center space-x-8">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'relative px-3 py-2 text-sm font-medium transition-all duration-200 group',
                      isDark 
                        ? 'text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-md' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 rounded-md'
                    )}
                  >
                    <span className="relative">
                      {item.name}
                      <span className={classNames(
                        'absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full',
                        isDark ? 'bg-white' : 'bg-gradient-to-r from-violet-500 to-purple-500'
                      )}></span>
                    </span>
                  </Link>
                ))}
              </div>

              {/* Iconos sociales y botón de menú móvil */}
              <div className="flex items-center space-x-4">
                {/* Iconos sociales - solo visibles en desktop */}
                <div className="hidden md:flex items-center space-x-3">
                  {SOCIAL_LINKS.map((item: SocialLink) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        'transition-all duration-200 hover:scale-110',
                        isDark 
                          ? 'text-gray-400 hover:text-gray-300' 
                          : 'text-gray-500 hover:text-gray-700'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{item.name}</span>
                      <SocialIcon icon={item.icon} className="h-5 w-5" />
                    </Link>
                  ))}
                </div>

                {/* Botón de menú móvil */}
                <div className="md:hidden">
                  <Disclosure.Button className={classNames(
                    'inline-flex items-center justify-center rounded-md p-2 transition-colors duration-200',
                    isDark 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  )}>
                    <span className="sr-only">Abrir menú principal</span>
                    {open ? (
                      <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Menú móvil */}
          <Disclosure.Panel className="md:hidden">
            <div className={classNames(
              'space-y-1 px-4 pb-3 pt-2',
              isDark ? 'bg-black/95' : 'bg-white/95'
            )}>
              {NAVIGATION_ITEMS.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
                    isDark 
                      ? 'text-gray-200 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              
              {/* Iconos sociales en menú móvil */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {SOCIAL_LINKS.map((item: SocialLink) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className={classNames(
                      'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                      isDark 
                        ? 'text-gray-200 hover:text-white hover:bg-gray-800' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon={item.icon} className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
