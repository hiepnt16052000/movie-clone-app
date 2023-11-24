import React, { useEffect, useState } from "react";

import { fetcher, tmdbAPI } from "../../config";
import TvSeriesCard from "../../components/tv-series/TvSeriesCard";
import useSWR from "swr";
import ReactPaginate from "react-paginate";
import useDebounce from "../../hooks/useDebounce";

const itemsPerPage = 20;

const TvSeriesPage = ({ type }) => {
  const [searchText, setSearchText] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const filterDebounce = useDebounce(searchText, 2000);

  //Fetching data
  const { data: dataTvSeries } = useSWR(url, fetcher);
  const tvSeries = dataTvSeries?.results || [];

  //Function Search By NameTv
  const handleFilterChange = (e) => {
    setSearchText(e.target.value);
  };

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % dataTvSeries.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getTvSeriesSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getTvSeriesList(type, nextPage));
    }
  }, [nextPage, filterDebounce, type]);

  useEffect(() => {
    if (!dataTvSeries || !dataTvSeries.total_results) return;
    setPageCount(Math.ceil(dataTvSeries.total_results / itemsPerPage));
  }, [dataTvSeries, itemOffset]);

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
          </div>
          <div className="grid grid-cols-4 gap-5 mt-10">
            {tvSeries.length > 0 &&
              tvSeries.map((item) => {
                return <TvSeriesCard tvSeries={item} key={item.id} />;
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

export default TvSeriesPage;
