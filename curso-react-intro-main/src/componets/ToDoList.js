import React from 'react'
import '../css/ToDoList.css'
function ToDoList(props) {
  return (
    <ul className='TodoList'>
        {props.children}
    </ul>
  );
}

export {ToDoList};