export const ADD_COUNTER = "MULTI_COUNTER.ADD";
export const INCREMENT = "MULTI_COUNTER.INCREMENT";
export const DECREMENT = "MULTI_COUNTER.DECREMENT";

const initialState = [];
// a newly added counter will look like this: {count: 0}

const multiCounterReducer = (state = initialState, action) => {
  const index = action.payload?.index;
  // there isn't always a payload (like in ADD_COUNTER) and it'll be undefined in that case

  switch (action.type) {
    case ADD_COUNTER:
      return [...state, { count: 0 }];
    case INCREMENT:
      return [
        ...state.slice(0, index), // copy before the target counter
        { count: state[index].count + 1 }, // adjust/create the target counter
        ...state.slice(index + 1), // copy after the target counter
      ];
    case DECREMENT:
      return [
        ...state.slice(0, index),
        { count: state[index].count - 1 },
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
};

export default multiCounterReducer;
