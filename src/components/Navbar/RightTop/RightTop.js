import { Currency } from "components";
import { MoonIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { Container, Divider, StyledLink, Theme } from "./RightTop.styles";

const RightTop = (props) => {
  return (
    <Container>
      <Currency
        toggleCurrency={props.toggleCurrency}
        currentCurrency={props.currentCurrency}
      ></Currency>
      <Divider>|</Divider>
      <Theme onClick={props.toggleTheme}>
        {props.darkThemeOn ? <SunIcon /> : <MoonIcon />}
      </Theme>
      <Divider>|</Divider>
      <StyledLink to={"/"}>Sign In</StyledLink>
    </Container>
  );
};

export default RightTop;
