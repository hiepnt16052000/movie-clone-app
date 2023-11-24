import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import { useParams } from "react-router-dom";

const Similar = () => {
  const { movieId } = useParams();

  const { data } = useSWR(tmdbAPI.getMovieSimilar(movieId), fetcher);
  if (!data) {
    return null;
  }

  const similarMovie = data?.results;
  return (
    <section className="section-similar flex-grow-[1]">
      <h2 className="similar-heading text-[32px] font-semibold text-white mb-4 uppercase">
        Similar
      </h2>
      <ul className="flex flex-col similar-list gap-y-4">
        {similarMovie.length > 0 &&
          similarMovie.map((movie, index) => {
            if (index <= 3) {
              return (
                <li
                  className="flex rounded-lg similar-item gap-x-4 bg-color-black"
                  key={movie.id}
                >
                  <img
                    src={tmdbAPI.getImageOriginal(movie.poster_path)}
                    alt=""
                    className="rounded-lg similar-img h-auto w-[100px] object-cover"
                  />
                  <div className="flex flex-col justify-between p-2 similar-info">
                    <h3 className="text-base font-medium text-white similar-title">
                      {movie.title}
                    </h3>
                    <div className="flex gap-1 similar-genres">
                      <span className="inline-block px-2 py-1 text-xs font-medium text-white border rounded border-color-gray-light">
                        Sub
                      </span>
                      <span className="inline-block px-2 py-1 text-xs font-medium text-white border rounded border-color-gray-light">
                        Dub
                      </span>
                    </div>
                  </div>
                </li>
              );
            } else {
              return null;
            }
          })}
      </ul>
    </section>
  );
};

export default Similar;
