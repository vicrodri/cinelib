import { FC } from "react";
import { Card } from "../components";
import { useFetch } from "../util/useFetch";
import { useTitle } from "../util/useTitle";

interface MovieListProps {
  apiPath: string;
  title: string;
}
export const MovieList: FC<MovieListProps> = (props: MovieListProps) => {
  const { data: movieList } = useFetch(props.apiPath);

  useTitle(props.title);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap sm:justify-start">
          {movieList
            ? movieList.map((item) => <Card key={item.id} movie={item} />)
            : null}
          ;
        </div>
      </section>
    </main>
  );
};
