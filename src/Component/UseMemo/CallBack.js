import React, { useCallback, useState } from 'react'
import ChildCompo from './ChildCompo'

const CallBack = () => {
   const [Add, setAdd]=useState(0);
//    const multi=()=>{
//       console.log("hlw, I am mutiple")
//    }
   const memozi = useCallback(function multi(){
    console.log("hey, guyz I am mutiple.")
   },[])
  return (
    <div>CallBack
        <div>
            <ChildCompo mulFun={memozi} sval={Add}/>
            <h1>{Add}</h1>
            <button onClick={()=>setAdd(Add+1)}>Increment!!</button>
        </div>
    </div>
  )
}

export default CallBack