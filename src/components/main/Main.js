import React from "react";
import { FaBeer, FaTrash, FaTrashAlt, FaTrashRestore, FaTrashRestoreAlt } from "react-icons/fa";
import ListItem from "./listItem/ListItem";
import ConditionalDemo1 from "../conditional/ConditionalDemo1";
import SwitchCondition from "../conditional/SwtichCondition";
import TernaryOperator from "../conditional/TernaryOperator";
import LogicalOperator from "../conditional/LogicalOperator";
import UserList from "./listItem/UserList";
import PropsDemo from "../props/PropsDemo";
import CustomHookDemo from "../hooks/CustomHookDemo";
import PasswordVisible from "../state/PasswordVisible";
import AdditionNum from "../state/AdditionNum";
import RemainingChar from "../state/RemainingChar";
import ProductSearch from "../search/ProductSearch";
import SweeAlertDemo from "../demo/SweetAlertDemo";
import TodoCrud from "../todocrud/TodoCrud";
import EventDemo from "../events/EventDemo";
import EventDemo2 from "../events/EventDemo2";
import EmployeeCrudOps from "../EmployeeCrud/EmployeeCrudOps";
import MemoParent from "../memo/MemoParent";
import PureComponentDemo from "../state/PureComponentDemo";
import LifeCyceDemo1 from "../LifeCycle/LifeCycleDemo1";
import LifeCyceDemo2 from "../LifeCycle/LifeCycleDemo2";
import LifeCycleFuncational from "../LifeCycle/LifeCycleFunctional";
import ClickCounter from "../HOC/ClickCounter";
import HoverCounter from "../HOC/HoverCounter";
import AxiosCallDemo from "../HTTP/AxiosCallDemo";
import AxiosCallDemo2 from "../HTTP/AxiosCallDemo2";
import AxiosGitHubDemo from "../HTTP/AxiosGitHubDemo";

export default function Main(){
    return <div>
        {/* <HoverCounter /> */}
        {/* <ClickCounter /> */}
        <AxiosGitHubDemo />
        {/* <AxiosCallDemo2 /> */}
        {/* <AxiosCallDemo /> */}
        {/* <LifeCycleFuncational /> */}
        {/* <LifeCyceDemo2 /> */}
        {/* <LifeCyceDemo1 /> */}
        {/* <PureComponentDemo /> */}
        {/* <MemoParent /> */}
        {/* <EmployeeCrudOps /> */}
        {/* <EventDemo2 /> */}
        {/* <EventDemo /> */}
        {/* <TodoCrud /> */}
        {/* <ProductSearch /> */}
        {/* <SweeAlertDemo /> */}
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