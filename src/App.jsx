import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import TareasFilter from "./components/TareasFilter";
import TodoComputed from "./components/TodoComputed";

const App = () => {
    const [todos, setTodos] = useState([]);

    /* Return implicito  */
    const deleteTask = (id) => {
        const deleteTarea = todos.filter((item) => {
            return item.id !== id;
        });
        setTodos(deleteTarea);
    };

    const updateTask = (id) => {
        setTodos(
            todos.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const computedTasks = () => {
        return todos.filter((item) => !item.completed).length;
    };
    const computedTasksCompleted = () => {
        const clearTarea = todos.filter((item) => {
            return !item.completed;
        });
        setTodos(clearTarea);
    };
    const [filter, setFilter] = useState("all");

    const filterTasks = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((item) => !item.completed);
            case "completed":
                return todos.filter((item) => item.completed);
            default:
                return todos;
        }
    };

    const filtradoTareas = (filter) => {
        setFilter(filter);
    };

    return (
        <div className=" min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="container mx-auto mt-8 px-4 ">
                <Formulario setTodos={setTodos} todos={todos} />

                <ListaTareas
                    todos={filterTasks()}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                />

                <TodoComputed
                    computedTasks={computedTasks()}
                    computedTasksCompleted={computedTasksCompleted}
                />

                <TareasFilter filtradoTareas={filtradoTareas} filter={filter} />
            </main>
            <footer className="mt-8 text-center">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
