import React from 'react'

function Menuright({setmenuOpen}) {
  const  menuPageClose = () => {
    setmenuOpen(e => !e);
  }
  return (
    <div className='w-1/3 h-full text-right p-8'>
        <h5 onClick={menuPageClose} className='text-xs text-white font-light mb-4 cursor-pointer font-[a4]'>ClOSE</h5>
        <div className='text-white font-black text-4xl font-[a4] mt-[50%] mr-[50%] flex flex-col items-start'>
          <h1>ABOUT</h1>
          <h1>STORY</h1>
          <h1>PROJECTS</h1>
          <h1>RELEASES</h1>
        </div>
        <div className='text-white font-[a4] mt-[50%] mr-[30%]'>
          <h1>That's it for now!</h1>
        </div>
    </div>
  )
}

export default Menuright