import React, { Component } from "react";

export default class LifeCyceDemo1 extends Component{

    // Mounting -> constructor(), getDerivedStateFromProps(), render(), componentDidMount
    // Updating -> getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()
    // UnMounting -> componentWillUnmount
    constructor(props){
        super(props);
        console.log("constructor call..");
        this.state = {
            counter : 0
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps call..");
        return state;
    }

    componentDidMount(){
        console.log("componentDidMount call..");
    }

    shouldComponentUpdate(){ // default = true
        console.log("shouldComponentUpdate call..");
        document.getElementById('div1').style.color = "red";
        return true;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate call..")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount call..")
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate call..")
        console.log(`Prev coutner ${prevState.counter} and current counter is ${this.state.counter}`)
        return null;
    } 

    incrementCounter = () => {
        this.setState({counter : this.state.counter+1})
    }

    render() {
    console.log("render call..")
    return <>
            <h3> LifeCycle component!! </h3>
            <div id="div1">Counter value is {this.state.counter}</div>
            <button onClick={this.incrementCounter}>Increment</button>
        </>
    };
}