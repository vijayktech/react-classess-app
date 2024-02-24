import React, { useState } from "react";

const CounterHOC = (InputComponent) => {
    function UpdateComponent(){
        const [count, setCount] = useState(0);

        const increment = ()=> {
            setCount(count + 1);
        }

        // send props and callbacks to parent Components
        return <InputComponent count={count} increment={increment} />
    }

    return UpdateComponent;
}

export default CounterHOC;