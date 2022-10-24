import { RightTop } from "components";
import logo from "assets/images/logo.png";
import { Container, Div, StyledLink, Img } from "./Top.styles";

const Top = () => {
  return (
    <Container>
      <Div>
        <StyledLink to="/">
          <Img src={logo} alt="logo" />
          CoinFolio
        </StyledLink>
        <RightTop />
      </Div>
    </Container>
  );
};

export default Top;
