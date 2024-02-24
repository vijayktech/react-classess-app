import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export default function MemoParent(){

    const [compA, setCompA] = useState(100);
    const [compB, setCompB] = useState(200);
    const [compC, setCompC] = useState(300);

    return <>
        <button  onClick={()=> setCompA(compA+1)}>Update A</button>
        <button  onClick={()=> setCompB(compB+1)}>Update B</button>
        <button  onClick={()=> setCompC(compC+1)}>Update C</button>

        <ComponentA compA={compA} />
        <ComponentB compB={compB} />
        <ComponentC compC={compC} />
    </>
}