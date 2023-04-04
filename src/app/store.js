import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "../features/counter/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import multiCounterReducer from "../features/multiCounter/reducer";
import todoReducer from "../features/todo/reducer";
import thunk from "redux-thunk";

const initialState = {};

//params for store are similar to useReducer
const store = createStore(
  combineReducers({
    counter: counterReducer,
    multiCounter: multiCounterReducer,
    todo: todoReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
