/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import { FooterPost } from "@/app/components/footerpost";
import Navbarblack from "@/app/components/navbarblack";
import Link from "next/link";


export default function Page5() {
    return (
        <>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">¿Por qué ChatGPT me devuelve una respuesta tan rara?</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-06-12 ">{' '}05/07/2023</time>
                        </div>
                    </div>
                    <div className="text-gray-900">
                        <div><b className="text-xl text-violetitle">¿Cómo piensa ChatGPT?.</b></div>
                        <br />
                        <div>Lo primero que se explica en el curso de OPENAI para desarrolladores es que hay que tener dos cosas siempre en cuenta para hablar con una
                            inteligencia artificial <b>CLARIDAD Y TIEMPO</b> ¿y esto qué significa?</div>
                        <br />
                        <div><b>Claridad:</b></div>
                        <div>
                            <li>El contenido no debe ser ambiguo</li>
                            <li>No se deben utilizar negaciones</li>
                            <li>Ten en cuenta que ChatGPT lee palabra por palabra y las interpreta de forma independiente.</li>
                        </div>
                        <br />
                        <div>Aquí tenéis un ejemplo</div>
                        <div className="text-red-900"><b>Forma incorrecta:</b> &#34; Dame <b>algunas</b> ideas que <b>no sean aburridas</b> para crear vídeos de Youtube</div>
                        <div><b>Forma correcta:</b> &#34; Dame <b>15</b> ideas para crear videos de YouTube  <b> que los espectadores encuentren realmente divertidas.</b></div>
                        <br />
                        <div><b>Tiempo:</b></div>
                        <div>La inteligencia necesita tiempo para procesar las tareas sobre todo cuando estas son complejas, si no se le da ese tiempo los resultados pueden no ser tan específicos</div>
                        <br />
                        <div>Aquí tenéis un ejemplo</div>
                        <div className="text-red-900"><b>Forma incorrecta:</b> &#34; Necesito que generes las palabras clave para un comercio online de venta de cursos, con esas palabras clave genérame 
                        el SEO y a continuación vete preguntándome mi público objetivo &#34;</div>
                        <div><b>Forma correcta:</b> &#34; Necesito que generes las palabras clave de un comercio online de venta de cursos de dibujo técnico y me muestres el resultado.
                        Después de mostrarme el resultado anterior generarás el SEO de este comercio online teniendo en cuenta las palabras clave que has generado. Cuando termines me 
                        mostrarás el resultado del SEO.
                        Cuando termines de generar el SEO, me generarás preguntas de una en una y esperás que yo te responda sobre mi público objetivo.</div>
                        <br />
                        <div>¿Qué más tiene en cuenta ChatGPT?</div>
                        <br />
                        <div>
                            <li><b>Tono: </b>Si yo le hablo en tono coloquial o formal, el me contestará en el mismo tono.</li>
                            <li><b>Gramática: </b>Si escribo de forma incorrecta las palabras, puede interpretar que quiere que responda con errores gramaticales o no entender correctamente
                            a que me refiero</li>
                            <li><b>Idioma: </b>Todas las inteligencias trabajan mejor en inglés aunque luego traduzcamos el texto.</li>
                            <li><b>Especificidad: </b>No es lo mismo decir &#34; Háblame sobre los perros &#34;, que decir algo como &#34; Dime que tipos de razas de perros son mejores
                            para vivir en un apartamento pequeño, si nuestra familia tiene un niño &#34;</li>
                            <li><b>Longitud: </b>Debemos especificar la longitud de salida de la respuesta para mejores resultados. Por ejemplo: &#34; Escríbeme un texto de 50 palabras &#34;</li>
                       
                        </div>
                        <br/>
                        <div>Si has llegado hasta aquí y te gustaría saber como generar un buen prompt puedes leer mi artículo {' '}
                            <Link href="/frontend-development-tips/4" className="underline">Como generar prompts increíbles en ChatGPT</Link></div>
                    </div>
                    <FooterPost />
                </article>
                <FooterBlack />
            </div>


        </>
    )
}
