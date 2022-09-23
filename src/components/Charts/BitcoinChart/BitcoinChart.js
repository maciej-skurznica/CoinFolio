import React from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ValueWithCurrencySymbol } from "components";
import { ChartContainer, Container, Div, Text, Value } from "./BitcoinChart.styles";
import { currencySymbol } from "../../../utils/currencySymbol";
import { roundToTwoDecimal } from "../../../utils/roundToTwoDecimal";

const BitcoinChart = ({ pricesBTC, currentCurrency, hourlyInterval }) => {
  const hasData = pricesBTC.length;
  const price = pricesBTC?.[pricesBTC.length - 1]?.[1];

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
          BTC Price:
          <Value>
            {price ? (
              <ValueWithCurrencySymbol
                value={roundToTwoDecimal(price)}
                currentCurrency={currentCurrency}
              />
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
                  borderColor:
                    pricesBTC[0][1] > pricesBTC[pricesBTC.length - 1][1]
                      ? "rgb(209,78,77)"
                      : "rgb(42,141,120)",
                  backgroundColor: (context) => {
                    const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(
                      0,
                      pricesBTC[0][1] > pricesBTC[pricesBTC.length - 1][1]
                        ? "rgba(209,78,77,0.5)"
                        : "rgba(42,141,120,0.5)"
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

export default BitcoinChart;
