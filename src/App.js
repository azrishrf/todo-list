import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addTodo,
    editTodo,
    deleteTodo,
    sortAscending,
    sortDescending,
} from "./actions";

import "./App.css";

function App() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            dispatch(addTodo(inputValue.trim()));
            setInputValue("");
        }
    };

    const handleEditTodo = (id, newText) => {
        dispatch(editTodo(id, newText));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleSortAscending = () => {
        dispatch(sortAscending());
    };

    const handleSortDescending = () => {
        dispatch(sortDescending());
    };

    return (
        <div className="App">
            <h1>To-Do List Application</h1>
            <div className="todo-container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter a to-do"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddTodo}>Add</button>
                </div>
                <div className="sort-buttons-container">
                    <button onClick={handleSortAscending}>
                        Sort Ascending
                    </button>
                    <button onClick={handleSortDescending}>
                        Sort Descending
                    </button>
                </div>
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <input
                                type="text"
                                value={todo.text}
                                onChange={(e) =>
                                    handleEditTodo(
                                        todo.id,
                                        e.target.value.trim()
                                    )
                                }
                            />
                            <button onClick={() => handleDeleteTodo(todo.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
