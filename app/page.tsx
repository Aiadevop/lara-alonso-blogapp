'use client'
import { Footer } from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"
import PostCard from "./components/ui/PostCard"
import CategoryFilter from "./components/ui/CategoryFilter"
import { useState, useEffect } from "react"
import Head from "next/head"
import { Post } from "./lib/types"

// Importar los posts directamente
const posts = require('./post.json') as Post[]

export default function Blog() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])

  useEffect(() => {
    setMounted(true)
    // Inicializar con todos los posts en orden inverso
    setFilteredPosts([...posts].reverse())
  }, [])

  // Escuchar cambios en la categoría seleccionada
  useEffect(() => {
    if (!mounted) return

    if (!selectedCategory) {
      setFilteredPosts([...posts].reverse())
    } else {
      const filtered = posts.filter(post => post.category === selectedCategory)
      setFilteredPosts(filtered)
    }
  }, [selectedCategory, mounted])

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <Head>
        <title>Lara Alonso - Blog de Desarrollo Frontend | @aiadevop</title>
        <meta name="description" content="Descubre tendencias, inspiración y consejos prácticos para crear experiencias web excepcionales. Blog especializado en desarrollo frontend con Next.js, React y más." />
        <meta name="keywords" content="desarrollo frontend, Next.js, React, JavaScript, programación web, tutoriales, Lara Alonso" />
        <meta name="author" content="Lara Alonso @aiadevop" />
        <meta property="og:title" content="Lara Alonso - Blog de Desarrollo Frontend" />
        <meta property="og:description" content="Descubre tendencias, inspiración y consejos prácticos para crear experiencias web excepcionales." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lara-alonso.com" />
        <meta property="og:image" content="https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lara Alonso - Blog de Desarrollo Frontend" />
        <meta name="twitter:description" content="Descubre tendencias, inspiración y consejos prácticos para crear experiencias web excepcionales." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dguhnftxe/image/upload/v1690188790/laralonsoround_d4xtfk.png" />
        <link rel="canonical" href="https://lara-alonso.com" />
      </Head>
      
      <Navbar />
      
      <div className="group block flex-shrink-0" />
      
      {/* Hero Section Optimizado */}
      <section className="relative bg-gradient-to-br from-violet-50 via-white to-purple-50 overflow-hidden">
        {/* Background Pattern Mejorado */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-100/20 to-purple-100/20"></div>
        
        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-6 py-3 text-sm font-medium text-violet-800 mb-6 shadow-sm border border-violet-200">
                  <span className="mr-2">💻</span>
                  Hola, soy Lara Alonso
                </div>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                De Ingeniería Industrial a
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}la Ciencia de Datos
                </span>
              </h1>
              
              <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                Mi camino no fue lineal. Descubre cómo cambié de carrera, aprendí a programar y ahora ayudo a otros a hacer lo mismo. 
                <span className="font-semibold text-violet-700"> ¡Tu visión, mi código!</span>
              </p>
              
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    {filteredPosts.length} tutoriales prácticos
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    Desde mi experiencia real
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Filtros Mejorada */}
      <section className="bg-white py-16" aria-labelledby="filter-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="filter-heading" className="text-2xl font-bold text-gray-900 mb-4">
              ¿Qué tecnología te interesa?
            </h2>
            <p className="text-gray-600">
              Filtra por categoría y encuentra exactamente lo que necesitas aprender
            </p>
          </div>
          <CategoryFilter onCategoryChange={handleCategoryChange} />
        </div>
      </section>

      {/* Sección de Posts Optimizada */}
      <section className="bg-gray-50 py-16 sm:py-24" aria-labelledby="posts-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 id="posts-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              {selectedCategory ? `Todo sobre ${selectedCategory}` : 'Mis Tutoriales Favoritos'}
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              {selectedCategory 
                ? `Los mejores consejos y trucos que he aprendido sobre ${selectedCategory}`
                : 'Los tutoriales que más me han ayudado en mi carrera como desarrolladora'
              }
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {mounted && filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {mounted && filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">¡Ups! No hay tutoriales aquí</h3>
              <p className="text-gray-500">Prueba con otra categoría o vuelve pronto, siempre estoy creando contenido nuevo</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  )
}
