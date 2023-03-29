import React, { useState } from "react";

const Formulario = ({ setTodos, todos }) => {
    const uid = Math.floor(Math.random() * 1000);

    const [task, setTask] = useState("");
    const newTask = { id: uid, title: task, completed: false };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return setTask(""); //trim() para que no se envie vacio

        setTodos([...todos, newTask]);
        setTask("");
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4"
            >
                <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                <input
                    type="text"
                    value={task}
                    placeholder="Create a new todo.."
                    className="w-full text-gray-400 outline-none "
                    onChange={(e) => setTask(e.target.value)}
                />
            </form>
        </>
    );
};

export default Formulario;
