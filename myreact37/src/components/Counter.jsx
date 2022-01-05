import "./Counter.css";
import { useState, useReducer } from "react";

const ACTION_TYPES = {
  PLUS: "PLUS",
  MINUS: "MINUS",
};

function reducer(value, action) {
  const { type, amount } = action;
  if (type === ACTION_TYPES.PLUS) {
    return value + amount;
  } else if (type === ACTION_TYPES.MINUS) {
    return value - amount;
  }
  return value;
}

function Counter() {
  // const [value, setValue] = useState(0);

  // const handleClick = () => {
  //   setValue((prevValue) => prevValue + 1);
  // };

  // const handleRightClick = (e) => {
  //   e.preventDefault();
  //   setValue((prevValue) => prevValue - 1);
  // };

  const [value, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    dispatch({ type: ACTION_TYPES.PLUS, amount: 1 });
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION_TYPES.MINUS, amount: 1 });
  };

  return (
    <div
      className="counter"
      style={{ backgroundColor: "red" }}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {value}
    </div>
  );
}

export default Counter;
