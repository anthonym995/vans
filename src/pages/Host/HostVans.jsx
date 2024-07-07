import React, { Suspense } from "react";
import { Link, useLoaderData, Await, defer} from "react-router-dom";
import { getHostVans } from "../../api/api";
import { requireAuth } from "../../utils/utils";
import Loading from "../../component/Loading";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function HostVans() {
  const vansPromise = useLoaderData();

  function renderVanElements(vans) {
    const hostVanEle = vans.map((van) => (
      <Link to={van.id} key={van.id}>
        <div className="rounded-md  flex py-4 mb-5 bg-white shadow-md">
          <img className="h-16 w-16 mx-6 rounded-md" src={van.imageUrl} alt={van.name} />
          <div className="">
            <div className="font-semibold text-[#161616] text-xl mb-2">{van.name}</div>
            <p className="font-medium text-[#4D4D4D] text-base">${van.price} / day</p>
          </div>
        </div>
      </Link>
    ));
    return <>{hostVanEle}</>;
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#161616] mb-6">Your listed Vans</h1>
        <Suspense fallback={<Loading />}>
          <Await resolve={vansPromise.vans}>{renderVanElements}</Await>
        </Suspense>
      </div>
    </>
  );
}

// The below code is removed due to useLoaderdata

// const [vans, setVans] = useState([]);

// useEffect(() => {
//   fetch("/api/host/vans")
//     .then((res) => res.json())
//     .then((data) => setVans(data.vans));
// }, []);
