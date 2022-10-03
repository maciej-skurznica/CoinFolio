import React, { useState, useEffect, useRef } from "react";
import { ImSearch } from "react-icons/im";
import {
  Container,
  SearchIcon,
  Input,
  SearchBarDropdown,
  Divider,
} from "./SearchBar.styles";

const useOutsideClick = (callback) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return ref;
};

const SearchBar = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = () => setIsExpanded(!isExpanded);

  const handleChange = (e) => setValue(e.target.value);

  const ref = useOutsideClick(() => {
    setIsExpanded(false);
    setValue("");
  });

  return (
    <Container ref={ref}>
      <SearchIcon>
        <ImSearch />
      </SearchIcon>
      <Input
        onClick={handleClick}
        placeholder="Search..."
        onChange={handleChange}
        value={value}
      />
      {isExpanded && (
        <SearchBarDropdown>
          <Divider />
        </SearchBarDropdown>
      )}
    </Container>
  );
};

export default SearchBar;
