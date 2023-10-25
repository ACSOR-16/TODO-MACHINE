import React from "react";
import "./ButtonTodo.css";
import { ToDoContext } from "../ToDoContext";

function ButtonTodo() {
  const {setOpenModal} = React.useContext(ToDoContext)
  
  return (
    <button 
      className="TodoButton" 
      onClick={ 
        ()=> {
          setOpenModal(state => !state);
        }
      }>
      +
    </button>
  );
}

export {ButtonTodo};