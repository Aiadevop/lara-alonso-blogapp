/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import { FooterPost } from "@/app/components/footerpost";
import Navbarblack from "@/app/components/navbarblack";
import Head from "next/head";
import Link from "next/link";


export default function Page11() {
    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">Como subir mi aplicación a Vercel</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-10 ">{' '}28/07/2023</time>
                        </div>
                    </div>
                    <div><b className="text-xl text-violetitle">Has creado una aplicación con Next.js y no sabes donde subirla. Con Vercel
                        lo puedes hacer GRATIS¡¡¡
                        , tiene una capa gratuita genial para tus aplicaciones.</b></div>


                    <div className="text-gray-900">
                        <div>Aquí te explico muy rápidamente como subir una aplicación en Vercel</div>
                        <br />
                        <div>Para poder trabajar con Vercel la forma más sencilla es trabajar con tus repositorios de GitHub.</div>
                        <div className="py-2">
                            <ol className="px-4 py-1">1- Debes entrar en <b><Link className="text-violetitle" href="https://www.vercel.com">www.vercel.com</Link></b> y entrar con tu cuenta de GitHub, si no la tienes la puedes crear en
                                <Link className="text-violetitle" href="https://www.github.com"> www.github.com</Link> .</ol>
                            <div className="flex items-center justify-center py-3">
                                <img
                                    className="max-w-m md:max-w-2xl"
                                    src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690527580/blog/loginVercel_pi7zou.png"
                                    width={269.2}
                                    height={64.4}
                                    alt="Vercel Web Analytics"
                                />
                            </div>

                            <ol className="px-4 py-1">2- Te aparecera un dashboard donde añadir tus <b>nuevos proyectos.</b></ol>
                            <div className="flex items-center justify-center py-3">
                                <img
                                    className="max-w-m md:max-w-2xl"
                                    src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690527581/blog/vercelNewProject_amcuha.png"
                                    width={269.2}
                                    height={64.4}
                                    alt="Vercel Web Analytics"
                                />
                            </div>

                            <ol className="px-4 py-1">3- Importas tu <b>repositorio de GitHub</b>. En este caso hemos elegido el de pokemongame</ol>
                            <div className="flex items-center justify-center py-3">
                                <img
                                    className="max-w-m md:max-w-2xl"
                                    src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690527580/blog/importGitVercel_ilymuy.png"
                                    width={269.2}
                                    height={64.4}
                                    alt="Vercel Web Analytics"
                                />
                            </div>
                            <ol className="px-4 py-1">4- A continuación te permite <b>configurar tu proyecto</b>, normalmente ya conoce que framework has utilizado.
                                Te permite añadir las variables de entorno, configurar el root de tu aplicación y los comandos de ejecución del proyecto. Si lo has realizado
                                en Next.js con solo hacer click en Deploy ya comenzaría a construir tu aplicación en la nube de Vercel.</ol>
                            <div className="flex items-center justify-center py-3">
                                <img
                                    className="max-w-m md:max-w-2xl"
                                    src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690527580/blog/vercelProject_klwxme.png"
                                    width={569.2}
                                    height={164.4}
                                    alt="Vercel Web Analytics"
                                />
                            </div>
                            <ol className="px-4 py-1">5- <b>Generará tu aplicación</b>, permitiéndote modificar el nombre del dominio. Aquí tendrás opciones de pago o no, dependiendo
                                si quieres eliminar o no, la extensión vercel.app.</ol>
                            <div className="flex items-center justify-center py-3">
                                <img
                                    className="max-w-m md:max-w-2xl"
                                    src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690527580/blog/finalPokemon_lkauqk.png"
                                    width={569.2}
                                    height={164.4}
                                    alt="Vercel Web Analytics"
                                />
                            </div>
                        </div>
                        <br />
                        <div><b>¡Listo!</b> Ya puedes subir tus aplicaciones de Next.js de forma gratuita en una plataforma muy sólida.</div>
                        <br />

                        <div>Si has llegado hasta aquí y quieres saber más sobre Vercel, puedes leer mi post {' '}
                            <Link href="/frontend-development-tips/10" className="text-violetitle">¿Quiéres saber cuántas personas visitan tu web?</Link></div>
                    </div>
                    <FooterPost />
                </article>
                <FooterBlack />
            </div>


        </>
    )
}
