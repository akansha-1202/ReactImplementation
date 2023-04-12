import React, { Component } from 'react'

class Heading extends Component {
    componentWillUnmount(){
        console.log("7 using  componentWillUnmount")
    }
  render() {
    return (
      <div style={{backgroundColor:'red'}}>Heading</div>
    )
  }
}

export default Heading