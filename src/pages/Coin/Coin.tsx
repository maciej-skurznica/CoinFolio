import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
// local imports
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
  const { coin } = useParams<{ coin: string }>();
  const { data: coinData, isLoading, isError, error } = useGetCoinDataQuery(coin);
  const history = useHistory();

  useEffect(() => {
    if (isError) {
      let errorMessage;
      if ("status" in error) {
        errorMessage = "error" in error ? error.error : JSON.stringify(error.data);
      } else {
        errorMessage = error.message;
      }
      toast.error(`Failed to load coin data...\n${errorMessage}}`, {
        toastId: "coin",
      });
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
        {haveData ? <CoinSummary /> : <CoinSummarySkeleton />}
        <Description>Description</Description>
        {haveData ? (
          <>
            <CoinDescription />
            <CoinConverter />
          </>
        ) : (
          <>
            <CoinDescriptionSkeleton />
            <CoinConverterLoader />
          </>
        )}
      </InnerContainer>
      {haveData && <BackgroundCoinChart />}
    </Container>
  );
};

export default Coin;
