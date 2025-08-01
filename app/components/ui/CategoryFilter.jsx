'use client'
import { useState, useEffect } from 'react'

// Importar los posts directamente aquí para evitar problemas de hidratación
const posts = require('../../post.json')

export default function CategoryFilter({ onCategoryChange }) {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [clickedButton, setClickedButton] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Obtener categorías únicas
  const allCategories = mounted 
    ? [...new Set(posts.map(post => post.category))].sort()
    : []

  const handleCategoryChange = (category) => {
    setClickedButton(category)
    
    setTimeout(() => {
      setClickedButton(null)
    }, 250)

    setSelectedCategory(category)
    
    // Notificar al componente padre
    if (onCategoryChange) {
      onCategoryChange(category)
    }
  }

  const handleCategoryClean = () => {
    setSelectedCategory(null)
    
    // Notificar al componente padre
    if (onCategoryChange) {
      onCategoryChange(null)
    }
  }

  // Renderizar skeleton mientras se carga
  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap md:flex-row gap-5 pt-10 justify-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-20 h-20 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap md:flex-row gap-5 pt-10 justify-center">
        {allCategories.map(category => (
          <button
            key={category}
            type='button'
            className={classNames(
              'my-button w-20 h-20 items-center p-5 flex justify-center rounded-full transition duration-300 ease-in-out text-sm font-medium',
              selectedCategory === category 
                ? 'bg-slate-200 border-b-2 border-violetitle text-violetitle' 
                : 'bg-violetitle text-white hover:bg-purple-200 hover:border-b-2 hover:border-slate-200 hover:text-violetitle',
              clickedButton === category ? 'translate-y-1 scale-110 shadow-lg' : ''
            )}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {selectedCategory && (
        <button 
          className="text-violetitle mt-4 flex justify-start hover:underline hover:underline-offset-4 transition-colors duration-200" 
          onClick={handleCategoryClean}
        >
          Borrar filtros
        </button>
      )}
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 