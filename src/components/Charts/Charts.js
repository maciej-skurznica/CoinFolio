import { useSelector } from "react-redux";
import { ChartsBottom, BitcoinChart, VolumeChart } from "components";
import { useFetch } from "hooks";
import { timeFrames } from "assets/data";
import { Container, Top } from "./Charts.styles";

const Charts = () => {
  const currentCurrency = useSelector(({ app }) => app.currency);
  const activeButton = useSelector(({ charts }) => charts.activeButton);

  const { days, interval } = timeFrames[activeButton];

  const [{ prices: pricesBTC, total_volumes: volumesBTC }] = useFetch(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currentCurrency}&days=${days}&interval=${interval}`,
    "charts",
    [activeButton, currentCurrency],
    { prices: [], total_volumes: [] }
  );

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
