import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../counter/Counter2Slice";

export function Counter() {
  const count = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
