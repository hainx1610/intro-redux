import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, increment, decrement } from "./actions";

function MultiCounter() {
  const counters = useSelector((state) => state.multiCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addCounter());
        }}
      >
        Add a Counter
      </button>
      {counters.map((counter, index) => (
        <div key={index}>
          <button onClick={() => dispatch(increment(index))}>+</button>
          <span>{counter.count}</span>
          <button onClick={() => dispatch(decrement(index))}>-</button>
        </div>
      ))}
    </div>
  );
}

export default MultiCounter;
