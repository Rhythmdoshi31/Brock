import React, { useRef } from 'react'
import Navbar from './Components/Navbar'
import Centertext from './Components/Centertext'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home(props) {
    const homeref = useRef(null);
    const pageref = useRef(null);

    useGSAP(() => {
        gsap.to(homeref.current, {
            y: "-100%",
            duration: 1.4,
            delay: 1.4,
            ease: "power4.inOut",
        });
        gsap.to(pageref.current, {
            backgroundSize: "100%",
            duration: 1.8,
            delay: 1.6,
            ease: "power4.Out",
        });
    })
  return (
    <div className='h-screen'>
        <div ref={homeref} className='bg-black z-1 h-full w-full fixed'></div>
        <div ref={pageref} style={{backgroundSize: "110%"}} className='h-[100vh] w-full bg-sky-200 relative bg-center bg-cover bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]'>
        <Navbar menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}/>
        <Centertext />
        </div>
    </div>
  )
}

export default Home