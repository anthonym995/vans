import { useState, Suspense } from "react";
import { Link, useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../api/api";
import Loading from "../../component/Loading";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  // Loader data
  const vansPromise = useLoaderData();
  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  

  function renderVanElements(vans) {
    const displayedVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter.toLowerCase()) : vans;

    const vanElements = displayedVans.map((van) => (
      <div key={van.id} className="border p-4 rounded-md shadow-md">
        <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
          <img src={van.imageUrl} alt={van.name} className="w-full h-auto mb-2 rounded-md" />
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-2">{van.name}</h2>
            <p className="text-xl font-semibold">
              ${van.price} <span className="text-gray-600">/day</span>
            </p>
          </div>
          <span className={`van-type ${van.type} selected capitalize`}>{van.type}</span>
        </Link>
      </div>
    ));

    return (
      <>
        <div className="mb-6">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`mr-4 van-type simple ${typeFilter === "simple" ? "selected" : null}`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`mr-4 van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}
          >
            Rugged
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`mr-4 van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}
          >
            Luxury
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className=" text-[#4D4D4D] clear-filter underline font-medium"
            >
              Clear filter
            </button>
          ) : null}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">{vanElements}</div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="font-bold text-3xl mb-6">Explore our van options</h1>
        <Suspense fallback={<Loading />}>
          <Await resolve={vansPromise.vans}>{renderVanElements}</Await>
        </Suspense>
      </div>
    </>
  );
};

export default Vans;

// This is the old method to get the data from the useeffect , it is replaced by the data loader from react-router-dom 6.4

// by using the loader data we reduced the code below

// const [vans, setVans] = useState([]);
// const [error, setError] = useState(null);

// const [loading, setLoading] = useState(false);

// if (loading) {
//   return (
//     <>
//       <div className="container">
//         <h1 className="font-bold text-center">Loading...</h1>
//       </div>
//     </>
//   );
// }

// if (error) {
//   return (
//     <>
//       <div className="container">
//         <h1 className="font-bold text-center">{error.message}.</h1>
//       </div>
//     </>
//   );
// }

// if (error) {
//   return (
//     <>
//       <div className="container">
//         <h1 className="font-bold text-center">{error.message}.</h1>
//       </div>
//     </>
//   );
// }

// useEffect(() => {
//   async function loadVans() {
//     setLoading(true);
//     try {
//       const data = await getVans();
//       setVans(data);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   }
//   loadVans();
// }, []);
