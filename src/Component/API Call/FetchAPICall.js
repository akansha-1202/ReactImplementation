import React, {useEffect, useState} from 'react'

const FetchAPICall = () => {
    const [Data, setData]=useState("")
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => {console.log(json) 
        setData(json)})
        .catch((err) => console.log("error is here",err))
    },[])
  return (
    <div>FetchAPICall
         <div>
            {Data && Data.map((item,index)=>{
                return(
                    <li key={index}>{item.email}</li>
                )
                })}

         </div>

    </div>
  )
}

export default FetchAPICall