import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const TvSeriesDetail = () => {
  const { seasonNumber } = useParams();
  const { tvSeriesId } = useParams();
  const { episodeNumber } = useParams();

  const [tvSeriesDetail, setTvSeriesDetail] = useState({});
  const [url, setUrl] = useState("");

  const { data: dataSeriesDetail } = useSWR(
    tmdbAPI.getTvSeriesSeasonDetail(tvSeriesId, seasonNumber),
    fetcher
  );

  const seriesDetail = dataSeriesDetail || [];

  const navigate = useNavigate();

  const { data: dataTvSeriesVideo } = useSWR(
    tmdbAPI.getTvSeriesVideo(tvSeriesId),
    fetcher
  );
  const tvSeriesVideo = dataTvSeriesVideo?.results || [];

  const { data: dataTvSeriesDetail } = useSWR(url, fetcher);

  useEffect(() => {
    if (episodeNumber === undefined) {
      setUrl(tmdbAPI.getTvSeriesDetail(tvSeriesId));
    } else {
      setUrl(
        tmdbAPI.getTvSeriesEpisodeDetail(
          tvSeriesId,
          seasonNumber,
          episodeNumber
        )
      );
    }
  }, [seasonNumber, episodeNumber, tvSeriesId]);

  useEffect(() => {
    setTvSeriesDetail(dataTvSeriesDetail);
  }, [dataTvSeriesDetail]);

  return (
    <div className="bg-color-black-light">
      <div className="container">
        <div className="py-20 movie-detail">
          <iframe
            title={tvSeriesDetail?.title}
            width="100%"
            height="600"
            src={`${tmdbAPI.getVideoYoutube(tvSeriesVideo[0]?.key)}`}
          ></iframe>

          <div className="p-5 bg-color-black my-[30px] rounded-lg">
            <div className="grid grid-cols-10 gap-2 movie-seasons">
              {tvSeriesDetail?.seasons?.map((item) => {
                return (
                  <button
                    onClick={() =>
                      navigate(
                        `/tv-series/${tvSeriesDetail.id}/season/${item.season_number}/episode/1`
                      )
                    }
                    key={item.id}
                    className={`inline-block p-2 text-sm font-medium text-white rounded bg-color-black-light hover:bg-color-primary`}
                  >
                    Season: {item.season_number}
                  </button>
                );
              })}
            </div>
            <div className="flex movie-seasons gap-x-4">
              {seasonNumber &&
                seriesDetail?.episodes?.map((item) => {
                  return (
                    <button
                      onClick={() =>
                        navigate(
                          `/tv-series/${tvSeriesId}/season/${item.season_number}/episode/${item.episode_number}`
                        )
                      }
                      key={item.id}
                      className="inline-block p-2 text-sm font-medium text-white rounded bg-color-black-light hover:bg-color-primary"
                    >
                      {item.episode_number}
                    </button>
                  );
                })}
            </div>
            <div className="flex flex-col gap-y-4"></div>
          </div>

          <div className="grid grid-cols-3 rounded-lg movie-info gap-x-5">
            <iframe
              title={tvSeriesDetail?.title}
              width="100%"
              height="100%"
              src={`${tmdbAPI.getVideoYoutube(tvSeriesVideo[0]?.key)}`}
              className="movie-trailer"
            ></iframe>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-[30px] font-semibold text-white">
                {tvSeriesDetail?.name}
              </h3>
              <span className="text-xl font-semibold text-color-gray-light movie-status">
                {tvSeriesDetail?.status}
              </span>

              <p className="text-base font-medium text-white movie-desc line-clamp-6">
                {tvSeriesDetail?.overview}
              </p>
            </div>
            <div className="">
              <h3 className="mb-4 text-[40px] text-white font-semibold">
                Tech Detail
              </h3>
              <div className="flex flex-col gap-y-2">
                <span className="text-base font-medium text-white">
                  Number Season:
                  <span className="ml-1 text-color-gray-light">
                    {tvSeriesDetail?.number_of_seasons}
                  </span>
                </span>
                <span className="text-base font-medium text-white">
                  Release date:
                  <span className="ml-1 text-color-gray-light">
                    {tvSeriesDetail?.first_air_date}
                  </span>
                </span>

                <span className="text-base font-medium text-white">
                  Genres:
                  {tvSeriesDetail?.genres?.map((genre) => {
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
                  {tvSeriesDetail?.production_companies?.map((company) => {
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
                  {tvSeriesDetail?.production_countries?.map(
                    (country, index) => {
                      return (
                        <span
                          className="ml-1 text-color-gray-light"
                          key={index}
                        >
                          {country.iso_3166_1}
                        </span>
                      );
                    }
                  )}
                </span>
                <span className="text-base font-medium text-white">
                  Languages:
                  {tvSeriesDetail?.spoken_languages?.map((language, index) => {
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
                    {tvSeriesDetail?.vote_average?.toFixed(1)}
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

export default TvSeriesDetail;
