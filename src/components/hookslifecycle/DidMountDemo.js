import React, { Component } from "react";

export default class DidMountDemo extends Component{

    constructor(){
        super();

        this.state = {
            data : null
        }
    }

    // In this example, we simulate fetching data from an API after the component has mounted.
    // We use a setTimeout to mimic an asynchronous operation.

    // This is called after a component has been inserted into the DOM.
    componentDidMount(){
        console.log("--- Component Did Mount invoked --");

        setTimeout( () => {
            const fetchedData = "Data retrived from ";
            this.setState({ data : fetchedData});
        } ,2000)
    }

    render() {
        return <>
            <h3>This is ComponentDidMount Demo!!</h3>
            {this.state.data ? (
                <p> Data fetched is {this.state.data} </p>
            ) : (
                <p> Data is loading ... </p>
            )}

        </>
    }
}