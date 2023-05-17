import axios from "axios";
import { useEffect, useState } from "react";

export async function getFetch(url, controller = null, options = null) {
  let param = {
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: "4c5709de239d230c95a29a6c1868ce65",
    },
  };
  if (controller) param.signal = controller.signal;
  if (options) {
    param.params = { ...param.params, ...options };
  }
  // console.log(param);
  const response = await axios.get(url, param);
  return response;
}

export const useFetch = (url, options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        if (url) {
          const response = await getFetch(url, controller, options);
          setData(response.data);
        }
      } catch (error) {
        if (error.message !== "canceled") {
          setError(error.message);
        }
      } finally {
        setIsLoaded(false);
      }
    })();

    return () => controller.abort();
  }, [options, url]);

  return { data, error, isLoaded };
};
