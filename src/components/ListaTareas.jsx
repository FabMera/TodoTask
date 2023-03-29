import Tarea from "./Tarea";

const ListaTareas = ({ todos, deleteTask,updateTask }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4 ">
            {todos.map((tarea) => (
                <Tarea tarea={tarea} key={tarea.id} deleteTask={deleteTask} updateTask={updateTask}/>
            ))}
        </div>
    );
};

export default ListaTareas;
