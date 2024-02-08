import React, { useState } from "react";

export default function PasswordVisible(){

    const [pwdFlag, setPwdFlag] = useState(true);

    const showPass = () => {
        console.log("showPass")
        setPwdFlag(!pwdFlag)
    }

    return <>
        <h3> useState demo !!</h3>
        <h5> Visiable the password </h5>
        <input type={ pwdFlag ? 'password' : 'text' } /> 
        <input  type="checkbox" onClick={showPass} />
    </>
}