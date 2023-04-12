import React, {useState} from "react";

const HooksEx=() => {
    const[Counter, setCounter]=useState(0);
    //state variable    //setter function
    const Increment = () => {
        setCounter(Counter+1);
    }
     
    
    return (
        <div>
            HooksEx

            <div style={{color:'red',fontSize:'20'}}>Counter Value:{Counter}</div>
              {/* two ways to add functionality to event */}
              {/* 1.By declaring setter function as a variable in starting of component */}
            <button onClick={Increment}>Increment!!</button>

              {/* 2.By declaring setter function using arrow function  */}
            <button onClick={() => {setCounter(Counter-1)}}>Decrement!!</button>
        </div>
    )
}
export default HooksEx;