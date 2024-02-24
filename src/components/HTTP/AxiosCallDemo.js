import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../main/listItem/UserCard";

export default function AxiosCallDemo(){
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchUsers = async () => {
        const url = `https://jsonplaceholder.typicode.com/users`
        let resp = await axios.get(url);
        console.log(resp);

        setUsers(resp.data);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
         fetchUsers();
    } ,[])

    return <>
        <h2 className="text-center">Fetch User details using AXIOS call</h2>
        <div className="container">
            <div className="row">
                { isLoading ? (<h3>Loading ...</h3>) : (
                    users.map(user => <UserCard userObj={user} key={user.id}/>)
                )}
            </div>
        </div>
    </>
}