import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFetch = (
  url: string,
  toastId: string,
  arrayOfVarsToWatch: any[],
  initialDataValue: any = null
) => {
  const [data, setData] = useState(initialDataValue);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(
    () => {
      async function fetchData() {
        const controller = new AbortController();
        try {
          setIsLoading(true);
          const { data } = await axios(url, { signal: controller.signal });
          setData(data);
          setIsLoading(false);
          setHasError(false);
        } catch (error) {
          toast.error(`Error while loading ${toastId} data...`, { toastId: toastId });
          setHasError(true);
          setIsLoading(false);
        }
        return () => controller.abort();
      }
      fetchData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...arrayOfVarsToWatch]
  );

  return [data, isLoading, hasError];
};

export default useFetch;
