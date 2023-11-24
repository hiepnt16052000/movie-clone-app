import Comment from "../../components/comment/Comment";
import MovieDetail from "../../components/movie/MovieDetail";
import Similar from "../../components/similar/Similar";

const MovieDetailPage = () => {
  return (
    <div className="bg-color-black-light">
      <div className="container">
        <MovieDetail></MovieDetail>
        <div className="flex p-5 rounded-lg gap-x-10">
          <Comment></Comment>
          <Similar></Similar>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
