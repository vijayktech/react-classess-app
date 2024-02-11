import React from "react";
import { FaBeer, FaTrash, FaTrashAlt, FaTrashRestore, FaTrashRestoreAlt } from "react-icons/fa";
import ListItem from "./listItem/ListItem";
import ConditionalDemo1 from "../conditional/ConditionalDemo1";
import SwitchCondition from "../conditional/SwtichCondition";
import TernaryOperator from "../conditional/TernaryOperator";
import LogicalOperator from "../conditional/LogicalOperator";
import UserList from "./listItem/UserList";
import PropsDemo from "../props/PropsDemo";
import DidMountDemo from "../hookslifecycle/DidMountDemo";
import DidUpdateDemo from "../hookslifecycle/DidUpdateDemo";
import WillUnMount from "../hookslifecycle/WillUnMount";
import CustomHookDemo from "../hooks/CustomHookDemo";
import PasswordVisible from "../state/PasswordVisible";
import AdditionNum from "../state/AdditionNum";
import RemainingChar from "../state/RemainingChar";
import ProductSearch from "../search/ProductSearch";
import SweeAlertDemo from "../demo/SweetAlertDemo";

export default function Main(){
    return <div>
        {/* <SweeAlertDemo /> */}
        <ProductSearch />
     {/* <RemainingChar /> */}
    {/*  <AdditionNum /> */}
      {/* <PasswordVisible />  */}
    
    {/* <CustomHookDemo /> */}
    
    {/* <WillUnMount /> */}
    
    {/* <DidUpdateDemo /> */}
    
    {/* <DidMountDemo /> */}
    
    {/* <PropsDemo name="Vijay" msg="Hello React" >
            <div> This content recived from Parent to Child</div>
         </PropsDemo> */}

    {/* <UserList /> */}
    {/* <LogicalOperator /> */}
    {/* <TernaryOperator /> */}

    {/* <SwitchCondition /> */}
    
    {/* <ConditionalDemo1 /> */}
   
    {/* <ListItem /> */}
    {/* (
        <div style={{minHeight:'350px'}}>
            <div>This is Main page</div>
            <div>This is Boostrap icons</div>
            <i className="bi-alarm"></i>

            <h2>Hey, Would you like to go for a <FaBeer color='red' /> ?</h2>
        </div>
    );  */}
    
    </div>
}