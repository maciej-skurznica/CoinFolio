import React, { useState, useEffect } from "react";
import { Table, Charts } from "components";
import { BackToTop, Container } from "./Home.styles";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const Home = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () =>
    window.pageYOffset > 900
      ? setShowBackToTopButton(true)
      : setShowBackToTopButton(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Charts />
      <Table />
      {showBackToTopButton && <BackToTop onClick={scrollToTop}>⇧</BackToTop>}
    </Container>
  );
};

export default Home;
