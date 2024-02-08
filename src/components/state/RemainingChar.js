import React, { useState } from "react";

export default function RemainingChar(){

    const [count, setCount] = useState(100);

    const calcChar = (e) => {
        let msg = e.target.value;
        setCount(100 - msg.length);
    }

    return <>
        <textarea onKeyUp={calcChar}/> <p> {count}</p>
    </>
}