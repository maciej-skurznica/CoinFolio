import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button, Container, DateDisplay } from "./ChartsBottom.styles";

const ChartsBottom = (props) => {
  const date = new Date(props.date).toLocaleString("locales", {
    dateStyle: "short",
    timeStyle: "short",
  });

  return (
    <Container>
      <DateDisplay>
        {"as of: "}
        {date !== "Invalid Date" ? date : <Skeleton width={110} />}
      </DateDisplay>
      <div>
        {Object.keys(props.timeFrames).map((key) => (
          <Button
            key={key}
            onClick={() => props.handleTimeFrameClick(key)}
            isActive={props.activeButton === key}
          >
            {key}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default ChartsBottom;
