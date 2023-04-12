import React,{useEffect} from "react";

const SideEffect = () =>{
     useEffect(() => {
        console.log("useEffect is triggered")//callBack Function
     },[])//dependency array

    return(
    <div>SideEffect</div>
    )
}

export default SideEffect;