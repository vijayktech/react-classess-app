import React, {Component} from "react";

export default class PropsDemo extends Component{
    render(){
        let {name, msg} = this.props; // Props destructuring

        return <>
            <h2 className="text-center">Props Demo</h2>
            <h4 className="text-center"> Hi, {name}, {msg} </h4> 
            <h5> {this.props.children} </h5>           
        </>
    }
}