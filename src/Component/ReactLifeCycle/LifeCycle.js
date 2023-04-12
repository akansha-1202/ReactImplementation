import React, {Component} from 'react'

//LifeCycle in class component
class LifeCycleMethods extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    componentDidMount(){
        console.log("hello World!Our Component Is successfully mounted.");
    }
    componentDidUpdate(){
        console.log("hello guys!!Our Component Is successfully updated");
        // alert("Updated");
    }
    componentWillUnmount(){
        console.log("Component is unmounted.");
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return (
            <div>LifeCycle Methods:
                <div>{this.state.count}</div>
                <button onClick={()=>{this.increment()}}>Click Me!</button>
                <div style={{color:'red',backgroundColor:'blue'}}>{this.props.data}</div>
            </div>
        )
    }
}

export default LifeCycleMethods