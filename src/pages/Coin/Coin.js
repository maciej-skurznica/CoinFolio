import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import {
  BackgroundCoinChart,
  CoinConverter,
  CoinConverterLoader,
  CoinDescription,
  CoinDescriptionSkeleton,
  CoinSummary,
  CoinSummarySkeleton,
} from "components";
import { Container, Description, InnerContainer } from "./Coin.styles";
import { useFetch } from "hooks";

const Coin = ({ currentCurrency }) => {
  const { coin } = useParams();

  const [coinData, isLoading, hasError] = useFetch(
    `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`,
    "coin",
    [coin],
    {}
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const haveData = !isLoading && !hasError && Object.keys(coinData).length;

  return (
    <Container>
      {hasError && <Redirect to="/coins" />}
      <InnerContainer>
        <Description>Summary</Description>
        {haveData ? (
          <CoinSummary coinData={coinData} currentCurrency={currentCurrency} />
        ) : (
          <CoinSummarySkeleton />
        )}
        <Description>Description</Description>
        {haveData ? (
          <>
            <CoinDescription coinData={coinData} />
            <CoinConverter coinData={coinData} currentCurrency={currentCurrency} />
          </>
        ) : (
          <>
            <CoinDescriptionSkeleton />
            <CoinConverterLoader />
          </>
        )}
      </InnerContainer>
      {haveData && (
        <BackgroundCoinChart coinData={coinData} currentCurrency={currentCurrency} />
      )}
    </Container>
  );
};

export default Coin;
