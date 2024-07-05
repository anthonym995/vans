import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  const activeStyle = {
    fontWeight: "semi-bold",
    color: "#161616",
    textDecoration: "underline",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  return (
    <>
      <div className="container mx-auto">
        <Link to=".." relative="path" className="flex items-center text-[#201F1D] hover:underline mb-4">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to all vans
        </Link>
        {currentVan ? (
          <>
            <div className="bg-white p-6">
              <div className="flex">
                <img src={currentVan.imageUrl} alt={currentVan.name} className="w-40 h-40 rounded-md mr-5" />
                <div className="py-6">
                  <i className={`van-type ${currentVan.type} selected`}>{currentVan.type}</i>
                  <h2 className="font-bold text-[#161616] text-2xl  my-2">{currentVan.name}</h2>
                  <p className="text-2xl font-bold text-[#161616] ml-2">
                    ${currentVan.price} <span className="text-xl font-semibold">/day</span>
                  </p>
                </div>
              </div>
              <nav className="">
                <nav className="flex items-center">
                  <NavLink
                    // to={`/host/vans/${currentVan.id}`} use instead relative path
                    to="."
                    end
                    className="text-[#4D4D4D] text-base hover:text-[#161616] mr-5 my-3 font-medium hover:font-semibold hover:underline"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    Details
                  </NavLink>
                  <NavLink
                    // to={`/host/vans/${currentVan.id}/pricing`}
                    to="pricing"
                    className="text-[#4D4D4D] text-base hover:text-[#161616] mr-5 my-3 font-medium hover:font-semibold hover:underline"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    // to={`/host/vans/${currentVan.id}/photos`}
                    to="photos"
                    className="text-[#4D4D4D] text-base hover:text-[#161616] mr-5 my-3 font-medium hover:font-semibold hover:underline"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    Photos
                  </NavLink>
                </nav>
              </nav>
              <Outlet context={{ currentVan }} />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center">Loading...</h1>
          </>
        )}
      </div>
    </>
  );
}
