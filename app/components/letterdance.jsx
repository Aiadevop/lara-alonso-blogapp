'use client'
import Image from 'next/image';
import React, { useState } from 'react';

export const LetterDance = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='p-20 flex'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={hovered ? 'hidden' : 'mt-2 px-2'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21.957" height="11.5" viewBox="0 0 21.957 11.5">
                    <g id="Grupo_334" data-name="Grupo 334" transform="translate(-120.384 -4)">
                        <g id="Aspa" transform="translate(134.784 15.5) rotate(-90)">
                            <path id="Trazado_2" data-name="Trazado 2" d="M0,0H1.108L6,6.485,10.387,0H11.5L6.3,7.557H5.681Z" fill="#181818" />
                        </g>
                        <line id="Línea_184" data-name="Línea 184" x1="21.112" transform="translate(120.384 9.489)" fill="none" stroke="#181818" strokeWidth="1" />
                    </g>
                </svg>        
            </div>
            <div className={hovered ? 'mt-2 px-2 animate-spin' : 'hidden'}>        
                <Image
                  src="/img/serpiente-de-mar.png"
                  width={25}
                  height={25}
                  alt="serpiente de mar"
                  className=""
                />
            </div>
            <div className={hovered ? 'snake' : ''}>D</div>
            <div className={hovered ? 'snake1' : ''}>i</div>
            <div className={hovered ? 'snake2' : ''}>s</div>
            <div className={hovered ? 'snake3' : ''}>f</div>
            <div className={hovered ? 'snake4' : ''}>r</div>
            <div className={hovered ? 'snake3' : ''}>u</div>
            <div className={hovered ? 'snake2' : ''}>t</div>
            <div className={hovered ? 'snake1' : ''}>a</div>
            <div className={hovered ? 'snake pr-2' : 'pr-2'}> </div>
            <div className={hovered ? 'snake' : ''}>d</div>
            <div className={hovered ? 'snake1' : ''}>e</div>
            <div className={hovered ? 'snake2 pr-2' : 'pr-2'}> </div>
            <div className={hovered ? 'snake3' : ''}>n</div>
            <div className={hovered ? 'snake4' : ''}>u</div>
            <div className={hovered ? 'snake3' : ''}>e</div>
            <div className={hovered ? 'snake2' : ''}>s</div>
            <div className={hovered ? 'snake1' : ''}>t</div>
            <div className={hovered ? 'snake' : ''}>r</div>
            <div className={hovered ? 'snake' : ''}>a</div>
            <div className={hovered ? 'snake1 pr-2' : 'pr-2'}> </div>
            <div className={hovered ? 'snake2' : ''}>m</div>
            <div className={hovered ? 'snake3' : ''}>a</div>
            <div className={hovered ? 'snake4' : ''}>s</div>
            <div className={hovered ? 'snake3' : ''}>a</div>
            <div className={hovered ? 'snake2 pr-2' : 'pr-2'}> </div>
            <div className={hovered ? 'snake1' : ''}>a</div>
            <div className={hovered ? 'snake' : ''}>r</div>
            <div className={hovered ? 'snake' : ''}>t</div>
            <div className={hovered ? 'snake1' : ''}>e</div>
            <div className={hovered ? 'snake2' : ''}>s</div>
            <div className={hovered ? 'snake3' : ''}>a</div>
            <div className={hovered ? 'snake4' : ''}>n</div>
            <div className={hovered ? 'snake3' : ''}>a</div>
            <div className={hovered ? 'snake2' : ''}>l</div>
 
        </div>
    );
};
