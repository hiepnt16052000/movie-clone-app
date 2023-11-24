import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import TvSeriesCard from "./TvSeriesCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TvSeriesList = ({ type = "" }) => {
  const { data: dataTvSeries } = useSWR(tmdbAPI.getTvSeriesList(type), fetcher);
  const tvSeries = dataTvSeries?.results || [];
  console.log("test");

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-6 recent-list">
        {tvSeries.length > 0 &&
          tvSeries.slice(0, 8).map((item) => {
            return <TvSeriesCard tvSeries={item} key={item.id} />;
          })}
      </div>
    </>
  );
};

export default TvSeriesList;
