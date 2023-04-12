import React, {useEffect, useState} from 'react'
import axios from 'axios'

const LazyComponent = () => {
    const [Data,setData]=useState("")
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=> {console.log(res.data) 
            setData(res.data) 
 })
  .catch((err)=>console.log(err))
},[])
  return (
    <div>LazyComponent<div>
    {Data && Data.map((item,index)=>{
        return(
         <img key={index} src={item.thumbnailUrl} alt='image' width='150px' height='100px'></img>
        )
      })}

 </div>


    </div>
  )
}

export default LazyComponent