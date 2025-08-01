/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import Navbarblack from "@/app/components/navbar";
import Head from "next/head";
import Link from "next/link";


export default function Page3() {
    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leading-tight md:text-6xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Como crear rutas en Next.js 13</h1>
                        <div className="text-sm text-gray-500 font-medium">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-500 hover:text-violet-600 transition-colors">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-06-12 " className="ml-2">{' '}12/06/2023</time>
                        </div>
                    </div>
                    <div className="text-gray-900">
                        <div><b className="text-2xl font-semibold text-violet-600 mb-4">¿Te vuelves loc@ con Next.js 13 y sus rutas?.</b> En un momento vemos cuales son las diferencias.</div>
                        <br />
                        <div>En Next.js 12 o anterior usábamos la carpeta pages. Cada archivo en el <b>directorio /src/pages</b> se convierte automáticamente en una ruta accesible en tu aplicación.</div>
                        <div>Por ejemplo, si tienes un archivo pages/about.js, se creará una ruta /about en tu aplicación Next.js. Si tienes un archivo pages/blog/post.js, se creará una ruta /blog/post en tu aplicación.</div>
                        <div>Además de la estructura de archivos y carpetas, Next.js también proporciona una funcionalidad adicional para la creación de rutas utilizando parámetros dinámicos.
                            Puedes crear rutas dinámicas mediante la inclusión de corchetes [] en el nombre de un archivo dentro del directorio pages.
                            Por ejemplo, un archivo llamado pages/blog/[slug].js creará una ruta dinámica donde slug puede ser cualquier valor en la URL.</div>

                        <br />
                        <div><b className="text-2xl font-semibold text-violet-600 mb-4">Y entonces, ¿Qué ha cambiado en Next.js 13?</b></div>
                        <br />
                        <div>Lo primero decirte que puedes seguir utilizando la carpeta pages como hacías en las anteriores versiones. Simplemente cuando hagas las instalación de Next indica que quieres
                            seguir utilizando la carpeta /src</div>
                        <div>Pero si no es así, utilizarás directamente la carpeta app en vez de src. La carpeta app tiene ventajas contra la carpeta /src.</div>
                        <div>La nueva estructura nos permite incluir archivos adicionales que podemos utilizar</div>
                        <li className="mb-3"><b className="text-violet-600">Page:</b> Que será la página que queremos renderizar.</li>
                        <li className="mb-3"><b className="text-violet-600">Layout:</b> Componentes de UI que serán compartidos entre varias páginas, la documentación dice que sin problema podremos tener layouts dentro de otros layouts.</li>
                        <li className="mb-3"><b className="text-violet-600">Loading:</b> Componente que cargará automáticamente cuando tengamos un componente Suspense de React, cuando este termine de cargar, se reemplazará automáticamente.</li>
                        <li className="mb-3"><b className="text-violet-600">Error:</b> Al igual que el componente loading, es uno que funcionará junto al componente de React ErrorBoundary, el cual desplegará el componente error cuando uno de estos ocurra.</li>
                        <li className="mb-3"><b className="text-violet-600">Template:</b> Siendo opcional y similar a Layout con la diferencia que no guardará el estado de sus componentes hijos y los efectos serán reiniciados, este será como una recarga total cuando navegamos dentro de uno de estos componentes.</li>
                        <li className="mb-3"><b className="text-violet-600">Head:</b> Es un archivo opcional para cambiar el contenido de la etiqueta head.</li>
                        <br />
                        <img
                            className="flex flex-1 items-center justify-center flex-col ml-1"
                            src="/img/rutas.png "
                            width={819.2}
                            height={614.4}
                            alt="Ruta Next.js"
                        />
                        <br />
                        <div>Si has llegado hasta aquí y no sabes aún de que va Next.js puedes leer mi post {' '}
                            <Link href="/frontend-development-tips/1" className="text-violet-600 hover:text-violet-700 font-semibold transition-colors">Crea tu primera aplicación en Next.js 13</Link></div>
                    </div>
                </article>
                <div className="mb-20"></div>
                <FooterBlack />
            </div>


        </>
    )
}
