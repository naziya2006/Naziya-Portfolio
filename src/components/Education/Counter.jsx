import { useEffect, useState } from "react";

export default function Counter({
  end,
  duration = 2000,
  decimals = 0,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setValue(start);
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{value.toFixed(decimals)}</>;
}