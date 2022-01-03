import React, { useReducer } from "react";

// Counter5에 useReducer를 적용
function reducer(prevValue, action) {
  const { type, amount, color } = action;
  if (type === "PLUS") {
    return { ...prevValue, value: prevValue.value + amount };
  } else if (type === "MINUS") {
    return { ...prevValue, value: prevValue.value - amount };
  } else if (type === "CHANGE_COLOR") {
    return { ...prevValue, color: color };
  }
  return prevValue;
}

function Counter() {
  const [prevValue, dispatch] = useReducer(reducer, { value: 0, color: "red" });
  const { value, color } = prevValue;

  const handlePlus = () => {
    dispatch({ type: "PLUS", amount: 1 });
  };

  const handleMinus = () => {
    dispatch({ type: "MINUS", amount: 1 });
  };

  const handleGreen = () => {
    dispatch({ type: "CHANGE_COLOR", color: "green" });
  };

  const handleBlue = () => {
    dispatch({ type: "CHANGE_COLOR", color: "blue" });
  };

  const handleRed = () => {
    dispatch({ type: "CHANGE_COLOR", color: "red" });
  };

  return (
    <div>
      <div style={{ ...defaultStyle, backgroundColor: color }}>{value}</div>
      <hr />
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>
      <hr />
      <button onClick={handleGreen}>green</button>
      <button onClick={handleBlue}>blue</button>
      <button onClick={handleRed}>red</button>
    </div>
  );
}

const defaultStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  lineHeight: "100px",
  textAlign: "center",
  display: "inline-block",
  fontSize: "3rem",
  userSelect: "none",
};

export default Counter;
