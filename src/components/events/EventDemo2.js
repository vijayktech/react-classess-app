import React, { useState } from "react";

export default function EventDemo() {
    
    const [numObj, setNumObj] = useState({num1:0, num2:0});

    const sum = (e) => {
       
        // One handler for multiple events
        setNumObj({...numObj, [e.target.name]: +e.target.value } );
    }

    return <>
        <div className="container">
            <h3>One Event Handler for multiple elements - Demo!</h3>
            Number 1 :<input type="text" name="num1" onChange={(e) => sum(e)} />
            <br></br>
            Number 2 :<input type="text" name="num2" onChange={(e) => sum(e)} />
            <br />           
            Sum of {numObj.num1} & {numObj.num2} is {numObj.num1 + numObj.num2}
        </div>
    </>
}