import React, { useState } from "react";

export default function EditEmployee({editEmp, editSaveEmployee, cancelSave}) {

    const [empObj, setEmpObj] = useState( editEmp );

    const empHandler = (e) => {
       setEmpObj( {...empObj, [e.target.name] : e.target.value} );
    }

    return <>
        <h2> Edit Employee </h2>
                
        <p>eId : <input defaultValue={editEmp.eId} name='eId' onChange={(e) => empHandler(e)} /></p>
        <p>Name : <input defaultValue={editEmp.name} name='name' onChange={(e) => empHandler(e)} /></p>
        <p>Salary : <input defaultValue={editEmp.sal} name='sal' onChange={(e) => empHandler(e)} /></p>
        <div className='text-center'>
            <button onClick={() => cancelSave()} className='btn btn-secondary mx-1'>Cancel</button>
            <button onClick={() => editSaveEmployee(empObj)} className='btn btn-primary'>Save</button>
        </div>
    </>
}