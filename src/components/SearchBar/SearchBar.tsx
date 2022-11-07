import React from "react";
import { ImSearch } from "react-icons/im";
// local
import { useOutsideClick } from "hooks";
import { useStoreDispatch, useStoreSelector } from "store/hooks";
import { collapse, handleChange, handleClick } from "store/searchBarSlice";
import {
  Container,
  Divider,
  Input,
  SearchBarDropdown,
  SearchIcon,
} from "./SearchBar.styles";

const SearchBar = () => {
  const { isExpanded, value } = useStoreSelector(({ searchBar }) => searchBar);
  const dispatch = useStoreDispatch();

  const ref = useOutsideClick(() => dispatch(collapse()));

  return (
    <Container ref={ref}>
      <SearchIcon>
        <ImSearch />
      </SearchIcon>
      <Input
        onClick={() => dispatch(handleClick())}
        placeholder="Search..."
        onChange={(e) => dispatch(handleChange(e.target.value))}
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
