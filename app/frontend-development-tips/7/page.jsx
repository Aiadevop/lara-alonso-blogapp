/* eslint-disable @next/next/no-img-element */
import { FooterBlack } from "@/app/components/footerblack";
import { FooterPost } from "@/app/components/footerpost";
import Navbarblack from "@/app/components/navbar";
import Head from "next/head";
import Link from "next/link";


export default function Page7() {
    return (
        <>
            <Head>Lara Alonso lara-alonso @aiadevop Blog Next.js React</Head>
            <div className="bg-black">
                <Navbarblack />
                <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
                    <div className="w-full mx-auto space-y-4 text-center">
                        <h1 className="text-4xl font-bold leadi md:text-5xl">Como añadir filtros a tu Blog creado en Next.js o React</h1>
                        <div className="text-sm text-gray-400">by {' '}
                            <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                                <span itemProp="name">Lara Alonso</span>
                            </a>
                            <time dateTime="2023-06-12 ">{' '}12/07/2023</time>
                        </div>
                    </div>
                    <div><b className="text-xl">Vamos a ver paso a paso como hacerlo en Next.js.</b></div>

                    <div>Lo primero deberás tener un archivo <b>data.js</b> o tener guardado un array con los datos de tus post en una base de datos.</div>
                    <pre className="bg-black text-white text-lg"><code>
                        <br />
                        <div className="ml-4">const data = &#91;</div>
                        <div className="ml-6">&#123;</div>
                        <div className="ml-8">id:1,</div>
                        <div className="ml-8">category: &#168;Javascript&#168;,</div>
                        <div className="ml-8">title: &#168;Usando JavaScript&#168;</div>
                        <div className="ml-6">&#125;,</div>
                        <div className="ml-6">&#123;</div>
                        <div className="ml-8">id:2,</div>
                        <div className="ml-8">category: &#168;Node.js&#168;,</div>
                        <div className="ml-8">title: &#168;Usando Node.js&#168;</div>
                        <div className="ml-6">&#125;,</div>
                        <div className="ml-6">&#123;</div>
                        <div className="ml-8">id:3,</div>
                        <div className="ml-8">category: &#168;React&#168;,</div>
                        <div className="ml-8">title: &#168;Usando React&#168;</div>
                        <div className="ml-6">&#125;,</div>
                        <div className="ml-6">&#123;</div>
                        <div className="ml-8">id:4,</div>
                        <div className="ml-8">category: &#168;Next.js&#168;,</div>
                        <div className="ml-8">title: &#168;Usando Next.js&#168;</div>
                        <div className="ml-6">&#125;</div>
                        <br />
                    </code></pre>

                    <div>Ahora en tu <b>App.jsx</b> realizarás los filtros.</div>

                    <pre className="bg-black text-white text-lg"><code>
                        <br />
                        <div className="ml-4">import &#123;useState&#125; from &#168;react&#168;</div>
                        <div className="ml-4">import data from &#168;./data/data&#168;</div>
                        <br />
                        <div className="ml-4">function App &#40; &#41; &#123;</div>
                        <br />
                        <div className="ml-8">const allCategories = &#91;</div>
                        <div className="ml-12">&#168;Borrar filtros &#168;,</div>
                        <div className="ml-12">...new Set(data.map(article =&#8250; article.category)),</div>
                        <div className="ml-8">&#93;</div>
                        <div className="ml-8">const [categories, setCategories] = useState(allCategories);</div>
                        <div className="ml-8">const [articles, setArticles] = useState(data);</div>
                        <br />
                        <div className="ml-8">const filterCategory = (category) =&#8250; &#123;</div>
                        <div className="ml-12">if (category === &#168;Borrar filtros&#168;) &#123;</div>
                        <div className="ml-16">setArticles(data)</div>
                        <div className="ml-16">return</div>
                        <div className="ml-12">&#125;</div>
                        <div className="ml-12">const filteredData = data.filter(article =&#8250; article.category === category);</div>
                        <div className="ml-12">setArticles(filteredData)</div>
                        <div className="ml-8">&#125;</div>
                        <br />
                        <div className="ml-8">return &#40;</div>
                        <div className="ml-16">&#8249; div &#8250;</div>
                        <div className="ml-20">&#123;categories.map &#40; category =&#8250; &#40;</div>
                        <div className="ml-24">&#8249;button</div>
                        <div className="ml-28">type=&#168;button&#168;</div>
                        <div className="ml-28">className=&#168;btn-category&#168;</div>
                        <div className="ml-28">	onClick=&#91;() =&#8250; filterCategory(category)&#125;</div>
                        <div className="ml-28">	key&#61;&#123;category&#125;</div>
                        <div className="ml-24">&#8250;</div>
                        <div className="ml-28">&#123;category&#125;</div>
                        <div className="ml-24">&#8249; /button&#8250;</div>
                        <div className="ml-20">&#41;&#41;&#125;</div>
                        <div className="ml-16">&#8249; /div &#8250;</div>
                        <br />
                        <div className="ml-16">&#8249; div &#8250;</div>
                        <div className="ml-20">&#123;articles.map &#40; article =&#8250; &#40;</div>
                        <div className="ml-24">&#8249; div key&#61;&#123;article.id&#125;&#8250;</div>
                        <div className="ml-28">&#8249; div &#8250;</div>
                        <div className="ml-32">&#8249; h2 &#8250; &#123;article.title&#125; &#8249; /h2 &#8250;</div>
                        <div className="ml-28">&#8249; div &#8250;</div>
                        <div className="ml-24">&#8249; div &#8250;</div>
                        <div className="ml-20">&#41;&#41;&#125;</div>
                        <div className="ml-16">&#8249; /div &#8250;</div>

                        <div className="ml-8">&#41;;</div>
                        <br />
                    </code></pre>

                    <div>En allCategories definimos los filtros, &#168;Borrar filtros&#168; y el resto de categorías que extraemos de la data<br />
                        Creamos dos estados uno para categorías con un valor inicial de allCategories y otro para que se muestren los
                        artículos filtrados donde está en principio toda la data.<br />
                        Con filterCategory, se realiza un filtro salvo que la variable sea Borrar filtros donde se vuelven a cargar todas
                        las categorías.<br />
                        Lo que devolvemos por pantalla es un map de categories para que nos devuelva las diferentes categorías y otra
                        de artículos para que nos devuelva los artículos filtrados.<br />
                        No he añadido los estilos para que quede más limpio el código.</div>
                    <br />
                    <p><b>Espero que os haya servido¡¡¡</b> <br />Podéis leer otros artículos de Next.js en mi blog como  {' '}
                        <Link href="/frontend-development-tips/9" className="text-violetitle">
                            Cómo utilizar React y Next.js para construir sitios web de alto rendimiento</Link></p>


                    <FooterPost />
                </article>
                <FooterBlack />
            </div>


        </>
    )
}
