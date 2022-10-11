import React from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ValueWithCurrencySymbol } from "components";
import { bigNumberConvertor, roundToTwoDecimal } from "utils";
import { tooltipLabels, tooltipTitles, xScaleTicks } from "utils/chartsCallbacks";
import { ChartContainer, Container, Div, Text, Value } from "./VolumeChart.styles";

const VolumeChart = ({ volumesBTC, currentCurrency, hourlyInterval }) => {
  const hasData = volumesBTC.length;
  const volume = volumesBTC?.[volumesBTC.length - 1]?.[1];

  return (
    <Container>
      <Div>
        <Text>
          BTC Volume 24h:
          <Value>
            {volume ? (
              <ValueWithCurrencySymbol
                value={bigNumberConvertor(volume)}
                currentCurrency={currentCurrency}
              />
            ) : (
              <Skeleton width={48} />
            )}
          </Value>
        </Text>
      </Div>
      <ChartContainer>
        {hasData && (
          <Bar
            data={{
              labels: volumesBTC.map((el) => el[0]),
              datasets: [
                {
                  label: "Volume",
                  data: volumesBTC.map((el) => roundToTwoDecimal(el[1])),
                  backgroundColor: "#2173E5",
                  borderRadius: 4,
                },
              ],
            }}
            options={{
              plugins: {
                legend: { display: false },
                tooltip: {
                  displayColors: false,
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
                      const self = this;
                      return xScaleTicks(self, value, hourlyInterval);
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

export default VolumeChart;
