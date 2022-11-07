import React from "react";
// local imports
import { timeFrames } from "assets/data";
import { handleTimeFrameClick } from "store/chartsSlice";
import { useStoreDispatch, useStoreSelector } from "store/hooks";
import { Button, Container } from "./BackgroundCoinChartTimeframes.styles";

const BackgroundCoinChartTimeframes = () => {
  const activeButton = useStoreSelector(({ charts }) => charts.activeButton);
  const dispatch = useStoreDispatch();

  return (
    <Container>
      {Object.keys(timeFrames).map((key) => (
        <Button
          key={key}
          onClick={() => dispatch(handleTimeFrameClick(key))}
          isActive={activeButton === key}
        >
          {key}
        </Button>
      ))}
    </Container>
  );
};

export default BackgroundCoinChartTimeframes;
