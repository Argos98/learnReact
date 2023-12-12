import React from "react";
import { ToDocounter } from "./componets/ToDocounter";
import { ToDoSearch } from "./componets/ToDoSearch";
import { ToDoList } from "./componets/ToDoList";
import { ToDoItem } from "./componets/ToDoItem";
import { CreateToDoButton } from "./componets/CreateToDoButton";

import "./App.css";


const defaultToDos = [
  { text: "test1", completed: true },
  { text: "test2", completed: false },
  { text: "test3", completed: true },
  { text: "test4", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <ToDocounter
        completed={completedTodos}
        total={totalTodos} 
      />
      
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        {defaultToDos.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        { }
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
