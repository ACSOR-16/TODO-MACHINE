import React from "react";
import "./ToDoForm.css";
import { ToDoContext } from "../ToDoContext";

function ToDoForm() {
  const { addToDo, setOpenModal} = React.useContext(ToDoContext);
  const [newToDo, setNewToDo] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDo);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewToDo(event.target.value)
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new ToDo</label>
      <textarea
        placeholder="Write your ToDo"
        value={newToDo}
        onChange={onChange}
      />

      <div className="ToDoForm-button-container">
        <button 
          type="button"
          className="toDoForm-button button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        
        <button 
          type="submit"
          className="toDoForm-button button--add"
        >
          Add
        </button>

      </div>
    </form>
  );
}

export { ToDoForm };