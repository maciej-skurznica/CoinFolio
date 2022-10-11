import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import { TableSort, TableCoin, TableCoinSkeleton, InfoInfiniteScroll } from "components";
import { Container } from "./Table.styles";

const Table = ({ currentCurrency }) => {
  const [coinsData, setCoinsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        );

        // Chinese but this is the only way I can compare old data versus new data
        // If the data is the same it will not add new data to the old data array
        if (coinsData?.[0]?.name !== data?.[0]?.name) {
          setCoinsData([...coinsData, ...data]);
          setIsLoading(false);
          setHasMore(data.length === 50);
        }
      } catch (error) {
        toast.error("Error while loading coins data...", { toastId: "table" });
        setIsLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const updatePageNumber = () => setPage(page + 1);

  const haveData = !isLoading && coinsData.length;

  return (
    <Container>
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
          dataLength={coinsData.length}
          hasMore={hasMore}
          next={updatePageNumber}
          loader={<InfoInfiniteScroll info={"Loading..."} />}
          endMessage={<InfoInfiniteScroll info={"Yay! You have seen it all"} />}
        >
          {coinsData.map((coin) => (
            <TableCoin key={coin.name} data={coin} currentCurrency={currentCurrency} />
          ))}
        </InfiniteScroll>
      ) : (
        Array(50)
          .fill(0)
          .map((el) => <TableCoinSkeleton key={Math.random()} />)
      )}
    </Container>
  );
};

export default Table;
