/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import Navbar from "@/app/components/ui/Navbar";
import Head from "next/head";
import Link from "next/link";


export default function Page14() {
    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className="bg-black">
                <Navbar />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">¿Sabes que es un Sitemap y su importancia?</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-10 ">{' '}15/08/2023</time>
                        </div>
                    </div>
                    <div><b className="text-xl text-violetitle">Lo primero ¿qué es un sitemap? y ¿por qué necesito uno para mi web? </b></div>


                    <div className="text-gray-900">
                        <div><b>Un sitemap es un listado con las url que están en tu página. </b>y sirve para que Google
                            identifique todas las páginas que tiene tu web y sus diferentes enlaces.</div>
                        <br />
                        <div>
                            Por ejemplo https://www.lara-alonso.com/ es una, https://www.lara-alonso.com/lara-alonso-portfolio sería otra y así con todos los enlaces
                            posibles en tu web.
                        </div>
                        <br />
                        <div><b>Vale, y ¿tengo que hacerlo manualmente?, mi web tiene un montón de enlaces.</b></div>
                        <br />
                        <div>No es necesario, hay generadores automáticos. Yo he utilizado  <b className="text-violetitle">
                            <Link href=" https://www.xml-sitemaps.com/"> https://www.xml-sitemaps.com/ </Link></b>
                            para generar el sitemap de esta web. Es tan sencillo como introducir la url de tu web para poder generarlo.</div>

                        <br />
                        <div className="flex items-center justify-center py-3">
                            <img
                                className="max-w-m md:max-w-2xl"
                                src="https://res.cloudinary.com/dguhnftxe/image/upload/v1692028946/blog/sitemap_s1fscv.png"
                                width={868}
                                height={526}
                                alt="Sitemap"
                            />
                        </div>
                        <br />
                        <div><b>El archivo que recibes es un .xml y ahora ¿qué tienes que hacer con él?. </b></div>
                        <br />
                        <div>Ese archivo tiene que ir a la carpeta public de tu proyecto en Next.js</div><br />
                        <div>Para asegurarte que los robots de Google te reconocen debes crear también
                            en public un archivo <b>robots.txt </b>, con el siguiente código:</div>
                        <br />
                        <div className="bg-gray-900 text-white p-4 rounded-md">
                            # Allow all crawlers<br/>
                            User-agent: *<br/>
                            Allow: /sitemap.xml<br/>
                        </div>
                        <br/>
                        <div>Ahora debes subir tu sitemap a
                        <b className="text-violetitle">
                            <Link href="https://search.google.com/search-console/about"> Google Search Console </Link></b></div>
                        <br />
                        <div className="flex items-center justify-center py-3">
                            <img
                                className="max-w-m md:max-w-2xl"
                                src="https://res.cloudinary.com/dguhnftxe/image/upload/v1692028777/blog/googlesite_cremhs.png"
                                width={868}
                                height={526}
                                alt="Sitemap en Google Search Console"
                            />
                        </div>
                        <br />
                        <div>Listo ¡¡¡¡¡ Si has llegado hasta aquí y quieres saber como aparecer en los rastreadores de Google, puedes leer mi post {' '}
                            <b><Link href="/frontend-development-tips/12" className="text-violetitle">Mi web no aparece en Google !!! 🙀</Link></b></div>
                    </div>
                </article>
                <div className="mb-20"></div>
                <FooterBlack />
            </div>


        </>
    )
}
