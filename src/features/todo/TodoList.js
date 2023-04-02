import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "./actions";

const getVisibleTodos = (todos, filter) => {
  // todos is the list of todos
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      // filter in only the completed (completed === true)
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      // filter in only the active (completed === false)
      return todos.filter((t) => !t.completed);

    default:
      return todos;
  }
};

function TodoList() {
  const { todos, filter } = useSelector((state) => state.todo); // this is the todo key from store
  const filteredTodos = getVisibleTodos(todos, filter);
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
