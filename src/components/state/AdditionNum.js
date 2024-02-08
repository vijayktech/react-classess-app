import React, { useState } from "react";

export default function AdditionNum(){

    const [numb1, setNumb1] = useState(0);
    const [numb2, setNumb2] = useState(0);

    const num1 = (e) => {
        setNumb1(e.target.value);
    }

    const num2 = (e) => {
        setNumb2(e.target.value);
    }

    return <>
        <h2> useState Demo</h2>
        <p> type : {typeof Number(numb1) } </p>
        <p> Addition of {numb1} + {numb2} = {Number(numb1)  + Number(numb2) } </p>
        <input type="text" onChange={num1} placeholder="Enter number" />
        <input type="text" onChange={num2} placeholder="Enter number" />

    </>
}