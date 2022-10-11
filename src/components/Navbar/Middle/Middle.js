import { SearchBar } from "components";
import { Container, Div, Menu, StyledLink } from "./Middle.styles";

const Middle = (props) => {
  return (
    <Container>
      <Div>
        <Menu>
          <StyledLink to={"/coins"}>Coins</StyledLink>
          <StyledLink to={"/portfolio"}>Portfolio</StyledLink>
        </Menu>
        <SearchBar />
      </Div>
    </Container>
  );
};

export default Middle;
