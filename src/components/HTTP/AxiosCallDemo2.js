import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../main/listItem/UserCard";
import AxiosClient from "./AxiosClient";
import LoggerHOC from "../HOC/LoggerHOC";

function AxiosCallDemo2(){
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchUsers = async () => {
        // Relative URL 
        let resp = await AxiosClient.get('/users');
        console.log(resp);

        setUsers(resp.data);
        setLoading(false);
    };

    const fetchComments = async () => {
        let respComments = await AxiosClient.get('/comments')
        console.log(respComments.data);
    };

    const fetchPhotos = async () => {
        let respPhotos = await AxiosClient.get('/photos');
        console.log(respPhotos.data);
    };

    useEffect(() => {
        setLoading(true);
         fetchUsers();
         fetchComments();
         fetchPhotos();
    } ,[]);

   

    return <>
        <h2 className="text-center">Fetch User details using AXIOS Demo 2 call</h2>
        <div className="container">
            <div className="row">
                { isLoading ? (<h3>Loading ...</h3>) : (
                    users.map(user => <UserCard userObj={user} key={user.id}/>)
                )}
            </div>
        </div>
    </>
}

export default LoggerHOC(AxiosCallDemo2);