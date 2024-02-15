import React from 'react'
import { useState } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';


export default function EmployeeCrudOps() {

  const initialEmployees = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "ranjan", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 },
  ];
  const [employees, setEmployees] = useState(initialEmployees);
  const [isEdit, setEdit] = useState(false);
  const [editEmp, setEditEmp] = useState(initialEmployees);
  
  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
  }

  const editEmployee = (empObj) => {     
    setEditEmp(empObj);
    setEdit(true);  
  }

  const editSaveEmployee = (editSaveEmpObj) => {   
   const updatedEmp = employees.map((emp) => {
      return emp.eId == editSaveEmpObj.eId ? editSaveEmpObj : emp;
    });

    setEmployees(updatedEmp);
    setEdit(false); 
  }

  const deleteEmployee = (empId) => {
    const latestEmpList = employees.filter(emp => emp.eId !== empId);
    setEmployees(latestEmpList);
  }

  const cancelSave = ()=> {
    setEmployees(initialEmployees);
}
  return <>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-8'>
          <EmployeeList 
          employees={employees} 
          editEmployee={editEmployee}
          deleteEmployee={deleteEmployee}
          
          />
        </div>
        <div className='col-sm-4'>
         {isEdit ? 
         (<EditEmployee 
          editEmp={editEmp} 
          editSaveEmployee={editSaveEmployee}
          cancelSave={cancelSave}           
         />) 
         : (<AddEmployee addEmployee={addEmployee} />) } 
        </div>
      </div>
    </div>

  </>
}
