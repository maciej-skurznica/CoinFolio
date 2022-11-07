import React, { useEffect } from "react";
// local imports
import { BitcoinChart, ChartsBottom, VolumeChart } from "components";
import { fetchCharts } from "store/chartsSlice";
import { useStoreDispatch, useStoreSelector } from "store/hooks";
import { Container, Top } from "./Charts.styles";

const Charts = () => {
  const currentCurrency = useStoreSelector(({ app }) => app.currency);
  const activeButton = useStoreSelector(({ charts }) => charts.activeButton);
  const dispatch = useStoreDispatch();

  useEffect(() => {
    const promise = dispatch(fetchCharts("bitcoin"));
    return () => {
      promise.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeButton, currentCurrency]);

  return (
    <Container>
      <Top>
        <BitcoinChart />
        <VolumeChart />
      </Top>
      <ChartsBottom />
    </Container>
  );
};

export default Charts;
