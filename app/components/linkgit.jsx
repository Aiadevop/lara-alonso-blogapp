'use client'

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export const Linkgit = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    return (
        <>
            <Link href="https://www.linkedin.com/in/lara-alonso/">
                <Image
                    src={isHovered1 ? "/icons/linkedinhover.png" : "/icons/linkedin.png"}
                    width={36}
                    height={36}
                    alt="github icon"
                    className="mr-5"
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                />
            </Link>
            <Link href="https://github.com/Aiadevop?tab=repositories">
            <Image
                    src={isHovered2 ? "/icons/githubhover.png" : "/icons/githubig.png"}
                    width={36}
                    height={36}
                    alt="github icon"
                    className="mr-5"
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                />
          </Link>
            <Link href="https://www.canva.com/design/DAFU3b6l0vc/4uS5xqHpqGZTdipTQu2osQ/view">
            <Image
                    src={isHovered3 ? "/icons/resume.png" : "/icons/resume.png"}
                    width={36}
                    height={36}
                    alt="github icon"
                    className="mr-5"
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                />
          </Link>
        </>
    )
}