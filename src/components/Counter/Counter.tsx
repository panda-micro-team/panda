import React, { useState } from "react";
import { IncreaseCounterButton } from "./IncreaseCounterButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>React Counter</h1>
      <div className="count">{count}</div>
      <button onClick={decrement}>-</button>
      <IncreaseCounterButton onClick={increment} />
    </div>
  );
};

export default Counter;
