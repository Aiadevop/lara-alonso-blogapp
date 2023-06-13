import Image from "next/image"

export const Skills = () => {
    return (
        <>
            {/* Movile version */}
            <div className="lg:hidden mb-4">
                <div className="mr-8 ml-8 flex flex-row justify-between items-center ">
                    <div className="flex flex-col items-center justify-center">
                        <Image

                            src="/icons/react.png"
                            width={56}
                            height={56}
                            alt="React Logo"
                        />
                        <p>React</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image

                            src="/icons/next.png"
                            width={56}
                            height={56}
                            alt="Next.js Logo"
                        />
                        <p>Next.js</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image

                            src="/icons/nodejs.png"
                            width={56}
                            height={56}
                            alt="Nodejs Logo"
                        />
                        <p>NodeJS</p>
                    </div>
                </div>
                <div className="mr-6 ml-8 flex flex-row justify-between items-center ">
                    <div className="flex flex-col items-center justify-center">
                        <Image

                            src="/icons/tailwind.png"
                            width={56}
                            height={56}
                            alt="Tailwind Logo"
                        />
                        <p>Tailwind</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image

                            src="/icons/mongo.png"
                            width={56}
                            height={56}
                            alt="Mongo Logo"
                        />
                        <p>MongoDB</p>
                    </div>
                    <div>
                        <Image
                            className="flex flex-1 items-center justify-center flex-col ml-1"
                            src="/icons/js.png"
                            width={56}
                            height={56}
                            alt="JavaScript Logo"
                        />
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
            {/* Desktop version */}
            <div className="hidden lg:flex mx-auto max-w-5xl px-6 flex-row justify-between items-center mb-4">
                <div className="flex flex-col items-center justify-center">
                    <Image

                        src="/icons/react.png"
                        width={56}
                        height={56}
                        alt="React Logo"
                    />
                    <p>React</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image

                        src="/icons/next.png"
                        width={56}
                        height={56}
                        alt="Next.js Logo"
                    />
                    <p>Next.js</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image

                        src="/icons/nodejs.png"
                        width={56}
                        height={56}
                        alt="Node Logo"
                    />
                    <p>NodeJS</p>
                </div>


                <div className="flex flex-col items-center justify-center">
                    <Image

                        src="/icons/tailwind.png"
                        width={56}
                        height={56}
                        alt="Tailwind Logo"
                    />
                    <p>Tailwind</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image

                        src="/icons/mongo.png"
                        width={56}
                        height={56}
                        alt="Mongo Logo"
                    />
                    <p>MongoDB</p>
                </div>
                <div>
                    <Image
                        className="flex flex-1 items-center justify-center flex-col ml-1"
                        src="/icons/js.png"
                        width={56}
                        height={56}
                        alt="JavaScript Logo"
                    />
                    <p>JavaScript</p>
                </div>

            </div>
        </>
    )
}