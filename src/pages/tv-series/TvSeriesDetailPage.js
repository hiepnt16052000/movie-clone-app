import React from "react";
import TvSeriesDetail from "../../components/tv-series/TvSeriesDetail";
import Comment from "../../components/comment/Comment";
import Similar from "../../components/similar/Similar";

const TvSeriesDetailPage = () => {
  return (
    <div className="bg-color-black-light">
      <div className="container">
        <TvSeriesDetail />
        <div className="flex p-5 rounded-lg gap-x-10">
          <Comment></Comment>
          {/* <Similar></Similar> */}
        </div>
      </div>
    </div>
  );
};

export default TvSeriesDetailPage;
