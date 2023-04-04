export const ADD_TODO = "TODO.ADD";

export const GET_TODOS = "TODO.GET_TODOS";

export const TOGGLE_TODO = "TODO.TOGGLE";
export const SET_FILTER = "TODO.SET_FILTER";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: payload.id, text: payload.text, completed: false },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== payload.id) return todo; // this todo remains unchanged
          return { ...todo, completed: !todo.completed }; // this todo's completed status is toggled
        }),
      };
    case SET_FILTER:
      return { ...state, filter: payload.filter };

    case GET_TODOS:
      return { ...state, todos: payload };

    default:
      return state;
  }
};

export default todoReducer;
