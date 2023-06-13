'use client'

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export const Projects = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);

    return (
        <>

            <div className="grid mb-8  border border-fuchsia-200 border-2xl rounded-lg shadow-sm md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col items-center justify-center border border-fuchsia-200 border-2xl p-8 text-center bg-gradient-to-r from-blackdark via-blackdark to-black border-fuchsia-200 border-2xl border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-400 lg:mb-8 ">
                        <Link href="https://github.com/Aiadevop/hebe-api">
                            <div
                                className="flex flex-row justify-center items-center"
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)}>
                                <Image
                                    src={isHovered1 ? "/icons/githubhovercol.png" : "/icons/githubig.png"}
                                    width={36}
                                    height={36}
                                    alt="github icon"
                                    className="mr-5"
                                    onMouseEnter={() => setIsHovered1(true)}
                                    onMouseLeave={() => setIsHovered1(false)}
                                />
                                <h3 className={isHovered1 ? "text-lg text-gray-200" : "text-lg font-semibold text-white"}>Hebe Api</h3>
                            </div>

                        </Link>
                        <p className="mt-4">Backend en NodeJS con Express para la gestión de usuarios de un club deportivo</p>
                    </blockquote>
                </figure>
                <figure className="flex flex-col items-center justify-center border border-fuchsia-200 border-2xl p-8 text-center bg-gradient-to-r from-blackdark via-blackdark to-black border-b border-gray-200 rounded-tr-lg ">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <Link href="https://github.com/Aiadevop/hebe-web">
                            <div
                                className="flex flex-row justify-center items-center"
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}>
                                <Image
                                    src={isHovered2 ? "/icons/githubhovercol.png" : "/icons/githubig.png"}
                                    width={36}
                                    height={36}
                                    alt="github icon"
                                    className="mr-5"

                                />
                                <h3 className={isHovered2 ? "text-lg text-gray-200" : "text-lg font-semibold text-white"}>Hebe Web</h3>
                            </div>
                        </Link>
                        <p className="mt-4">Frontend en React de un club de taekwondo</p>
                    </blockquote>
                </figure>
                <figure className="flex flex-col items-center justify-center border border-fuchsia-200 border-2xl p-8 text-center bg-gradient-to-r from-blackdark via-blackdark to-black border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r ">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <Link href="https://github.com/Aiadevop/pokemongame">
                            <div className="flex flex-row justify-center items-center"
                                onMouseEnter={() => setIsHovered3(true)}
                                onMouseLeave={() => setIsHovered3(false)}>
                                <Image
                                    src={isHovered3 ? "/icons/githubhovercol.png" : "/icons/githubig.png"}
                                    width={36}
                                    height={36}
                                    alt="github icon"
                                    className="mr-5"
                                    onMouseEnter={() => setIsHovered3(true)}
                                    onMouseLeave={() => setIsHovered3(false)}
                                />
                                <h3 className={isHovered3 ? "text-lg text-gray-200" : "text-lg font-semibold text-white"}>Pokemon Game</h3>
                            </div>

                        </Link>
                        <p className="mt-4">Minijuego donde aparece el nombre de un pokemon y hay que adivinar cuál es la imagen que corresponde.</p>
                        <a href="https://pokemon-game-aia85.vercel.app/">https://pokemon-game-aia85.vercel.app/</a>
                    </blockquote>
                </figure>
                <figure className="flex flex-col items-center justify-center border border-fuchsia-200 border-2xl p-8 text-center bg-gradient-to-r from-blackdark via-blackdark to-black border-gray-200 rounded-b-lg md:rounded-br-lg ">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <Link href="https://github.com/Aiadevop/7-Restserver">
                            <div className="flex flex-row justify-center items-center"
                                onMouseEnter={() => setIsHovered4(true)}
                                onMouseLeave={() => setIsHovered4(false)}>
                                <Image
                                    src={isHovered4 ? "/icons/githubhovercol.png" : "/icons/githubig.png"}
                                    width={36}
                                    height={36}
                                    alt="github icon"
                                    className="mr-5"
                                    onMouseEnter={() => setIsHovered4(true)}
                                    onMouseLeave={() => setIsHovered4(false)}
                                />
                                <h3 className={isHovered4 ? "text-lg text-gray-200" : "text-lg font-semibold text-white"}>Restserver</h3>
                            </div>

                        </Link>
                        <p className="mt-4">Aplicación backend en NodeJS con Express para autenticación de usuarios, gestión de imágenes, buscador.</p>
                    </blockquote>
                </figure>
                <figure className="flex flex-col items-center justify-center border border-fuchsia-200 border-2xl p-8 text-center bg-gradient-to-r from-blackdark via-blackdark to-black border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r ">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <Link href="https://github.com/Aiadevop/Aplicacion-tickets">
                            <div className="flex flex-row justify-center items-center"
                                onMouseEnter={() => setIsHovered5(true)}
                                onMouseLeave={() => setIsHovered5(false)}>
                                <Image
                                    src={isHovered5 ? "/icons/githubhovercol.png" : "/icons/githubig.png"}
                                    width={36}
                                    height={36}
                                    alt="github icon"
                                    className="mr-5"
                                    onMouseEnter={() => setIsHovered5(true)}
                                    onMouseLeave={() => setIsHovered5(false)}
                                />
                                <h3 className={isHovered5 ? "text-lg text-gray-200" : "text-lg font-semibold text-white"}>Aplicación tickets</h3>
                            </div>

                        </Link>
                        <p className="mt-4">Aplicación para gestión de colas y tickets de clientes.</p>
                    </blockquote>
                </figure>
                <figure className="flex flex-col items-center justify-center border border-fuchsia-200 border-2xl p-8 text-center bg-gradient-to-r from-blackdark via-blackdark to-black border-gray-200 rounded-b-lg md:rounded-br-lg ">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <Link href="https://github.com/Aiadevop/issues-react-query">
                            <div className="flex flex-row justify-center items-center"
                                onMouseEnter={() => setIsHovered6(true)}
                                onMouseLeave={() => setIsHovered6(false)}>
                                <Image
                                    src={isHovered6 ? "/icons/githubhovercol.png" : "/icons/githubig.png"}
                                    width={36}
                                    height={36}
                                    alt="github icon"
                                    className="mr-5"
                                    onMouseEnter={() => setIsHovered6(true)}
                                    onMouseLeave={() => setIsHovered6(false)}
                                />
                                <h3 className={isHovered6 ? "text-lg text-gray-200" : "text-lg font-semibold text-white"}>Issues React Query</h3>
                            </div>

                        </Link>
                        <p className="mt-4">Aplicación gestión de Issues con ReactQuery.</p>
                    </blockquote>
                </figure>
            </div>

        </>
    )
}