import React from "react";
import TodoAdd from "./TodoAdd";
import TodoBtnGroup from "./TodoBtnGroup";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoBtnGroup />
    </div>
  );
}

export default Todo;
