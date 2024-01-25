import React from "react";
import { FaBeer, FaTrash, FaTrashAlt, FaTrashRestore, FaTrashRestoreAlt } from "react-icons/fa";

export default function Main(){
    return (
        <div style={{minHeight:'350px'}}>
            <div>This is Main page</div>
            <div>This is Boostrap icons</div>
            <i className="bi-alarm"></i>

            <h2>Hey, Would you like to go for a <FaBeer color='red' /> ?</h2>
        </div>
    );
}