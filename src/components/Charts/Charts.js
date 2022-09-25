import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ChartsBottom, BitcoinChart, VolumeChart } from "components";
import { Container, Top } from "./Charts.styles";
import { timeFrames } from "assets/data/data";
import { setLocalStorage } from "../../utils/setLocalStorage";
import { getFromLocalStorage } from "../../utils/getFromLocalStorage";

class Charts extends React.Component {
  state = {
    isLoading: true,
    activeButton: getFromLocalStorage("activeButton") || "1m",
    pricesBTC: [],
    volumesBTC: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.activeButton !== this.state.activeButton) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { days, interval } = timeFrames[this.state.activeButton];
    try {
      const {
        data: { prices, total_volumes },
      } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currentCurrency}&days=${days}&interval=${interval}`
      );
      this.setState({
        pricesBTC: prices,
        volumesBTC: total_volumes,
        isLoading: false,
      });
    } catch (error) {
      toast.error("Error while loading charts data...", { toastId: "id" });
      this.setState({ isLoading: false });
    }
  };

  handleTimeFrameClick = (key) => {
    setLocalStorage({ activeButton: key });
    this.setState({ activeButton: key });
  };

  render() {
    const { pricesBTC, volumesBTC, activeButton } = this.state;
    const { currentCurrency } = this.props;

    return (
      <Container>
        <Top>
          <BitcoinChart
            pricesBTC={pricesBTC}
            currentCurrency={currentCurrency}
            hourlyInterval={timeFrames[this.state.activeButton].interval === "hourly"}
          />
          <VolumeChart
            volumesBTC={volumesBTC}
            currentCurrency={currentCurrency}
            hourlyInterval={timeFrames[this.state.activeButton].interval === "hourly"}
          />
        </Top>
        <ChartsBottom
          date={pricesBTC?.[pricesBTC.length - 1]?.[0]}
          handleTimeFrameClick={this.handleTimeFrameClick}
          timeFrames={timeFrames}
          activeButton={activeButton}
        />
      </Container>
    );
  }
}

export default Charts;
