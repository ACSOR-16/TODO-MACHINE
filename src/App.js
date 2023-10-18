import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { ButtonTodo } from './ButtonTodo';
import './App.css'; 

// CUSTOM HOOKS

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {
  const [toDos, saveTodo] = useLocalStorage("TDS_V1", [])
  const [searchValue, setSearchValue] = React.useState("");
  
  const completedToDos = toDos.filter(todo => !!todo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter(toDo => {
    const toDoText = toDo.text.toLowerCase();
    const searchToDo = searchValue.toLowerCase();
    
    return toDoText.includes(searchToDo);
  });
  
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
