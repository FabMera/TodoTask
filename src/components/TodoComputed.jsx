import React from "react";

const TodoComputed = ({ computedTasks, computedTasksCompleted }) => {
    return (
        <>
            <section className="flex justify-between rounded-b-md bg-white py-4  px-4">
                <span className="text-gray-400">{computedTasks} task left</span>
                <button
                    onClick={() => computedTasksCompleted()}
                    className="text-gray-400"
                >
                    Clear Completed
                </button>
            </section>
        </>
    );
};

export default TodoComputed;
