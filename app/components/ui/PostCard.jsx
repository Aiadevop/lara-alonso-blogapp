'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function PostCard({ post }) {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isRotating, setIsRotating] = useState(false)

  const handleRotateImage = (e) => {
    e.preventDefault()
    setIsRotating(true)
    
    setTimeout(() => {
      window.location.href = post.href
    }, 500)
  }

  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <Link href={post.href} onClick={handleRotateImage}>
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image
            src={post.imageUrl}
            alt={post.alt || post.title}
            fill
            className={classNames(
              'object-cover transition-opacity duration-300',
              isImageLoading ? 'opacity-0' : 'opacity-100',
              isRotating ? 'transform duration-500 rotate-[360deg]' : ''
            )}
            onLoad={() => setIsImageLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <time dateTime={post.datetime} className="mr-8">
            {post.date}
          </time>
          <div className="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="flex gap-x-2.5">
              <Image
                src={post.author.imageUrl}
                alt={post.author.name}
                width={24}
                height={24}
                className="h-6 w-6 flex-none rounded-full bg-white/10"
              />
              {post.author.name}
            </div>
          </div>
        </div>
        
        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
          <span className="absolute inset-0" />
          <span className="break-words">
            {post.title}
          </span>
        </h3>
      </Link>
    </article>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 