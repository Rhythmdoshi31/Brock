import React, { useRef } from 'react'
import Menuright from './Menuright'
import Menuleft from './Menuleft'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Menu({menuOpen, setmenuOpen}) {
    const menuRef = useRef(null);
    useGSAP(() => {
        menuOpen === true && gsap.to(menuRef.current, {
            top: 0,
            duration: 1.4,
            ease: "power4.inOut",
        })
        menuOpen === false && gsap.to(menuRef.current, {
            top: "100%",
            duration: 1.4,
            ease: "power4.inOut",
        })
    }, [menuOpen])
  return (
    <div ref={menuRef} className='fixed h-screen w-full bg-zinc-900 top-full flex'>
        <Menuleft />
        <Menuright setmenuOpen={setmenuOpen}/>
    </div>
  )
}

export default Menu