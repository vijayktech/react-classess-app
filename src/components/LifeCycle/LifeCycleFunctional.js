import React, { useEffect, useState } from "react";

export default function LifeCycleFuncational(){
    let [userInfo, setUserInfo] = useState({});
    const [id, setId] = useState(1);

    const getNextUser = (id) => {
        setId(id + 1);
    }

    const fetchUserInfo = async() => {
        let resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let user = await resp.json();
        setUserInfo(user);
        return setUserInfo;
    }

    // useEffect will call in Mounting, Updating, UnMounting phases.
    useEffect( () => {
        fetchUserInfo();

        
        return () => {
            console.log('I am unmounting from useEffect');
        }
    } ,[id]);

    return <>
        <h3>User Details of the Id {id} </h3>
            <button onClick={() => getNextUser(id)}>Display Next User</button>

            <div className="col-sm-3">
                <div className="card text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU" className="card-img-top" alt="..." />                
                <div className="card-body">
                    <h5 className="card-title">{userInfo?.name} </h5>
                    <p className="card-text">{userInfo?.email}</p>
                    <p className="card-text">{userInfo?.city}</p>
                    <p className="card-text">{userInfo?.phone}</p>
                    <a href="#" className="btn btn-primary">User Details</a>
                </div>
                </div>
            </div>
    </>
}