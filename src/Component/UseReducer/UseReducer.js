import React, {useState} from 'react'

const UseReducer = () => {
    const [Counter, setCounter] = useState(0);
    //state variable    //setter function
    const Increment = () => {
        setCounter(Counter+1);
    }
     
     
  return (
   <>
     Increment:{Counter}
     <br/>
     <button onClick={Increment}>Increment!!</button>
   </>
  )
}

export default UseReducer