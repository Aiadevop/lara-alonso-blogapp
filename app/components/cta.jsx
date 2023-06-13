export const CTA = () => {
    return (
        <>    
            <div className="bg-black">
                <div className="px-6 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                            Trabajemos juntos.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
                            Si quieres que trabajemos juntos, tienes alguna pregunta o quieres contactar conmigo, aquí te dejo mi contacto. ¡Saludos!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="mailto:laraalon.la@gmail.com"
                                className="rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Digitalízate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 text-white p-4 mt-12" />
        </>
    )
}