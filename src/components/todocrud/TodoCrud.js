import React, { useState } from "react";
import Todo from "./Todo";

const todoList = [
    {id : 1, name : 'React pagination', completed : 'false'},
    {id : 2, name : 'React Boostrap', completed : 'true'},
    {id : 3, name : 'React Hooks', completed : 'false'},
];

export default function TodoCrud(){
    
    const [todos, setTodos] = useState(todoList);

    console.log(typeof todos);

    const toggleTodo = (e) => {       
        const toggleIdex = e.target.value;               
        const updateTodo = todos.map((todo, ind) => {
            return  ind == toggleIdex ? {...todo, completed : todo.completed == 'true' ? 'false' : 'true' } : todo               
        })
        
        setTodos([...updateTodo]);
    }

    const deleteTodo = (e) => {
        const deleteId = e.target.value; 
        const updated = todos.filter((todo, ind) => {
            return todo.id != deleteId 
        });

        setTodos([...updated]);
    }

    return <>
    <h2 className="text-center">Todo App</h2>
    <div className="container">
        <div className="row">
            {todos.map((todo, ind) => {
             return <>   
             <div className="col-sm-8">            
             <Todo todoObj={todo} />
             </div>          
             <div className="col-sm-3">
             <button className="btn btn-danger" onClick={deleteTodo} value={todo.id}>Delete</button>
             <button className="btn btn-secondary" onClick={toggleTodo} value={ind}>Toggle</button>
             </div>
             </>  
            })}
        </div>
    </div>       
    </>
}