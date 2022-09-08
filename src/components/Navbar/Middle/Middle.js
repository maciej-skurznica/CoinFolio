import SearchBar from "../SearchBar";
import { Container, Menu, StyledLink } from "./Middle.styles";

const Middle = (props) => {
  return (
    <Container>
      <Menu>
        <StyledLink to={"/"}>Coins</StyledLink>
        <StyledLink to={"/"}>Portfolio</StyledLink>
      </Menu>
      <SearchBar />
    </Container>
  );
};

export default Middle;
