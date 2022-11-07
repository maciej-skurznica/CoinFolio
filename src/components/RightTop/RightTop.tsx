import { MoonIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
// local imports
import { Currency } from "components";
import { toggleTheme } from "store/appSlice";
import { useStoreSelector } from "store/hooks";
import { Container, Divider, StyledLink, Theme } from "./RightTop.styles";

const RightTop = () => {
  const darkThemeOn = useStoreSelector(({ app }) => app.darkThemeOn);
  const dispatch = useDispatch();
  const onClickCallback = useCallback(
    () => dispatch(toggleTheme()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, toggleTheme]
  );

  return (
    <Container>
      <Currency />
      <Divider>|</Divider>
      <Theme onClick={onClickCallback}>{darkThemeOn ? <SunIcon /> : <MoonIcon />}</Theme>
      <Divider>|</Divider>
      <StyledLink to={"/"}>Sign In</StyledLink>
    </Container>
  );
};

export default RightTop;
