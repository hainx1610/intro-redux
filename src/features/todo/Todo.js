import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "./actions";
import TodoAdd from "./TodoAdd";
import TodoBtnGroup from "./TodoBtnGroup";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoBtnGroup />
    </div>
  );
}

export default Todo;
