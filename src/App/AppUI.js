import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { ButtonTodo } from '../ButtonTodo';

function AppUI({
  completedToDos,
  totalToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDos,
  deleteToDos
}) {
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

export { AppUI };