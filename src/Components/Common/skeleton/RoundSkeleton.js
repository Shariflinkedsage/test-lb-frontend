import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function RoundSkeleton() {
  return (
    <div style={{ fontSize: 20, lineHeight: 2 }}>
      <SkeletonTheme
        color="#202020"
        highlightColor="#444"
        className="list row d-flex justify-content-center"
      >
        <Skeleton circle={true} height={50} width={50} />
        <Skeleton circle={true} height={50} width={50} />
        <Skeleton circle={true} height={50} width={50} />
        <Skeleton circle={true} height={50} width={50} />
        <Skeleton circle={true} height={50} width={50} />
        <Skeleton circle={true} height={50} width={50} />
      </SkeletonTheme>
    </div>
  );
}

export default RoundSkeleton;
