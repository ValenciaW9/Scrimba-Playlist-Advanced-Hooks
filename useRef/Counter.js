import React, { useRef, useState }  from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const regularCount = useRef(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  function handleRegularClick() {
    regularCount.current += 1;
    console.log({ regularCount });
  }

  function handleRefClick() {
    regularCount.current += 1;
    console.log({ regularCount });
  }

  console.log({ count, regularCount });

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleClick}>{count}</button>
      <button onClick={handleRegularClick}>{regularCount.current}</button>
      <button onClick={handleRefClick}>{regularCount.current}</button>
    </div>
  );
};

export default Counter;