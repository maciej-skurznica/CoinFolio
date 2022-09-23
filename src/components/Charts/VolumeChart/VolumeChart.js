import React from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ValueWithCurrencySymbol } from "components";
import { ChartContainer, Container, Div, Text, Value } from "./VolumeChart.styles";
import { currencySymbol } from "../../../utils/currencySymbol";
import { bigNumberConvertor } from "../../../utils/bigNumberConvertor";
import { roundToTwoDecimal } from "../../../utils/roundToTwoDecimal";

const VolumeChart = ({ volumesBTC, currentCurrency, hourlyInterval }) => {
  const hasData = volumesBTC.length;
  const volume = volumesBTC?.[volumesBTC.length - 1]?.[1];

  const tooltipTitles = (data) =>
    new Date(Number(data[0].label)).toLocaleString(
      "locales",
      hourlyInterval
        ? { dateStyle: "short", timeStyle: "short" }
        : data[0].dataset.data.length - 1 === data[0].dataIndex
        ? { timeStyle: "short" }
        : { dateStyle: "medium" }
    );

  const tooltipLabels = (data) => {
    const value = data.parsed.y;
    return `${data.dataset.label}: ${currencySymbol(currentCurrency)}${value
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  const xScaleTicks = (self, data) => {
    if (hourlyInterval) {
      return (
        new Date(self.getLabelForValue(data)).toLocaleString("locales", {
          hour: "numeric",
        }) + ":00"
      );
    }
    return new Date(self.getLabelForValue(data)).toLocaleString("locales", {
      day: "2-digit",
    });
  };

  return (
    <Container>
      <Div>
        <Text>
          Volume 24h:
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
                    title: (context) => tooltipTitles(context),
                    label: (context) => tooltipLabels(context),
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
                      return xScaleTicks(self, value);
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
