import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Div } from "ui";
import {
  AllTimeLowHigh,
  CoinName,
  ColumnTitle,
  Icon,
  IconTile,
  PriceChange,
  PriceDiv,
  SumLeft,
  Summary,
  SumMiddle,
  SumRight,
  WebsiteLink,
  WebsiteTile,
} from "./CoinSummarySkeleton.styles";

const CoinSummarySkeleton = (props) => {
  return (
    <Summary>
      <SumLeft>
        <IconTile>
          <Icon>
            <Skeleton circle height="2.2em" />
          </Icon>
          <CoinName>
            <Skeleton />
          </CoinName>
        </IconTile>
        <WebsiteTile justify="flex-start">
          <WebsiteLink>
            <Skeleton />
          </WebsiteLink>
        </WebsiteTile>
      </SumLeft>
      <SumMiddle direction="column">
        <PriceDiv direction="column">
          <Skeleton width={60} />
          <PriceChange>
            <Skeleton width={50} />
          </PriceChange>
        </PriceDiv>
        <AllTimeLowHigh justify="space-around">
          <Div align="flex-start" direction="column">
            <ColumnTitle>
              <Skeleton width={30} />
            </ColumnTitle>
            <Skeleton width={40} />
            <Skeleton width={40} />
            <Skeleton width={40} />
          </Div>
          <Div align="flex-start" direction="column">
            <ColumnTitle>
              <Skeleton width={30} />
            </ColumnTitle>
            <Skeleton width={40} />
            <Skeleton width={40} />
            <Skeleton width={40} />
          </Div>
        </AllTimeLowHigh>
      </SumMiddle>
      <SumRight>
        <Div direction="column" align="flex-start">
          <Div>
            <Skeleton width={170} />
          </Div>
          <Div>
            <Skeleton width={170} />
          </Div>
          <Div>
            <Skeleton width={170} />
          </Div>
          <Div>
            <Skeleton width={170} />
          </Div>
          <Div>
            <Skeleton width={170} />
          </Div>
        </Div>
      </SumRight>
    </Summary>
  );
};

export default CoinSummarySkeleton;
