import { useState } from "react";

function Counter4() {
  const [state, setState] = useState({ value: 0, color: "red" });
  const { value, color } = state;

  // const handlePlus = () => {
  //   return setState({
  //     ...state,
  //     value: state.value + 1,
  //   });
  // };

  // const handleMinus = () => {
  //   return setState({
  //     ...state,
  //     value: state.value - 1,
  //   });
  // };

  const handlePlus = () => {
    setState((prevState) => ({ ...prevState, value: state.value + 1 }));
  };

  const handleMinus = () => {
    setState((prevState) => ({ ...prevState, value: state.value - 1 }));
  };

  // const handleGreen = () => {
  //   return setState({
  //     ...state,
  //     color: "green",
  //   });
  // };

  // const handleBlue = () => {
  //   return setState({
  //     ...state,
  //     color: "blue",
  //   });
  // };

  // const handleRed = () => {
  //   return setState({
  //     ...state,
  //     color: "red",
  //   });
  // };

  const handleGreen = () => {
    return setState((prevState) => ({ ...prevState, color: "green" }));
  };

  const handleBlue = () => {
    return setState((prevState) => ({ ...prevState, color: "blue" }));
  };

  const handleRed = () => {
    return setState((prevState) => ({ ...prevState, color: "red" }));
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

export default Counter4;
