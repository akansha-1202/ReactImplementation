import React, { Component } from 'react'

class Mounting extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
        console.log("1 using Constructor method");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("2 using getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("4 using componentDidMount");
    }
    increment(){
        this.setState({count:this.state.count+1})
    }

  render() {
    console.log("3 using render method");
    return (
      <div>Mounting
                <div>{this.state.count}</div>
                <button onClick={()=>{this.increment()}}>Click Me!</button>
      </div>
    )
  }
}

export default Mounting