"use client"

import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (

        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="p-2 mx-auto h-0 max-w-7xl px-2 sm:px-6 lg:px-8 pb-20">
                        <div className="relative flex h-18 justify-center">                       
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center ">
                                <div className="bg-white sm:ml-6 flex sm:space-x-8 border-4 rounded-full  shadow-lg px-4 py-2">                                 
                                    <div>
                                        <Image
                                            className="flex flex-1 items-center justify-center flex-col ml-1"
                                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png"
                                            width={65}
                                            height={65.5}
                                            alt="Lara Alonso Favicon"
                                        />
                                    </div>
                                    <div className="sm:flex flex-1 items-center justify-center flex-col ml-1 hidden">
                                        <Link href="https://github.com/Aiadevop/">
                                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Lara Alonso</p>
                                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">@aiadevop</p>
                                        </Link>
                                    </div>
                                    <div
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ml-4"
                                    >
                                        <Link href="/">
                                            Inicio
                                        </Link>
                                    </div>
                                    <div
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        <Link href="/frontend-development-tips">
                                            Artículos
                                        </Link>
                                    </div>
                                    <div
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                    >
                                        <Link href="/lara-alonso-portfolio">
                                            Portfolio
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">                               
                            </div>
                        </div>
                    </div>

                </>
            )}
        </Disclosure>
    )
}
