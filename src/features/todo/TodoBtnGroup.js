import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./actions";

function TodoBtnGroup() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setFilter("SHOW_ALL"))}>Show all</button>
      <button onClick={() => dispatch(setFilter("SHOW_COMPLETED"))}>
        Show completed
      </button>
      <button onClick={() => dispatch(setFilter("SHOW_ACTIVE"))}>
        Show active
      </button>
    </div>
  );
}

export default TodoBtnGroup;
