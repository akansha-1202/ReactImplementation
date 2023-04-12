import React, { useState } from 'react'

const HocCompo = (WrappedComponent) => {
    function HocFunction(){
        const [Counter, setCounter]=useState(0)
        const handleClick = () =>{
            setCounter(Counter+1)
        }
        return(
            <>
              <WrappedComponent Value={Counter} updateCounter={handleClick}/>
            </>
        )
    }
     return HocFunction;
  }

export default HocCompo