import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { ButtonTodo } from '../ButtonTodo';
import { ToDosLoading } from '../ToDosLoading'; 
import { ToDosError } from "../ToDosError"; 
import { EmptyToDos } from "../EmptyToDos"; 
import { ToDoContext } from "../ToDoContext";

function AppUI() {
  return (
    <>
      
      <TodoCounter 
        // completed={completedToDos} 
        // total={totalToDos}
      />
      <TodoSearch
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
      />
      
      <ToDoContext.Provider>
        {({
          searchedToDos,
          completeToDos,
          deleteToDos,
          loading,
          error,
        })=> (
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
        )}
      </ToDoContext.Provider>
      <ButtonTodo/>
    </>
  );
}

export { AppUI };