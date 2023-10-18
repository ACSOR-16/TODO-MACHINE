import React from "react";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      
      <div className={`Icon`}>
        <CompleteIcon
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onComplete={props.onComplete}
        />
      </div>
      

      <p 
        className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}
      >
        {props.text}
      </p>
      
      <div className="Icon">
        <DeleteIcon 
          className="Icon Icon-delete" 
          onDelete={props.onDelete} />
      </div>

    </li>
  );
}

export { TodoItem };