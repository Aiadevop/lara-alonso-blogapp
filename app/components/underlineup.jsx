'use client'
import React, { useState } from 'react';

export const Underlineup = (props) => {
    const { texto } = props;
    // const [hovered, setHovered] = useState(false);

    return (
        <div className=' flex'>
            <div className="underlineup">
                Cocinada en horno de leña
            </div>
        </div>
    );
};
