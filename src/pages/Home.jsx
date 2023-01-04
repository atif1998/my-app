import { createAction } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";

export const increment = createAction("counter2/increment");

export const Home = () => {
  const counter = useSelector((state) => state.counter2.value);

  const increment = (e) => {};
  const decrement = (e) => {};
  return (
    <div>
      <input onChange={decrement} />
      <p>{counter}</p>
      <input onChange={increment} />
    </div>
  );
};
