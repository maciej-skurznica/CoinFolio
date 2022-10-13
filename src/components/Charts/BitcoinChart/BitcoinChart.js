import React from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ValueWithCurrencySymbol } from "components";
import { roundToTwoDecimal } from "utils";
import { tooltipLabels, tooltipTitles, xScaleTicks } from "utils/chartsCallbacks";
import { ChartContainer, Container, Div, Text, Value } from "./BitcoinChart.styles";

const BitcoinChart = ({ pricesBTC, hourlyInterval }) => {
  const currentCurrency = useSelector(({ app }) => app.currency);

  const hasData = pricesBTC.length;
  const price = pricesBTC?.[pricesBTC.length - 1]?.[1];
  const isPriceTrendUp = pricesBTC?.[0]?.[1] <= pricesBTC?.[pricesBTC.length - 1]?.[1];

  return (
    <Container>
      <Div>
        <Text>
          BTC Price:
          <Value>
            {price ? (
              <ValueWithCurrencySymbol value={roundToTwoDecimal(price)} />
            ) : (
              <Skeleton width={60} />
            )}
          </Value>
        </Text>
      </Div>
      <ChartContainer>
        {hasData && (
          <Line
            data={{
              labels: pricesBTC.map((el) => el[0]),
              datasets: [
                {
                  label: "Price",
                  data: pricesBTC.map((el) => roundToTwoDecimal(el[1])),
                  borderColor: isPriceTrendUp ? "rgb(42,141,120)" : "rgb(209,78,77)",
                  backgroundColor: (context) => {
                    const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
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
                    label: (context) => tooltipLabels(context, currentCurrency),
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
                  grid: { display: false, drawBorder: false },
                  ticks: {
                    autoSkipPadding: 15,
                    maxRotation: 0,
                    callback: function (value) {
                      const that = this;
                      return xScaleTicks(that, value, hourlyInterval);
                    },
                  },
                },
                y: { display: false, grid: { display: false } },
              },
            }}
          />
        )}
      </ChartContainer>
    </Container>
  );
};

export default BitcoinChart;
