import React, { useState } from 'react'
import LoadParent from './Components/loading/LoadParent'
import Home from './Home'
import Menu from './Components/Menu'
function App() {
  const [menuOpen, setmenuOpen] = useState("false");
  return (
    <div className='h-screen bg-black'>
      <LoadParent />
      <Home menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
       <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    </div>
  )
}

export default App