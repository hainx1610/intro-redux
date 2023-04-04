import apiService from "../../app/apiService";
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_TODOS } from "./reducer";
let nextTodoId = 0;

// export const addTodo = (text) => {
//   // returns an action obj for dispatch
//   return {
//     type: ADD_TODO,
//     payload: {
//       id: nextTodoId++,
//       text,
//     },
//   };
// };

export const addTodo = (text) => async (dispatch) => {
  try {
    const todo = {
      id: nextTodoId++,
      text,
      completed: false,
    };
    const res = await apiService.post("/todos", todo);
    dispatch({ type: ADD_TODO, payload: { id: todo.id, text } });
  } catch (error) {
    console.log(error);
  }
};

// this one is not for events but for useEffect/api
export const getTodos = (text) => async (dispatch) => {
  try {
    const res = await apiService.get("/todos");
    dispatch({ type: GET_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

// export const toggleTodo = (id) => {
//   return {
//     type: TOGGLE_TODO,
//     payload: { id }, // short-hand
//   };
// };

export const toggleTodo = (todo) => async (dispatch) => {
  try {
    // http put will update/replace data (here completed true <-> false)
    const res = await apiService.put(`/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } });
  } catch (error) {
    console.log(error);
  }
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: { filter }, // short-hand
  };
};
