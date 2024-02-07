import React from "react";
import UserCard from "./UserCard";
// import Users from "./users2.json"
import Users from "./users.json";

export default function UserList(){

    return <>
        <h2 className="text-center">User List</h2>
        <hr/>

        <div className="container">
            <div className="row">
                {Users.map((userObj, ind) => {
                    return <UserCard userObj={userObj} />
                } )}
            </div>
        </div>
        
    </>
}