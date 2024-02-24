import React from "react";
import CounterHOC from "./CounterHOC";

// {count, increment} receving from Higher Order Component
function ClickCounter({count, increment}){

    return <>
        <h3>In Click Counter Component - count is {count}</h3>
        <button onClick={increment} > Increment Click Me </button>
    </>
}

export default CounterHOC(ClickCounter);