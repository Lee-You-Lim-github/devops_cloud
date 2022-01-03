import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const handlePlus = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleMinus = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>
    </div>
  );
}

export default Counter;
