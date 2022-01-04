import { useReducer } from "react";

const ACTION_TYPES = {
  GENERATE_NUMBERS: "GENERATE_NUMBERS",
  SHUFFLE_COLORS: "SHUFFLE_COLORS",
  SHUFFLE_COLORS: "SHUFFLE_COLORS",
};

function reducer(prevValue, action) {
  const { numbers, colors } = prevValue;
  const { type } = action;
  const lottoArray = [...Array(45).keys()];

  const lottoNumbers = lottoArray
    .map((number) => number + 1)
    .sort(() => Math.random() - Math.random())
    .slice(0, 7)
    .sort((num1, num2) => num1 - num2);

  if (type === ACTION_TYPES.GENERATE_NUMBERS) {
    return { ...prevValue, numbers: lottoNumbers };
  } else if (type === ACTION_TYPES.SHUFFLE_NUMBERS) {
    return {
      ...prevValue,
      numbers: numbers.sort(() => Math.random() - Math.random()),
    };
  } else if (type === ACTION_TYPES.SHUFFLE_COLORS) {
    return {
      ...prevValue,
      colors: colors.sort(() => Math.random() - Math.random()),
    };
  }
  // return prevValue;
}

function Lotto() {
  const [prevValue, dispatch] = useReducer(reducer, {
    numbers: [0, 0, 0, 0, 0, 0, 0],
    colors: [
      "#1B62BF",
      "#1755A6",
      "#37A647",
      "#F29F05",
      "#F23838",
      "purple",
      "pink",
    ],
  });
  // const { numbers, colors } = prevValue;

  const generateNumbers = () => {
    // setState((prevState) => reducer(prevState, action));    // reducer만 사용했을 경우
    dispatch({ type: "GENERATE_NUMBERS" });
  };

  const shuffleNumbers = () => {
    // setState((prevState) => reducer(prevState, action));    // reducer만 사용했을 경우
    dispatch({ type: "SHUFFLE_NUMBERS" });
  };

  const shuffleColor = () => {
    // setState((prevState) => reducer(prevState, action));    // reducer만 사용했을 경우
    dispatch({ type: "SHUFFLE_COLORS" });
  };

  return (
    <div>
      <h1>7개의 숫자</h1>
      {prevValue.numbers.map((nums, index) => (
        <span
          style={{ ...defaultStyle, backgroundColor: prevValue.colors[index] }}
        >
          {nums}
        </span>
      ))}
      <hr />
      <button onClick={generateNumbers}>랜덤 숫자</button>
      <button onClick={shuffleNumbers}>숫자 섞기</button>
      <button onClick={shuffleColor}>색깔 섞기</button>
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
  margin: "1rem",
};
export default Lotto;
