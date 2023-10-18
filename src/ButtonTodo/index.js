import "./ButtonTodo.css";

function ButtonTodo() {
  return (
    <button 
      className="TodoButton" 
      onClick={ 
        (event)=> {
          console.log(event);
          console.log(event.target);
          console.log("click here");
        }
      }>
      +
    </button>
  );
}

export {ButtonTodo};