import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex justify-center items-center flex-col h-[100vh] gap-y-2"
    >
      <h1 className="text-4xl font-semibold">Oops!</h1>
      <p className="text-base">Sorry, an unexpected error has occurred.</p>
      <p className="text-base font-semibold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
