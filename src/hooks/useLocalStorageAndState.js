import { useState } from "react";

const useLocalStorageAndState = (key, initialValue) => {
  const storedValue = window.localStorage.getItem(key);
  const item = storedValue ? JSON.parse(storedValue) : initialValue;
  const [state, setState] = useState(item);

  const updateState = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, updateState];
};

export default useLocalStorageAndState;
