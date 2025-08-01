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
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              &quot; Explorando el mundo del diseño web &quot;
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Tendencias, inspiración y consejos
            </p>
          </div>

          <CategoryFilter onCategoryChange={handleCategoryChange} />

          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {mounted && filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
