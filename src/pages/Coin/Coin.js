import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaLink } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { roundToTwoDecimal } from "../../utils/roundToTwoDecimal";
import { displayBigNumber } from "../../utils/displayBigNumber";
import { ValueWithCurrencySymbol } from "components";
import { Div } from "ui";
import {
  AllTimeLowHigh,
  CoinName,
  ColumnTitle,
  Container,
  Description,
  Dot,
  Frame,
  Icon,
  IconTile,
  InnerContainer,
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
} from "./Coin.styles";

class Coin extends React.Component {
  state = { isLoading: true, coinData: {} };

  coinId = this.props.match.params.coin;

  fetchData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${this.coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      this.setState({
        coinData: data,
        isLoading: false,
      });
    } catch (error) {
      toast.error("Error while loading coin data...", { toastId: "Coin" });
      this.setState({ isLoading: false });
    }
  };

  // do I really need this???
  componentDidUpdate(prevProps, _) {
    if (this.coinId !== prevProps.match.params.coin) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    // use skeleton instead
    const haveData = !this.state.isLoading && Object.keys(this.state.coinData).length;
    const { currentCurrency } = this.props;
    if (haveData) {
      var {
        image,
        name,
        links,
        market_data: {
          current_price: { [currentCurrency.toLowerCase()]: value },
        },
        market_data: {
          price_change_percentage_24h_in_currency: {
            [currentCurrency.toLowerCase()]: priceChange,
          },
          ath: { [currentCurrency.toLowerCase()]: ath },
          ath_change_percentage: { [currentCurrency.toLowerCase()]: athPercentage },
          ath_date: { [currentCurrency.toLowerCase()]: athDate },
          atl: { [currentCurrency.toLowerCase()]: atl },
          atl_change_percentage: { [currentCurrency.toLowerCase()]: atlPercentage },
          atl_date: { [currentCurrency.toLowerCase()]: atlDate },
          market_cap: { [currentCurrency.toLowerCase()]: marketCap },
          fully_diluted_valuation: { [currentCurrency.toLowerCase()]: dilutedValuation },
          total_volume: { [currentCurrency.toLowerCase()]: totalVolume },
          circulating_supply,
          max_supply,
        },
      } = this.state.coinData;
    }

    return (
      <Container>
        {haveData && (
          <InnerContainer>
            {console.log(priceChange)}
            {/* delete this  */}

            <Description>Summary</Description>
            <Summary>
              <SumLeft>
                <IconTile>
                  <Icon image={image.large} />
                  <CoinName>{name}</CoinName>
                </IconTile>
                <WebsiteTile justify={"flex-start"}>
                  <LinkIcon>
                    <FaLink />
                  </LinkIcon>
                  <WebsiteLink>{links.homepage}</WebsiteLink>
                </WebsiteTile>
              </SumLeft>
              <SumMiddle direction={"column"}>
                <PriceDiv direction={"column"}>
                  <ValueWithCurrencySymbol
                    value={value}
                    currentCurrency={currentCurrency}
                  />
                  <PriceChange value={priceChange}>
                    <Frame />
                    {roundToTwoDecimal(priceChange) + "%"}
                  </PriceChange>
                </PriceDiv>
                <AllTimeLowHigh justify={"space-around"}>
                  <Div align={"flex-start"} direction={"column"}>
                    <ColumnTitle>ATH:</ColumnTitle>
                    <ValueWithCurrencySymbol
                      value={ath}
                      currentCurrency={currentCurrency}
                    />
                    <div>{roundToTwoDecimal(athPercentage) + "%"}</div>
                    <div>{new Date(athDate).toLocaleDateString()}</div>
                  </Div>
                  <Div align={"flex-start"} direction={"column"}>
                    <ColumnTitle>ATL:</ColumnTitle>
                    <ValueWithCurrencySymbol
                      value={atl}
                      currentCurrency={currentCurrency}
                    />
                    <div>{roundToTwoDecimal(atlPercentage) + "%"}</div>
                    <div>{new Date(atlDate).toLocaleDateString()}</div>
                  </Div>
                </AllTimeLowHigh>
              </SumMiddle>
              <SumRight>
                <Div direction={"column"} align={"flex-start"}>
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
            <Description>Description</Description>
          </InnerContainer>
        )}
      </Container>
    );
  }
}

export default Coin;
