import React from "react";
import Swal from "sweetalert2"

export default function SweeAlertDemo() {

    const alertDemo = () => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
    })
    }    

    return <>
    <h3>Sweet Alert Demo</h3>              
       <button onClick={alertDemo}>Click Me</button>
    </>
}