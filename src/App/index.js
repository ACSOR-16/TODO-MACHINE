import React from 'react';
import { AppUI } from './AppUI';
import { ToDoContext, TodoProvider } from '../ToDoContext';

function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
