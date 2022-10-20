import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImSearch } from "react-icons/im";
import { useOutsideClick } from "hooks";
import { collapse, handleChange, handleClick } from "store/searchBarSlice";
import {
  Container,
  SearchIcon,
  Input,
  SearchBarDropdown,
  Divider,
} from "./SearchBar.styles";

const SearchBar = () => {
  const isExpanded = useSelector(({ searchBar }) => searchBar.isExpanded);
  const value = useSelector(({ searchBar }) => searchBar.value);
  const dispatch = useDispatch();

  const ref = useOutsideClick(() => dispatch(collapse()));

  return (
    <Container ref={ref}>
      <SearchIcon>
        <ImSearch />
      </SearchIcon>
      <Input
        onClick={() => dispatch(handleClick())}
        placeholder="Search..."
        onChange={() => dispatch(handleChange())}
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
