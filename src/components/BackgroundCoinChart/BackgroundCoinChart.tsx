import "chart.js/auto"; // important part
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
// local imports
import { timeFrames } from "assets/data";
import loading from "assets/images/loading.svg";
import { BackgroundCoinChartTimeframes } from "components";
import { fetchCharts } from "store/chartsSlice";
import { useStoreDispatch, useStoreSelector } from "store/hooks";
import { tooltipLabels, tooltipTitles } from "utils/chartsCallbacks";
import { ChartContainer, LoadingDiv } from "./BackgroundCoinChart.styles";

const BackgroundCoinChart = () => {
  const { coin } = useParams<{ coin: string }>();
  const currentCurrency = useStoreSelector(({ app }) => app.currency);
  const {
    activeButton,
    prices: coinPrices,
    isLoading,
  } = useStoreSelector(({ charts }) => charts);
  const dispatch = useStoreDispatch();

  useEffect(() => {
    const promise = dispatch(fetchCharts(coin));
    return () => {
      promise.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeButton, currentCurrency]);

  const hourlyInterval = timeFrames[activeButton].interval === "hourly";
  const isPriceTrendUp = coinPrices?.[0]?.[1] <= coinPrices?.[coinPrices.length - 1]?.[1];
  const hasData = coinPrices?.length;

  return (
    <>
      <BackgroundCoinChartTimeframes />
      <ChartContainer>
        {isLoading && (
          <LoadingDiv>
            <img src={loading} alt="loading" />
          </LoadingDiv>
        )}
        {hasData && (
          <Line
            data={{
              labels: coinPrices.map((el) => el[0]),
              datasets: [
                {
                  label: "Price",
                  data: coinPrices.map((el) => el[1]),
                  borderColor: isPriceTrendUp ? "rgb(42,141,120)" : "rgb(209,78,77)",
                  backgroundColor: (context) => {
                    const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 700);
                    gradient.addColorStop(
                      0,
                      isPriceTrendUp ? "rgba(42,141,120,0.5)" : "rgba(209,78,77,0.5)"
                    );
                    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                    return gradient;
                  },
                  fill: true,
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 0,
                  hoverRadius: 6,
                  hitRadius: 4,
                },
                line: {
                  borderWidth: 2,
                  tension: 0.3,
                },
              },
              plugins: {
                legend: { display: false },
                tooltip: {
                  displayColors: false,
                  caretPadding: 20,
                  titleAlign: "center",
                  padding: 10,
                  bodyAlign: "center",
                  callbacks: {
                    title: (context) => tooltipTitles(context, hourlyInterval),
                    label: (context) => tooltipLabels(context, currentCurrency, 4),
                  },
                },
              },
              interaction: {
                intersect: false,
                mode: "nearest",
                axis: "x",
              },
              scales: {
                x: {
                  display: false,
                  grid: { display: false, drawBorder: false },
                },
                y: { display: false, grid: { display: false } },
              },
            }}
          />
        )}
      </ChartContainer>
    </>
  );
};

export default BackgroundCoinChart;
