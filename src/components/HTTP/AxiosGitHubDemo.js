import axios from "axios";
import React, { useEffect, useState } from "react";
import LoggerHOC from "../HOC/LoggerHOC";

function AxiosGitHubDemo(){

    let [gitHubData, setGitHubData] = useState([]);

    const userNames = ['vijayktech', 'sanjaysamantra1', 'defunkt'];


    const fetchGitHubUser = async () => {
        const userPromiseArr = [];

        // API call is 3 times as three users 
        for(let userName of userNames) {
            let promise = axios.get(`https://api.github.com/users/${userName}`);
            userPromiseArr.push(promise);
        }
        

        try{
            let respArr = await axios.all(userPromiseArr);
            respArr = respArr.map(resp => resp.data);
            setGitHubData(respArr);
        }catch(err){
            console.log('Error in User fetching from GitHub');
        }
    }

    useEffect(()=> {
        fetchGitHubUser()
    } , []);

    return <>
     <h2 className='text-center'>GitHub Data using axios.all</h2>
            <table className='table table-bordered table-striped'>
                <tbody>
                    {gitHubData.map(row => {
                        return <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.login}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.followers}</td>
                            <td>{row.location}</td>
                            <td>{row.public_repos}</td>
                        </tr>
                    })}
                </tbody>
            </table>
    </>
}

export default LoggerHOC(AxiosGitHubDemo);