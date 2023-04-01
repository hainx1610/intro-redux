import { createStore, combineReducers } from "redux";
import counterReducer from "../features/counter/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import multiCounterReducer from "../features/multiCounter/reducer";

const initialState = {};

//params for store are similar to useReducer
const store = createStore(
  combineReducers({
    counter: counterReducer,
    multiCounter: multiCounterReducer,
  }),
  initialState,
  composeWithDevTools()
);

export default store;
