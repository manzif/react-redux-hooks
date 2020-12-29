import * as types from "../actions/actionTypes";

export const addTodoAction = (todo) => ({
  type: types.ADD_TODO,
  payload: todo
});

export const toggleTodoComplete = (todoId) => ({
  type: types.TOGGLE_TODO,
  payload: todoId
});

export const deleteTodoAction = (todoId) => ({
  type: types.DELETE_TODO,
  payload: todoId
});