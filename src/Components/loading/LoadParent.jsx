import React from 'react'
import LoadChild from './LoadChild'

function LoadParent() {
    

  return (
    <div className=' h-1 w-full fixed z-2 bg-transparent'>
        <LoadChild />
    </div>
  )
}

export default LoadParent