import React, { useState } from 'react'

export default function AddEmployee({ addEmployee }) {

  const [empObj, setEmpObj] = useState({ eId: 0, name: '', sal: 0 });

  const empHandler = (e) => {
     setEmpObj( {...empObj, [e.target.name] : e.target.value} );
  }

  return <>
    <h2>Add Employee</h2>
    <p> EId : <input type='text' name='eId' onChange={(e) => empHandler(e)} /> </p>
    <p> Name        : <input type='text' name='name' onChange={(e) => empHandler(e)} /> </p>
    <p> Sal         : <input type='text' name='sal' onChange={(e) => empHandler(e)} /> </p>
    <button className='btn btn-success' onClick={() => {addEmployee(empObj)}} > Add Employee </button>
  </>
}
