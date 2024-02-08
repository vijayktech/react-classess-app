import React, { Component } from "react";

export default class WillUnMount extends Component{

    constructor(){
        super();

        this.state = {
            seconds : 0
        };

        this.timer = null; //Initialise the timer

    }

    componentDidMount(){
       this.timer = setInterval( () => { this.setState({seconds : this.state.seconds + 1})} , 1000)
       console.log(this.timer);
    }

    // This is called just before a component is removed from the DOM.
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return <>
            <h3>This is componentWillUnmount Demo</h3>
        
            <p>Elapsed Time: {this.state.seconds} seconds</p>
        </>
    } 
}