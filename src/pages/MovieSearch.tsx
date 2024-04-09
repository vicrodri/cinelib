import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../util/useFetch";
import { useTitle } from "../util/useTitle";

interface MovieSearchProps {
  apiPath: string;
}

export const MovieSearch: FC<MovieSearchProps> = (props: MovieSearchProps) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q") ?? "";
  const { data: movieList } = useFetch(props.apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);
  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {movieList
            ? `Result for '${queryTerm}'`
            : `No result found for ´'${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movieList
            ? movieList.map((item) => <Card key={item.id} movie={item} />)
            : null}
          ;
        </div>
      </section>
    </main>
  );
};
