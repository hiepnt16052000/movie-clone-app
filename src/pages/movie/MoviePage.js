import useSWR from "swr";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher, tmdbAPI } from "../../config";
import useDebounce from "../../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import MovieCard from "../../components/movie/MovieCard";

const itemsPerPage = 20;

const MoviePage = () => {
  const [searchText, setSearchText] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("now_playing"));
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const filterDebounce = useDebounce(searchText, 2000);

  //Fetching data
  const { data: dataMovies } = useSWR(url, fetcher);
  const { data: dataCategory } = useSWR(tmdbAPI.getGenreMovieList(), fetcher);
  const movies = dataMovies?.results || [];
  const categories = dataCategory?.genres || [];

  //Function Search By Name
  const handleFilterChange = (e) => {
    setSearchText(e.target.value);
  };

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % dataMovies.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMoiveSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("now_playing", nextPage));
    }
  }, [nextPage, filterDebounce]);

  useEffect(() => {
    if (!dataMovies || !dataMovies.total_results) return;
    setPageCount(Math.ceil(dataMovies.total_results / itemsPerPage));
  }, [dataMovies, itemOffset]);

  return (
    <>
      <div className="py-20 bg-color-black-light">
        <div className="container">
          <div className="flex flex-col gap-y-10">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-semibold text-white uppercase">
                Filter
              </h2>
              <form action="" className="">
                <div className="navbar-search w-[400px] border-2 border-color-gray-light rounded-xl flex items-center">
                  <input
                    type="text"
                    value={searchText}
                    onChange={handleFilterChange}
                    className="search py-[6px] px-[20px] flex flex-grow text-base font-mediu leading-7 text-white border-r-2 border-color-gray-light"
                    placeholder="Search"
                  />
                  <i className="fa-solid fa-magnifying-glass px-[12px] py-[6px] text-base cursor-pointer text-white"></i>
                </div>
              </form>
            </div>
            <div className="search-category">
              <Swiper spaceBetween={20} slidesPerView={6}>
                {categories.length > 0 &&
                  categories.map((category) => {
                    return (
                      <SwiperSlide key={category.id}>
                        <div className="py-2 text-sm text-center text-white border-2 rounded-md cursor-pointer category-item border-color-gray-light hover:bg-color-primary hover:border-color-primary">
                          {category.name}
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-10">
            {movies.length > 0 &&
              movies.map((item) => {
                return <MovieCard movie={item} key={item.id}></MovieCard>;
              })}
          </div>
          <div className="flex mt-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={4}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              className="flex items-center mx-auto text-xl font-semibold cursor-pointer pagination gap-x-5"
            ></ReactPaginate>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
