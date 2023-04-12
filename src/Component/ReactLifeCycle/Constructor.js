import React, { Component } from 'react';  
  
class Constructor extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 0
      }  
    this.handleEvent = this.handleEvent.bind(this);  
  }  
  handleEvent(){  
    this.setState({data:this.state.data+1})
    console.log(this.state.data);  
  }  
  render() {  
    return (  
      <div className="App">  
    <h2>React Constructor using Bind Example</h2>  
    <div>{this.state.data}</div>
        <button onClick={this.handleEvent}>Please Click</button>  
      </div>  
    );  
  }  
}  
export default Constructor; 