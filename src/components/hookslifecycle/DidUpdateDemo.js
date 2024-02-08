import React, { Component } from 'react'

export default class DidUpdateDemo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
     // componentDidUpdate is called after the component updates
    componentDidUpdate(prevProps, prevState){
        console.log("---componentDidUpdate ---");
        console.log("prev count:"+ prevState.count);
    }

    increment = () => {
        this.setState({count : this.state.count +1});
    }

  render() {
    return <>
    <h3>This is componentDidUpdate Demo!!</h3>
     <p> Incremented count is {this.state.count} </p>
     <button onClick={this.increment}>Increment</button>
   </>
  }
}
