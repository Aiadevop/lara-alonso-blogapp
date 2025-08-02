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
      <div className="flex flex-col items-center gap-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Filtrar por categoría</h3>
          <p className="text-gray-600">Selecciona una categoría para ver artículos específicos</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-24 h-12 bg-gray-200 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Filtrar por categoría</h3>
        <p className="text-gray-600">Selecciona una categoría para ver artículos específicos</p>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
        {allCategories.map(category => (
          <button
            key={category}
            type='button'
            className={classNames(
              'relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out transform',
              'hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2',
              selectedCategory === category 
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25' 
                : 'bg-white text-gray-700 border border-gray-200 hover:border-violet-300 hover:shadow-md hover:shadow-violet-500/10',
              clickedButton === category ? 'scale-110 shadow-xl' : ''
            )}
            onClick={() => handleCategoryChange(category)}
          >
            <span className="relative z-10">{category}</span>
            {selectedCategory === category && (
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
      
      {selectedCategory && (
        <div className="flex items-center gap-3 mt-4">
          <button 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors duration-200" 
            onClick={handleCategoryClean}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Limpiar filtros
          </button>
          <span className="text-sm text-gray-500">
            Mostrando artículos de: <span className="font-medium text-violet-600">{selectedCategory}</span>
          </span>
        </div>
      )}
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 