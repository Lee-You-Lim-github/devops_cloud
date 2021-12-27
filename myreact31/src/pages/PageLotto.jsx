import { useState } from "react";

function PageLotto() {
  const [numbers, setNumbers] = useState([10, 11, 12, 13, 14, 15, 16]);

  return (
    <div>
      <h2>Lotto</h2>

      {numbers.map((number) => (
        <span style={{ display: "inline-block", margin: "1rem" }}>
          {number}
        </span>
      ))}
    </div>
  );
}

export default PageLotto;
