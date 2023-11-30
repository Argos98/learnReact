import React from "react";
import "../css/CreateToDoButton.css";
function CreateToDoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("click");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
