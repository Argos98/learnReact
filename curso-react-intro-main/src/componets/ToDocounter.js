
import '../css/toDoCounter.css'
import React from 'react';

function ToDocounter({ total, completed, allCompleted}) {
  return (
   allCompleted ?
    <h1 className='TodoCounter'>
      Has completado todas las tareas
    </h1>

    :

    <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> ToDos
    </h1>
  );
}

export { ToDocounter };
