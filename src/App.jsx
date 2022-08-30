import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";

const App = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return <>
  <div>
    <h1>{counter}</h1>
    <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    <button onClick={() => dispatch(increment())}>INCREMENT</button>
  </div>
  </>
}

export default App;