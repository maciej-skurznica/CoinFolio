import React from "react";
import { BottomSkeleton, ProgressBar } from "components";
import { bigNumberConvertor } from "utils/bigNumberConvertor";
import { availableCurrencies } from "assets/data/data";
import { icons } from "assets/images/icons";
import { CapChange, Container, Div, Icon, Key, Symbol, Value } from "./Bottom.styles";
import { useFetch } from "hooks";

const Bottom = ({ currentCurrency }) => {
  const [marketData, isLoading, hasError] = useFetch(
    "https://api.coingecko.com/api/v3/global",
    "navbar",
    {}
  );

  const haveData = !isLoading && !hasError && Object.keys(marketData.data).length;
  const {
    active_cryptocurrencies: activeCrypto,
    markets,
    total_market_cap,
    market_cap_change_percentage_24h_usd: marketCapChange,
    total_volume,
    market_cap_percentage,
  } = marketData.data || {};

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
              <ProgressBar value={market_cap_percentage.btc} />
            </Key>
            <Value>
              <Icon icon={icons.eth} larger />
              {Math.round(market_cap_percentage.eth * 100) / 100}%
            </Value>
            <ProgressBar value={market_cap_percentage.eth} />
          </>
        ) : (
          !hasError && <BottomSkeleton />
        )}
      </Div>
    </Container>
  );
};

export default Bottom;
