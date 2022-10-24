import { useOutsideClick } from "hooks";
import { ImSearch } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { collapse, handleChange, handleClick } from "store/searchBarSlice";
import {
  Container,
  Divider,
  Input,
  SearchBarDropdown,
  SearchIcon,
} from "./SearchBar.styles";

const SearchBar = () => {
  const { isExpanded, value } = useSelector(({ searchBar }) => searchBar);
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
