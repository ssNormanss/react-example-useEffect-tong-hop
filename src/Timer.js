import { useState, useRef } from "react";

export default function Timer() {
  const [count, setCount] = useState(60);
  const event = useRef();
  const isCount = useRef(false);

  const handleStart = () => {
    if (!isCount.current) {
      event.current = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
      isCount.current = true;
    }
  };

  const handleStop = () => {
    clearInterval(event.current);
  };

  const handleReset = () => {
    clearInterval(event.current);
    setCount(60);
    isCount.current = false;
  };

  return (
    <div className="Timer">
      <h2>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
