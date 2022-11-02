import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// local imports
import { timeFrames } from "assets/data";
import { handleTimeFrameClick } from "store/chartsSlice";
import { useStoreDispatch, useStoreSelector } from "store/hooks";
import { Button, Container, DateDisplay } from "./ChartsBottom.styles";

const ChartsBottom = () => {
  const activeButton = useStoreSelector(({ charts }) => charts.activeButton);
  const pricesBTC = useStoreSelector(({ charts }) => charts.prices);
  const dispatch = useStoreDispatch();

  const date = pricesBTC?.[pricesBTC.length - 1]?.[0];
  const newDate = new Date(date).toLocaleString("locales", {
    dateStyle: "short",
    timeStyle: "short",
  });

  return (
    <Container>
      <DateDisplay>
        {"as of: "}
        {newDate !== "Invalid Date" ? newDate : <Skeleton width={110} />}
      </DateDisplay>
      <div>
        {Object.keys(timeFrames).map((key) => (
          <Button
            key={key}
            onClick={() => dispatch(handleTimeFrameClick(key))}
            isActive={activeButton === key}
          >
            {key}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default ChartsBottom;
