import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-gray-900 mb-4">{error.status}</h1>
          <h2 className="text-2xl md:text-4xl font-medium text-gray-700 mb-8">{error.message}</h2>
          <p className="text-gray-600 mb-8">{error.statusText}</p>
          <Link
            to="/"
            className="w-full text-center px-6 py-3 hover:bg-[#161616] text-white text-lg font-bold rounded bg-[#4D4D4D] transition duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
