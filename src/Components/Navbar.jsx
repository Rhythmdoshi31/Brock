import React from 'react'
function Navbar({menuOpen, setmenuOpen}) {
  const  menuPageOpen = () => {
    setmenuOpen(e => !e);
  }
  return (
    <div className='h-[8vh] w-full flex justify-between items-center px-3 font-[a4]'>
        <img className='h-9 w-10 object-cover' src="/fav.svg" alt="" />
        <h5 onClick={menuPageOpen} className='scale-70 text-white font-light mb-4 cursor-pointer'>MENU</h5>
    </div>
  )
}

export default Navbar