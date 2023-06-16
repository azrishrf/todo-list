// actions.js
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SORT_ASCENDING = "SORT_ASCENDING";
export const SORT_DESCENDING = "SORT_DESCENDING";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
});

export const editTodo = (id, newText) => ({
    type: EDIT_TODO,
    payload: { id, newText },
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});

export const sortAscending = () => ({
    type: SORT_ASCENDING,
});

export const sortDescending = () => ({
    type: SORT_DESCENDING,
});
