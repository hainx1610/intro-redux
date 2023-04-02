import React from "react";
import Counter from "./features/counter/Counter";
import MultiCounter from "./features/multiCounter/MultiCounter";
import Todo from "./features/todo/Todo";

function App() {
  return (
    <div>
      <h1>redux eh</h1>
      <hr />
      <Counter />
      <hr />
      <MultiCounter />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
