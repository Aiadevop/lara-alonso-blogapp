
import Image from "next/image";
import { FooterBlack } from "../components/footerblack";
import Navbarblack from "../components/navbarblack";
import Link from "next/link";
import { Aboutme } from "../components/aboutme";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Linkgit } from "../components/linkgit";
import { CTA } from "../components/cta";
import Head from "next/head";



export default function Portfolio() {
  return (
    <>
       <Head>
        <title>Lara Alonso @aiadevop portfolio</title>
      </Head>
      <div className="bg-black">
        <Navbarblack />
        <div className="flex flex-col justify-center items-center mt-20">
          <Image
            src="/img/mycolor.jpeg"
            width={200}
            height={200}
            alt="Lara Alonso image"
            className="inline-block rounded-full "
          />
          <div className="mt-10 text-3xl text-gray-100">Hola, soy Lara!</div>
          <div className=" mx-auto max-w-5xl px-6 pt-12 items-center text-lg leading-8 text-gray-100 ">
            <p>Soy frontend developer y resido en España.
              Creo experiencias web y aplicaciones. Explora mi portfolio y descubre mis proyectos. </p>
            <div className="flex justify-center items-center"><b>¡Tu visión mi código!</b></div>
          </div>

        </div>
        <div className="flex justify-center items-center mt-10">
          <Linkgit/>
        </div>
        <Aboutme />
        <p className="hidden lg:block text-2xl font-semibold mx-auto lg:max-w-5xl mt-28 pb-8 mb-2">Habilidades</p>
        <p className="text-2xl font-semibold mx-auto ml-8 lg:max-w-5xl mt-24 pb-8 lg:hidden mb-2">Habilidades</p>
        <Skills />
        <p className="hidden lg:block text-2xl font-semibold mx-auto lg:max-w-5xl mt-24 pb-8">Proyectos</p>
        <p className="text-2xl font-semibold mx-auto ml-8 lg:max-w-5xl mt-24 pb-8 lg:hidden">Proyectos</p>
        <Projects/>
        <CTA/>
        <FooterBlack />
      </div>
    </>
  )
}
