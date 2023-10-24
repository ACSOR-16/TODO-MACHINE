import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { ButtonTodo } from '../ButtonTodo';
import { ToDosLoading } from '../ToDosLoading'; 
import { ToDosError } from "../ToDosError"; 
import { EmptyToDos } from "../EmptyToDos"; 

function AppUI({
  completedToDos,
  totalToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDos,
  deleteToDos,
  loading,
  error
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
        {loading && ( 
          <>  
            <ToDosLoading/>
            <ToDosLoading/>
            <ToDosLoading/>
          </>
        )}
        {error && <ToDosError/>}
        {(!loading && searchedToDos.length === 0) && <EmptyToDos/>}

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