/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import { FooterPost } from "@/app/components/footerpost";
import Navbarblack from "@/app/components/navbarblack";
import Head from "next/head";
import Link from "next/link";



export default function Page16() {


    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl px-10">Botón para añadir eventos al calendario de Google</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-10 ">{' '}14/01/2024</time>
                        </div>
                    </div>
                    <div><b className="text-xl text-violetitle">Tengo mi propia base de datos de eventos pero mis clientes quieren poder añadirlo a su calendario de Google, ¿cómo puedo hacer ésto? </b></div>
                    <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly">
                        <a
                            href="https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&dates=20240114T104500Z%2F20240126T001500Z&stz=Europe/Brussels&etz=Europe/Brussels&details=Como_crear_tu_evento_en_Google_Calendar&location=Hazlo_en_tu_web&text=lara-alonso.com"
                            target="_blank"
                        >
                            <button
                                className="bg-purple-300 text-gray-600 p-5 rounded-full font-semibold hover:bg-teal-200 hover:text-gray-800 hover:border-solid hover:border-[1px] hover:border-purple-300 hover:font-semibold min-w-[200px] min-h-[200px]"
                            >
                                Añadir evento <br /> Google Calendar
                            </button></a>
                        <div><b>Lo primero es generar un elemento button. </b><br />La clave está en el href que lleva asociado este button.</div>
                    </div>
                    <div className="text-gray-900">

                        <br />
                        <div>
                            <div className="pb-5">
                                Por ejemplo este botón lleva asociado este href:
                            </div>
                            <div className="bg-gray-800 text-gray-200 rounded-md p-2 break-all font-semibold">

                                https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&dates=20240114T104500Z%2F20240126T001500Z&stz=Europe/Brussels&etz=Europe/Brussels&details=Como_crear_tu_evento_en_Google_Calendar&location=Hazlo_en_tu_web&text=lara-alonso.com

                            </div>
                        </div>
                        <br />
                        <div>Traduzco que significa todo este código</div>
                        <br />
                        <div>
                            <div className="pb-5"><b>En dates añadirás la hora de inicio y la de fin:</b></div>
                            <div className="pb-2"><span className="bg-teal-100 rounded-md">20240114T</span><span className="bg-purple-200 rounded-md">104500Z</span>%
                                (<span className="bg-teal-100 rounded-md">dia de inicio 2024/01/14 y T para acabar la fecha </span><span className="bg-purple-200 rounded-md">hora de inicio 10:45:00 y Z para finalizar la hora</span>)</div>
                            <div className="pb-2"><span className="bg-teal-100 rounded-md">2F20240126T</span><span className="bg-purple-200 rounded-md">001500Z</span>&  (<span className="bg-teal-100 rounded-md">dia de fin 2024/01/26 y T para acabar la fecha</span> <span className="bg-purple-200 rounded-md">hora de fin 00:15:00 y Z para finalizar la hora</span>)</div>
                            <div className="pb-2">stz=Europe/Brussels&etz=Europe/Brussels (<b>¡OJO!</b> Esto le <b>añade</b> GMT <b>+01:00</b> por lo que la hora de inicio y la de fin que saldrán en
                                tu evento son 11:45:00 y 01:15:00)</div>
                        </div>

                        <br />
                        <div>
                            <div className="pb-5"><b>A partir del & tendrás el resto de detalles del evento:</b></div>
                            <div className="pb-2"><span className="bg-teal-100 rounded-md">&details=Como_crear_tu_evento_en_Google_Calendar </span>
                                (<span>Los detalles de tu evento que saldrán en el calendar</span>)</div>
                            <div className="pb-2"><span className="bg-purple-200 rounded-md">&location=Hazlo_en_tu_web </span>
                                (<span>Localización del evento</span>)</div>
                            <div className="pb-2"><span className="bg-gray-200 rounded-md">&text=lara-alonso.com </span>
                                (<span>Título del evento</span>)</div>
                        </div>

                        <br />
                        <div className="pb-5">
                            Así quedaría el evento en el Google Calendar, esto solo ocurrirá en dispositivos móviles si el cliente tiene Google Calendar instalado:</div><br />
                        <div className="flex items-center justify-center py-3">
                            <img
                                className="max-w-m md:max-w-2xl border-solid border-2 border-gray-600 rounded-2xl"
                                src="https://res.cloudinary.com/nodefacebook/image/upload/v1705163627/blogapp/calendar5_xgymtx.png"
                                width={868}
                                height={526}
                                alt="Captura Google Calendar"
                            />
                        </div>
                        <br />
                        <div>Os dejo el <a href="https://developers.google.com/calendar/api/v3/reference?hl=es-419" className="text-violetitle font-bold hover:underline-offset-2 hover:underline" >
                        enlace de Google de la documentación.
                        </a> <b>Os advierto que la documentación tiene errores </b> y no funcionan
                        los enlaces con el código que aparece. Si vale para poder añadir más configuraciones al calendario.</div><br />
                        
                        <br />
                        <div>Listo ¡¡¡¡¡ Si has llegado hasta aquí y quieres saber como aparecer en los rastreadores de Google, puedes leer mi post {' '}
                            <b><Link href="/frontend-development-tips/12" className="text-violetitle hover:underline-offset-2 hover:underline">Mi web no aparece en Google !!!</Link> 🙀</b></div>
                    </div>
                    <FooterPost />
                </article>
                <FooterBlack />
            </div>
        </>
    )
}
