import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import MovieList from "../../components/movie/MovieList";

const HomePage = () => {
  return (
    <div className=" bg-color-black-light">
      <Banner type="popular" />
      <section className="trending-movie bg-color-black-light">
        <div className="container">
          <div className="my-20">
            <div className="flex items-baseline justify-between mb-10 movie-header">
              <h2 className="text-[30px] underline underline-offset-4 text-color-primary uppercase font-semibold">
                Popular Movie
              </h2>
              <Link to="/movie">
                <span className="text-base font-bold underline tranding-date text-color-gray-light underline-offset-4">
                  Load More
                </span>
              </Link>
            </div>
            <MovieList type="top_rated"></MovieList>
          </div>
        </div>
      </section>
      <section className="tranding-movie bg-color-black-light">
        <div className="container">
          <div className="my-20">
            <div className="flex items-baseline justify-between mb-10 movie-header">
              <h2 className="text-[30px] text-color-primary uppercase font-semibold underline underline-offset-4  ">
                Upcoming
              </h2>
              <Link to="/movie">
                <span className="text-base font-bold underline tranding-date text-color-gray-light underline-offset-4">
                  Load More
                </span>
              </Link>
            </div>
            <MovieList type="upcoming"></MovieList>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
