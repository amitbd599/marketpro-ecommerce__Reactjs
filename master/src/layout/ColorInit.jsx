import React, { useEffect } from 'react'

const ColorInit = () => {
    let color = true;

    useEffect(() => {
        if (color === true) {
            // localStorage.setItem('theme', 'color-two');
            document.documentElement.classList.add('color-two');
        }
    }, [color]);
    return (
        null
    )
}

export default ColorInit