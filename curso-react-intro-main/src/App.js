
import { ToDocounter } from "./ToDocounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToDocounter />
      <ToDoSearch />

      <ToDoList>
        <ToDoItem />
      </ToDoList>

     {/* <createToDoButton/>*/}
    </div>
  );
}



export default App;
