import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChartsBottom, BitcoinChart, VolumeChart } from "components";
import { fetchCharts } from "store/chartsSlice";
import { Container, Top } from "./Charts.styles";

const Charts = () => {
  const currentCurrency = useSelector(({ app }) => app.currency);
  const activeButton = useSelector(({ charts }) => charts.activeButton);
  const pricesBTC = useSelector(({ charts }) => charts.pricesBTC);
  const volumesBTC = useSelector(({ charts }) => charts.volumesBTC);
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
        <BitcoinChart pricesBTC={pricesBTC} />
        <VolumeChart volumesBTC={volumesBTC} />
      </Top>
      <ChartsBottom date={pricesBTC?.[pricesBTC.length - 1]?.[0]} />
    </Container>
  );
};

export default Charts;
