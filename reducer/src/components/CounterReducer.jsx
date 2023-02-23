import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      break;
  }
};

// const [state, dispatch] = useReducer(reducer, initialState, init?)

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default CounterReducer;
