/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import Navbarblack from "@/app/components/navbar";
import Head from "next/head";
import Link from "next/link";


export default function Page10() {
    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leading-tight md:text-6xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">¿Cuántas personas visitan mi web?</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-10 ">{' '}10/07/2023</time>
                        </div>
                    </div>
                    <div><b className="text-xl text-violetitle">Utiliza la herramienta Vercel Web Analytics para poder analizar tus visitantes sin tener que aceptar
                        cookies.</b></div>


                    <div className="text-gray-900">
                        <div>¿Ya has creado tu aplicación de Next.js y la has subido a Vercel? Lara;  <b>pero ¿qué es Vercel?</b></div>
                        <br />
                        <div><b>Vercel</b> es una plataforma basada en la nube para sitios estáticos y funciones sin servidor que se adapta con fluidez a tu flujo de trabajo.
                            <b> Permite a los desarrolladores alojar sitios web y servicios web que se implementan al instante, escalan automáticamente y no requieren supervisión,
                                todo sin necesidad de configuración.</b><br />
                            Esta plataforma permite a los equipos de front-end hacer un muy buen trabajo al combinar la experiencia de desarrollador con un enfoque obsesivo en
                            el rendimiento del usuario final.
                        </div>
                        <br />
                        <div>Si no sabes como subir tu aplicación a Vercel, puedes consultar mi post{' '}
                            <Link href="/frontend-development-tips/11" className="text-violetitle">Como subir mi aplicación a Vercel</Link></div>
                        <br />

                        <div className="text-violetitle"><b>Vercel Web Analytics Quickstart</b></div>
                        <br />
                        <div>Os dejo un link dónde podéis consultar toda la documentación oficial en 
                            <Link href="https://vercel.com/docs/concepts/analytics/quickstart" className="text-violetitle"> Vercel Web Analytics Quickstart</Link></div><br />

                        <div><b>1- En el dashboard de Vercel debes ir a tu proyecto y seleccionar enable en el menú Analitycs</b></div>
                        <br />

                        <div className="flex items-center justify-center">
                            <img
                                className="max-w-m md:max-w-2xl"
                                src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690188804/enableanalitycs2_guf5vx.png"
                                width={819.2}
                                height={614.4}
                                alt="Vercel Web Analytics"
                            />
                        </div>
                        <br />


                        <div><b>2- Instala el packete de @vercel/analytics</b></div>
                        <br />

                        <div className="flex flex-col pl-10 pt-2 pb-2 ">
                            <li>npm i @vercel/analytics</li>
                            <li>yarn add @vercel/analytics</li>
                            <li>pnpm i @vercel/analytics</li>
                        </div>
                        <br />

                        <div><b>3- Añade Analitycs en el layout de tu App y ejecuta Vercel deploy.</b></div>
                        <br />

                        <div className="flex items-center justify-center">
                            <img
                                className="max-w-m md:max-w-2xl"
                                src="https://res.cloudinary.com/dguhnftxe/image/upload/v1690188798/analyticslayout_zpzsto.png"
                                width={819.2}
                                height={614.4}
                                alt="Vercel Web Analytics"
                            />
                        </div>
                        <br />

                        <div><b>4- Ejecuta vercel deploy en tu terminal. Y listo¡¡¡¡</b></div>
                        <br />
                        

                        <div>Si has llegado hasta aquí y quieres saber más sobre Next.js, puedes leer mi post {' '}
                            <Link href="/frontend-development-tips/1" className="text-violetitle">Crea tu primera aplicación en Next.js 13</Link></div>
                    </div>
                </article>
                <div className="mb-20"></div>
                <FooterBlack />
            </div>


        </>
    )
}
