import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetail = () => {
  const [van, setVan] = useState();
  const { id } = useParams();
  const location = useLocation();
  console.log(location); 

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  console.log(type)
  
  return (
    <>
      {van && (
        <>
          <div className="container mx-auto px-4 py-6">
            <Link to={`..${search}`} relative="path" className="flex items-center text-[#201F1D] hover:underline mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
               Back to {type} vans
            </Link>
            <div className="max-w-4xl mx-auto my-10 rounded-lg">
              <img src={van.imageUrl} alt={van.name} className=" h-full object-cover rounded-md mb-10" />
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h1 className="text-3xl font-bold mt-6">{van.name}</h1>
              <div className="mt-6">
                <p className="text-2xl font-bold text-[#161616] ml-2">
                  ${van.price} <span className="text-xl font-semibold">/day</span>
                </p>
              </div>
              <p className="text-[#161616] font-medium mt-4">{van.description}</p>
              <button className="w-full mt-6 bg-[#FF8C38] text-white py-2 px-4 rounded-md hover:bg-[#ff8b38dc] transition duration-300">
                Rent this van
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VanDetail;
