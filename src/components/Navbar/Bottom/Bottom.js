import React from "react";
import { useFetch } from "hooks";
import { useSelector } from "react-redux";
import { BottomSkeleton, ProgressBar } from "components";
import { availableCurrencies } from "assets/data/data";
import { icons } from "assets/images/icons";
import { bigNumberConvertor } from "utils";
import { CapChange, Container, Div, Icon, Key, Symbol, Value } from "./Bottom.styles";

const Bottom = () => {
  const currentCurrencyLowerCase = useSelector(({ app }) => app.currency.toLowerCase());

  const [marketData, isLoading, hasError] = useFetch(
    "https://api.coingecko.com/api/v3/global",
    "navbar",
    [],
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
                <Symbol>{availableCurrencies[currentCurrencyLowerCase].symbol}</Symbol>
                {bigNumberConvertor(total_market_cap[currentCurrencyLowerCase])}
                <CapChange change={marketCapChange}>
                  {marketCapChange >= 0 ? "↑" : "↓"}
                </CapChange>
              </Value>
            </Key>
            <Key>
              24h Vol:
              <Value>
                <Symbol>{availableCurrencies[currentCurrencyLowerCase].symbol}</Symbol>
                {bigNumberConvertor(total_volume[currentCurrencyLowerCase])}
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
