import React from 'react'
import { useLocation } from 'react-router-dom'

function C() {
  const location=useLocation();
  console.log(location)
  return (
   <>
    C
     <br/>
    {location.state.Data}
   </>
    
  )
}

export default C