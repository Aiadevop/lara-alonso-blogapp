
import Image from "next/image";
import { FooterBlack } from "../components/footerblack";
import Navbarblack from "../components/navbarblack";

export default function Portfolio() {
  return (
    <>
      <Navbarblack />
      <div className="flex flex-col justify-center items-center mt-20">
        <Image
          src="/img/mycolor.jpeg"
          width={200}
          height={200}
          alt="Lara Alonso image"
          className="inline-block rounded-full "
        />
        <div className="mt-10 text-2xl">Hey, I`m Lara!</div>
        <div className="mt-4 mr-10 ml-10 align-center text-lg leading-8 ">
          I`m a software developer based in Spain.I specialize in the frontend of exceptional websites, applications, and anything else you can think of.
        </div>

      </div>
      <div className="flex justify-center items-center mt-10">
        <Image
          src="/icons/linkedin.png"
          width={36}
          height={36}
          alt="linkedin icon"
          className="mr-5"
        />
        <Image
          src="/icons/githubig.png"
          width={36}
          height={36}
          alt="github icon"
          className="ml-5"
        />
      </div>
      <FooterBlack />

    </>
  )
}
