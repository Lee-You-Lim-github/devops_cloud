import { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(10); // 초기값: 0
  const [color, setColor] = useState('red');

  const handleClick = () => {
    console.log(`clicked`);
    setValue(value + 1);
    setColor(value % 2 === 0 ? 'green' : 'red');
    // 맞는 로직이지만 (value + 1)를 해주면 홀수일 때 빨간색이 나옴.
  };
  return (
    <div
      style={{
        backgroundColor: color,
        width: 100,
        height: 100,
        display: 'inline-block',
        margin: 5,
        borderRadius: 50,
        textAlign: 'center',
        userSelect: 'none',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <span>{value}</span>
    </div>
  );
}

export default Counter;
