import React from "react";
import axios from "axios";
import { TableSort, TableCoin, TableCoinSkeleton } from "components";
import { toast } from "react-toastify";
import { Container } from "./Table.styles";

class Table extends React.Component {
  state = {
    isLoading: true,
    coinsData: {},
    numberOfCoins: 30,
  };

  async componentDidMount() {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currentCurrency}&order=market_cap_desc&per_page=${this.state.numberOfCoins}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coinsData: data,
        isLoading: false,
      });
    } catch (error) {
      toast.error("Error while loading coins data...", { toastId: "id" });
      this.setState({ isLoading: false });
    }
  }

  render() {
    const haveData = !this.state.isLoading && Object.keys(this.state.coinsData).length;

    return (
      <Container>
        <TableSort />
        {haveData
          ? this.state.coinsData.map((coin) => (
              <TableCoin data={coin} currentCurrency={this.props.currentCurrency} />
            ))
          : Array(this.state.numberOfCoins)
              .fill(0)
              .map((el) => <TableCoinSkeleton />)}
      </Container>
    );
  }
}

export default Table;
