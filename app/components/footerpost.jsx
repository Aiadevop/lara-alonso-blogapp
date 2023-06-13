import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
export const FooterPost = () => {
    return (
        <>
            <div className="pt-12 border-t dark:border-gray-700">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">                        
                    <img src="/img/profileicon.jpeg" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold">Lara Alonso</h4>
                        <div className="dark:text-gray-400">
                            <div>Soy desarrolladora de software en España.
                                Especializada en frontend, creo experiencias web y aplicaciones. Explora mi portfolio y descubre mis proyectos. </div>
                            <br />
                            <Link href="/lara-alonso-portfolio">
                                <div className="flex justify-start items-start"><strong >¡Tu visión mi código!</strong></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}