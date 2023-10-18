import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { ButtonTodo } from './ButtonTodo';
import './App.css'; 

// const defaultTodo = [
//   {text: "cutting onion", completed: false},
//   {text: "read the React Documentation", completed: false},  
//   {text: "make to the bed", completed: true},
//   {text: "use state React", completed: true},
// ];

function App() {
  const localStorageToDos = localStorage.getItem("TDS_V1");
  
  let parsedToDos;

  if (!localStorageToDos) {
    localStorage.setItem("TDS_V1", JSON.stringify([]));
    parsedToDos = [];
  } else {
    parsedToDos = JSON.parse(localStorageToDos);
  }
  const [toDos, setToDos] = React.useState(parsedToDos);
  const [searchValue, setSearchValue] = React.useState("");
  
  const completedToDos = toDos.filter(todo => !!todo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter(toDo => {
    const toDoText = toDo.text.toLowerCase();
    const searchToDo = searchValue.toLowerCase();
    
    return toDoText.includes(searchToDo);
  });
  
  function saveTodo(newToDos) {
    localStorage.setItem("TDS_V1", JSON.stringify(newToDos))
    setToDos(newToDos)
  }

  const completeToDos = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex( (toDo) => toDo.text == text);

    if (newToDos[toDoIndex].completed == true) {
      newToDos[toDoIndex].completed = false;
    } else {
      newToDos[toDoIndex].completed = true
    }
    saveTodo(newToDos)
  };
  
  const deleteToDos = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex( (toDo) => toDo.text == text);

    newToDos.splice(toDoIndex, 1);
    saveTodo(newToDos)
  };
  
  console.log(toDos, setToDos);
  return (
    <>
      
      <TodoCounter 
        completed={completedToDos} 
        total={totalToDos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        
        {searchedToDos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDos(todo.text)}
            onDelete={() => deleteToDos(todo.text)}  
          />
        ))}

      </TodoList>

      <ButtonTodo/>
    </>
  );
}

export default App;
