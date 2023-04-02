import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./reducer";
let nextTodoId = 0;

export const addTodo = (text) => {
  // returns an action obj for dispatch
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id }, // short-hand
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: { filter }, // short-hand
  };
};
