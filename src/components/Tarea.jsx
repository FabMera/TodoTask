import React from "react";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const Tarea = ({ tarea, deleteTask,updateTask }) => {
    const { id, title, completed } = tarea;
    return (
        <article className="flex gap-4 border-b border-b-gray-200">
            <button
                onClick={() => updateTask(id)}
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed
                        ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block"
                }`}
            >
                {completed && <CheckIcon />}
            </button>

            <p className={`grow text-gray-600 ${completed && "line-through"}`}>
                {title}
            </p>
            <button onClick={() => deleteTask(id)} className="flex-none">
                <CrossIcon tarea={tarea} />
            </button>
        </article>
    );
};

export default Tarea;
