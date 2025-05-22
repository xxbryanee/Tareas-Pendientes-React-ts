import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp  = () =>{

    // Definimos el estado de la lista de tareas
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    // Validamos que la tarea no esté vacía
    const [listaTareas, setListaTareas] = useState<string[]>([]);
   

    // Definimos la función para agregar una tarea
    // Validamos que la tarea no esté vacía
const handleAddTask = () => {
    if (nuevaTarea.trim() === '') 
        
        return
        setListaTareas(tareaAnterior => [...tareaAnterior, nuevaTarea]);
        setNuevaTarea('');
    }
    

    // Definimos la función para borrar una tarea
    
    const handleBorraTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index));
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
            <button onClick={handleAddTask}>Agregar tarea</button>
        </div>
    <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorraTarea}></ListaTareas>
    </div>
  );
};