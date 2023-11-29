import { ToDocounter } from "./ToDocounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ToDocounter />
      <ToDoSearch />

      <ToDoList>
        <ToDoItem />
      </ToDoList>

      <CreateToDoButton />
    </div>
  );
}

export default App;
