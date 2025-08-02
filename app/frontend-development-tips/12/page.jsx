/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import Navbarblack from "@/app/components/navbar";
import Head from "next/head";
import Link from "next/link";


export default function Page12() {
    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">Mi web no aparece en Google !!!</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-10 ">{' '}04/08/2023</time>
                        </div>
                    </div>
                    <div><b className="text-xl text-violetitle">Has subido tu aplicación a Vercel pero si la buscas en Google no aparece. ¿Qué pasa?</b></div>


                    <div className="text-gray-900">
                        <div>Te explico los pasos para tener claro si tu web está incluida en los robots de Google.</div>
                        <br />                    
                        <div className="pb-2">
                            <ol className="px-4 py-1">1- Introduce el nombre de tu web en el buscador de Google. Por ejemplo www.lara-alonso.com.
                                <br/>
                                Si no aparece, atent@¡
                            </ol>                   

                            <ol className="px-4 py-1">2- Google dispone de una herramienta para poder introducir tu web en sus buscadores: 
                            <b><Link className="text-violetitle" href="https://search.google.com/search-console/about">
                                Google Search Console </Link></b></ol> 
                            <div className="flex items-center justify-center py-3">
                                <img
                                    className="max-w-m md:max-w-2xl"
                                    src="https://res.cloudinary.com/dguhnftxe/image/upload/v1691132410/blog/dominio_u51xqe.png"
                                    width={369.2}
                                    height={164.4}
                                    alt="Google Search Console"
                                />
                            </div>

                            <ol className="px-4 py-1">3- El problema está en que si subiste tu web a Vercel, has obtenido un subdominio de Vercel. ¿Y ésto que quiere decir?. 
                            Pues que tu no puedes manejar ese dominio. Por lo que para poder aparecer en Google <b>tendrás que comprar un dominio propio.</b> </ol>
                   
                            <ol className="px-4 py-1">4- En la herramienta de Google Search Console, introduces el nombre de tu dominio. A continuación te generará un 
                            <b> código de verificación de propiedad de ese dominio</b>, que tendrás que introducir en el panel de control de tu dominio.</ol>
                            <div className="flex items-center justify-center py-3">
                                <img
                                    className="max-w-m md:max-w-2xl"
                                    src="https://res.cloudinary.com/dguhnftxe/image/upload/v1691132746/blog/verificacion_ccy0g4.png"
                                    width={369.2}
                                    height={164.4}
                                    alt="Vercel Web Analytics"
                                />
                            </div>
                            <ol className="px-4 py-1">5- En mi caso, el dominio lo compré en <b><Link className="text-violetitle" href="https://www.hostinger.es/?ppc_campaign=google_search_brand&bidkw=hostinger&gclid=CjwKCAjww7KmBhAyEiwA5-PUSoqdPu4BSK-ovNMPwDmbouwd-N_7QzA3vWl2OM0d01P51E0jQi0A5BoC_uUQAvD_BwE">
                                Hostinger </Link></b> pero hay muchos proveedores de dominios. No es necesario que compres el hosting ya que tu web, puede seguir alojada en Vercel.
                                En la parte inferior te permite agregar ese enlace TXT que te proporciona Google.</ol>
                            <div className="flex items-center justify-center py-3">
                                <img
                                    className="max-w-m md:max-w-2xl"
                                    src="https://res.cloudinary.com/dguhnftxe/image/upload/v1691133486/blog/hostinger_yt8hx8.png"
                                    width={569.2}
                                    height={164.4}
                                    alt="Vercel Web Analytics"
                                />
                            </div>

                            <ol className="px-4 py-1">6- Cuando compras tu dominio te pregunta si quieres importar o asociarlo a algún otro dominio. En este caso lo asociarías
                            al subdominio de Vercel. Si has comprado el Hosting podrías importarlo también a Hostinger. Si no lo haces, simplemente tienes que importar desde 
                            Vercel tres enlaces para establecer la conexión de los dos dominios.</ol>
                        </div>
                        <br />
                        <div><b>¡Listo, ya formas parte de Google!</b>  Hay opciones de Google que tardarán un tiempo en estar disponibles, lo podrás gestionar todo desde el panel
                        de control de Google Search Console.
                        </div>
                        <br />

                        <div>Si has llegado hasta aquí y quieres saber quién visita tu web, puedes leer mi post {' '}
                            <Link href="/frontend-development-tips/10" className="text-violetitle">¿Quiéres saber cuántas personas visitan tu web?</Link></div>
                    </div>
                </article>
                <div className="mb-20"></div>
                <FooterBlack />
            </div>


        </>
    )
}
