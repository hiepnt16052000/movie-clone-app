import { fetcher } from "../../config";
import useSWR from "swr";
import MovieCard from "./MovieCard";
import { tmdbAPI } from "../../config";

const MovieList = ({ type = "" }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-6 recent-list">
      {movies.length > 0 &&
        movies.slice(0, 8).map((item) => {
          return <MovieCard movie={item} key={item.id}></MovieCard>;
        })}
    </div>
  );
};

export default MovieList;
