
import Image from "next/image";
import { FooterBlack } from "../components/footerblack";
import { Linkgit } from "../components/linkgit";
import Head from "next/head";
import Navbarblack from "../components/navbarblack";
import ArrowSlide from "../components/arrowslide";
import ArrowBack from "../components/arrowback";
import { Underlineup } from "../components/underlineup";
import { LetterDance } from "../components/letterdance";



export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Lara Alonso @aiadevop portfolio</title>
      </Head>
      <div className="bg-[#D9D9D7]">
        <Navbarblack />
        <div className="flex flex-col  mt-20">
          <div className="flex overflow-hidden mt-[-12rem] 3xl:mt-[-20rem] w-auto justify-center items-center">
            <Image
              src="/img/inicio.jpg"
              width={1960}
              height={1358}
              alt="Lara Alonso inicio"
              className="hidden sm:block min-h-screen object-cover "
            />
            <Image
              src="/img/inicioMovil.jpg"
              width={1300}
              height={1295}
              alt="Lara Alonso inicioMv"
              className=" min-h-screen object-cover sm:hidden"
            />
          </div>
          <div className=" mx-auto max-w-5xl px-6 pt-12 items-center text-lg leading-8 text-black ">
            <div className="mt-10 text-left text-3xl">Lara Alonso</div><br />
            <p>No se trataba solamente de crear una web donde mostrar mis conocimientos.
              Es una forma de ayudar a otros a emprender su camino en el mundo web.
              Mi trayectoria comenzó en la Ingeniería Industrial , pero mi amor por el diseño y
              la tecnología me llevó a completar un FP en Desarrollo de  Aplicaciones Web y dedicarme al mundo de la programación.</p>
            <div className="flex mt-10 ">
              <Linkgit />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="2md:flex justify-around lg:gap-20 max-w-5xl mt-32">
              <a href="https://www.lara-alonso.com/">
                <Image
                  src="/img/mock1.jpg"
                  width={300}
                  height={1316}
                  alt="www.lara-alonso.com"
                  className="h-[600px] w-auto !important"
                />
              </a>
              <a href="https://github.com/Aiadevop?tab=repositories">
                <Image
                  src="/img/mock3.jpg"
                  width={300}
                  height={1316}
                  alt="aplicacion ChatGPT"
                  className="h-[600px] w-auto !important"
                />
              </a>
              <a href="https://github.com/Aiadevop/hebe-web">
                <Image
                  src="/img/mock2.jpg"
                  width={300}
                  height={1316}
                  alt="gimnasio"
                  className="h-[600px] w-auto !important"
                />
              </a>
            </div>
          </div>
        </div>
        <div className=" mx-auto max-w-5xl px-6 pt-12 pb-36 items-center text-lg leading-8 text-black ">
          <div className="mt-10 text-left text-3xl animate-pulse">Animaciones y efectos para tus webs</div><br />
          <p>Hago más atractiva y dinámica tu web para que el tráfico sea mayor. Sorprende a tus visitantes con efectos como el efecto Parallax
            o con animaciones de los elementos de los botones.</p>
        </div>
        <div className="parallax bg-custom1 bg-fixed bg-center bg-no-repeat bg-cover h-[1500px]"></div>

        <div className="texto  leading-8 text-black  h-[500px] p-8 text-3xl flex items-center justify-center align-middle">
          <LetterDance />
        </div>
        <div className="parallax2 bg-custom2 bg-fixed bg-center bg-no-repeat bg-cover h-[1000px]"></div>

        <div className="texto  leading-8 text-black h-[500px] p-8  text-3xl flex items-center justify-center align-middle">
          <Underlineup/>
        </div>

        <div className="parallax3 bg-custom3 bg-fixed bg-center bg-no-repeat bg-cover h-[1000px]"></div>
        <div className="texto  leading-8 text-black h-[300px] p-8  text-3xl flex items-end justify-center align-middle">
          <ArrowSlide texto="Reserva hoy mismo" />
        </div>
        <a href="https://www.lara-alonso.com/lara-alonso-portfolio">
          <ArrowBack texto="Retrocede" />
        </a>
        <FooterBlack />
      </div>
    </>
  )
}
