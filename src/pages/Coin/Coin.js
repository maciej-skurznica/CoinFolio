import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
    return <>{this.state.coinData?.id}</>;
  }
}

export default Coin;
