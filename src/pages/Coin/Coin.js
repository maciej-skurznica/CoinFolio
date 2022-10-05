import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  CoinDescription,
  CoinDescriptionSkeleton,
  CoinSummary,
  CoinSummarySkeleton,
} from "components";
import { Container, Description, InnerContainer } from "./Coin.styles";

class Coin extends React.Component {
  state = { isLoading: true, coinData: {} };

  coinId = this.props.match.params.coin;

  fetchData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      this.setState({
        coinData: data,
        isLoading: false,
      });
    } catch (error) {
      toast.error("Error while loading coin data...", { toastId: "Coin" });
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, _) {
    if (this.coinId !== prevProps.match.params.coin) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const haveData = !this.state.isLoading && Object.keys(this.state.coinData).length;
    const { currentCurrency } = this.props;

    return (
      <Container>
        <InnerContainer>
          <Description>Summary</Description>
          {haveData ? (
            <CoinSummary
              coinData={this.state.coinData}
              currentCurrency={currentCurrency}
              isLoading={this.state.isLoading}
            />
          ) : (
            <CoinSummarySkeleton />
          )}
          <Description>Description</Description>
          {haveData ? (
            <CoinDescription coinData={this.state.coinData} />
          ) : (
            <CoinDescriptionSkeleton />
          )}
        </InnerContainer>
      </Container>
    );
  }
}

export default Coin;
