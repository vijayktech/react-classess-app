import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function CustomHookDemo() {
    const [username, setUsername] = useLocalStorage('username', 'Guest');

   const handleUserChange = (e) => {
        setUsername(e.target.value);
    }

    return <>
        <h3> Hello, {username}! </h3>
        <input type="text" placeholder="Enter name" value={username} onChange={handleUserChange} />
    </>
}