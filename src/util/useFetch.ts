import { useState, useEffect } from "react";
import { Movie } from "../model/Movie";
import { buildApiUrl, requestWrapper } from "./Utils";

interface FetchResponse {
  results: Movie[];
}
export const useFetch = (apiPath: string, queryString = "") => {
  const [data, setData] = useState<Movie[]>();
  const url = buildApiUrl(apiPath, queryString);

  useEffect(() => {
    const fetchMovies = async () => {
      const response:FetchResponse = await requestWrapper(url);
      setData(response.results);
    };
    if (url) void fetchMovies();
  }, [url]);
  return { data };
};
