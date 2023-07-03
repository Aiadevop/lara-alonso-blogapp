/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import { FooterPost } from "@/app/components/footerpost";
import Navbarblack from "@/app/components/navbarblack";
import Link from "next/link";


export default function Page6() {
    return (
        <>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">Como conectarte a la API de OpenAI y configurarla</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-06-12 ">{' '}12/06/2023</time>
                        </div>
                    </div>
                    <div><strong className="text-xl">¿Trabajas con Nodejs o Phyton? OpenAI te lo pone muy fácil.</strong></div>
                    <br />
                    <div className="text-gray-900">
                        <div>OPENAI nos pone muy fácil integrarlo en nuestras aplicaciones, en el siguiente enlace nos da dos códigos básicos para que funcione en
                            Nodejs y Phyton</div>
                        <br />
                        <Link href="https://platform.openai.com/docs/quickstart/build-your-application">
                            <div className="bg-black text-white">
                                https://platform.openai.com/docs/quickstart/build-your-application

                            </div>
                        </Link>
                        <br />
                        <div><strong>Parámetros de la API que puedes configurar:</strong></div>
                        <br />
                        <div className="font-mono bg-black text-white">
                            <br />
                            <div className="ml-2">const completion = await openai.createCompletion &#40;&#123;</div>
                            <div className="ml-8"><strong>model: </strong>&#34;text-davinci-003&#34;, &#40;versión que hayas contratado&#41;</div>
                            <div className="ml-8"><strong>prompt: </strong>generatePrompt(prompt), &#40;aquí va el prompt que utilizas&#41;</div>
                            <div className="ml-8"><strong>temperature: </strong>0.6, &#40;0-1&#41;</div>
                            <div className="ml-12">0- &#40;Devuelve resultados idénticos o similares&#41;</div>
                            <div className="ml-12">1- &#40;Los resultados pueden ser muy diversos&#41;</div>
                            <div className="ml-8"><strong>max_tokens: </strong>150, &#40;Longitud de la respuesta de salida&#41;</div>
                            <div className="ml-8"><strong>top_p: </strong>1, &#40;0-1&#41; &#40;Cuanto más bajo es este valor más improbable será el resultado&#41;</div>
                            <div className="ml-8"><strong>frequency_penalty: </strong>0.5, &#40;0-1&#41; &#40;Cuanto más bajo disminuye la posibilidad de repetir palabras en otra línea&#41;</div>
                            <div className="ml-8"><strong>presence_penalty: </strong>0, &#40;0-1&#41; &#40;Cuanto más alto aumenta la posibilidad de que nuestro modelo hable sobre nuevos temas&#41;</div>
                            <br />
                        </div>
                        <br />
                        <div>Aquí tenéis algunos ejemplos:</div>
                        <br/>
                        <div className="flex items-center">
                            <img
                                className="flex flex-1 items-center justify-center flex-col ml-1"
                                src="/img/ejAPI1.png "
                                width={819.2}
                                height={614.4}
                                alt="Ejemplo API ChatGPT"
                            />
                        </div>
                        <br />
                        <div className="flex items-center">
                            <img
                                className="flex flex-1 items-center justify-center flex-col ml-1"
                                src="/img/ejAPI2.png "
                                width={819.2}
                                height={614.4}
                                alt="Ejemplo API ChatGPT"
                            />
                        </div>
                        <br />
                        <div className="flex items-center">
                            <img
                                className="flex flex-1 items-center justify-center flex-col ml-1"
                                src="/img/ejAPI3.png "
                                width={819.2}
                                height={614.4}
                                alt="Ejemplo API ChatGPT"
                            />
                        </div>
                        <br />
                        <div>Si has llegado hasta aquí y quieres saber más sobre prompts, puedes leer mi post {' '}
                            <Link href="/frontend-development-tips/4" className="underline">Como generar prompts increíbles en ChatGPT</Link></div>
                    </div>
                    <FooterPost />
                </article>
                <FooterBlack />
            </div>


        </>
    )
}
