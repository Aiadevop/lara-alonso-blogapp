import { FooterBlack } from "@/app/components/footerblack";
import { FooterPost } from "@/app/components/footerpost";
import Navbarblack from "@/app/components/navbarblack";
import Link from "next/link";


export default function Page1() {
  return (
    <>
      <div className="bg-black">
        <Navbarblack />
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 text-gray-900">
          <div className="w-full mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold leadi md:text-5xl">Crea tu primera aplicación en Next.js 13</h1>
            <div className="text-sm dark:text-gray-400">by {' '}
              <a rel="noopener noreferrer" href="/lara-alonso-portfolio" target="_blank" className="underline dark:text-violet-400">
                <span itemProp="name">Lara Alonso</span>
              </a>
              <time dateTime="2023-06-12 ">{' '}12/06/2023</time>
            </div>
          </div>
          <div className="dark:text-gray-900">
            <div><strong className="text-xl">Lo primero ¿qué es Next.js?</strong></div>
            <br />
            <div><strong>Next.js es un framework de React</strong> utilizado para el desarrollo de aplicaciones web del lado del servidor (SSR) y del lado del cliente (CSR).
              Proporciona una capa adicional de abstracción sobre React que permite crear aplicaciones web rápidas y escalables con facilidad.</div>
            <div>Next.js combina características de enrutamiento, renderizado del lado del servidor, generación de páginas estáticas y funcionalidades de desarrollo en una
              sola herramienta. Algunas de las características y ventajas clave de Next.js son las siguientes:</div>

            <li><strong>Renderizado híbrido: </strong> Next.js permite el renderizado del lado del servidor y del lado del cliente, lo que significa que puede generar y enviar páginas completamente renderizadas
              desde el servidor para una carga inicial rápida, y luego continuar la navegación y la interacción del usuario en el cliente.</li>
            <li><strong>Generación de páginas estáticas: </strong> Next.js ofrece la capacidad de generar páginas estáticas durante la compilación, lo que significa que se pueden servir archivos HTML pregenerados
              en lugar de generar contenido dinámico en cada solicitud. Esto mejora significativamente el rendimiento y la velocidad de carga de la página.</li>
            <li><strong>Enrutamiento sencillo:</strong> Next.js proporciona un sistema de enrutamiento sencillo y basado en archivos que permite definir rutas fácilmente y manejar la navegación entre páginas de
              manera intuitiva.</li>
            <li><strong>Soporte para API y funciones sin servidor: </strong>  Next.js permite crear y acceder a API y funciones sin servidor de forma nativa, lo que facilita la creación de servicios y endpoints personalizados.</li>
            <li><strong>Optimización automática: </strong> Next.js realiza optimizaciones automáticas como el precargado de rutas, el splitting de código y la carga de imágenes optimizadas, lo que ayuda a mejorar
              el rendimiento y la experiencia del usuario.</li>
            <br />
            <div>Next.js es utilizado en una amplia gama de casos de uso, incluyendo el desarrollo de aplicaciones web complejas, tiendas en línea, blogs, sitios de noticias y mucho más. Es especialmente útil cuando se requiere
              un alto rendimiento, una excelente experiencia de usuario y una fácil escalabilidad.</div>
            <br />
            <div><strong className="text-xl">Como empezar con NextJS 13</strong></div>
            <br />
            <div>Lo primero decirte que tienes toda la documentación oficial en <a href="https://nextjs.org/docs/getting-started/installation"><strong>https://nextjs.org/docs/getting-started/installation</strong></a></div>
            <div>Primero necesitas tener instalado Node.js en una versión 16.8 o superior, aquí te dejo un enlace por si aún no lo tienes <a href="https://nodejs.org/en" className="underline">https://nodejs.org/en</a></div>
            <div>A continuación puedes ejecutar la instalación automática con <strong>npx create-next-app@latest </strong>y te instalará la última versión de Nextjs. Te hará una serie de preguntas</div>
            <br />
            <li>What is your project named? my-app (nombre que le vas a poner a tu proyecto)</li>
            <li>Would you like to use TypeScript with this project? No / Yes (si quieres trabajar en TypeScript o JavaScript)</li>
            <li>Would you like to use ESLint with this project? No / Yes (si quieres utilizar ESLint, mi recomendación es que siempre si, te ayuda a detectar errores de código.)</li>
            <li>Would you like to use Tailwind CSS with this project? No / Yes (TailwindCSS ayuda en la maquetación web, pero puedes usar Boostrapt u otros.)</li>
            <li>Would you like to use `src/` directory with this project? No / Yes (aquí debes decidir si usas las carpetas como en las versiones 12 o anteriores que sería con /src
              o prefieres utilizar la nueva carpeta /app para las rutas.)</li>
            <li>Use App Router (recommended)? No / Yes</li>
            <li>Would you like to customize the default import alias? No / Yes</li>
            <br />
            <div>Tras estas preguntas comenzará la instalación y sólo necesitarás acceder al nuevo directorio <strong>cd nombreProyecto</strong> cd nombredetuproyecto en tu terminal.</div>
            <div>Para ejecutar tu aplicación utilizarás<strong> npm run dev</strong> . Aparecerá un texto como: </div>
            <div>nombreProyecto@0.1.0 dev</div>
            <div>next dev</div>
            <div>ready started server on 0.0.0.0:3000, url: http://localhost:3000</div>
            <br />
            <div>Entrando en el link de http://localhost:3000, (el número de puerto puede que no sea 3000) podrás acceder a tu primera aplicación de Next.js</div>
            <br />

            <div>Si has llegado hasta aquí y quieres conocer algunas novedades de Next.js 13 puedes ir a mi post {' '}
              <Link href="/frontend-development-tips/3" className="underline">Como crear rutas en Next.js 13</Link></div>
          </div>
          <FooterPost />
        </article>
        <FooterBlack />
      </div>



    </>
  )
}
