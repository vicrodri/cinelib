//Movie Type
export interface Movie {
  id: string;
  original_title: string;
  poster_path: string;
  title: string;
  overview: string;
  genres?: Genre[];
  vote_average: string;
  vote_count: string;
  runtime: string;
  budget: string;
  revenue: string;
  release_date: string;
  imdb_id: string;
}

export interface Genre {
  id: string;
  name: string;
}
