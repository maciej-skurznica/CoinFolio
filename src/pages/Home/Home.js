import React from "react";
import { Table, Charts } from "components";
import { BackToTop, Container } from "./Home.styles";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

class Home extends React.Component {
  state = { showBackToTopButton: false };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 900) {
        this.setState({ showBackToTopButton: true });
      } else {
        this.setState({ showBackToTopButton: false });
      }
    });
  }

  render() {
    return (
      <Container>
        <Charts currentCurrency={this.props.currentCurrency} />
        <Table currentCurrency={this.props.currentCurrency} />
        {this.state.showBackToTopButton && (
          <BackToTop onClick={this.scrollToTop}>⇧</BackToTop>
        )}
      </Container>
    );
  }
}

export default Home;
