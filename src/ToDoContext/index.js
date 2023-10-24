import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function TodoProvider({children}) {
  const {
    item: toDos, 
    saveItem: saveTodo, 
    loading, error
  } = useLocalStorage("TDS_V1", [])
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
    const toDoIndex = newToDos.findIndex( (toDo) => toDo.text === text);

    if (newToDos[toDoIndex].completed == true) {
      newToDos[toDoIndex].completed = false;
    } else {
      newToDos[toDoIndex].completed = true
    }
    saveTodo(newToDos)
  };
  
  const deleteToDos = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex( (toDo) => toDo.text === text);

    newToDos.splice(toDoIndex, 1);
    saveTodo(newToDos)
  };

  return(
    <ToDoContext.Provider value={{
      completedToDos,
      totalToDos,
      searchValue,
      setSearchValue,
      searchedToDos,
      completeToDos,
      deleteToDos,
      loading,
      error,
    }}>
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, TodoProvider };