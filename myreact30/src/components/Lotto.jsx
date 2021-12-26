import { useEffect, useState } from "react";

function Lotto() {
  const [lotto, setLotto] = useState([]);

  function makeLotto() {
    let i = 0;
    let lnumber = [];
    let rnumber = 0;

    for (i = 0; i < 7; i++) {
      rnumber = Math.floor(Math.random() * 45 + 1);

      lnumber.push(rnumber);
    }
    setLotto(lnumber);
  }

  useEffect(() => {
    makeLotto();
  }, []);
}

export default Lotto;
