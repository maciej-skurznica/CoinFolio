import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container, Value, Div } from "./TableCoinSkeleton.styles";

const TableCoinSkeleton = (props) => {
  return (
    <Container>
      <Value>
        <Skeleton width={10} />
      </Value>
      <Value fontSize={2.2}>
        <Skeleton width={150} />
      </Value>
      <Value>
        <Skeleton width={100} />
      </Value>
      <Div width={195}>
        <Value>
          <Skeleton width={60} />
        </Value>
        <Value>
          <Skeleton width={60} />
        </Value>
        <Value>
          <Skeleton width={60} />
        </Value>
      </Div>
      <Div width={360}>
        <Value fontSize={1.7}>
          <Skeleton width={170} />
        </Value>
        <Value fontSize={1.7}>
          <Skeleton width={170} />
        </Value>
      </Div>
      <Value fontSize={2.7}>
        <Skeleton width={180} />
      </Value>
    </Container>
  );
};

export default TableCoinSkeleton;
