import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { handleTimeFrameClick } from "store/chartsSlice";
import { timeFrames } from "assets/data";
import { Button, Container, DateDisplay } from "./ChartsBottom.styles";

const ChartsBottom = () => {
  const activeButton = useSelector(({ charts }) => charts.activeButton);
  const pricesBTC = useSelector(({ charts }) => charts.pricesBTC);
  const dispatch = useDispatch();

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
