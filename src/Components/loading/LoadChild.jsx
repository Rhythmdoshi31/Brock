import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

function LoadChild() {
    const tl = gsap.timeline();
    const lineRef = useRef(null);
    useGSAP(() => {
        tl.to(lineRef.current, {
            width: "100%",
            duration: 1.6,
            delay: 0.8,
            ease: "power4.inOut",
          })
          .to(lineRef.current, {
            opacity: 0,
          })
    })
  return (
    <div ref={lineRef} className='w-0 h-full bg-white rounded'></div>
  )
}

export default LoadChild