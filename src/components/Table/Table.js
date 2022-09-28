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
    page: 1,
    hasMore: true,
  };

  fetchData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currentCurrency}&order=market_cap_desc&per_page=50&page=${this.state.page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coinsData: this.state.coinsData.concat(data),
        isLoading: false,
        hasMore: data.length === 50,
      });
    } catch (error) {
      toast.error("Error while loading coins data...", { toastId: "Table" });
      this.setState({ isLoading: false });
    }
  };

  updatePageNumber = () => {
    console.log("hasRun", this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
  };

  componentDidUpdate(_, prevState) {
    if (this.state.page !== prevState.page) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const haveData = !this.state.isLoading && Object.keys(this.state.coinsData).length;

    return (
      <Container>
        {console.log(this.state.page, this.state.coinsData.length)}
        <TableSort />
        {haveData ? (
          <InfiniteScroll
            style={{
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            dataLength={this.state.coinsData.length}
            hasMore={this.state.hasMore}
            next={this.updatePageNumber}
            loader={<InfoInfiniteScroll info={"Loading..."} />}
            endMessage={<InfoInfiniteScroll info={"Yay! You have seen it all"} />}
          >
            {this.state.coinsData.map((coin) => (
              <TableCoin
                key={Math.random()}
                data={coin}
                currentCurrency={this.props.currentCurrency}
              />
            ))}
          </InfiniteScroll>
        ) : (
          Array(50)
            .fill(0)
            .map((el) => <TableCoinSkeleton key={Math.random()} />)
        )}
      </Container>
    );
  }
}

export default Table;
