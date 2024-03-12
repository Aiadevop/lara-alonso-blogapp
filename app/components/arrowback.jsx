'use client'
import React from 'react';

export default function ArrowBack(props) {
    const { texto } = props;
    const handleMouseOver = () => {
        const line = document.getElementById('Línea_5');
        const path = document.getElementById('Trazado_9');

        if (line && path) {
            line.setAttribute('y2', '24.568');
            path.setAttribute('strokeWidth', '2');
        }
    }

    const handleMouseOut = () => {
        const line = document.getElementById('Línea_5');
        const path = document.getElementById('Trazado_9');

        if (line && path) {
            line.setAttribute('y2', '0');
            path.setAttribute('strokeWidth', '1');
        }
    }

    return (
        <div className="container mx-auto px-4">
            <button id="btn-container" className="flex justify-center items-center align-middle hover:font-extrabold text-black" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="btn-flecha flex justify-center items-center mt-[3px] mr-4 gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.275" height="25.924" viewBox="0 0 25.275 5.924">
                        <g id="Grupo_385" data-name="Grupo 385" transform="translate(-763.5 546.462) rotate(-90)">
                            <line id="Línea_5" data-name="Línea 5" y2="0" transform="translate(543.5 763.5)" fill="none" stroke="#867c00" strokeWidth="2" />
                            <path id="Trazado_9" data-name="Trazado 9" d="M540.431,769.217l2.609,2.609,2.609-2.609" transform="translate(0.46 16.242)" fill="none" stroke="#867c00" strokeWidth="1" />
                        </g>
                    </svg>
                    {texto}
                </div>
            </button>
        </div>

    );
}
