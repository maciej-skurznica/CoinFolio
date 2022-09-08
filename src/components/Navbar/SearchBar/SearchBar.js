import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { ImSearch } from "react-icons/im";
import {
  Container,
  SearchIcon,
  Input,
  SearchBarDropdown,
  Divider,
} from "./SearchBar.styles";

function SearchBar(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = () => setIsExpanded(!isExpanded);
  const handleChange = (e) => setValue(e.target.value);

  SearchBar.handleClickOutside = () => {
    setIsExpanded(false);
    setValue("");
  };

  return (
    <Container>
      <SearchIcon>
        <ImSearch />
      </SearchIcon>
      <Input
        onClick={handleClick}
        placeholder="Search..."
        onChange={handleChange}
        value={value}
      ></Input>
      {isExpanded && (
        <SearchBarDropdown>
          <Divider />
        </SearchBarDropdown>
      )}
    </Container>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SearchBar.handleClickOutside,
};

export default onClickOutside(SearchBar, clickOutsideConfig);
