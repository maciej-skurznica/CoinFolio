import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useOutsideClick } from "hooks";
import {
  Container,
  SearchIcon,
  Input,
  SearchBarDropdown,
  Divider,
} from "./SearchBar.styles";

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
