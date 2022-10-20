import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BackgroundCoinChart,
  CoinConverter,
  CoinConverterLoader,
  CoinDescription,
  CoinDescriptionSkeleton,
  CoinSummary,
  CoinSummarySkeleton,
} from "components";
import { useGetCoinDataQuery } from "store/coinGeckoApiSlice";
import { Container, Description, InnerContainer } from "./Coin.styles";

const Coin = () => {
  const { coin } = useParams();
  const { data: coinData, isLoading, isError, error } = useGetCoinDataQuery(coin);
  const history = useHistory();

  useEffect(() => {
    if (isError) {
      toast.error(
        `Failed to load navbar data...\n${error?.data?.error || error?.error}`,
        { toastId: "navbar" }
      );
      setTimeout(() => {
        history.push("/coins");
      }, 6000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const haveData = !isLoading && !isError && Object.keys(coinData).length;

  return (
    <Container>
      <InnerContainer>
        <Description>Summary</Description>
        {haveData ? <CoinSummary coinData={coinData} /> : <CoinSummarySkeleton />}
        <Description>Description</Description>
        {haveData ? (
          <>
            <CoinDescription coinData={coinData} />
            <CoinConverter coinData={coinData} />
          </>
        ) : (
          <>
            <CoinDescriptionSkeleton />
            <CoinConverterLoader />
          </>
        )}
      </InnerContainer>
      {haveData && <BackgroundCoinChart coinData={coinData} />}
    </Container>
  );
};

export default Coin;
