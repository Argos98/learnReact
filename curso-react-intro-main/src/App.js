/** @format */

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
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <ToDocounter
        completed={completedTodos}
        total={totalTodos}
        allCompleted={completedTodos === totalTodos}
      />

      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {searchedTodos.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        {}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
