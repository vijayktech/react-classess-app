import React from "react";

export default function TernaryOperator(){

    const users = [
        { name: 'Sarah Lifaefi' },
        { name: 'Patience Kavira' },
        { name: 'Abel Lifaefi' },
        { name: 'Neema Kelekele' },
      ]

      const showUsers = users.length;

      return <>
        { showUsers >0 ? (
            <div>
                <h3> Available users</h3>
                <ul>
                    {users.map(user => <li> {user.name} </li>)}
                </ul>                
            </div>
        ) : (
            <p> No Users are Available</p>
        ) }
      </>
}