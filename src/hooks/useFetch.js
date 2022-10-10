import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useFetch = (url, toastId, initialDateValue = null) => {
  const [data, setData] = useState(initialDateValue);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(
    () => async () => {
      const controller = new AbortController();

      try {
        const { data } = await axios(url, { signal: controller.signal });
        setData(data);
        setIsLoading(false);
        setHasError(false);
      } catch (error) {
        toast.error(`Error while loading ${toastId}...`, { toastId: toastId });
        setHasError(true);
        setIsLoading(false);
      }

      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url]
  );

  return [data, isLoading, hasError];
};

export default useFetch;
