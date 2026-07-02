import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament,decrement,remove } from "../features/todo/todosSlice.js";
export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <div className="container">
        <h1>React Redux-Toolkit Foundations</h1>
        <h1>Add Buttons Works only increament</h1>
        <h1>Decrement buttons works --</h1>
        <h1>remove buttons do 0 value</h1>
        <h1>this is only works on 0 to 20 </h1>
        <h1>let Start</h1>
        <h1>{count}</h1>
        <div className="d-flex gap-3 justify-content-center">
          <button onClick={() => dispatch(increament())}>++</button>
          <button onClick={() => dispatch(decrement())}>--</button>
          <button onClick={() => dispatch(remove())}>zero</button>
        </div>
      </div>
    </>
  );
}
