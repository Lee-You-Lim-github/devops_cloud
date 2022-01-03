import { useState } from "react";

function Counter3() {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("red");

  // const handlePlus = () => {
  //   return setValue(value + 1);
  // };

  // const handleMinus = () => {
  //   return setValue(value - 1);
  // };

  const handlePlus = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleMinus = () => {
    setValue((prevValue) => prevValue - 1);
  };

  // COLOR: ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  // const handleGreen = () => {
  //   return setColor("green");
  // };

  // const handleBlue = () => {
  //   return setColor("blue");
  // };

  // const handleRed = () => {
  //   return setColor("red");
  // };

  const handleGreen = () => {
    setColor(() => "green");
  };

  const handleBlue = () => {
    setColor(() => "blue");
  };
  const handleRed = () => {
    setColor(() => "red");
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

export default Counter3;
