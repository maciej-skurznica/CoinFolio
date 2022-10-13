import { useSelector } from "react-redux";
import { ChartsBottom, BitcoinChart, VolumeChart } from "components";
import { useFetch, useLocalStorageAndState } from "hooks";
import { timeFrames } from "assets/data/data";
import { Container, Top } from "./Charts.styles";

const Charts = () => {
  const currentCurrency = useSelector(({ app }) => app.currency);

  const [activeButton, setActiveButton] = useLocalStorageAndState("activeButton", "6m");
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
        <BitcoinChart
          pricesBTC={pricesBTC}
          hourlyInterval={timeFrames[activeButton].interval === "hourly"}
        />
        <VolumeChart
          volumesBTC={volumesBTC}
          hourlyInterval={timeFrames[activeButton].interval === "hourly"}
        />
      </Top>
      <ChartsBottom
        date={pricesBTC?.[pricesBTC.length - 1]?.[0]}
        handleTimeFrameClick={(key) => setActiveButton(key)}
        timeFrames={timeFrames}
        activeButton={activeButton}
      />
    </Container>
  );
};

export default Charts;
