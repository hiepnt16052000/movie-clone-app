export const apiKey = "e29ad7a609d1eaab5df7c3ce6317e4ae";
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
const tmdbMovieEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbGenreEndpoint = "https://api.themoviedb.org/3/genre/movie/list";
const tmdbMovieSearch = "https://api.themoviedb.org/3/search/movie";
const tmdbTvSeriesSearch = "https://api.themoviedb.org/3/search/tv";
const tmdbTVSeriesEndPoint = "https://api.themoviedb.org/3/tv";
const youtubeEndpoint = "https://www.youtube.com/embed";

export const tmdbAPI = {
  getMovieList: (type, page = "1") =>
    `${tmdbMovieEndpoint}/${type}?api_key=${apiKey}&language=en-US&page=${page}`,

  getGenreMovieList: () =>
    `${tmdbGenreEndpoint}?api_key=${apiKey}&language=en-US`,

  getMovieDetails: (movieId) =>
    `${tmdbMovieEndpoint}/${movieId}?api_key=${apiKey}`,

  getMoiveSearch: (query, page) =>
    `${tmdbMovieSearch}?api_key=${apiKey}&query=${query}&page=${page}`,

  getTvSeriesSearch: (query, page) =>
    `${tmdbTvSeriesSearch}?api_key=${apiKey}&query=${query}&page=${page}`,

  getMovieVideo: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,

  getVideoYoutube: (key) => `${youtubeEndpoint}/${key}`,

  getImageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,

  getMovieSimilar: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,

  getTvSeriesList: (type, page = "1") =>
    `${tmdbTVSeriesEndPoint}/${type}?api_key=${apiKey}&language=en-US&page=${page}`,

  getTvSeriesDetail: (tvSeriesId) =>
    `${tmdbTVSeriesEndPoint}/${tvSeriesId}?api_key=${apiKey}`,

  getTvSeriesVideo: (tvSeriesId) =>
    `${tmdbTVSeriesEndPoint}/${tvSeriesId}/videos?api_key=${apiKey}`,

  getTvSeriesSeasonDetail: (tvSeriesId, seasonNumber) =>
    `${tmdbTVSeriesEndPoint}/${tvSeriesId}/season/${seasonNumber}?api_key=${apiKey}`,

  getTvSeriesEpisodeDetail: (tvSeriesId, seasonNumber, episodeNumber) =>
    `${tmdbTVSeriesEndPoint}/${tvSeriesId}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${apiKey}`,
};
