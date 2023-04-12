import React, { useState, useMemo } from 'react'

const OptMemo = () => {
    const [Add, setAdd]=useState(0);
    const [Sub, setSub]=useState(0);
    // const Multiplication = () =>{
    //    console.log("**************")
    //   return  Add*10;
    // }
    const Multiplication = useMemo(function Multi(){
        console.log("********");
        return Add*10
    },[Add])
  return (
     <div>
        OptMemo:{Multiplication}
        <div>
            <h1>Increment:{Add}</h1>
            <h1>Decrement:{Sub}</h1>
            <button onClick={()=>setAdd(Add+1)}>Increment</button>
            <button onClick={()=>setSub(Sub-1)}>Decrement</button>
        </div>
    </div>
  )
}

export default OptMemo