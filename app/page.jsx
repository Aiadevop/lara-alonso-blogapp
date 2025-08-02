/* eslint-disable @next/next/no-img-element */
'use client'
import { Footer } from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"
import PostCard from "./components/ui/PostCard"
import CategoryFilter from "./components/ui/CategoryFilter"
import { useState, useEffect } from "react"
import Head from "next/head"

// Importar los posts directamente
const posts = require('./post.json')

export default function Blog() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState([])

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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <Head>
        <title>Lara Alonso lara-alonso vercel app @aiadevop </title>
      </Head>
      
      <Navbar />
      
      <div className="group block flex-shrink-0" />
      
      {/* Hero Section Mejorado */}
      <div className="relative bg-gradient-to-br from-violet-50 via-white to-purple-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <div className="inline-flex items-center rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-800 mb-6">
                  <span className="mr-2">🚀</span>
                  Blog de Desarrollo Frontend
                </div>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                Explorando el mundo del
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}diseño web
                </span>
              </h1>
              
              <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                Descubre tendencias, inspiración y consejos prácticos para crear experiencias web excepcionales
              </p>
              
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    {filteredPosts.length} artículos disponibles
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    Actualizado regularmente
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Filtros Mejorada */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CategoryFilter onCategoryChange={handleCategoryChange} />
        </div>
      </div>

      {/* Sección de Posts Mejorada */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              {selectedCategory ? `Artículos de ${selectedCategory}` : 'Últimos Artículos'}
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              {selectedCategory 
                ? `Explora todos los artículos sobre ${selectedCategory}`
                : 'Descubre las últimas tendencias y consejos en desarrollo web'
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
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron artículos</h3>
              <p className="text-gray-500">Intenta con otra categoría o vuelve más tarde</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  )
}
