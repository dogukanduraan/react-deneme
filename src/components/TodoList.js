import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {

  const items = todos.map((item) => <Todo key={item} todo={item}></Todo>);

  return (
  
  <>
  <h1 className="grid justify-items-center px-5 text-4xl py-5">Todo App</h1>
  <li className="grid justify-items-center px-5 bg-red-900 text-white" >
    {items} 
  
  </li>
  
  </>
  );

}

export default TodoList;
