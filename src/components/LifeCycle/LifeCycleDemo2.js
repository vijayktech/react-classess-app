import React, { Component } from "react";

export default class LifeCyceDemo2 extends Component{

    constructor(props){
        super(props);
            this.state = {
                id : 1,
                userInfo : {}
            }
    }
    // this functions when page loads
    componentDidMount(){
        this.fetchUserDetails(this.state.id);
    }

    // this functions when update state. 
    componentDidUpdate(){
        this.fetchUserDetails(this.state.id);
    }

    fetchUserDetails = async (id) => {
       let resp = await fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
       let fetchedUserInfo = await resp.json();
       this.setState({userInfo : fetchedUserInfo});        
    }

    getNextUser = () => {
        this.setState({ id : this.state.id + 1 });
    }

    render(){
        return <>
            <h3>User Details of the Id {this.state.id} </h3>
            <button onClick={this.getNextUser}>Display Next User</button>

            <div className="col-sm-3">
                <div className="card text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU" className="card-img-top" alt="..." />                
                <div className="card-body">
                    <h5 className="card-title">{this.state.userInfo?.name} </h5>
                    <p className="card-text">{this.state.userInfo?.email}</p>
                    <p className="card-text">{this.state.userInfo?.city}</p>
                    <p className="card-text">{this.state.userInfo?.phone}</p>
                    <a href="#" className="btn btn-primary">User Details</a>
                </div>
                </div>
            </div>
        </>
    }
}