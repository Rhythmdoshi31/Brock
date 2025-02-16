import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

function Centertext() {
  const textRef = useRef(null);
  useGSAP(() => {
    var clutter = "";
    const splittedText = textRef.current.textContent.split("");
    splittedText.forEach((e) => clutter += `<span>${e}</span>`);
    textRef.current.innerHTML = clutter;

    gsap.from("h1 span", {
      y: 100,
      opacity: 0,
      delay: 2,
      stagger: 0.1,
    })
  })
  

  return (
    <div className=' text-white absolute top-1/2 left-1/2 text-center flex flex-col items-center justify-center translate-x-[-50%] translate-y-[-50%] pt-16'>
          <h1 ref={textRef} className=' whitespace-nowrap select-none relative inline-block text-[21vw] font-black uppercase leading-[17vw] font-[u8]'>BROCK</h1>
        <div className='h-[8vh] w-[77vw] flex justify-between items-start px-1 font-[a4]'>
            <div className='flex items-center justify-center gap-2'>
                <i className="ri-play-fill border-white border-1 py-[3px] pl-[6px] pr-[5px] rounded-full"></i>
                <h1 className='text-left font-light text-[10px]'>PLAY <br />THE FILM</h1>
            </div>
            <div className='flex gap-16 justify-between'>
                <h2 className='text-left font-light text-[10px]'>CREATOR <br />CURATOR</h2>
                <h2 className='text-left font-light text-[10px]'><span className='mr-1'>NEW</span> YORK <br /><span className='mr-1'>LOS</span> ANGELES</h2>
            </div>
        </div>
    </div>
  )
}

export default Centertext