'use client';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/ui/Navbar';
import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
const posts = require('../../app/post.json');
const postreverse = posts.reverse();

export default function Articulos() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React OpenAI ChatGPT</Head>
            <Navbar />
            
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-violet-50 via-white to-purple-50 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                <div className="relative py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-6">
                                <div className="inline-flex items-center rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-800 mb-4">
                                    <span className="mr-2">📚</span>
                                    Blog de Desarrollo Frontend
                                </div>
                            </div>
                            
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
                                Frontend Development
                                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                    {" "}Tips
                                </span>
                            </h1>
                            
                            <p className="mt-4 text-xl leading-8 text-gray-600 max-w-3xl mx-auto mb-8">
                                Descubre consejos, tutoriales y mejores prácticas para el desarrollo frontend moderno
                            </p>

                            {/* Barra de búsqueda en el hero */}
                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Buscar artículo por título o categoría..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 shadow-sm"
                                    />
                                    <svg 
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                {searchTerm && (
                                    <p className="mt-2 text-sm text-gray-500">
                                        Mostrando resultados para: <span className="font-medium">{searchTerm}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="bg-white py-8 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        {/* Lista de artículos */}
                        <div className="space-y-8">
                            {postreverse.map(post => {
                                const isVisible = post.title?.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
                                                  post.category?.toLowerCase().includes(searchTerm.toLowerCase().trim());
                                return (
                                    <article
                                        key={post.id}
                                        className={`relative isolate flex flex-col gap-6 lg:flex-row transition-all duration-300 ${!isVisible ? 'hidden' : 'hover:scale-[1.02]'}`}
                                    >
                                        <Link href={post.href} className="group">
                                            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 overflow-hidden rounded-2xl">
                                                <img
                                                    src={post.imageUrl}
                                                    alt={post.alt}
                                                    className="absolute inset-0 h-full w-full bg-gray-50 object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                            </div>
                                        </Link>
                                        
                                        <div className="flex-1">
                                            <div className="flex items-center gap-x-4 text-xs mb-3">
                                                <time dateTime={post.datetime} className="text-gray-500 flex items-center">
                                                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    {post.date}
                                                </time>
                                                <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-800">
                                                    {post.category}
                                                </span>
                                            </div>
                                            
                                            <div className="group relative max-w-xl">
                                                <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-violet-600 transition-colors duration-200">
                                                    <Link href={post.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.title}
                                                    </Link>
                                                </h3>
                                                <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                                                    {post.description}
                                                </p>
                                            </div>
                                            
                                            <div className="mt-4 flex border-t border-gray-900/5 pt-4">
                                                <Link href="/lara-alonso-portfolio" className="group">
                                                    <div className="relative flex items-center gap-x-4">
                                                        <img 
                                                            src={post.author.imageUrl} 
                                                            alt="Lara Alonso" 
                                                            className="h-10 w-10 rounded-full bg-gray-50 ring-2 ring-gray-200 group-hover:ring-violet-200 transition-all duration-200" 
                                                        />
                                                        <div className="text-sm leading-6">
                                                            <div className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors duration-200">
                                                                {post.author.name}
                                                            </div>
                                                            <div className="text-gray-600">Programadora Fullstack</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* Mensaje cuando no hay resultados */}
                        {searchTerm && postreverse.filter(post => 
                            post.title?.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
                            post.category?.toLowerCase().includes(searchTerm.toLowerCase().trim())
                        ).length === 0 && (
                            <div className="text-center py-16">
                                <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron artículos</h3>
                                <p className="text-gray-500">Intenta con otros términos de búsqueda</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
