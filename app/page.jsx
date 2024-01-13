/* eslint-disable @next/next/no-img-element */
'use client'
import Navbar from "./components/navbar"
import { Footer } from "./components/footer"
import Link from "next/link"
import { useState } from "react";
import Head from "next/head";


const posts = require('../app/post.json');
const postreverse = posts.reverse();




export default function Blog() {

  const allCategories = [
    ...new Set(posts.map(post => post.category)),
  ];

  const [post, setPost] = useState(postreverse);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // console.log({post})

  const handleCategoryChange = (category) => {

    setPost(posts.filter((post) => {
      return post.category === category;
    }))
    setSelectedCategory(category);
  };

  const handleCategoryClean = () => {
    setPost(posts);
    setSelectedCategory(null);
  };

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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">&quot; Explorando el mundo del diseño web &quot; </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Tendencias, inspiración y consejos
            </p>
          </div>

          <div className="flex flex-wrap md:flex-row gap-5 pt-10 justify-center">
            {allCategories.map(category => (
              <button
                type='button'
                className={`w-20 h-20 items-center p-5 flex  justify-center rounded-full 
               
                ${selectedCategory === category ? 
                  'bg-slate-200 border-b-2 border-violetitle text-violetitle' 
                  :
                   'bg-violetitle text-white  hover:bg-purple-200 hover:border-b-2 hover:border-violetitle hover:text-violetitle '
                }`}
                onClick={() => handleCategoryChange(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="text-violetitle mt-4 flex justify-start hover:underline hover:underline-offset-4" onClick={handleCategoryClean}>Borrar filtros</button>

          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {post.map((post) => (

              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 "
              >
                <Link href={`/frontend-development-tips/${post.id}`} >
                  <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
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
                        <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                        {post.author.name}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <div href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </div>
                  </h3>
                </Link>
              </article>

            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
