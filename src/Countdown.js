import { useState, useEffect } from "react";

export default function Countdown() {
  const [countdown, setCountdown] = useState(180);
  useEffect(() => {
    const count = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(count);
  }, []);

  return (
    <div className="CountDown">
      <input
        placeholder="countdown number"
        onChange={(e) => setCountdown(e.target.value)}
      />
      <h1>{countdown}</h1>
    </div>
  );
}
