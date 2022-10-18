import { useSelector, useDispatch } from "react-redux";
import { handleTimeFrameClick } from "store/chartsSlice";
import { timeFrames } from "assets/data";
import { Container, Button } from "./BackgroundCoinChartTimeframes.styles";

const BackgroundCoinChartTimeframes = () => {
  const activeButton = useSelector(({ charts }) => charts.activeButton);
  const dispatch = useDispatch();

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
