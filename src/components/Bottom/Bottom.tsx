import React, { useEffect } from "react";
import { toast } from "react-toastify";
// local imports
import { availableCurrencies } from "assets/data";
import { icons } from "assets/images";
import { BottomSkeleton, ProgressBar } from "components";
import { useGetGlobalDataQuery } from "store/coinGeckoApiSlice";
import { useStoreSelector } from "store/hooks";
import { bigNumberConvertor } from "utils";
import { CapChange, Container, Div, Icon, Key, Symbol, Value } from "./Bottom.styles";

const Bottom = () => {
  const currentCurrencyLowerCase = useStoreSelector(({ app }) =>
    app.currency.toLowerCase()
  );
  const {
    data: globalData,
    isLoading,
    isError,
    error,
  } = useGetGlobalDataQuery(undefined, { pollingInterval: 600000 });

  useEffect(() => {
    if (isError) {
      let errorMessage;
      if ("status" in error) {
        errorMessage = "error" in error ? error.error : JSON.stringify(error.data);
      } else {
        errorMessage = error.message;
      }
      toast.error(`Failed to load navbar data...\n${errorMessage}}`, {
        toastId: "navbar",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  const haveData = !isLoading && !isError && Object.keys(globalData.data).length;
  const {
    active_cryptocurrencies: activeCrypto,
    markets,
    total_market_cap,
    market_cap_change_percentage_24h_usd: marketCapChange,
    total_volume,
    market_cap_percentage,
  } = globalData?.data || {};

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
          !isError && <BottomSkeleton />
        )}
      </Div>
    </Container>
  );
};

export default Bottom;
