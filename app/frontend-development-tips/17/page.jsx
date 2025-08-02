/* eslint-disable @next/next/no-img-element */
import ArrowBack from "@/app/components/arrowback";
import ArrowSlide from "@/app/components/arrowslide";
import { FooterBlack } from "@/app/components/footerblack";
import Navbarblack from "@/app/components/navbar";
import Head from "next/head";




export default function Page17() {


    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className="bg-black">
                <Navbarblack />

                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl px-10">Crea un efecto Parallax</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-07-10 ">{' '}12/03/2024</time>
                        </div>
                    </div>
                    <div className="parallax bg-custom1 bg-fixed bg-center bg-no-repeat bg-cover h-[750px]"></div>

                    <div className="texto  leading-8 text-black  h-[150px] p-8 text-lg md:text-3xl flex items-center justify-center align-middle">
                        Disfruta de nuestra masa artesanal
                    </div>
                    <div className="parallax2 bg-custom2 bg-fixed bg-center bg-no-repeat bg-cover h-[750px]"></div>

                    <div className="texto  leading-8 text-black h-[150px] p-8  text-lg md:text-3xl flex items-center justify-center align-middle">
                        Cocinada en horno de leña
                    </div>

                    <div className="parallax3 bg-custom3 bg-fixed bg-center bg-no-repeat bg-cover h-[750px]"></div>
                    <div className="texto  leading-8 text-black h-[200px] p-8   text-lg md:text-3xl flex items-end justify-center align-middle">
                        <ArrowSlide texto="Reserva hoy mismo" />
                    </div>
                    <a href="https://github.com/Aiadevop/lara-alonso-blogapp/blob/main/app/frontend-development-tips/17/page.jsx">
                        <ArrowBack texto="Mira todo el código en mi Github" />
                    </a>
                </article>
                <div className="mb-20"></div>
                <FooterBlack />
            </div>
        </>
    )
}
