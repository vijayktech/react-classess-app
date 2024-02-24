import React, { Component, PureComponent } from 'react'

// PureComponent will only rendered if content of state is changed. 
export default class PureComponentDemo extends PureComponent {

    state = {
        color: 'red'
    }

    changeColor = () => {
        this.setState({ color: 'red' });
    }

    render() {
        return <>
            {console.log('Component is rendered')}

            <h3> Color is {this.state.color} </h3>
            <button onClick={this.changeColor}>Change color</button>
        </>
    }
}
