type ListaTarea = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;   

}

const ListaTareas = ({listaTareas, borrarTarea}:ListaTarea) => {
    return (
        <div className="taskList">
            {listaTareas.map((task, index) => (


                <div key={index} className="task">
                    <p>{task}</p>
                    <button onClick={() => borrarTarea(index.toString())}>Borrar</button>
                </div>
            )
            )}
            

        </div>
    );  
}
export default ListaTareas;

