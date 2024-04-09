export const getItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};

export const setItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const requestWrapper = <T>(
  url: string,
  config: RequestInit = {}
): Promise<T> => {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as T);
};

export const buildApiUrl = (apiPath: string, queryString = "") => {
  const url = queryString
    ? `https://api.themoviedb.org/3/${apiPath}?api_key=${
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        import.meta.env.VITE_TMDB_APP_API_KEY
      }&query=${queryString}`
    : `https://api.themoviedb.org/3/${apiPath}?api_key=${
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        import.meta.env.VITE_TMDB_APP_API_KEY
      }`;
  return url;
};
