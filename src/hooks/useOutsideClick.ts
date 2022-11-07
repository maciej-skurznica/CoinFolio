import { useRef, useEffect } from "react";

const useOutsideClick = (onOutsideClickHandler: () => void) => {
  const ref = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as Node | null;
      if (ref.current && !ref.current.contains(target)) {
        onOutsideClickHandler();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return ref;
};

export default useOutsideClick;
