import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChartsBottom, BitcoinChart, VolumeChart } from "components";
import { fetchCharts } from "store/chartsSlice";
import { Container, Top } from "./Charts.styles";

const Charts = () => {
  const currentCurrency = useSelector(({ app }) => app.currency);
  const activeButton = useSelector(({ charts }) => charts.activeButton);
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchCharts());
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
