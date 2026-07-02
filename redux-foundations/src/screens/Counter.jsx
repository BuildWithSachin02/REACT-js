import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decrement } from "../features/Todo/todosSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <div className="container">
        <h1>React Redux-Toolkit Foundations</h1>
        <h1>{count}</h1>
        <div className="d-flex gap-3 justify-content-center">
          <button onClick={() => dispatch(increament())}>++</button>
          <button onClick={() => dispatch(decrement())}>--</button>
        </div>
      </div>
    </>
  );
}
