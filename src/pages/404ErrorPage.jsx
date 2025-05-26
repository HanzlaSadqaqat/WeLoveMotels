import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-500">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
