/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import { FooterPost } from "@/app/components/footerpost";
import Navbarblack from "@/app/components/navbarblack";
import Head from "next/head";
import Link from "next/link";


export default function Page4() {
    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog OpenAI ChatGPT</Head>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">Como generar un prompt en ChatGPT</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-05 ">{' '}05/07/2023</time>
                        </div>
                    </div>
                    <div className="text-gray-900">
                        <div><b className="text-xl text-violetitle">¿Quieres conseguir mejores resultados con ChatGPT?.</b> Aquí te muestro un esquema para mejorar tus prompts.</div>
                        <br />
                        <div className="flex items-center">
                            <img
                                className="flex flex-1 items-center justify-center flex-col ml-1"
                                src="/img/esquemaChatGPT.png "
                                width={819.2}
                                height={614.4}
                                alt="Esquema ChatGPT"
                            />
                        </div>
                        <br />
                        <div>Aquí tenéis un ejemplo de una buen prompt</div>
                        <br />
                        <div><b>¿Quién soy?</b></div>
                        <div><b>Soy </b> instructora en línea en varias plataformas. <b>Me gusta</b> enseñar a la gente y <b>solía ser </b>
                            freelance en línea. Antes de eso yo editaba vídeos.</div>

                        <br />
                        <div><b>¿Quién es ChatGPT?</b></div>
                        <div>En este escenario específico <b>actuarás como </b> un vendedor de cursos en línea con más de 10 años de experiencia en marketing.  <b>Tienes </b>
                            cursos online con más de 10.000.000 de suscriptores.  <b>Eres </b>un profesional en términos de comercialización de cursos en línea.</div>

                        <br />
                        <div><b>Topic (Tema)</b></div>
                        <div>El <b>tema principal </b> de este debate es : &#34; &#34; &#34;Promoción y marketing de cursos online&#34; &#34; &#34;.</div>

                        <br />
                        <div><b>Contexto</b></div>
                        <div><b>Tengo </b> Tengo un curso en línea en el que se enseñó a utilizar a DALL-E 2, <b>pero</b> casi no hay inscripciones,
                            excepto las que tengo de amigos y familiares. <b>He intentado</b> promorcionarlo en varios grupos de facebook, pero sin resultados.
                            <b>No tengo</b> muchas experiencia en términos de marketing y <b>mi presupuesto </b>es limitado. <b>Contraté </b> a un artista
                            para crear una buena miniatura, por lo que la miniatura se ve impresionante. Definitivamente no es el problema. El trailer también está bien hecho. </div>

                        <br />
                        <div><b>Tarea que debes hacer</b></div>
                        <div><b>Quiero que </b> generes una estructura o un plan de marketing que pueda seguir para que mi curso DALL-E 2 consiga más inscripciones en las
                            próximas semanas. </div>

                        <br />
                        <div>Y nunca debemos olvidar generar feedback si la respuesta no encaja exactamente con lo que buscamos para perfeccionarla.</div>
                        <br />

                        <div><b>Feedback</b></div>
                        <div><b>Me falto añadir </b> mi público objetivo. Hazme preguntas de una en una , esperando mi respuesta para hacerme la siguiente pregunta
                            para que pudas conocer cual es mi público objetivo. </div>


                        <br />
                        <div>Si has llegado hasta aquí y quieres saber más de ChatGPT puedes leer mi post de {' '}
                            <Link href="/frontend-development-tips/5" className="underline">¿Por qué ChatGPT me devuelve una respuesta tan rara?</Link></div>
                    </div>
                    <FooterPost />
                </article>
                <FooterBlack />
            </div>


        </>
    )
}
