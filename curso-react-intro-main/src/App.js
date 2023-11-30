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
  return (
    <React.Fragment>
      <ToDocounter completed={16} total={50} />
      <ToDoSearch />

      <ToDoList>
        {defaultToDos.map((todo) => (
          <ToDoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
        {}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
