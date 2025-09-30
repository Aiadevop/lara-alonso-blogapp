import Image from "next/image";
import { Footer } from "../components/ui/Footer";
import { Linkgit } from "../components/linkgit";
import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Lara Alonso @aiadevop',
  description: 'Portfolio de Lara Alonso @aiadevop - Desarrolladora Frontend especializada en React, Next.js y JavaScript. Descubre mis proyectos y experiencia.',
  keywords: ['portfolio', 'desarrolladora frontend', 'React', 'Next.js', 'JavaScript', 'Lara Alonso', 'aiadevop'],
  openGraph: {
    title: 'Portfolio - Lara Alonso @aiadevop',
    description: 'Portfolio de Lara Alonso @aiadevop - Desarrolladora Frontend especializada en React, Next.js y JavaScript.',
    type: 'website',
    url: 'https://lara-alonso.com/lara-alonso-portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png',
        width: 1200,
        height: 630,
        alt: 'Lara Alonso Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Lara Alonso @aiadevop',
    description: 'Portfolio de Lara Alonso @aiadevop - Desarrolladora Frontend especializada en React, Next.js y JavaScript.',
    images: ['https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png'],
  },
  alternates: {
    canonical: '/lara-alonso-portfolio',
  },
}

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Lara Alonso @aiadevop</title>
        <meta name="description" content="Portfolio de Lara Alonso @aiadevop - Desarrolladora Frontend especializada en React, Next.js y JavaScript. Descubre mis proyectos y experiencia." />
        <meta name="keywords" content="portfolio, desarrolladora frontend, React, Next.js, JavaScript, Lara Alonso, aiadevop" />
        <meta property="og:title" content="Portfolio - Lara Alonso @aiadevop" />
        <meta property="og:description" content="Portfolio de Lara Alonso @aiadevop - Desarrolladora Frontend especializada en React, Next.js y JavaScript." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lara-alonso.com/lara-alonso-portfolio" />
        <meta property="og:image" content="https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png" />
        <link rel="canonical" href="https://lara-alonso.com/lara-alonso-portfolio" />
      </Head>
      
      <div className="bg-[#D9D9D7] min-h-screen">
        <Navbar />
        
        {/* Hero Section Mejorado */}
        <section className="flex flex-col mt-20" id="hero">
          <div className="flex overflow-hidden mt-[-12rem] 3xl:mt-[-20rem] w-auto justify-center items-center">
            <Image
              src="/img/inicio.jpg"
              width={1960}
              height={1358}
              alt="Lara Alonso inicio"
              className="hidden sm:block min-h-screen object-cover"
              priority
            />
            <Image
              src="/img/inicioMovil.jpg"
              width={1300}
              height={1295}
              alt="Lara Alonso inicio móvil"
              className="min-h-screen object-cover sm:hidden"
              priority
            />
          </div>
          
          {/* Información personal optimizada */}
          <div className="mx-auto max-w-5xl px-6 pt-12 items-center text-lg leading-8 text-black">
            <div className="mt-10 text-left text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Lara Alonso
              </span>
            </div>
            <br />
            <p className="text-lg leading-relaxed text-gray-800">
              No se trataba solamente de crear una web donde mostrar mis conocimientos.
              Es una forma de ayudar a otros a emprender su camino en el mundo web.
              Mi trayectoria comenzó en la Ingeniería Industrial, pero mi amor por el diseño y
              la tecnología me llevó a completar un FP en Desarrollo de Aplicaciones Web y dedicarme al mundo de la programación. 
              Actualmente, estoy cursando un máster en Ciencia de Datos, combino desarrollo frontend y backend con análisis de datos.
            </p>
            <div className="flex mt-10">
              <Linkgit />
            </div>
          </div>
        </section>
        
        {/* Sección de Proyectos Mejorada */}
        <section className="flex justify-center py-16" aria-labelledby="projects-heading">
          <div className="2md:flex justify-around lg:gap-20 max-w-5xl mt-32">
            <a href="https://www.lara-alonso.com/" className="group" aria-label="Visitar lara-alonso.com">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/img/mock1.jpg"
                  width={300}
                  height={1316}
                  alt="www.lara-alonso.com"
                  className="h-[600px] w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">Portfolio Personal</h3>
                  <p className="text-sm">Mi sitio web personal</p>
                </div>
              </div>
            </a>
            
            <a href="https://github.com/Aiadevop?tab=repositories" className="group" aria-label="Ver repositorios de GitHub">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/img/mock3.jpg"
                  width={300}
                  height={1316}
                  alt="aplicación ChatGPT"
                  className="h-[600px] w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">Aplicación ChatGPT</h3>
                  <p className="text-sm">Proyecto con IA</p>
                </div>
              </div>
            </a>
            
            <a href="https://github.com/Aiadevop/hebe-web" className="group" aria-label="Ver proyecto Hebe Web">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/img/mock2.jpg"
                  width={300}
                  height={1316}
                  alt="gimnasio"
                  className="h-[600px] w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">Hebe Web</h3>
                  <p className="text-sm">Aplicación web</p>
                </div>
              </div>
            </a>
          </div>
        </section>
        
        {/* Sección de Servicios Mejorada */}
        <section className="mx-auto max-w-5xl px-6 pt-12 pb-36 items-center text-lg leading-8 text-black" aria-labelledby="services-heading">
          <div className="mt-10 text-left text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Animaciones y efectos para tus webs
            </span>
          </div>
          <br />
          <p className="text-lg leading-relaxed text-gray-800">
            Hago más atractiva y dinámica tu web para que el tráfico sea mayor. Sorprende a tus visitantes con efectos como el efecto Parallax
            o con animaciones de los elementos de los botones.
          </p>
        </section>
        
        {/* Efecto Parallax - Proyecto de Ciencia de Datos */}
        <section className="parallax bg-custom1 bg-fixed bg-center bg-no-repeat bg-cover h-[1500px]" aria-label="Proyecto de análisis de datos"></section>

        {/* Sección de Análisis Exploratorio - Diseño moderno y accesible */}
        <section className="texto leading-8 text-black h-[500px] p-8 text-lg md:text-3xl flex items-center justify-center align-middle" aria-labelledby="data-analysis-heading">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl" aria-hidden="true">📊</span>
                </div>
                <h2 id="data-analysis-heading" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Análisis Exploratorio
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-2xl mb-2" aria-hidden="true">🔍</div>
                  <h3 className="font-semibold text-lg mb-2">Exploración de Datos</h3>
                  <p className="text-sm text-gray-600">Identificando patrones ocultos</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-2xl mb-2" aria-hidden="true">📈</div>
                  <h3 className="font-semibold text-lg mb-2">Visualización</h3>
                  <p className="text-sm text-gray-600">Gráficos que cuentan historias</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-2xl mb-2" aria-hidden="true">🧠</div>
                  <h3 className="font-semibold text-lg mb-2">Machine Learning</h3>
                  <p className="text-sm text-gray-600">Algoritmos inteligentes</p>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Ver Proyecto Completo
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <div className="parallax2 bg-custom2 bg-fixed bg-center bg-no-repeat bg-cover h-[1000px]" aria-label="Modelado de datos"></div>

        {/* Sección de Modelado Predictivo - Diseño moderno y accesible */}
        <section className="texto leading-8 text-black h-[500px] p-8 text-lg md:text-3xl flex items-center justify-center align-middle" aria-labelledby="predictive-modeling-heading">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl" aria-hidden="true">🤖</span>
                </div>
                <h2 id="predictive-modeling-heading" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Modelado Predictivo
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                <div className="text-center">
                  <div className="text-4xl mb-3" aria-hidden="true">📊</div>
                  <h3 className="font-semibold text-lg mb-2">Preparación de Datos</h3>
                  <p className="text-gray-600">Limpieza y transformación</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3" aria-hidden="true">🎯</div>
                  <h3 className="font-semibold text-lg mb-2">Entrenamiento</h3>
                  <p className="text-gray-600">Optimización de modelos</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3" aria-hidden="true">🚀</div>
                  <h3 className="font-semibold text-lg mb-2">Despliegue</h3>
                  <p className="text-gray-600">Modelos en producción</p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-xl border border-green-200">
                  <p className="text-lg font-semibold text-gray-800">
                    &ldquo;Los datos no mienten, pero necesitan ser interpretados con inteligencia&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="parallax3 bg-custom3 bg-fixed bg-center bg-no-repeat bg-cover h-[1000px]" aria-label="Resultados y visualización"></div>
        
        {/* Botón "Volver arriba" mejorado con accesibilidad */}
        <div className="fixed bottom-8 right-8 z-50">
          <a 
            href="#hero" 
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            aria-label="Volver arriba"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
        
        <Footer />
      </div>
    </>
  )
}
