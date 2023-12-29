import React, { useContext, useEffect, useState } from "react";
import { PauseContext } from "../context/paused"
import { CountContext } from "../context/count"
import Controls from "./Controls";
import Likes from "./Likes";

function Counter() {
  // const [count, setCount] = useState(0);
  // const [likedNumbers, setLikedNumbers] = useState({});
  const [paused, setPaused] = useContext(PauseContext);
  const { count, increment } = useContext(CountContext);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(increment, 1000);

      return function cleanup() {
        clearInterval(interval);
      };
    }
  }, [paused]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Controls />
      <Likes  />
    </div>
  );
}

export default Counter;