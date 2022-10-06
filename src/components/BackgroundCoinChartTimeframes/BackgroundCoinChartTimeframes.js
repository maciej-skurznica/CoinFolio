import { Container, Button } from "./BackgroundCoinChartTimeframes.styles";

const BackgroundCoinChartTimeframes = (props) => {
  return (
    <Container>
      {Object.keys(props.timeFrames).map((key) => (
        <Button
          key={key}
          onClick={() => props.handleTimeFrameClick(key)}
          isActive={props.activeButton === key}
        >
          {key}
        </Button>
      ))}
    </Container>
  );
};

export default BackgroundCoinChartTimeframes;
