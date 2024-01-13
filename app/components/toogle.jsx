'use client'
import { useState } from 'react'

import { Switch } from '@headlessui/react'
import Head from 'next/head'
import Navbarblack from './navbarblack'
import Link from 'next/link'
import { FooterPost } from './footerpost'
import { FooterBlack } from './footerblack'
import { ButtonToogle } from './buttonToogle'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Toogle() {
    const [enabled, setEnabled] = useState(false)

    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className={classNames(!enabled ? 'bg-black' : "bg-fuchsia-900")}>
                <Navbarblack />
                <article className={classNames(
                    !enabled
                        ?
                        "max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20 rounded-md"
                        :
                        "max-w-5xl px-6 py-24 mx-auto space-y-12 text-gray-100 bg-gray-800 mt-20 rounded-md")}>                
                    <ButtonToogle enabled={enabled} setEnabled={setEnabled} classNames={classNames} />
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">Como hacer un modo oscuro con Tailwind.css, Next.js y React en una sola página.</h1>
                        <div className={classNames(!enabled ? "text-sm text-gray-400" : "text-sm text-gray-100")}>by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-10 ">{' '}25/08/2023</time>
                        </div>
                    </div>
                    <div><b className={classNames(!enabled ? "text-sm text-violetitle" : "text-sm text-fuchsia-300")}>¿Pero, para qué quiero yo incluir en mi web un tema oscuro? </b></div>



                    <div className={classNames(!enabled ? "text-gray-900" : "text-gray-100")}>
                        <div><b>Los temas oscuros permiten relajar la vista</b> y a menudo muchos visitantes y programadores tienen toda su configuración
                            en tema oscuro, resultando muy molesto visitar páginas que no respeten este esquema de colores por el alto contraste entre unas y otras
                            páginas.</div>
                        <br />
                        <div className='flex gap-5'><b>Lo primero, debes crear el Toogle para elegir el modo oscuro o claro </b> <ButtonToogle enabled={enabled} setEnabled={setEnabled} classNames={classNames} /></div>
                        <br />

                        <div><u>Recuerda que este proyecto está hecho en Next.js con React.</u> Y ¿por qué me dices esto?
                            <br />
                            <div className="ml-5 mt-5">1- <b>Un botón es un componente que puede utilizar un cliente.</b> Si recuerdas en Next.js 13 todos los componentes están renderizados en el servidor.
                                Y esto significa que, salvo que tu le indiques que es un <b>&#34; useclient &#34;</b>, es decir; un componente que va a utilizar el cliente, te devolverá un error ya que el
                                botón pertenece a la parte cliente. </div>
                            <br />
                            <div className="ml-5">Por lo tanto creamos un componente nuevo en nuestra carpeta components que se llamará toogle.jsx y después lo importaremos en la páginas
                                que nos gustaría utilizarlo.</div>
                            <br />
                            <div className="ml-5 mt-5">2- <b>Nuestro componente está creado en React por lo que hay que corregir el nombre de los elementos que nos proporciona Tailwind.css. </b>
                                En este <b><Link href="https://tailwindui.com/components/application-ui/forms/toggles" className={classNames(!enabled ? "text-sm text-violetitle" : "text-sm text-fuchsia-300")}>enlace </Link></b>
                                os dejo el código de tailwind.css para el toogle.
                                Y ahora os muestro el optimizado para React. Los iconos son de <b><Link href="https://heroicons.com/"
                                    className={classNames(!enabled ? "text-sm text-violetitle" : "text-sm text-fuchsia-300")}>heroicons.</Link></b></div>
                            <br />
                        </div>
                        <div className="lg:hidden ml-5 mt-5 mb-4">Tienes todo <b>el código</b> en este
                            <b><Link href="https://github.com/Aiadevop/lara-alonso-blogapp/blob/main/app/components/toogle.jsx" className={classNames(!enabled ? "text-sm text-violetitle" : "text-sm text-fuchsia-300")}> enlace.</Link></b></div>
                        <div className="hidden lg:flex mx-auto max-w-5xl px-6 flex-row justify-between items-center mb-4">
                            <pre className={classNames(!enabled ? "bg-black text-white text-lg rounded-md" : "bg-slate-700 text-white text-lg rounded-md")}><code>
                                <br />
                                <div className="ml-4">import &#123;useState&#125; from &#168;react&#168;</div>
                                <div className="ml-4">import &#123;Switch&#125; from &#168;@headlessui/react&#168;</div>

                                <br />
                                <div className="ml-4">function classNames &#40;...classes &#41; &#123;</div>
                                <div className="ml-8">return classes.filter(Boolean).join(&#34; &#34;)</div>
                                <div className="ml-4">&#125;</div>
                                <br />
                                <div className="ml-4">export default function Toogle &#40; &#41; &#123;</div>
                                <br />
                                <div className="ml-8">const [enabled, setEnabled] = useState(false);</div>
                                <br />

                                <div className="ml-8">return &#40;</div>
                                <div className="ml-12">&#8249; div className=&#34;flex justify-end gap-1&#34; &#8250;</div>
                                <div className="ml-16">&#8249;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; fill=&#34;none&#34; viewBox=&#34;0 0 24 24&#34;
                                    <div >strokeWidth=&#34;1.5&#34; stroke=&#34;currentColor&#34; className=&#34;w-6 h-6&#34;&#8250;
                                        &#8249;path strokeLinecap=&#34; round&#34; strokeLinejoin=&#34;round&#34;</div>
                                    <div>d=&#34; M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 </div>
                                    <div>1.591M5.25  12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z&#34; /&#8250;</div>
                                    &#8250;</div>
                                <div className="ml-16">&#8249;/svg &#8250;</div>
                                <br />

                                <div className="ml-16">&#8249; Switch</div>
                                <div className="ml-20">checked&#61;&#123;enabled&#125;</div>
                                <div className="ml-20">onChange&#61;&#123;setEnabled&#125;</div>
                                <div className="ml-20">className&#61;&#123; classNames</div>
                                <div className="ml-24">enabled ? &#34;bg-indigo-600&#34; : &#34;bg-gray-200&#34;,</div>
                                <div className="ml-24">&#34;relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors </div>
                                <div className="ml-24">duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2&#34;</div>
                                <div className="ml-20">&#41; &#125;</div>
                                <br />

                                <div className="ml-20">&#8249; span className=&#34;sr-only&#34;&#8250; Use setting &#8249;/span&#8250;</div>
                                <div className="ml-20">&#8249; span </div>
                                <div className="ml-24">aria-hidden &#61; &#34; true &#34;</div>
                                <div className="ml-24">className&#61;&#123; classNames</div>
                                <div className="ml-28">enabled ? &#34;translate-x-5&#34; : &#34;translate-x-0&#34;,</div>
                                <div className="ml-28">&#34;pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0  </div>
                                <div className="ml-28">transition duration-200 ease-in-out&#34;</div>
                                <div className="ml-24">&#41; &#125;</div>
                                <div className="ml-20">/&#8250;</div>
                                <div className="ml-16">&#8249; /Switch &#8250;</div>
                                <br />

                                <div className="ml-16">&#8249;svg xmlns=&#34;http://www.w3.org/2000/svg&#34; fill=&#34;none&#34; viewBox=&#34;0 0 24 24&#34;
                                    <div >strokeWidth=&#34;1.5&#34; stroke=&#34;currentColor&#34; className=&#34;w-6 h-6&#34;&#8250;
                                        &#8249;path strokeLinecap=&#34; round&#34; strokeLinejoin=&#34;round&#34;</div>
                                    <div>d=&#34;M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 </div>
                                    <div>9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z &#34; /&#8250;</div>
                                    &#8250;</div>
                                <div className="ml-16">&#8249; /svg &#8250;</div>
                                <div className="ml-16">&#8249; /div &#8250;</div>

                                <div className="ml-8">&#41;;</div>
                                <br />
                            </code></pre>

                        </div>
                        <div className="ml-5 mt-5">
                            3- Solo faltaría añadirle los ternarios a los elementos que recesitan un cambio de color en la página. Por ejemplo
                        </div>
                        <br />
                        <div className="lg:flex mx-auto max-w-5xl px-6 flex-row justify-between items-center mb-4">
                            <pre className={classNames(!enabled ? "bg-black text-white text-lg rounded-md w-full" : "bg-slate-700 text-white text-lg rounded-md w-full")}><code>
                                <br />
                                <div className="ml-4">&#8249; div className=classNames(</div>
                                <div className="ml-8">!enabled</div>
                                <div className="ml-8">? &#34;bg-black&#34;</div>
                                <div className="ml-8">: &#34;bg-fuchsia-900&#34; )</div>
                                <div className="ml-4">&#125; &#8250;</div>   
                                <br />
                            </code></pre>
                        </div>
                        <br />
                        <div>Podrías añadir el modo oscuro a toda tu web, configurando un tema de Tailwind.css, te dejo un
                            <b><Link href="https://gabrielsule.hashnode.dev/creando-dark-mode-en-react-con-tailwind"
                                className={classNames(!enabled ? "text-sm text-violetitle" : "text-sm text-fuchsia-300")}> enlace </Link></b> para que puedas ver como hacerlo.
                        </div>

                        <br />

                        <div>Listo ¡¡¡¡¡ Si has llegado hasta aquí y quieres saber como añadir filtros a tu Blog creado en Next.js o React puedes leer  {' '}
                            <b><Link href="/frontend-development-tips/7" className={classNames(!enabled ? "text-sm text-violetitle" : "text-sm text-fuchsia-300")}> mi post</Link></b></div>
                    </div>
                    <FooterPost />
                </article>
                <FooterBlack />
            </div>
        </>
    )
}