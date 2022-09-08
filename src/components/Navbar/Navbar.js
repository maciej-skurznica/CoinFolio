import { Middle, Top, Bottom } from "components";

const Navbar = (props) => {
  return (
    <>
      <Top
        toggleCurrency={props.toggleCurrency}
        currentCurrency={props.currentCurrency}
        toggleTheme={props.toggleTheme}
        darkThemeOn={props.darkThemeOn}
      />
      <Middle />
      <Bottom currentCurrency={props.currentCurrency} />
    </>
  );
};

export default Navbar;
