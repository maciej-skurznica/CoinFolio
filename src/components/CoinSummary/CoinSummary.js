import { BsDot } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { ValueWithCurrencySymbol } from "components";
import { Div } from "ui";
import { displayBigNumber, roundToTwoDecimal } from "utils";
import {
  AllTimeLowHigh,
  CoinName,
  ColumnTitle,
  Dot,
  Frame,
  Icon,
  IconTile,
  LinkIcon,
  PriceChange,
  PriceDiv,
  SumLeft,
  Summary,
  SumMiddle,
  SumRight,
  Text,
  WebsiteLink,
  WebsiteTile,
} from "./CoinSummary.styles";

const CoinSummary = ({ coinData, currentCurrency }) => {
  const lowerCaseCurrency = currentCurrency.toLowerCase();
  const {
    image: { large },
    name,
    links: { homepage },
    market_data: {
      current_price: { [lowerCaseCurrency]: price },
    },
    market_data: {
      price_change_percentage_24h_in_currency: { [lowerCaseCurrency]: priceChange },
      ath: { [lowerCaseCurrency]: ath },
      ath_change_percentage: { [lowerCaseCurrency]: athPercentage },
      ath_date: { [lowerCaseCurrency]: athDate },
      atl: { [lowerCaseCurrency]: atl },
      atl_change_percentage: { [lowerCaseCurrency]: atlPercentage },
      atl_date: { [lowerCaseCurrency]: atlDate },
      market_cap: { [lowerCaseCurrency]: marketCap },
      fully_diluted_valuation: { [lowerCaseCurrency]: dilutedValuation },
      total_volume: { [lowerCaseCurrency]: totalVolume },
      circulating_supply,
      max_supply,
    },
  } = coinData;

  return (
    <Summary>
      <SumLeft>
        <IconTile>
          <Icon image={large} />
          <CoinName>{name}</CoinName>
        </IconTile>
        <WebsiteTile justify="flex-start">
          <LinkIcon onClick={() => window.open(homepage)}>
            <FaLink />
          </LinkIcon>
          <WebsiteLink>{homepage}</WebsiteLink>
        </WebsiteTile>
      </SumLeft>
      <SumMiddle direction="column">
        <PriceDiv direction="column">
          <ValueWithCurrencySymbol value={price} currentCurrency={currentCurrency} />
          <PriceChange value={priceChange}>
            <Frame />
            {roundToTwoDecimal(priceChange) + "%"}
          </PriceChange>
        </PriceDiv>
        <AllTimeLowHigh justify="space-around">
          <Div align="flex-start" direction="column">
            <ColumnTitle>ATH:</ColumnTitle>
            <ValueWithCurrencySymbol value={ath} currentCurrency={currentCurrency} />
            <div>{roundToTwoDecimal(athPercentage) + "%"}</div>
            <div>{new Date(athDate).toLocaleDateString()}</div>
          </Div>
          <Div align="flex-start" direction="column">
            <ColumnTitle>ATL:</ColumnTitle>
            <ValueWithCurrencySymbol value={atl} currentCurrency={currentCurrency} />
            <div>{roundToTwoDecimal(atlPercentage) + "%"}</div>
            <div>{new Date(atlDate).toLocaleDateString()}</div>
          </Div>
        </AllTimeLowHigh>
      </SumMiddle>
      <SumRight>
        <Div direction="column" align="flex-start">
          <Div>
            <Dot>
              <BsDot />
            </Dot>
            <Text>Market Cap:</Text>
            <ValueWithCurrencySymbol
              value={displayBigNumber(marketCap)}
              currentCurrency={currentCurrency}
            />
          </Div>
          {dilutedValuation && (
            <Div>
              <Dot>
                <BsDot />
              </Dot>
              <Text>Fully Diluted Valuation:</Text>
              <ValueWithCurrencySymbol
                value={displayBigNumber(dilutedValuation)}
                currentCurrency={currentCurrency}
              />
            </Div>
          )}
          <Div>
            <Dot>
              <BsDot />
            </Dot>
            <Text>Volume 24h:</Text>
            <ValueWithCurrencySymbol
              value={displayBigNumber(totalVolume)}
              currentCurrency={currentCurrency}
            />
          </Div>
          <Div>
            <Dot>
              <BsDot />
            </Dot>
            <Text>Volume / Market:</Text>
            {roundToTwoDecimal((totalVolume / marketCap) * 100) + "%"}
          </Div>
          <Div>
            <Dot>
              <BsDot />
            </Dot>
            <Text>Circulating Supply:</Text>
            {displayBigNumber(circulating_supply)}
          </Div>
          <Div>
            <Dot>
              <BsDot />
            </Dot>
            <Text>Max Supply:</Text>
            {max_supply ? displayBigNumber(max_supply) : "infinite"}
          </Div>
        </Div>
      </SumRight>
    </Summary>
  );
};

export default CoinSummary;
