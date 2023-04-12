import React from 'react'
import HocCompo from './HocCompo';

const HoverCounter = (props) => {
  console.log("from hoverCounter", props)
  return (
    <>
       HoverCounter:{props.Value}
       <div><button onMouseOver={props.updateCounter}>Increment!!</button></div>
    </>
  )
}

export default HocCompo(HoverCounter)