import { useReducer } from "react";

function reducer(prevValue, action) {
  // const { numbers, colors } = prevValue;
  const { type } = action;
  const lottoArray = [...Array(45).keys()];

  const lottoNumbers = lottoArray
    .map((number) => ({
      number,
      random: Math.random(),
    }))
    .sort((a, b) => a.random - b.random)
    .slice(0, 7)
    .map(({ number }) => number + 1)
    .sort((num1, num2) => num1 - num2);

  if (type === "GENERATE_NUMBERS") {
    return { ...prevValue, numbers: lottoNumbers };
  }
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
  const { numbers, colors } = prevValue;

  const generateNumbers = () => {
    dispatch({ type: "GENERATE_NUMBERS" });
  };

  return (
    <div>
      <h1>7개의 숫자</h1>
      {numbers.map((nums, index) => (
        <span style={{ ...defaultStyle, backgroundColor: colors[index] }}>
          {nums}
        </span>
      ))}
      <hr />
      <button onClick={generateNumbers}>랜덤 숫자</button>
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
export default Lotto;
