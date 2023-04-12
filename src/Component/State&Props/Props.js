import React, { Component } from 'react'

// function Props(props) {
//   console.log({props});

//   return (
//     <div>Props Passed: {props.message}</div>
//   )
// }
class Props extends Component{
  render(){
    return(
      <>
        <h1>Props passed in class Component:{this.props.message}</h1>
      </>
    )
  }
}

export default Props