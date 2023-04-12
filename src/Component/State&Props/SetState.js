import React, { Component } from 'react'

export default class setState extends Component {
    constructor(){
        super();
        this.state={
            heading:"Welcome to React",
            count:1,
            inputTextToRender:"",
        };
    }
    handleClick = () =>{
        this.setState({count:this.state.count + 1})
        console.log("Increment")
    }

    handleInputChange = (e) =>{
      this.setState({inputTextToRender: e.target.value})

      console.log(e.target.value,"Entered value");
    }
  render() {
    return (
      <>
        <h1>{this.state.heading}</h1>
        <button className='heading' onClick={this.handleClick}>Click Me!!</button>
        <h3>Counter: {this.state.count}</h3>
        <h1>inputTextToRender: {this.state.inputTextToRender}</h1>
        <input onChange={this.handleInputChange} />

        <br/>
      </>
    )
  }
}
