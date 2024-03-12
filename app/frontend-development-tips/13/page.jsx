/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import { FooterPost } from "@/app/components/footerpost";
import Navbarblack from "@/app/components/navbar";
import Head from "next/head";
import Link from "next/link";


export default function Page13() {
    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">Donde subir las fotos de tu web. GRATIS¡¡¡</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-10 ">{' '}08/08/2023</time>
                        </div>
                    </div>
                    <div><b className="text-xl text-violetitle">¿Hay fotos que podías ver en desarrollo que no aparecen en producción?
                        No sabes como mejorar el rendimiento de las fotos tu web. Aquí te explico como hacerlo. </b></div>


                    <div className="text-gray-900">
                        <div>- Lo primero que debes hacer es asegurarte de que <b>el peso y el tamaño de tus fotos es el adecuado.</b></div>
                        <br />
                        <div className="pb-4">
                            <ol className="px-4 py-1">El tamaño de una foto no debe exceder los 100kb para que la carga de la imagen esté optimizado.</ol>
                            <ol className="px-4 py-1">Para esto con herramientas como Photoshop puedes exportar tu foto para web y simplemente ajustando
                                el tamaño y guardándolo en PNG conseguir reducir el peso. </ol>
                            <ol className="px-4 py-1">Hay otras herramientas online gratuitas como 
                            <b className="text-violetitle"><Link href="https://www.iloveimg.com/es"> I love IMG </Link></b>
                                que te permiten optimizar tus imágenes.</ol>
                        </div>
                        <br />
                        <div>- Cuando ya están optimizadas nuestras imágenes podemos buscar un<b> alojamiento en la nube </b>para ellas.</div>
                        <br />
                        <div className="pb-4">
                            <ol className="px-4 py-1">Personalmente a mi me gusta trabajar con
                            <b className="text-violetitle"><Link href="https://cloudinary.com/"> Cloudinary </Link></b>
                            .</ol>
                            <ol className="px-4 py-1">Simplemente arrastrando tus fotos a una carpeta te genera una url con la que establecer
                            una ruta en tu código </ol>                      
                        </div>
                        <br />
                        <div className="flex items-center justify-center py-3">
                            <img
                                className="max-w-m md:max-w-2xl"
                                src="https://res.cloudinary.com/dguhnftxe/image/upload/v1691480391/blog/cloudinary_qegeyv.png"
                                width={868}
                                height={526}
                                alt="Cloudinary"
                            />
                        </div>
                        <br/>
                        <div className="pb-4">- De esta forma siempre aparecerán tus fotos cargadas en producción sin errores y no generarás 
                            un peso mayor en tu web.                                     
                        </div>

                        <br />
                        <div><b>¡Listo, ya sabes dónde guardar tus imágenes!</b> 
                        </div>
                        <br />

                        <div>Si has llegado hasta aquí y quieres saber como aparecer en los rastreadores de Google, puedes leer mi post {' '}
                            <b><Link href="/frontend-development-tips/12" className="text-violetitle">Mi web no aparece en Google !!! 🙀</Link></b></div>
                    </div>
                    <FooterPost />
                </article>
                <FooterBlack />
            </div>


        </>
    )
}
