import React, { useReducer } from 'react'

const initialState=0;
const reducer = (state,action)=>{
    switch(action){
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        case "Multiplication":
            return state*10
        default:
            return state
    }

}
const CounterWithUseReducer = () => { 
    const [Counter, dispatch] = useReducer(reducer, initialState)
  return (
    <div>CounterWithUseReducer : {Counter}
        <br/>
        <button onClick={()=>dispatch("Increment")}>Increment!!</button>
        <br/>
        <button onClick={()=>dispatch("Decrement")}>Decrement!!</button>
        <br/>
        <button onClick={()=>dispatch("Multiplication")}>Multiplication!!</button>


    </div>
  )
}

export default CounterWithUseReducer