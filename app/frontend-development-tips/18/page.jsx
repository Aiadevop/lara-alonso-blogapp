"use client";
/* eslint-disable @next/next/no-img-element */
import { FooterPost } from "@/app/components/footerpost";
import Navbar from "@/app/components/navbar";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from 'react';



export default function Page18() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/marvel-endpoint');
                console.log('response',response);
                if (!response.ok) {
                    console.log(response);
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
        };
    
        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Lara Alonso aiadevop| Blog Next.js React</title>
            </Head>
            <div className="bg-black">
                <Navbar />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl px-10">Fetch a la API de Marvel</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2024-07-11 ">{' '}27/07/2024</time>
                        </div>
                    </div>
                    <div><b className="text-xl text-violetitle">Como conectarnos con una API y obtener resultados tan chulos como estos</b></div>
                    <div className="text-gray-900">
                        <div><b>Vamos a conectarnos a la API de Marvel </b>,ya que tiene mucho contenido para poder practicar y trabajar con ella.</div>
                        <br />
                        <div>
                            Tenéis toda la información en la web oficial <b className="text-violetitle">
                                <Link href="https://www.marvel.com/" target="blank"> https://www.marvel.com/ </Link>.</b>
                        </div>
                        <br />
                        <div><b>Pasos para extraer toda la data y después darle estilos en nuestra web:</b></div>
                        <br />
                        <div>1. Lo primero es crearte un cuenta <b className="text-violetitle">
                            <Link href="https://developer.marvel.com/" target="blank">  Marvel Developer Acount</Link></b>. Debes aceptar las condiciones de uso
                            como son por ejemplo incluir links en sus fotografías a su página y deberás obtener tu API key. Una pública y una privada, que te
                            permitirá hacer hasta 3000 llamadas diarias. </div>
                        <br />
                        <div>
                            2. Leyendo la documentación te indica como debes utilizar estas API key.
                            Tendrás tres variables: <br />
                            - publickey <br />
                            - privatekey <br />
                            - apiBaseUrl que es: https://gateway.marvel.com/v1/public <br />
                            <br />
                            Para crear la URL debes: https://gateway.marvel.com/v1/public/comics?ts=$&#123;tsHash&#125;&apikey=$&#123;publickey&#125;&hash=$&#123;hash&#125;<br /><br />
                            tsHash= valor aletorio que le quieras poner, por ejemplo 600<br />
                            publickey = es la clave pública que obtuviste de la página de Marvel<br />
                            hash =md5 &#40;tsHash + privatekey + publickey&#41;<br />
                        </div>
                        <br />
                        <div>
                            Extraemos toda nuestra data con la función GET. Yo estoy trabajando con Next.js 13 y React 18 en este proyecto.
                        </div>
                        <br/>
                        <div>
                            <a href="https://github.com/Aiadevop/lara-alonso-blogapp/tree/main/app"
                                target="blank">
                                <img
                                    src="https://res.cloudinary.com/nodefacebook/image/upload/v1722086574/marvelapi_binjvo.jpg"
                                    width={400}
                                    height={400}
                                    alt="route.js get data"
                                    className="w-full"
                                />
                            </a>
                        </div>
                        <br />
                        <div> 
                            3. Con useEffect llamamos a nuestra función para obtener la data <br/><br/>
                            - Usamos un useState para mostrar un estado inicial de data y error vacío y un setData que nos devolverá el valor de la data<br/>
                            - Con la función asíncrona llamamos al api/marvel-endpoint que es la carpeta donde hemos creado nuestro route.js.<br/>
                            - Si obtenemos un result actualizará setData.<br/><br/>
                  
                            <a href="https://github.com/Aiadevop/lara-alonso-blogapp/tree/main/app/frontend-development-tips/18"
                                target="blank">
                                <img
                                    src="https://res.cloudinary.com/nodefacebook/image/upload/v1722087087/fetchdata_mfod8h.jpg"
                                    width={400}
                                    height={400}
                                    alt="route.js get data"
                                    className="w-full"
                                />
                            </a>                       
                        </div><br/>
                        <div>
                            Pulsando en las capturas puedes acceder al código completo.<br/><br/>
                            4.  Ya solo nos queda mapear el resultado para lograr algo como esto: <br/>
                        </div>                        
                    </div>
                    {error && <p>Error: {error}</p>}
                    {data && data.data && data.data.results ? (
                        <>
                            <div className="comics-container grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  justify-items-center p-5">
                                {data.data.results.map((comic, index) => (
                                    !comic.thumbnail.path.includes('not_available') && (
                                        <a key={comic.id} href={comic.urls[index % comic.urls.length]?.url} target="blank">
                                            <div className="comic-item bg-neutral-300 min-h-[260px] min-w-[200px] mb-7 border border-solid border-blue-700 rounded-lg ">
                                                <img
                                                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                                    width={200}
                                                    height={200}
                                                    style={{ objectFit: 'cover' }}
                                                    alt={comic.title}
                                                    className="comic-image w-full h-[200px] object-cover"
                                                />
                                                <div className="flex justify-center align-middle text-center h-[60px]  bg-[#346DAD]">
                                                    <h5 className=" flex justify-center items-center text-center text-xs text-gray-50 comic-title max-w-[180px] ">{comic.title}</h5>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                ))}
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <div>
                            ¡¡¡OJO!!! No os olvideis <b className="text-violetitle">
                                <Link href="https://vercel.com/docs/projects/environment-variables" target="blank"> subir vuestro .env a Vercel.</Link></b> Pasa en las mejores familias 😂<br/><br/>   
                    </div>  
                    <div>Listo ¡¡¡¡¡ Si has llegado hasta aquí y quieres saber como desplegar tu código en Vercel, aquí te dejo el post {' '}
                            <b><Link href="/frontend-development-tips/11" className="text-violetitle">Como subir mi aplicación a Vercel</Link></b></div>
                    <FooterPost className="z-10" />
                </article>
            </div>
        </>
    )
}

{/* {< pre > { JSON.stringify(data, null, 2) }</pre>} */ }