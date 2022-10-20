import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { TableSort, TableCoin, TableCoinSkeleton, InfoInfiniteScroll } from "components";
import { usePrevious } from "hooks";
import { increasePage, reset, fetchTableData } from "store/tableSlice";
import { Container } from "./Table.styles";

const Table = () => {
  const currentCurrency = useSelector(({ app }) => app.currency);
  const hasMore = useSelector(({ table }) => table.hasMore);
  const page = useSelector(({ table }) => table.page);
  const trigger = useSelector(({ table }) => table.trigger);
  const coinsData = useSelector(({ table }) => table.coinsData);
  const isLoading = useSelector(({ table }) => table.isLoading);
  const dispatch = useDispatch();
  const prevCurrency = usePrevious(currentCurrency);

  useEffect(() => {
    if (prevCurrency === undefined) {
      return;
    }
    dispatch(reset());
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
          next={() => dispatch(increasePage())}
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
