import React from "react";

export default function Todo({todoObj}) {
    let {id, name, completed} = todoObj;

    return <>
        <table className="table table-borded">
            <tr key={id}>
                <td > {id} </td>
                <td style={{ textDecoration : completed == 'true' ? 'line-through' : ''}}>{name}</td>
                <td>{completed}</td>
            </tr>
        </table>
      
    </>
}