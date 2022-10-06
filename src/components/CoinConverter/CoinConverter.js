import React from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { displayBigNumber } from "../../utils/displayBigNumber";
import { Div } from "ui";
import { Container, ConvertIcon, Left, InputOnRight } from "./CoinConverter.styles";

class CoinConverter extends React.Component {
  state = {
    fiatValue: "",
    fiatPlaceholder: "Type value",
    cryptoValue: "",
    cryptoPlaceholder: "Type value",
  };

  cryptoPrice =
    this.props.coinData.market_data.current_price[
      this.props.currentCurrency.toLowerCase()
    ];

  runConverter = () => {
    if (this.state.fiatValue.length) {
      this.setState({
        cryptoPlaceholder: displayBigNumber(this.state.fiatValue / this.cryptoPrice, 8),
      });
    } else {
      this.setState({
        fiatPlaceholder: displayBigNumber(this.state.cryptoValue * this.cryptoPrice),
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.runConverter();
  };

  handleChange = (e, active) => {
    this.setState(
      active === "fiat"
        ? { fiatValue: e.target.value, cryptoValue: "", cryptoPlaceholder: "value..." }
        : { cryptoValue: e.target.value, fiatValue: "", fiatPlaceholder: "value..." }
    );
  };

  render() {
    const fiatTicker = this.props.currentCurrency;
    const cryptoTicker = this.props.coinData.symbol.toUpperCase();

    return (
      <Container>
        <Div>
          <Left>{fiatTicker}</Left>
          <InputOnRight
            onChange={(e) => this.handleChange(e, "fiat")}
            value={this.state.fiatValue}
            placeholder={this.state.fiatPlaceholder}
            type="number"
          />
        </Div>
        <ConvertIcon onClick={this.runConverter}>
          <CgArrowsExchangeAlt />
        </ConvertIcon>
        <Div>
          <Left>{cryptoTicker}</Left>
          <InputOnRight
            onChange={(e) => this.handleChange(e, "crypto")}
            value={this.state.cryptoValue}
            placeholder={this.state.cryptoPlaceholder}
            type="number"
          />
        </Div>
      </Container>
    );
  }
}

export default CoinConverter;
