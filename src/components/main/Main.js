import React from "react";
import { FaBeer, FaTrash, FaTrashAlt, FaTrashRestore, FaTrashRestoreAlt } from "react-icons/fa";
import ListItem from "./listItem/ListItem";
import ConditionalDemo1 from "../conditional/ConditionalDemo1";
import SwitchCondition from "../conditional/SwtichCondition";
import TernaryOperator from "../conditional/TernaryOperator";
import LogicalOperator from "../conditional/LogicalOperator";
import UserList from "./listItem/UserList";
import PropsDemo from "../props/PropsDemo";

export default function Main(){
    return  <PropsDemo name="Vijay" msg="Hello React" >
            <div> This content recived from Parent to Child</div>
         </PropsDemo>

    // <UserList />
    // <LogicalOperator />
    // <TernaryOperator />

    // <SwitchCondition />
    
    // <ConditionalDemo1 />


    // <>
    //             <ListItem />
    // </>


    // (
    //     <div style={{minHeight:'350px'}}>
    //         <div>This is Main page</div>
    //         <div>This is Boostrap icons</div>
    //         <i className="bi-alarm"></i>

    //         <h2>Hey, Would you like to go for a <FaBeer color='red' /> ?</h2>
    //     </div>
    // );
    
}