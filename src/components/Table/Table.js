import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { TableSort, TableCoin, TableCoinSkeleton, InfoInfiniteScroll } from "components";
import { toast } from "react-toastify";
import { Container } from "./Table.styles";

class Table extends React.Component {
  state = {
    isLoading: true,
    coinsData: [],
    numberOfCoinsToLoad: 50,
    allCryptocurrencies: 1,
    pages: 0,
    hasMore: true,
  };

  fetchData = async () => {
    if (this.state.coinsData.length >= this.state.allCryptocurrencies) {
      this.setState({ hasMore: false });
      return;
    }

    const pages = this.state.pages + 1;

    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currentCurrency}&order=market_cap_desc&per_page=${this.state.numberOfCoinsToLoad}&page=${pages}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      const response =
        pages === 1 && (await axios("https://api.coingecko.com/api/v3/global"));
      this.setState({
        coinsData: this.state.coinsData.concat(data),
        isLoading: false,
        allCryptocurrencies:
          pages === 1
            ? response.data.data.active_cryptocurrencies
            : this.state.allCryptocurrencies,
        pages,
      });
    } catch (error) {
      toast.error("Error while loading coins data...", { toastId: "Table" });
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const haveData = !this.state.isLoading && Object.keys(this.state.coinsData).length;

    return (
      <Container>
        <TableSort />
        {haveData ? (
          <InfiniteScroll
            style={{ width: "100vw" }}
            dataLength={this.state.coinsData.length}
            next={this.fetchData}
            hasMore={this.state.hasMore}
            loader={<InfoInfiniteScroll info={"Loading..."} />}
            endMessage={<InfoInfiniteScroll info={"Yay! You have seen it all"} />}
          >
            {this.state.coinsData.map((coin) => (
              <TableCoin
                key={coin.name}
                data={coin}
                currentCurrency={this.props.currentCurrency}
              />
            ))}
          </InfiniteScroll>
        ) : (
          Array(this.state.numberOfCoinsToLoad)
            .fill(0)
            .map((el) => <TableCoinSkeleton key={Math.random()} />)
        )}
      </Container>
    );
  }
}

export default Table;
