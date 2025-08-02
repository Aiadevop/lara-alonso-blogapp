
import Image from "next/image";
import { Footer } from "../components/ui/Footer";
import { Linkgit } from "../components/linkgit";
import Head from "next/head";
import Navbar from "../components/ui/Navbar";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Lara Alonso @aiadevop portfolio</title>
      </Head>
      <div className="bg-[#D9D9D7]">
        <Navbar />
        <div className="flex flex-col mt-20">
          <div className="flex overflow-hidden mt-[-12rem] 3xl:mt-[-20rem] w-auto justify-center items-center">
            <Image
              src="/img/inicio.jpg"
              width={1960}
              height={1358}
              alt="Lara Alonso inicio"
              className="hidden sm:block min-h-screen object-cover"
            />
            <Image
              src="/img/inicioMovil.jpg"
              width={1300}
              height={1295}
              alt="Lara Alonso inicioMv"
              className="min-h-screen object-cover sm:hidden"
            />
          </div>
          
          <div className="mx-auto max-w-5xl px-6 pt-12 items-center text-lg leading-8 text-black">
            <div className="mt-10 text-left text-3xl font-bold">Lara Alonso</div>
            <br />
            <p className="text-lg leading-relaxed">
              No se trataba solamente de crear una web donde mostrar mis conocimientos.
              Es una forma de ayudar a otros a emprender su camino en el mundo web.
              Mi trayectoria comenzó en la Ingeniería Industrial, pero mi amor por el diseño y
              la tecnología me llevó a completar un FP en Desarrollo de Aplicaciones Web y dedicarme al mundo de la programación.
            </p>
            <div className="flex mt-10">
              <Linkgit />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="2md:flex justify-around lg:gap-20 max-w-5xl mt-32">
              <a href="https://www.lara-alonso.com/" className="group">
                <Image
                  src="/img/mock1.jpg"
                  width={300}
                  height={1316}
                  alt="www.lara-alonso.com"
                  className="h-[600px] w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <a href="https://github.com/Aiadevop?tab=repositories" className="group">
                <Image
                  src="/img/mock3.jpg"
                  width={300}
                  height={1316}
                  alt="aplicacion ChatGPT"
                  className="h-[600px] w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <a href="https://github.com/Aiadevop/hebe-web" className="group">
                <Image
                  src="/img/mock2.jpg"
                  width={300}
                  height={1316}
                  alt="gimnasio"
                  className="h-[600px] w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-36 items-center text-lg leading-8 text-black">
          <div className="mt-10 text-left text-3xl font-bold">Animaciones y efectos para tus webs</div>
          <br />
          <p className="text-lg leading-relaxed">
            Hago más atractiva y dinámica tu web para que el tráfico sea mayor. Sorprende a tus visitantes con efectos como el efecto Parallax
            o con animaciones de los elementos de los botones.
          </p>
        </div>
        
        <div className="parallax bg-custom1 bg-fixed bg-center bg-no-repeat bg-cover h-[1500px]"></div>

        {/* Sección de Pizza Artesanal - Diseño más sutil */}
        <div className="texto leading-8 text-black h-[500px] p-8 text-lg md:text-3xl flex items-center justify-center align-middle">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🍕</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Pizza Artesanal
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-2xl mb-2">👨‍🍳</div>
                  <h3 className="font-semibold text-lg mb-2">Chef Experto</h3>
                  <p className="text-sm text-gray-600">Cocinada por profesionales</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-2xl mb-2">🔥</div>
                  <h3 className="font-semibold text-lg mb-2">Horno de Leña</h3>
                  <p className="text-sm text-gray-600">Tradición auténtica</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-2xl mb-2">⭐</div>
                  <h3 className="font-semibold text-lg mb-2">Calidad Premium</h3>
                  <p className="text-sm text-gray-600">Ingredientes frescos</p>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
                  ¡Ordenar Ahora!
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="parallax2 bg-custom2 bg-fixed bg-center bg-no-repeat bg-cover h-[1000px]"></div>

        {/* Sección de Horno de Leña - Diseño más sutil */}
        <div className="texto leading-8 text-black h-[500px] p-8 text-lg md:text-3xl flex items-center justify-center align-middle">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🔥</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Horno de Leña
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                <div className="text-center">
                  <div className="text-4xl mb-3">🌲</div>
                  <h3 className="font-semibold text-lg mb-2">Leña Natural</h3>
                  <p className="text-gray-600">Sabor auténtico</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🌡️</div>
                  <h3 className="font-semibold text-lg mb-2">Temperatura Perfecta</h3>
                  <p className="text-gray-600">Cocción ideal</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">⏰</div>
                  <h3 className="font-semibold text-lg mb-2">Tiempo Preciso</h3>
                  <p className="text-gray-600">Cada minuto cuenta</p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border border-yellow-200">
                  <p className="text-lg font-semibold text-gray-800">
                    "El secreto está en el fuego lento y la paciencia del artesano"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax3 bg-custom3 bg-fixed bg-center bg-no-repeat bg-cover h-[1000px]"></div>
        
        {/* Botón "Volver arriba" mejorado */}
        <div className="fixed bottom-8 right-8 z-50">
          <a 
            href="#top" 
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            aria-label="Volver arriba"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
        
        <Footer />
      </div>
    </>
  )
}
