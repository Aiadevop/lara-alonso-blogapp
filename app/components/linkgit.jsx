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
            <Link href="https://www.linkedin.com/in/lara-alonso/" target="_blank">
                <Image
                    src={isHovered1 ? "/icons/linkedinhoverblack.png" : "/icons/linkedinblack.png"}
                    width={36}
                    height={36}
                    alt="github icon"
                    className="mr-5"
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                />
            </Link>
            <Link href="https://github.com/Aiadevop?tab=repositories" target="_blank">
            <Image
                    src={isHovered2 ? "/icons/githubhoverblack.png" : "/icons/githubigblack.png"}
                    width={36}
                    height={36}
                    alt="github icon"
                    className="mr-5"
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                />
          </Link>
            <Link href="https://aiadevop.github.io/CV/" target="_blank">
            <Image
                    src={isHovered3 ? "/icons/resumehoverblack.png" : "/icons/resumeblack.png"}
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