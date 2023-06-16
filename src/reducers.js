// reducers.js
import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    SORT_ASCENDING,
    SORT_DESCENDING,
} from "./actions";

const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: Date.now(),
                text: action.payload.trim(),
            };

            return {
                ...state,
                todos: [...state.todos, newTodo],
            };

        case EDIT_TODO:
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, text: action.payload.newText };
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos,
            };

        case DELETE_TODO:
            const filteredTodos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );

            return {
                ...state,
                todos: filteredTodos,
            };

        case SORT_ASCENDING:
            const sortedAscTodos = [...state.todos].sort((a, b) =>
                a.text.localeCompare(b.text)
            );

            return {
                ...state,
                todos: sortedAscTodos,
            };

        case SORT_DESCENDING:
            const sortedDescTodos = [...state.todos].sort((a, b) =>
                b.text.localeCompare(a.text)
            );

            return {
                ...state,
                todos: sortedDescTodos,
            };

        default:
            return state;
    }
};

export default todoReducer;
