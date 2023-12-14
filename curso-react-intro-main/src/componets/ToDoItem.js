import React from 'react';
import '../css/ToDoItem.css'
import { BsCheck2 } from "react-icons/bs";

import { BsXLg } from "react-icons/bs";

function ToDoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <BsCheck2 />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <BsXLg />
      </span>
    </li>
  );
}

export { ToDoItem };