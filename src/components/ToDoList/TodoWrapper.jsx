import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [countTasks, setCountTasks] = useState(0);
    const [isCompleted, setIsCompleted] = useState(0);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
        setCountTasks((prevS) => {
            let count = prevS;
            count++;
            return count;
        })
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        setCountTasks((prevS) => {
            let count = prevS;
            count--;
            return count;
        })
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };
    const completed = () => {
        setIsCompleted((prev) => {
            let complete = prev;
            complete++;
            return complete;
        })
    };
    const Notcompleted = () => {
        setIsCompleted((prev) => {
            let complete = prev;
            complete--;
            return complete;
        })
    };

    return (
        <div className="TodoDetails">
            <div className="TodoWrapper">
                <h1>Get Things Done !</h1>
                <TodoForm addTodo={addTodo} />
                <div className="TodoTasks">
                    <span>Total Tasks: {countTasks}</span>
                    <span>Completed Tasks: {isCompleted}</span>
                </div>
                {/* display todos */}
                {todos.map((todo, id) =>
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo} />
                    ) : (
                        <Todo
                            Notcompleted={Notcompleted}
                            completed={completed}
                            key={todo.id}
                            task={todo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                            toggleComplete={toggleComplete}
                        />
                    )
                )}
            </div>
        </div>
    );
};