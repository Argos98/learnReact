
import '../css/toDoCounter.css'
import React from 'react';

function ToDocounter({ total, completed }) {
  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> ToDos
    </h1>
  );
}

export { ToDocounter };
