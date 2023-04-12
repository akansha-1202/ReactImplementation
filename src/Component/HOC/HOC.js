import React, { useState } from 'react'

const HOC = () => {
    const [Count, setCount]= useState(0);
  return (
   <>
      <button onClick={() => setCount(Count+1)}>Clicked {Count} times</button>
   </>
  )
}

export default HOC