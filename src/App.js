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
  {text: "make to the bed", completed: true}
];

function App() {
  return (
    <React.Fragment>
      
      <TodoCounter completed={5} total={10}/>
      <TodoSearch/>
      
      <TodoList>
        
        {defaultTodo.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}/>
        ))}

      </TodoList>

      <ButtonTodo/>
    </React.Fragment>
  );
}

export default App;
