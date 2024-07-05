import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="container mx-auto flex min-h-[540px] justify-center items-center">
        <div className="flex flex-col items-center justify-center h-48">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Sorry, the page you were looking for was not found.</h1>
          <Link
            to="/"
            className="w-full text-center px-6 py-3 hover:bg-[#161616] text-white text-lg font-bold rounded bg-[#4D4D4D] transition duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
}
