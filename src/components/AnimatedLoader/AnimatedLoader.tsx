import React, { useEffect, useState } from "react";
// local imports
import loading from "assets/images/loading.svg";
import { LoadingDiv } from "./AnimatedLoader.styles";

const AnimatedLoader = () => {
  const [displayLoader, setDisplayLoader] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDisplayLoader(true), 1000);
    return () => {
      setDisplayLoader(false);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {displayLoader && (
        <LoadingDiv>
          <img src={loading} alt="loading" />
        </LoadingDiv>
      )}
    </>
  );
};

export default AnimatedLoader;
