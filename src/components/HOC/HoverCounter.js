import React from "react";
import CounterHOC from "./CounterHOC";

function HoverCounter({increment, count}){

    return <>
        <h3>In Hover Counter - Counter {count} </h3>
        <button onMouseOver={increment}>Hover It</button>
    </>
}

export default CounterHOC(HoverCounter);