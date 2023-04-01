import { ADD_COUNTER, INCREMENT, DECREMENT } from "./reducer";

export const addCounter = () => ({ type: ADD_COUNTER });

// return an obj for dispatch in the component events
export const increment = (index) => ({ type: INCREMENT, payload: { index } });
// payload is an obj with index: index (short-hand)
export const decrement = (index) => ({ type: DECREMENT, payload: { index } });
