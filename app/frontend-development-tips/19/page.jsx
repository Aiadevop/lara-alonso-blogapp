"use client";
/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import Navbarblack from "@/app/components/navbar";
import Head from "next/head";
import Link from "next/link";
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react';
import CodeSupa from "@/app/components/codesupa";



export default function Page19() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      const fetchCountries = async () => {
        const supabase = await createClient(  
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
        const { data } = await supabase.from("countries").select();
        setCountries(data || []);
      };
  
      fetchCountries();
    }, []);

    return (
        <>
            <Head>
                <title>Lara Alonso aiadevop| Blog Next.js React</title>
            </Head>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl px-10">Como conectarse con Supabase y tener tu base de datos SQL de forma gratuita</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2024-07-11 ">{' '}02/01/2025</time>
                        </div>
                    </div>
                    <div><b className="text-xl text-violetitle">Necesitas conectarte a una base de datos SQL con Supabase, 500MB de capa gratuita.</b></div>
                    <div className="text-gray-900">
                        <div><b>Vamos a conectarnos a la base de datos Supabase </b>,en su capa de datos gratuita para poder tener nuestra conexión a una base de datos SQL.</div>
                        <br />
                        <div>
                            Como mi proyecto de Next.js ya está creado, voy a instalar las dependencias npm para JS <b className="text-violetitle">
                                <Link href="https://supabase.com/docs/reference/javascript/installing" target="blank"> https://supabase.com/docs/reference/javascript/installing </Link>.</b>
                        </div>
                        <div>
                            Si vais a comenzar un nuevo proyecto en Next.js tenéis toda la información en la web oficial <b className="text-violetitle">
                                <Link href="https://supabase.com/docs/guides/getting-started/quickstarts/nextjs" target="blank"> https://supabase.com/docs/guides/getting-started/quickstarts/nextjs </Link>.</b>
                        </div>
                        <br />
                        <div>
                            1- Instalar las dependiencias <b>npm install @supabase/supabase-js.</b>
                        </div>
                        <br />
                        <div>
                            2- Creamos una cuenta en Supabase. Tendremos un entorno donde crear directamente nuestras bases de datos con SQL con el SQL Editor y podremos visualizar de forma muy sencilla
                            nuestras tablas en el Table Editor
                        </div>
                        <br/>
                        <div>
                            <a href="https://github.com/Aiadevop/lara-alonso-blogapp/tree/main/app"
                                target="blank">
                                <img
                                    src="https://res.cloudinary.com/dguhnftxe/image/upload/v1735843547/blog/supa2_sp3jqb.jpg"
                                    width={400}
                                    height={400}
                                    alt="supabase"
                                    className="w-full"
                                />
                            </a>
                        </div>
                        <br />
                        <div>
                            3- Hacer la llamada a nuestra tabla countries desde nuestra vista. Primero creamos nuestras variables .env NEXT_PUBLIC_SUPABASE_URL,
                            NEXT_PUBLIC_SUPABASE_ANON_KEY y a continuación hacemos la llamada a nuestra base de datos.
                        </div>
                        <br/>
                        <CodeSupa/>
                        <br />
                        <div>Y ya nos devolverá la data de nuestra tabla.</div>
                        <br />                        
                        {JSON.stringify(countries, null, 2)}
                    </div>
                    <div>Listo ¡¡¡¡¡ Si has llegado hasta aquí y quieres saber como desplegar tu código en Vercel, aquí te dejo el post {' '}
                            <b><Link href="/frontend-development-tips/11" className="text-violetitle">Como subir mi aplicación a Vercel</Link></b></div>
                </article>
                <div className="mb-20"></div>
                <FooterBlack />
            </div>
        </>
    )
}

{/* {< pre > { JSON.stringify(data, null, 2) }</pre>} */ }