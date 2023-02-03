import React from 'react';
import { useState, useEffect } from 'react';
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si'
// import { Container } from './styles';
import 'animate.css';
function IconFader() {
    const [iconShow, setIconShow] = useState()
    const [icons, setIcons] = useState([<SiCss3 size={300} className='animate__animated animate__bounce' />, <SiHtml5 size={350} className='animate__animated animate__bounce' />, <SiJavascript size={350} className='animate__animated animate__bounce' />])
    const [currentIndex, setCurrentIndex] = useState( );
    useEffect(() => {
        


        setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % icons.length);
            setIconShow(icons[currentIndex]);
        }, 3000);




    }, [iconShow])

    return (
        <div>

            {iconShow}

        </div>)
}

export default IconFader;