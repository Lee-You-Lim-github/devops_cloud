import { useState } from "react";

function reducer(action, prevState) {
  const { type, amount, color } = action;
  if (type === "PLUS") {
    return { ...prevState, value: prevState.value + amount };
  } else if (type === "MINUS") {
    return { ...prevState, value: prevState.value - amount };
  } else if (type === "CHANGE_COLOR") {
    return { ...prevState, color: color };
  }
  return prevState;
}

function Counter5() {
  const [state, setState] = useState({ value: 0, color: "red" });
  const { value, color } = state;

  const handlePlus = () => {
    const action = { type: "PLUS", amount: 1 };
    setState((prevState) => reducer(action, prevState));
  };

  const handleMinus = () => {
    const action = { type: "MINUS", amount: 1 };
    setState((prevState) => reducer(action, prevState));
  };

  const handleGreen = () => {
    const action = { type: "CHANGE_COLOR", color: "green" };
    setState((prevState) => reducer(action, prevState));
  };

  const handleBlue = () => {
    const action = { type: "CHANGE_COLOR", color: "blue" };
    setState((prevState) => reducer(action, prevState));
  };

  const handleRed = () => {
    const action = { type: "CHANGE_COLOR", color: "red" };
    setState((prevState) => reducer(action, prevState));
  };

  return (
    <div>
      <h2>Counter3</h2>
      <div style={{ ...defaultStyle, backgroundColor: color }}>{value}</div>
      <hr />
      <button onClick={handlePlus}>증가</button>
      <button onClick={handleMinus}>감소</button>
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

export default Counter5;
