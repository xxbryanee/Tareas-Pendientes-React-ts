import { useState } from "react";

export const TodoApp  = () =>{

    // Definimos el estado de la lista de tareas
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    // Validamos que la tarea no esté vacía
    const [listaTareas, setListaTareas] = useState<string[]>([]);
   
const handleAddTask = () => {

}
  return (
    <div>
      <h1>Lista de tareas</h1>
      
        <div>
            <input 
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)} 
            placeholder="nueva tarea"
            />
            <button onClick={handleAddTask}></button>
        </div>
    </div>
  );
};