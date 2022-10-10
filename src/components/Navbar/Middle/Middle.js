import { SearchBar } from "components";
import { Container, Div, Menu, StyledLink } from "./Middle.styles";

const Middle = (props) => {
  return (
    <Container>
      <Div>
        <Menu>
          <StyledLink to={"/"}>Coins</StyledLink>
          <StyledLink to={"/"}>Portfolio</StyledLink>
        </Menu>
        <SearchBar />
      </Div>
    </Container>
  );
};

export default Middle;
