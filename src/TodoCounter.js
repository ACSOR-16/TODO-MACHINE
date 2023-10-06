import "./TodoCounter.css";

function TodoCounter({total, completed}) {
  return (
    <h1 className="TodoCounter">
      you have completed <span>{completed}</span> of <span>{total}</span> task
    </h1>
  );
}
  
export { TodoCounter };