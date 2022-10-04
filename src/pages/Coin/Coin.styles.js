import styled from "styled-components";
import { Div } from "ui";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.main};
`;

export const InnerContainer = styled.div`
  width: calc(100% - 2.4rem);
  margin: 2.4rem 1.2rem 4px;
  box-sizing: border-box;
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.h4`
  text-align: left;
  width: 100%;
  color: ${({ theme }) => theme.contrast};
  margin: 0;
  padding-bottom: 1.5rem;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 35px;
  width: 100%;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.contrast};
  font-size: 12px;
`;

export const SumLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: content;
  row-gap: 15px;
`;

export const IconTile = styled.div`
  height: 120px;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
`;

export const Icon = styled.div`
  background-size: cover;
  background-position: center;
  height: 2.2em;
  width: 2.2em;
  background-image: ${(props) => `url(${props.image})`};
`;

export const CoinName = styled.div`
  font-size: 15px;
  margin: 5px 15px 0;
`;

export const WebsiteTile = styled(Div)`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
`;

export const LinkIcon = styled(Div)`
  height: 12px;
  width: 12px;
  margin: 0 15px;
`;

export const WebsiteLink = styled.a`
  margin-right: 15px;
`;

export const SumMiddle = styled(Div)`
  flex-grow: 0.8;
  height: 170px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
`;

export const PriceDiv = styled(Div)`
  font-size: 18px;
  font-weight: bold;
`;

export const PriceChange = styled(Div)`
  color: ${(props) => (props.value < 0 ? "rgb(209,78,77)" : "rgb(42,141,120)")};
  font-weight: normal;
  font-size: 14px;
  margin-top: 3px;
`;

export const Frame = styled.div`
  color: gray;
  ::after {
    content: "24h:";
  }
  margin-right: 5px;
`;

export const AllTimeLowHigh = styled(Div)`
  margin: 15px;
  width: calc(100% - 30px);
`;

export const ColumnTitle = styled.div`
  margin-bottom: 3px;
`;

export const SumRight = styled(Div)`
  flex-grow: 1.2;
  height: 170px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
`;

export const Dot = styled(Div)`
  height: 12px;
  width: 12px;
  margin: 0 15px;
`;

export const Text = styled(Div)`
  margin-right: 5px;
`;
