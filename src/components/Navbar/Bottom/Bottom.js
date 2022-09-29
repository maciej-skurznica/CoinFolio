import React from "react";
import axios from "axios";
import { BottomSkeleton } from "components";
import { toast } from "react-toastify";
import { bigNumberConvertor } from "utils/bigNumberConvertor";
import { availableCurrencies } from "assets/data/data";
import { icons } from "assets/images/icons";
import {
  CapChange,
  Container,
  Div,
  Fill,
  Icon,
  Key,
  ProgressBar,
  Symbol,
  Value,
} from "./Bottom.styles";

class Bottom extends React.Component {
  state = {
    isLoading: true,
    hasError: false,
    marketData: {},
  };

  async componentDidMount() {
    try {
      const {
        data: { data },
      } = await axios("https://api.coingecko.com/api/v3/global");
      this.setState({
        marketData: data,
        isLoading: false,
      });
    } catch (error) {
      toast.error("Error while loading navbar...", { toastId: "Bottom" });
      this.setState({ isLoading: false, hasError: true });
    }
  }

  render() {
    const haveData = !this.state.isLoading && Object.keys(this.state.marketData).length;
    const {
      active_cryptocurrencies: activeCrypto,
      markets,
      total_market_cap,
      market_cap_change_percentage_24h_usd: marketCapChange,
      total_volume,
      market_cap_percentage,
    } = this.state.marketData;
    const { currentCurrency } = this.props;

    return (
      <Container>
        <Div>
          {haveData ? (
            <>
              <Key>
                Coins:<Value>{activeCrypto}</Value>
              </Key>
              <Key>
                Exchanges:<Value>{markets}</Value>
              </Key>
              <Key>
                Market Cap:
                <Value>
                  <Symbol>
                    {availableCurrencies[currentCurrency.toLowerCase()].symbol}
                  </Symbol>
                  {bigNumberConvertor(total_market_cap[currentCurrency.toLowerCase()])}
                  <CapChange change={marketCapChange}>
                    {marketCapChange >= 0 ? "↑" : "↓"}
                  </CapChange>
                </Value>
              </Key>
              <Key>
                24h Vol:
                <Value>
                  <Symbol>
                    {availableCurrencies[currentCurrency.toLowerCase()].symbol}
                  </Symbol>
                  {bigNumberConvertor(total_volume[currentCurrency.toLowerCase()])}
                </Value>
              </Key>
              <Key>
                Dominance:
                <Value>
                  <Icon icon={icons.btc} />
                  {Math.round(market_cap_percentage.btc * 100) / 100}%
                </Value>
                <ProgressBar>
                  <Fill value={Math.round(market_cap_percentage.btc * 100) / 100} />
                </ProgressBar>
              </Key>
              <Value>
                <Icon icon={icons.eth} larger />
                {Math.round(market_cap_percentage.eth * 100) / 100}%
              </Value>
              <ProgressBar>
                <Fill value={Math.round(market_cap_percentage.eth * 100) / 100} />
              </ProgressBar>
            </>
          ) : (
            !this.state.hasError && <BottomSkeleton />
          )}
        </Div>
      </Container>
    );
  }
}

export default Bottom;
