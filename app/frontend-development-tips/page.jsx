'use client';
import Link from 'next/link';
import Head from 'next/head';
import Navbarinicio from '../components/navbarinicio';
import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
const posts = require('../../app/post.json');
const postreverse = posts.reverse();

export default function Articulos() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React OpenAI ChatGPT</Head>
            <Navbarinicio />
            <div className="bg-white pt-8 sm:pt-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-16">Frontend development tips</h2>
                        <div className="mt-2 text-lg leading-8 text-gray-600" />
                        {/* Search input */}
                        <input
                            type="text"
                            placeholder="Buscar artículo"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="mt-4 p-2 border text-black border-gray-300 rounded-md w-full"
                        />
                        <div className="mt-16 space-y-20 lg:mt-20 pb-36 lg:space-y-20">
                            {postreverse.map(post => {
                                const isVisible = post.title?.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
                                                  post.category?.title?.toLowerCase().includes(searchTerm.toLowerCase().trim());
                                return (
                                    <article
                                        key={post.id}
                                        className={`relative isolate flex flex-col gap-8 lg:flex-row ${!isVisible && 'hidden'}`}
                                    >
                                        <Link href={post.href}>
                                            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                                <img
                                                    src={post.imageUrl}
                                                    alt={post.alt}
                                                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                                />
                                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                            </div>
                                        </Link>
                                        <div>
                                            <div className="flex items-center gap-x-4 text-xs">
                                                <time dateTime={post.datetime} className="text-gray-500">
                                                    {post.date}
                                                </time>
                                                <h2 className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                                    {post.category.title}
                                                </h2>
                                            </div>
                                            <div className="group relative max-w-xl">
                                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                    <Link href={post.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.title}
                                                    </Link>
                                                </h3>
                                                <div className="mt-5 text-sm leading-6 text-gray-600">{post.description}</div>
                                            </div>
                                            <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                                <Link href="/lara-alonso-portfolio">
                                                    <div className="relative flex items-center gap-x-4">
                                                        <img src={post.author.imageUrl} alt="Lara Alonso" className="h-10 w-10 rounded-full bg-gray-50" />
                                                        <div className="text-sm leading-6">
                                                            <div className="font-semibold text-gray-900">
                                                                <div href={post.author.href}>
                                                                    <span className="absolute inset-0" />
                                                                    {post.author.name}
                                                                </div>
                                                            </div>
                                                            <div className="text-gray-600">{post.author.role}</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
