import { useState } from "react";

function Counter3() {
  const [value, setValue] = useState(0);

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

  return (
    <div>
      <h2>Counter3</h2>
      {value}
      <hr />
      <button onClick={handlePlus}>증가</button>
      <button onClick={handleMinus}>감소</button>
    </div>
  );
}

export default Counter3;
