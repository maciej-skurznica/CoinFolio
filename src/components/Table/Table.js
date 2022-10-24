import { InfoInfiniteScroll, TableCoin, TableCoinSkeleton, TableSort } from "components";
import { useCallback, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData, increasePage, reset } from "store/tableSlice";
import { Container } from "./Table.styles";

const Table = () => {
  const currentCurrency = useSelector(({ app }) => app.currency);
  const { hasMore, page, trigger, coinsData, isLoading } = useSelector(
    ({ table }) => table
  );
  const dispatch = useDispatch();

  const nextCallback = useCallback(() => {
    dispatch(increasePage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, increasePage]);

  useEffect(() => {
    return () => dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCurrency]);

  useEffect(() => {
    const promise = dispatch(fetchTableData());
    return () => promise.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, trigger]);

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
          next={nextCallback}
          loader={<InfoInfiniteScroll info={"Loading..."} />}
          endMessage={<InfoInfiniteScroll info={"Yay! You have seen it all"} />}
        >
          {coinsData.map((coin) => (
            <TableCoin key={coin.name} data={coin} />
          ))}
        </InfiniteScroll>
      ) : (
        Array(50)
          .fill(0)
          .map(() => <TableCoinSkeleton key={Math.random()} />)
      )}
    </Container>
  );
};

export default Table;
