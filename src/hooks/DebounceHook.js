import { useState, useEffect } from "react";

export function useDebounce(val, delay) {
  const [value, setValue] = useState(val);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(val);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [val, delay]);

  return value;
}
