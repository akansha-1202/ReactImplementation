import React, { useState } from 'react'

function StateUpLifting(props) {
    const [name, setName]=useState("")
    const HandleSubmit = (e) =>{
        e.preventDefault();
        console.log(props);
        console.log(props);
        props.getData(name);
    }
  return (
    <div>StateUpLifting
        <form>
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
            <button onClick={HandleSubmit}>Click Me!!</button>
        </form>
    </div>
  )
}

export default StateUpLifting;

//state up lifting means rendering data from child to parent