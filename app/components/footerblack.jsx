import Link from 'next/link'
import React from 'react'

const navigation = {
    social: [
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <Link href="https://github.com/Aiadevop?tab=repositories">
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
            ),
        },

    ],
}

export const FooterBlack = () => {
    return (
        <>
            <footer className="bg-[#D9D9D7] text-black" aria-labelledby="footer-heading">
                <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-1">
                    <div className="mt-1 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                        {/* Información principal */}
                        <div className="md:order-1">
                            <p className="text-sm font-medium text-black">
                                Lara Alonso @aiadevop
                            </p>
                            <p className="text-xs mt-1 max-w-md text-gray-600">
                                Soy programadora fullstack en España, especializada en desarrollo web y aplicaciones. Actualmente cursando un máster en Ciencia de Datos, combino desarrollo frontend y backend con análisis de datos. Explora mi portfolio y descubre mis proyectos.
                            </p>
                            <p className="text-xs mt-1 font-medium text-violet-600">
                                ¡Tu visión mi código!
                            </p>
                        </div>

                        {/* Iconos sociales */}
                        <div className="flex space-x-6 md:order-2">
                            {navigation.social.map((item) => (
                                <div key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500 transition-colors duration-200 hover:scale-110">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-4 text-center md:text-left">
                        <p className="text-xs text-gray-500">
                            <Link href="https://github.com/Aiadevop?tab=repositories" className="hover:text-gray-700 transition-colors duration-200">
                                &copy; 2023 Lara Alonso @aiadevop
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
            <Link href="/atribuciones">
                <div className='bg-[#D9D9D7] pt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0 pl-8 pb-8 hover:text-gray-500 transition-colors duration-200'>
                    Gracias a todos los que han colaborado en este blog
                </div>
            </Link> 
        </>
    )
}
