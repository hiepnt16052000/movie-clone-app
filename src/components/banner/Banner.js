import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = ({ type = "" }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const topMovies = data?.results || [];
  const { data: dataGenres } = useSWR(tmdbAPI.getGenreMovieList(), fetcher);
  const genreMovie = dataGenres?.genres || [];

  return (
    <section className="banner">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {topMovies.length > 0 &&
          topMovies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="relative banner-block">
                  <div className="absolute w-full h-full banner-image">
                    <img
                      src={tmdbAPI.getImageOriginal(item.backdrop_path)}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] z-0"></div>
                  <div className="container">
                    <BannerItem movie={item} genres={genreMovie}></BannerItem>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ movie, genres }) => {
  const genreArr = movie.genre_ids.map((id) => {
    return genres.map((genre) => {
      if (genre.id === id) {
        return genre.name;
      }
    });
  });

  return (
    <div className="grid relative grid-cols-2 banner-wrapper py-[50px] gap-x-8 z-20">
      <div className="flex flex-col justify-start banner-content gap-y-5">
        <h2 className="banner-title text-[60px] font-black text-white uppercase tracking-[1.5px] leading-[1.1] line-clamp-2">
          {movie.title}
        </h2>
        <div className="flex gap-x-2">
          {genreArr.map((item, index) => {
            if (item !== "undifined") {
              return (
                <p
                  key={index}
                  className="inline-block px-4 py-1 text-xs font-normal text-white uppercase border-2 rounded-md cursor-pointer hover:bg-color-primary hover:border-color-primary banner-type border-color-gray-light"
                >
                  {item}
                </p>
              );
            }
          })}
        </div>
        <p className="text-3xl font-medium text-white banner-date">
          {movie.release_date}
        </p>
        <p className="text-base font-semibold line-clamp-4 banner-desc text-color-gray-light leading-[1.5]">
          {movie.overview}
        </p>
        <a
          href=""
          className="text-[40px] leading-[48px] text-white hover:bg-color-primary max-w-[400px] banner-btn px-[100px] py-[8px] border-2 rounded-lg border-color-primary text-center font-medium"
        >
          Play Now
        </a>
      </div>
      <div className="banner-image">
        <img
          src={tmdbAPI.getImageOriginal(movie.poster_path)}
          alt=""
          className="h-[550px] w-full object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
