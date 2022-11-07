import React from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// helps to adjust skeleton to the size of the parent if the parent is flex or grid

const FlexSkeleton = (props: SkeletonProps) => {
  return (
    <div style={{ width: "100%" }}>
      <Skeleton {...props} />
    </div>
  );
};

export default FlexSkeleton;
