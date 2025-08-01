'use client'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { NAVIGATION_ITEMS } from '../../lib/types'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ variant = 'default' }) {
  const isDark = variant === 'dark';
  
  return (
    <Disclosure as="nav" className={classNames(
      isDark ? 'bg-black text-white' : 'bg-white shadow'
    )}>
      {({ open }) => (
        <>
          <div className="p-2 mx-auto h-0 max-w-7xl px-2 sm:px-6 lg:px-8 pb-20">
            <div className="relative flex h-18 justify-center">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className={classNames(
                  'sm:ml-6 flex sm:space-x-8 border-4 rounded-full shadow-lg px-4 py-2',
                  isDark ? 'bg-gray-800 border-gray-600' : 'bg-white'
                )}>
                  <div className="flex items-center justify-center">
                    <Link href="/" className="flex items-center justify-center">
                      <Image
                        className="flex items-center justify-center"
                        src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png"
                        width={65}
                        height={65.5}
                        alt="Lara Alonso Favicon"
                        priority
                      />
                    </Link>
                  </div>
                  
                  <div className="sm:flex flex-1 items-center justify-center flex-col ml-1 hidden">
                    <Link href="https://github.com/Aiadevop/">
                      <p className={classNames(
                        'text-xs font-medium group-hover:text-gray-700',
                        isDark ? 'text-gray-300' : 'text-gray-500'
                      )}>
                        Lara Alonso
                      </p>
                      <p className={classNames(
                        'text-sm font-medium group-hover:text-gray-900',
                        isDark ? 'text-gray-100' : 'text-gray-700'
                      )}>
                        @aiadevop
                      </p>
                    </Link>
                  </div>
                  
                  {NAVIGATION_ITEMS.map((item) => (
                    <div
                      key={item.name}
                      className={classNames(
                        'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700',
                        isDark 
                          ? 'text-gray-300 hover:text-gray-100 hover:border-gray-500' 
                          : 'text-gray-500'
                      )}
                    >
                      <Link href={item.href}>
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
} 