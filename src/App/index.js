import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../ToDoContext';

function App() {
  
  return (
    <TodoProvider>
      <AppUI
        // completedToDos={completedToDos}
        // totalToDos={totalToDos}
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
        // searchedToDos={searchedToDos}
        // completeToDos={completeToDos}
        // deleteToDos={deleteToDos}
        // loading={loading}
        // error={error}
      />
    </TodoProvider>
  )
}

export default App;
