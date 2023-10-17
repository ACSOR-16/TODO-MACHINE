import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { ButtonTodo } from './ButtonTodo';
import './App.css'; 

const defaultTodo = [
  {text: "cutting onion", completed: false},
  {text: "read the React Documentation", completed: false},  
  {text: "make to the bed", completed: true},
  {text: "use state React", completed: true},
];

function App() {
  const [toDos, setToDos] = React.useState(defaultTodo);
  const [searchValue, setSearchValue] = React.useState("");
  
  const completedToDos = toDos.filter(todo => !!todo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter(toDo => {
    const toDoText = toDo.text.toLowerCase();
    const searchToDo = searchValue.toLowerCase();
    
    return toDoText.includes(searchToDo);
  });
  
  console.log("users find all " + searchValue);
  
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
            completed={todo.completed}/>
        ))}

      </TodoList>

      <ButtonTodo/>
    </>
  );
}

export default App;
