import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage";
import MoviePage from "./pages/movie/MoviePage";
import MovieDetailPage from "./pages/movie/MovieDetailPage";
import TvSeriesPage from "./pages/tv-series/TvSeriesPage";
import TvSeriesDetailPage from "./pages/tv-series/TvSeriesDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie",
        element: <MoviePage />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetailPage />,
      },
      { path: "/tv-series", element: <TvSeriesPage type="airing_today" /> },
      {
        path: "/tv-series/:tvSeriesId",
        element: <TvSeriesDetailPage />,
      },
      {
        path: "/tv-series/:tvSeriesId/season/:seasonNumber",
        element: <TvSeriesDetailPage />,
      },
      {
        path: "/tv-series/:tvSeriesId/season/:seasonNumber/episode/:episodeNumber",
        element: <TvSeriesDetailPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
