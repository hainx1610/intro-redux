import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions";

function TodoAdd() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="add a task"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText(""); // reset for a next todo to be added
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoAdd;
