import React from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { toast } from "react-toastify";
import { BackgroundCoinChartTimeframes } from "components";
import { timeFrames } from "assets/data/data";
import { getFromLocalStorage, setLocalStorage } from "utils";
import { tooltipLabels, tooltipTitles } from "utils/chartsCallbacks";
import { ChartContainer } from "./BackgroundCoinChart.styles";

class BackgroundCoinChart extends React.Component {
  state = {
    isLoading: true,
    activeButton: getFromLocalStorage("activeButton") || "1m",
    coinPrices: [],
  };

  handleTimeFrameClick = (key) => {
    setLocalStorage({ activeButton: key });
    this.setState({ activeButton: key });
  };

  fetchData = async () => {
    const { days, interval } = timeFrames[this.state.activeButton];
    try {
      const {
        data: { prices },
      } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.props.coinData.id}/market_chart?vs_currency=${this.props.currentCurrency}&days=${days}&interval=${interval}`
      );
      this.setState({
        coinPrices: prices,
        isLoading: false,
      });
    } catch (error) {
      toast.error("Error while loading background chart data...", {
        toastId: "BackgroundCoinChart",
      });
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.activeButton !== this.state.activeButton ||
      prevProps.currentCurrency !== this.props.currentCurrency
    ) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { coinPrices, activeButton } = this.state;
    const currentCurrency = this.props.currentCurrency;
    const hourlyInterval = timeFrames[this.state.activeButton].interval === "hourly";
    const isPriceTrendUp =
      coinPrices?.[0]?.[1] <= coinPrices?.[coinPrices.length - 1]?.[1];
    const hasData = coinPrices.length;

    return (
      <>
        <BackgroundCoinChartTimeframes
          handleTimeFrameClick={this.handleTimeFrameClick}
          timeFrames={timeFrames}
          activeButton={activeButton}
        />
        <ChartContainer>
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
                      const gradient = context.chart.ctx.createLinearGradient(
                        0,
                        0,
                        0,
                        700
                      );
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
  }
}

export default BackgroundCoinChart;
