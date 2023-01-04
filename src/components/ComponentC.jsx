import React from "react";
import { useSelector } from "react-redux";
import ComponentB from "./ComponentB";

export default function ComponentC() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <ComponentB todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
