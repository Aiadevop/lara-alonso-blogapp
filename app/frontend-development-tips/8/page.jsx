/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import Navbar from "@/app/components/ui/Navbar";
import Head from "next/head";
import Link from "next/link";


export default function Page8() {
    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog VSC</Head>
            <div className="bg-black">
                <Navbar />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leading-tight md:text-6xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Mejora tu Visual Studio Code (VSC) con estas extensiones</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-06-12 ">{' '}12/07/2023</time>
                        </div>
                    </div>
                    <div><b className="text-xl text-violetitle">Mis cinco extensiones favoritas para VSC </b></div>
                    <div className="text-gray-900">
                        <div>Te ayudan a ser más productivo ya que te facilitan la vida a la hora de programar.</div>
                        <br />


                        <div className="sm:ml-8 text-lg"><b><Link href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag">1.Auto Close Tag: </Link></b>Cierra automáticamente todas las etiquetas que creas.</div>
                        <br />
                        <img
                            className="flex flex-1 items-center justify-center flex-col ml-8 hidden md:block"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245076/blog/closetag_bvrcs6.png"
                            width={819.2}
                            height={614.4}
                            alt="Auto Close Tag"
                        />
                        <img
                            className="flex flex-1 items-center justify-center flex-col block md:hidden"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245078/blog/closetagmv_phhzuq.png "
                            width={819.2}
                            height={614.4}
                            alt="Auto Close Tag"
                        />

                        <br />

                        <div className="sm:ml-8 text-lg"><b><Link href="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens">2.Error lens: </Link></b>Muestra los errores en el código de una manera más visual en la misma línea.</div>
                        <br />
                        <img
                            className="flex flex-1 items-center justify-center flex-col ml-8 hidden md:block"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245119/blog/errorlens_xnhn0b.png"
                            width={819.2}
                            height={614.4}
                            alt="Error Lens"
                        />
                        <img
                            className="flex flex-1 items-center justify-center flex-col block md:hidden"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245119/blog/errorlensmv_mze2bm.png "
                            width={819.2}
                            height={614.4}
                            alt="Error Lens"
                        />

                        <br />

                        <div className="sm:ml-8 text-lg"><b><Link href="https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja">3.Console ninja: </Link></b>Te permite ver los logs de la consola en el propio editor</div>
                        <br />
                        <img
                            className="flex flex-1 items-center justify-center flex-col ml-8 hidden md:block"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245119/blog/consoleninja_iq9jjq.png"
                            width={819.2}
                            height={614.4}
                            alt="Console Ninja"
                        />
                        <img
                            className="flex flex-1 items-center justify-center flex-col block md:hidden"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245119/blog/consoleninjamv_zr4rqj.png"
                            width={819.2}
                            height={614.4}
                            alt="Console Ninja"
                        />

                        <br />

                        <div className="sm:ml-8 text-lg"><b><Link href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">4.EsLint: </Link></b>
                            Te permite identificar problemas en tu código JavaScript y Typescript antes de ejecutarlo</div>
                        <br />
                        <img
                            className="flex flex-1 items-center justify-center flex-col ml-8 hidden md:block"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245119/blog/eslint_aysd0h.png "
                            width={819.2}
                            height={614.4}
                            alt="Eslint"
                        />
                        <img
                            className="flex flex-1 items-center justify-center flex-col block md:hidden"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245119/blog/eslintmv_qfashj.png"
                            width={819.2}
                            height={614.4}
                            alt="Eslint"
                        />

                        <br />

                        <div className="sm:ml-8 text-lg"><b><Link href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons">5.Fluent Icons:  </Link></b>
                            Mejora los iconos por defecto de Visual Studio Code</div>
                        <br />
                        <img
                            className="flex flex-1 items-center justify-center flex-col ml-8 hidden md:block"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245119/blog/fluenticons_jsn6cv.png "
                            width={819.2}
                            height={614.4}
                            alt="Fluent icons"
                        />
                        <img
                            className="flex flex-1 items-center justify-center flex-col block md:hidden"
                            src="https://res.cloudinary.com/dguhnftxe/image/upload/v1689245120/blog/fluenticonsmv_rf7hxa.png "
                            width={819.2}
                            height={614.4}
                            alt="Fluent icons"
                        />

                        <br />



                        <div>Si has llegado hasta aquí y quieres saber más sobre VSC, puedes leer mi post {' '}
                            <Link href="/frontend-development-tips/2" className="text-violetitle">Como poner Attach como debugger en VSC</Link></div>
                    </div>
                </article>
                <div className="mb-20"></div>
                <FooterBlack />
            </div>


        </>
    )
}
