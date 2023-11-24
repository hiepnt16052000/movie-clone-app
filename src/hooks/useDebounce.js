import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
      return clearTimeout(handler);
    }, delay);
  }, [value, delay]);
  return debounceValue;
}
