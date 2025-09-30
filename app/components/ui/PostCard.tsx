'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Post } from '../../lib/types'

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isRotating, setIsRotating] = useState(false)

  const handleRotateImage = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsRotating(true)
    
    setTimeout(() => {
      window.location.href = post.href
    }, 500)
  }

  return (
    <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <Link href={post.href} onClick={handleRotateImage}>
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image
            src={post.imageUrl}
            alt={post.alt || post.title}
            fill
            className={classNames(
              'object-cover transition-all duration-500 ease-in-out',
              isImageLoading ? 'opacity-0 scale-110' : 'opacity-100 scale-100',
              isRotating ? 'transform duration-500 rotate-[360deg]' : '',
              'group-hover:scale-110'
            )}
            onLoad={() => setIsImageLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        
        {/* Overlay mejorado con gradiente */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        
        {/* Borde sutil */}
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-300" />

        {/* Badge de categoría */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">
            {post.category}
          </span>
        </div>

        {/* Información del autor y fecha */}
        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 mb-4">
          <time dateTime={post.datetime} className="mr-8 flex items-center">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </time>
          <div className="flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="flex gap-x-2.5 items-center">
              <Image
                src={post.author.imageUrl}
                alt={post.author.name}
                width={24}
                height={24}
                className="h-6 w-6 flex-none rounded-full bg-white/10 ring-1 ring-white/20"
              />
              <span className="font-medium">{post.author.name}</span>
            </div>
          </div>
        </div>
        
        {/* Título mejorado */}
        <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white/90 transition-colors duration-300">
          <span className="absolute inset-0" />
          <span className="break-words line-clamp-3">
            {post.title}
          </span>
        </h3>
        
        {/* Descripción */}
        {post.description && (
          <p className="mt-3 text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {post.description}
          </p>
        )}
        
        {/* Indicador de lectura */}
        <div className="mt-4 flex items-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Leer artículo
        </div>
      </Link>
    </article>
  )
}

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
