import { useState, useLayoutEffect } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {}, [count]);

  return (
    <div className="Count">
      <h1>{count}</h1>
      <button onClick={setCount(count + 1)}>Increase</button>
    </div>
  );
}
