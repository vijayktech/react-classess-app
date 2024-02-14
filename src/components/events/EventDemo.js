import React, { useState } from "react";

export default function EventDemo() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const numHandler1 = (e) => {
        const n1= +e.target.value;
        setNum1(n1);        
        
    }

    const numHandler2 = (e) => {
        const n2 = +e.target.value;
        setNum2(n2);
    }

    // const [numObj, setNumObj] = useState({num1:0, num2:0});

    // const sum = (e) => {
    //     const n= +e.target.value;       
    //     const tagName = e.target.name;
    //     tagName == "number1" ? (setNum1(n)) : (setNum2(n));    
    // }

    return <>
        <div className="container">
            <h3>multiple Event Handler for multiple elements - Demo!</h3>
            Number 1 :<input type="text" name="num1" onChange={(e) => numHandler1(e)} />
            <br></br>
            Number 2 :<input type="text" name="num2" onChange={(e) => numHandler2(e)} />
            <br />
            Sum of {num1} & {num2} is {num1 + num2}
            {/* Sum of {numObj.num1} & {numObj.num2} is {numObj.num1 + numObj.num2} */}
        </div>
    </>
}