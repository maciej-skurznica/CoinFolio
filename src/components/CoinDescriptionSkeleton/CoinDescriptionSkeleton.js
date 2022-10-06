import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Description, Links, LinkTile } from "./CoinDescriptionSkeleton.styles";

const CoinDescriptionSkeleton = (props) => {
  return (
    <>
      <Description>
        <div style={{ width: "100%" }}>
          <Skeleton count={9} width="90%" />
        </div>
      </Description>
      <Links>
        {[1, 2, 3].map((el) => (
          <LinkTile key={el}>
            <div style={{ width: "100%" }}>
              <Skeleton width="90%" />
            </div>
          </LinkTile>
        ))}
      </Links>
    </>
  );
};

export default CoinDescriptionSkeleton;
