import { useEffect, useState } from "react";

const PREFIX = "codeeditor-";

export default function useLocalStorage(key, initialValue) {
  let prefixedKey = PREFIX + key;

  // getting the value
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // what happenes every time we change our value
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);


  return [value, setValue];
}
