import { useDispatch, useSelector } from "react-redux";
import { MoonIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { Currency } from "components";
import { toggleTheme } from "store/appSlice";
import { Container, Divider, StyledLink, Theme } from "./RightTop.styles";

const RightTop = () => {
  const darkThemeOn = useSelector(({ app }) => app.darkThemeOn);
  const dispatch = useDispatch();

  return (
    <Container>
      <Currency />
      <Divider>|</Divider>
      <Theme onClick={() => dispatch(toggleTheme())}>
        {darkThemeOn ? <SunIcon /> : <MoonIcon />}
      </Theme>
      <Divider>|</Divider>
      <StyledLink to={"/"}>Sign In</StyledLink>
    </Container>
  );
};

export default RightTop;
