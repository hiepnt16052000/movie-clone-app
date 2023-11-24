import { useParams } from "react-router-dom";
import { fetcher, tmdbAPI } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieDetail = () => {
  const { movieId } = useParams();

  const { data: dataMovieDetail } = useSWR(
    tmdbAPI.getMovieDetails(movieId),
    fetcher
  );
  const { data } = useSWR(tmdbAPI.getMovieVideo(movieId), fetcher);
  const movieVideo = data?.results || [];
  if (!dataMovieDetail) {
    return null;
  }
  const movieDetail = dataMovieDetail || {};

  return (
    <div className="bg-color-black-light">
      <div className="container">
        <div className="py-20 movie-detail">
          <iframe
            title={movieDetail?.title}
            width="100%"
            height="600"
            src={`${tmdbAPI.getVideoYoutube(movieVideo[0]?.key)}`}
          ></iframe>

          <div className="grid grid-cols-2 gap-x-5 p-5 movie-episode bg-color-black my-[30px] rounded-lg ">
            <div className="border-r-2 border-white movie-count">
              <a
                href="/"
                className="px-3 py-1 text-sm font-semibold text-white rounded cursor-pointer in bg-color-black-light hover:bg-color-primary"
              >
                1
              </a>
            </div>
            <div className="flex flex-col movie-server gap-y-4">
              <div className="server-sub">
                <span className="mr-4 text-base font-semibold text-white">
                  Sub
                </span>
                <div className="inline-flex server-list gap-x-2">
                  <a
                    href="/"
                    className="inline-block p-2 text-base font-normal text-white rounded bg-color-black-light"
                  >
                    Server 1
                  </a>
                  <a
                    href="/"
                    className="inline-block p-2 text-base font-normal text-white rounded bg-color-black-light"
                  >
                    Server 1
                  </a>
                  <a
                    href="/"
                    className="inline-block p-2 text-base font-normal text-white rounded bg-color-black-light"
                  >
                    Server 1
                  </a>
                </div>
              </div>
              <div className="server-dub">
                <span className="mr-4 text-base font-semibold text-white">
                  Dub
                </span>
                <div className="inline-flex gap-x-2 server-list ">
                  <a
                    href="/"
                    className="inline-block p-2 text-base font-normal text-white rounded bg-color-black-light hover:bg-color-primary"
                  >
                    Server 1
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 rounded-lg movie-info gap-x-5">
            <iframe
              title={movieDetail?.title}
              width="100%"
              height="100%"
              src={`${tmdbAPI.getVideoYoutube(movieVideo[0]?.key)}`}
              className="movie-trailer"
            ></iframe>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-[30px] font-semibold text-white">
                {movieDetail?.title}
              </h3>
              <span className="text-xl font-semibold text-color-gray-light movie-status">
                {movieDetail?.status}
              </span>
              <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
              >
                <SwiperSlide>
                  <p className="text-base font-medium text-white movie-desc">
                    {movieDetail?.overview}
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="">
              <h3 className="mb-4 text-[40px] text-white font-semibold">
                Tech Detail
              </h3>
              <div className="flex flex-col gap-y-2">
                <span className="text-base font-medium text-white">
                  Time:
                  <span className="ml-1 text-color-gray-light">
                    {(movieDetail.runtime / 60).toFixed()}h
                    {movieDetail.runtime % 60}
                  </span>
                </span>
                <span className="text-base font-medium text-white">
                  Release date:
                  <span className="ml-1 text-color-gray-light">
                    {movieDetail.release_date}
                  </span>
                </span>
                <span className="text-base font-medium text-white">
                  Genres:
                  {movieDetail.genres.map((genre) => {
                    return (
                      <span
                        className="ml-1 text-color-gray-light"
                        key={genre.id}
                      >
                        {genre.name},
                      </span>
                    );
                  })}
                </span>
                <span className="text-base font-medium text-white">
                  Company:
                  {movieDetail.production_companies.map((company) => {
                    return (
                      <span
                        className="ml-1 text-color-gray-light"
                        key={company.id}
                      >
                        {company.name},
                      </span>
                    );
                  })}
                </span>
                <span className="text-base font-medium text-white">
                  Countries:
                  {movieDetail.production_countries.map((country, index) => {
                    return (
                      <span className="ml-1 text-color-gray-light" key={index}>
                        {country.iso_3166_1}
                      </span>
                    );
                  })}
                </span>
                <span className="text-base font-medium text-white">
                  Languages:
                  {movieDetail.spoken_languages.map((language, index) => {
                    return (
                      <span className="ml-1 text-color-gray-light" key={index}>
                        {language.name},
                      </span>
                    );
                  })}
                </span>
                <span className="text-base font-medium text-white">
                  Rate:
                  <span className="ml-1 text-color-gray-light">
                    {movieDetail.vote_average.toFixed(1)}
                    by
                    {movieDetail.vote_count} reviews
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
