import React from "react";
import "../css/ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue }) {

  

 
   return <input placeholder="nombre de la tarea a buscar"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
         //este evento se ejecuta cada vez que se escribe en el input
         //y me trae el valor de lo que estoy escribiendo en el input
         //console.log('escribiendo', event.target.value);
         setSearchValue(event.target.value);


      }}
   />
};

export { ToDoSearch };