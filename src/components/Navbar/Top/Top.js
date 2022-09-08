import { RightTop } from "components";
import logo from "../../../assets/images/logo.png";
import { Container, Div, StyledLink, Img } from "./Top.styles";

const Top = (props) => {
  return (
    <Container>
      <Div>
        <StyledLink to={"/"}>
          <Img src={logo} alt="logo" />
          CoinFolio
        </StyledLink>
        <RightTop
          toggleCurrency={props.toggleCurrency}
          currentCurrency={props.currentCurrency}
          toggleTheme={props.toggleTheme}
          darkThemeOn={props.darkThemeOn}
        />
      </Div>
    </Container>
  );
};

export default Top;
