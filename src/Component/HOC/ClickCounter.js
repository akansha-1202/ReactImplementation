import React from 'react'
import HocCompo from './HocCompo';

const ClickCounter = (props) => {
  console.log(props)
  return (
    <> 
      ClickCounter:{props.Value}
      <br/>
      <button onClick={props.updateCounter}>Increment!!</button>
    </>
  )
}

export default HocCompo(ClickCounter)