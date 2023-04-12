import React, {useEffect, useState } from 'react'
import axios from 'axios'

const AxiosCall = () => {
    const [Data,setData]=useState("")
    useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/users')
               .then((res)=> {console.log(res.data)
               setData(res.data)   
        })
         .catch((err)=>console.log(err))
    },[])
  return (
    <div>AxiosCall

         <div>
            {Data && Data.map((item,index)=>{
                return(
                    <li key={index}>{item.name}</li>
                )
              })}

         </div>
    </div>
  )
}

export default AxiosCall