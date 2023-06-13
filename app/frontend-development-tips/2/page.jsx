
import { FooterBlack } from "@/app/components/footerblack";
import { FooterPost } from "@/app/components/footerpost";
import Navbarblack from "@/app/components/navbarblack";
import Image from "next/image";
import Link from "next/link";

export default function Page2() {

  const jsonData = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
  };

  return (
    <>
      <div className="bg-black">
        <Navbarblack />
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 bg-gray-100 text-gray-900 mt-20">
          <div className="w-full mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold leadi md:text-5xl">Como poner Attach como debugger en VSC</h1>
            <div className="text-sm text-gray-400">by {' '}
              <a rel="noopener noreferrer" href="/lara-alonso-portfolio" target="_blank" className="underline text-violet-400">
                <span itemProp="name">Lara Alonso</span>
              </a>
              <time dateTime="2023-06-13 ">{' '}13/06/2023</time>
            </div>
          </div>
          <div className="text-gray-900">
            <div><strong className="text-xl">¿Qué es Attach? ¿Qué es debuggar?</strong></div>
            <br />
            <div>El término<strong> &quot;debuggar&quot; </strong> en programación se refiere al proceso de <strong>identificar, analizar y corregir errores o fallos en el código</strong>
              de un programa.
              El objetivo del debugging es encontrar y solucionar los problemas que puedan estar causando un comportamiento incorrecto, inesperado o no deseado en un programa.</div>
            <div>El debugging se realiza mediante el uso de herramientas específicas, como depuradores o debuggers, que permiten examinar el estado interno del programa en tiempo de ejecución.
              Estas herramientas permiten realizar acciones como establecer puntos de interrupción en el código, examinar el valor de las variables en diferentes momentos, seguir la ejecución
              línea por línea, entre otras funcionalidades.</div>

            <div>En el contexto de la programación, <strong>&quot;Attach&quot;</strong> se refiere a la acción de conectar o vincular un proceso en ejecución a una
              <strong> herramienta de depuración, </strong>como un depurador o un profiler.</div>
            <div>Cuando se realiza el &quot;Attach&quot; a un proceso, se establece una conexión entre la herramienta de depuración y el programa en ejecución. Esto permite al desarrollador examinar
              el estado interno del programa,<strong> realizar seguimiento de la ejecución, inspeccionar variables</strong> y realizar otras acciones de depuración en tiempo real.</div>
            <div>El &quot;Attach&quot; es especialmente útil en situaciones en las que no es posible iniciar el programa desde el principio en modo de depuración, como en el caso de programas que ya
              están en ejecución, aplicaciones de terceros o programas en entornos de producción. Al adjuntar la herramienta de depuración al proceso en ejecución, el desarrollador puede analizar
              y solucionar problemas sin necesidad de reiniciar el programa.</div>
            <div>Es importante tener en cuenta que no todos los lenguajes de programación o entornos de desarrollo admiten la funcionalidad de &quot;Attach&quot;. Algunos lenguajes o entornos pueden
              requerir que el programa se ejecute en un modo especial de depuración desde el inicio para poder ser inspeccionado por una herramienta de depuración.</div>

            <br />
            <div><strong className="text-xl">¿Y cómo configuro Attach en Visual Studio Code?</strong></div>
            <br />
            <div>Lo primero, como siempre, aquí tienes la documentación oficial en <a href="https://code.visualstudio.com/docs/editor/debugging"><strong>
              https://code.visualstudio.com/docs/editor/debugging</strong></a></div>

            <br />


            <li> Crea una nueva carpeta en la raíz del proyecto que se llame <strong>.vscode</strong> </li>
            <li> Dentro de esta carpeta crea un archivo <strong>launch.json</strong>con el siguiente código:</li>
            <br/>
              <div>&#123;</div>
              <div className="ml-3">&quot;version&quot;: &quot;0.2.0&quot;, </div>
              <div className="ml-3">  &quot;configurations&quot;: &#91;</div>
              <div className="ml-6"> &#123;</div>
              <div className="ml-9"> &quot;name&quot;: &quot;Launch&quot;,</div>
              <div className="ml-9"> &quot;program&quot;: &quot;$&#123;workspaceFolder&#125;/pages/index.js&quot;,</div>
              <div className="ml-9">        &quot;request&quot;: &quot;launch&quot;,</div>
              <div className="ml-9">            &quot;skipFiles&quot;: [</div>
              <div className="ml-12">                &quot; &#60;node_internals&#62;/**&quot;</div>
              <div className="ml-9">          ],</div>
              <div className="ml-9">            &quot;type&quot;: &quot;node&quot;</div>
              <div className="ml-6">        &#125;,</div>
  
              <div className="ml-6">        &#123;</div>
              <div className="ml-9">    &quot;name&quot;: &quot;Attach&quot;,</div>
              <div className="ml-9">            &quot;type&quot;: &quot;node&quot;,</div>
              <div className="ml-9">        &quot;request&quot;: &quot;attach&quot;,</div>
              <div className="ml-9">     &quot;port&quot;: 9229</div>
              <div className="ml-6">       &#125;</div>
              <div className="ml-3">  	&#93;  </div>
              <div>  &#125;</div>

              <br/>
            <li>Instala el paquete npm i cross-env</li>
            <li>A continuación en el archivo <strong>package.json</strong> modifica el &quot;dev&quot; que está dentro de scripts:</li>
            <br/>
            <div>  &quot;dev&quot;: &quot;cross-env NODE_OPTIONS=&#39;--inspect=0.0.0.0:9229&#39;next dev&quot;,</div>
            <br/>
            <li>A partir de ahora para debuggar debes marcar un breakpoint (punto rojo en la línea de código que quieres que pare) o los que necesites. Debes ir a la opción de debugger
             en VSC, hacer click y ya puedes ejecutar npm run dev como siempre. Si el código que estás ejecutando pasa por el breakpoint que has marcado este se detendrá y podrás ir
             viendo como se ejecuta tu código línea a línea. 
            </li>  
            <br/>   
            <Image
              src="/icons/debugicon.png"
              width={36}
              height={36}
              alt= "icono debugger VSC"
            />
            <br/>
            <div>Espero que os haya gustado 😄</div>
          </div>
          <FooterPost />
        </article>
        <FooterBlack />
      </div>



    </>
  )
}
