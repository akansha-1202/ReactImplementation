import React, {Component} from "react";
import Heading from "./Heading";

class Updating extends Component {
    constructor(props) {
      super(props);
      this.state = {
            favoritecolor: "red",
            isHeading:true,
            count:0,
          };
      console.log("1 using constructor")
    }
    componentDidMount() {
      console.log("2 using mount")
    }

    shouldComponentUpdate(){
      console.log("3 using shouldComponentUpdate")
      return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("4 using getSnapshotBeforeUpdate")
      document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
      return null;
    }
    componentDidUpdate() {
        console.log("5 usimg componentDidUpdate")
      document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    Increment = () =>{
      this.setState({
            isHeading:false,
            favoritecolor: "yellow",
            count:this.state.count + 1,
      }
      )
    }
    render(){
        console.log("6 usimg render")
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          {this.state.isHeading?<Heading/>:null}
          <div id="div1"></div>
          <div id="div2"></div>

          <button onClick={this.Increment }>Increment {this.state.count} times</button>
        </div>
      )
    }
  }
  export default Updating;