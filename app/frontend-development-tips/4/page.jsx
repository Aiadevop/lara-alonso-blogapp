/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import Navbarblack from "@/app/components/navbar";
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
                        <h1 className="text-4xl font-bold leading-tight md:text-6xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Como generar un prompt en ChatGPT</h1>
                        <div className="text-sm text-gray-500 font-medium">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-500 hover:text-violet-600 transition-colors">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-05 " className="ml-2">{' '}05/07/2023</time>
                        </div>
                    </div>
                    <div className="text-gray-900">
                        <div><b className="text-2xl font-semibold text-violet-600 mb-4">¿Quieres conseguir mejores resultados con ChatGPT?.</b> Aquí te muestro un esquema para mejorar tus prompts.</div>
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
                        <div><b className="text-violet-600">¿Quién soy?</b></div>
                        <div><b className="text-violet-600">Soy </b> instructora en línea en varias plataformas. <b className="text-violet-600">Me gusta</b> enseñar a la gente y <b className="text-violet-600">solía ser </b>
                            freelance en línea. Antes de eso yo editaba vídeos.</div>

                        <br />
                        <div><b className="text-violet-600">¿Quién es ChatGPT?</b></div>
                        <div>En este escenario específico <b className="text-violet-600">actuarás como </b> un vendedor de cursos en línea con más de 10 años de experiencia en marketing.  <b className="text-violet-600">Tienes </b>
                            cursos online con más de 10.000.000 de suscriptores.  <b className="text-violet-600">Eres </b>un profesional en términos de comercialización de cursos en línea.</div>

                        <br />
                        <div><b className="text-violet-600">Topic (Tema)</b></div>
                        <div>El <b className="text-violet-600">tema principal </b> de este debate es : &#34; &#34; &#34;Promoción y marketing de cursos online&#34; &#34; &#34;.</div>

                        <br />
                        <div><b className="text-violet-600">Contexto</b></div>
                        <div><b className="text-violet-600">Tengo </b> Tengo un curso en línea en el que se enseñó a utilizar a DALL-E 2, <b className="text-violet-600">pero</b> casi no hay inscripciones,
                            excepto las que tengo de amigos y familiares. <b className="text-violet-600">He intentado</b> promorcionarlo en varios grupos de facebook, pero sin resultados.
                            <b className="text-violet-600">No tengo</b> muchas experiencia en términos de marketing y <b className="text-violet-600">mi presupuesto </b>es limitado. <b className="text-violet-600">Contraté </b> a un artista
                            para crear una buena miniatura, por lo que la miniatura se ve impresionante. Definitivamente no es el problema. El trailer también está bien hecho. </div>

                        <br />
                        <div><b className="text-violet-600">Tarea que debes hacer</b></div>
                        <div><b className="text-violet-600">Quiero que </b> generes una estructura o un plan de marketing que pueda seguir para que mi curso DALL-E 2 consiga más inscripciones en las
                            próximas semanas. </div>

                        <br />
                        <div>Y nunca debemos olvidar generar feedback si la respuesta no encaja exactamente con lo que buscamos para perfeccionarla.</div>
                        <br />

                        <div><b className="text-violet-600">Feedback</b></div>
                        <div><b className="text-violet-600">Me falto añadir </b> mi público objetivo. Hazme preguntas de una en una , esperando mi respuesta para hacerme la siguiente pregunta
                            para que pudas conocer cual es mi público objetivo. </div>


                        <br />
                        <div>Si has llegado hasta aquí y quieres saber más de ChatGPT puedes leer mi post de {' '}
                            <Link href="/frontend-development-tips/5" className="text-violet-600 hover:text-violet-700 font-semibold transition-colors">¿Por qué ChatGPT me devuelve una respuesta tan rara?</Link></div>
                    </div>
                </article>
                <div className="mb-20"></div>
                <FooterBlack />
            </div>


        </>
    )
}
