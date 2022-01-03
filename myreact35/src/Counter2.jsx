import { useState } from "react";

// dispatch 방식
// { type: "PLUS", amount: 1 }
// { type: "MINUS", amount: 1 }
function dispatch(action, prevValue) {
  // 순수함수로서 구현이 되어야만 합니다.
  // 같은 값의 인자가 주어지만, 항상 같은 값의 리턴을 해야만 하고
  // 인자 외에 다른 어떤 값, 어떤 통신을 해서도 안 됩니다.
  const { type, amount } = action;
  if (type === "PLUS") {
    return prevValue + amount;
  } else if (type === "MINUS") {
    return prevValue - amount;
  }
  // 버그 !!!
  return prevValue;
}

function Counter2() {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    const action = { type: "PLUS", amount: 1 };
    setValue((prevValue) => {
      return dispatch(action, prevValue);
    });
  };

  const handleMinus = () => {
    const action = { type: "MINUS", amount: 1 };
    setValue((prevValue) => {
      return dispatch(action, prevValue);
    });
  };

  return (
    <div>
      <h1>Counter2</h1>
      {value}
      <hr />
      <button onClick={handlePlus}>증가</button>
      <button onClick={handleMinus}>감소</button>
    </div>
  );
}

export default Counter2;
