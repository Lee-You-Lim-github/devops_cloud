import { useState } from "react";

function PageLotto() {
  // 숫자 배열
  const [numbers, setNumbers] = useState([10, 11, 12, 13, 14, 15, 16]);

  // 로또 번호 7자리

  function makeLottoNumbers() {
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
    return lottoNumbers;
  }

  function handleclick() {
    console.log(makeLottoNumbers());
    return setNumbers(makeLottoNumbers());
  }

  return (
    <div>
      <h2>Lotto</h2>
      <button onClick={handleclick}>예지</button>
      {numbers.map((lottoNumber) => (
        <span style={{ display: "inline-block", margin: "1rem" }}>
          {lottoNumber}
        </span>
      ))}
    </div>
  );
}

export default PageLotto;
