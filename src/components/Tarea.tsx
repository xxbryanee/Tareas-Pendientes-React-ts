type Tarea = {
    tarea: string;
    borrar: string;
    borrarTarea: (index: string) => void;
}

export const Tarea = ({tarea, borrar, borrarTarea}: Tarea) => {
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={() => borrarTarea(borrar)}>Borrar</button>
        </div>
    )
}