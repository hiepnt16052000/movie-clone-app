import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-color-black">
      <img
        src={tmdbAPI.getImageOriginal(movie.poster_path)}
        loading="lazy"
        alt=""
        className="object-cover w-full h-[350px] mb-5 rounded-lg cursor-pointer"
      />
      <div className="flex flex-col flex-1">
        <h3 className="flex-1 mb-4 text-xl font-medium text-white cursor-pointer line-clamp-2 hover:text-color-primary">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span className="text-base text-white">{movie.release_date}</span>
          <span className="text-base text-white">
            Rating: {movie.vote_average}
          </span>
        </div>

        <button
          onClick={() => navigate(`/movie/${movie.id}`)}
          className="inline-block w-full px-6 py-3 mt-auto text-base font-semibold text-center text-white capitalize border-2 rounded-lg bg-color-black-light hover:bg-color-primary hover:border-color-primary"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
