import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { 
    completedToDos,
    totalToDos, 
  } = React.useContext(ToDoContext);

  return (
    <h1 className="TodoCounter">
      you have completed <span>{completedToDos}</span> of <span>{totalToDos}</span> ToDos
    </h1>
  );
}
  
export { TodoCounter };