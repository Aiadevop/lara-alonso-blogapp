
"use client";
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
        {/* Hero mobile-first inspirado en Magpie */}
        <section className="relative isolate pt-28 sm:pt-36 pb-12 sm:pb-20 text-black">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                  Diseño responsive con enfoque mobile-first
                </h1>
                <p className="mt-4 text-base sm:text-lg leading-relaxed">
                  Inspirado en el case study de Magpie, reorganicé mi portfolio para priorizar
                  claridad, jerarquía visual y una galería de pantallas scrollable.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#screens" className="px-5 py-3 rounded-full bg-black text-white text-sm sm:text-base hover:opacity-90 transition">
                    Ver pantallas
                  </a>
                  <a href="#case-study" className="px-5 py-3 rounded-full border border-black text-sm sm:text-base hover:bg-black hover:text-white transition">
                    Leer case study
                  </a>
                </div>
                <div className="mt-6">
                  <Linkgit />
                </div>
              </div>
              <div className="relative h-[380px] sm:h-[520px]">
                <Image
                  src="https://res.cloudinary.com/nodefacebook/image/upload/v1707993155/blogapp/pexels-ana-madeleine-uribe-2762942_e4rdam.jpg"
                  alt="Hero visual"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="rounded-2xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Galería horizontal con scroll-snap */}
        <section id="screens" className="relative py-10 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">Pantallas</h2>
              <div className="hidden sm:flex gap-3">
                <a href="#slide-1" className="px-3 py-2 rounded-full border border-black text-sm hover:bg-black hover:text-white transition">1</a>
                <a href="#slide-2" className="px-3 py-2 rounded-full border border-black text-sm hover:bg-black hover:text-white transition">2</a>
                <a href="#slide-3" className="px-3 py-2 rounded-full border border-black text-sm hover:bg-black hover:text-white transition">3</a>
              </div>
            </div>

            <div className="relative">
              <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6">
                <a id="slide-1" href="https://www.lara-alonso.com/" className="group snap-start shrink-0 w-[80%] sm:w-[420px]">
                  <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://res.cloudinary.com/nodefacebook/image/upload/v1707993155/blogapp/pexels-rene-strgar-10406184_nrz4qv.jpg"
                      alt="Proyecto 1"
                      fill
                      sizes="(max-width: 640px) 80vw, 420px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm text-black/70">Sitio personal</p>
                </a>

                <a id="slide-2" href="https://github.com/Aiadevop?tab=repositories" className="group snap-start shrink-0 w-[80%] sm:w-[420px]">
                  <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://res.cloudinary.com/nodefacebook/image/upload/v1707993155/blogapp/pexels-malidate-van-784633_leyuto.jpg"
                      alt="Repositorio"
                      fill
                      sizes="(max-width: 640px) 80vw, 420px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm text-black/70">Repos públicos</p>
                </a>

                <a id="slide-3" href="https://github.com/Aiadevop/hebe-web" className="group snap-start shrink-0 w-[80%] sm:w-[420px]">
                  <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://res.cloudinary.com/nodefacebook/image/upload/v1707993155/blogapp/pexels-ana-madeleine-uribe-2762942_e4rdam.jpg"
                      alt="Hebe Web"
                      fill
                      sizes="(max-width: 640px) 80vw, 420px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm text-black/70">Hebe Web</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Case Study */}
        <section id="case-study" className="py-12 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 text-center text-black">
            <h3 className="text-2xl sm:text-3xl font-bold">¿Quieres ver el proceso completo?</h3>
            <p className="mt-4 text-base sm:text-lg">Explora decisiones de UX/UI, wireframes y la evolución visual.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.lara-alonso.com/"
                className="px-6 py-3 rounded-full bg-black text-white hover:opacity-90 transition"
              >
                Leer case study
              </a>
              <a
                href="https://github.com/Aiadevop"
                className="px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition"
              >
                Ver código
              </a>
            </div>
          </div>
        </section>
        
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
                    &ldquo;El secreto está en el fuego lento y la paciencia del artesano&rdquo;
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
