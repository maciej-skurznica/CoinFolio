import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container, Value, Div } from "./TableCoinSkeleton.styles";

const TableCoinSkeleton = (props) => {
  return (
    <Container>
      <Value>
        <Skeleton width={10} />
      </Value>
      <Value>
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
        <Value>
          <Skeleton width={170} />
        </Value>
        <Value>
          <Skeleton width={170} />
        </Value>
      </Div>
      <Value>
        <Skeleton width={190} />
      </Value>
    </Container>
  );
};

export default TableCoinSkeleton;
