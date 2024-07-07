import React from "react";
import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api/api";
import { requireAuth } from "../../utils/utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostVans(params.id);
}

export default function HostVanDetail() {
  const van = useLoaderData();

  const activeStyle = {
    fontWeight: "semi-bold",
    color: "#161616",
    textDecoration: "underline",
  };

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
        <div className="bg-white p-6 m-6">
          <div className="flex">
            <img src={van.imageUrl} alt={van.name} className="w-40 h-40 rounded-md mr-5" />
            <div className="py-6">
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h2 className="font-bold text-[#161616] text-2xl  my-2">{van.name}</h2>
              <p className="text-2xl font-bold text-[#161616] ml-2">
                ${van.price} <span className="text-xl font-semibold">/day</span>
              </p>
            </div>
          </div>
          <nav className="">
            <nav className="flex items-center">
              <NavLink
                // to={`/host/vans/${van.id}`} use instead relative path
                to="."
                end
                className="text-[#4D4D4D] text-base hover:text-[#161616] mr-5 my-3 font-medium hover:font-semibold hover:underline"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Details
              </NavLink>
              <NavLink
                // to={`/host/vans/${van.id}/pricing`}
                to="pricing"
                className="text-[#4D4D4D] text-base hover:text-[#161616] mr-5 my-3 font-medium hover:font-semibold hover:underline"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                // to={`/host/vans/${van.id}/photos`}
                to="photos"
                className="text-[#4D4D4D] text-base hover:text-[#161616] mr-5 my-3 font-medium hover:font-semibold hover:underline"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Photos
              </NavLink>
            </nav>
          </nav>
          <Outlet context={{ van }} />
        </div>
      </div>
    </>
  );
}

// this below code is removed due to useLaderData
// const { id } = useParams();

// const [van, setvan] = useState(null);

// useEffect(() => {
//   fetch(`/api/host/vans/${id}`)
//     .then((res) => res.json())
//     .then((data) => setvan(data.vans));
// }, [id]);
